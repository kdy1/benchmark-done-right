// Copied from https://github.com/Brooooooklyn/swc-node/blob/master/bench/index.ts


import fs from 'fs'
import os from 'os'
import path from 'path'

import * as swc from '@swc/core';
import * as babel from '@babel/core'
// @ts-expect-error
import * as envPreset from '@babel/preset-env'
// @ts-expect-error
import * as tsPreset from '@babel/preset-typescript'
import Benchmark, { Suite } from 'benchmark'
import chalk from 'chalk'
import { transformSync as transformSyncEsbuild, transform as transformEsbuild } from 'esbuild'
import ts from 'typescript'
import { JscTarget } from '@swc/core';
import { store, storeResult, toTsTarget } from '../util';


const cpuCount = os.cpus().length - 1

const SOURCE_PATH = path.join(__dirname, '../node_modules/rxjs/src/internal/Observable.ts')
const SOURCE_CODE = fs.readFileSync(SOURCE_PATH, 'utf-8')

export async function run(target: JscTarget) {
    const asyncSuite = new Suite(`[${target}] Transform rxjs/Observable.ts async benchmark`)
    const parallelSuite = new Suite(`[${target}] Transform rxjs/Observable.ts parallel benchmark`)


    console.log(`[${chalk.green(target)}] Running single thread benchmarks`);
    await runSync(target);

    console.log(`[${chalk.green(target)}] Running async benchmarks`);
    await runAsync(target, 1, asyncSuite, 'async');

    console.log(`[${chalk.green(target)}] Running parallel benchmarks`);
    await runAsync(target, cpuCount, parallelSuite, 'parallel');
}


async function runSync(target: JscTarget) {
    let defer: () => void
    const task = new Promise<void>((resolve) => {
        defer = resolve
    })


    const suite = new Suite(`[${target}] Transform rxjs/Observable.ts benchmark`)

    suite
        .add(`swc (${target})`, () => {
            swc.transformSync(SOURCE_CODE, {
                filename: SOURCE_PATH,
                jsc: {
                    target,
                },
                sourceMaps: true,
            })
        });

    if (target !== 'es3' && target !== 'es5') {
        suite.add(`esbuild (${target})`, () => {
            transformSyncEsbuild(SOURCE_CODE, {
                sourcefile: SOURCE_PATH,
                loader: 'ts',
                sourcemap: true,
                minify: false,
                target,
            })
        });
    }

    suite.add(`typescript (${target})`, () => {
        ts.transpileModule(SOURCE_CODE, {
            fileName: SOURCE_PATH,
            compilerOptions: {
                target: toTsTarget(target),
                isolatedModules: true,
                sourceMap: true,
            },
        })
    })
        .add(`babel (preset-env)`, () => {
            babel.transform(SOURCE_CODE, {
                filename: SOURCE_PATH,
                // TODO
                presets: [tsPreset, [envPreset, { targets: { node: 'current' } }]],
                configFile: false,
                babelrc: false,
                sourceMaps: true,
            })
        })
        .on('cycle', function (event: Benchmark.Event) {
            console.info(String(event.target))
        })
        .on('complete', async function (this: Benchmark.Target & Benchmark.Suite) {
            await storeResult(`transform-sync-${target}`, this);

            console.info(
                `${this.name} bench suite: Fastest is ${chalk.green(
                    this.filter('fastest').map((s: Benchmark.Target) => s.name).toString(),
                )}`,
            )
            defer()
        })
        .run();

    await task;
}

async function runAsync(target: JscTarget, parallel: number, suite: Suite, name: string) {
    let defer: () => void
    const task = new Promise<void>((resolve) => {
        defer = resolve
    })
    suite
        .add({
            name: `swc (${target})`,
            fn: (deferred: any) => {
                Promise.all(
                    Array.from({ length: parallel }).map(() => {
                        return swc.transform(SOURCE_CODE, {
                            filename: SOURCE_PATH,
                            jsc: {
                                target,
                            },
                            sourceMaps: true,
                        })
                    }),
                )
                    .then(() => {
                        deferred.resolve()
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            },
            defer: true,
            async: true,
            queued: true,
        });

    if (target !== 'es3' && target !== 'es5') {
        suite
            .add({
                name: `esbuild (${target})`,
                fn: (deferred: any) => {
                    Promise.all(
                        Array.from({ length: parallel }).map(() =>
                            transformEsbuild(SOURCE_CODE, {
                                sourcefile: SOURCE_PATH,
                                loader: 'ts',
                                sourcemap: true,
                                minify: false,
                                target,
                            }),
                        ),
                    )
                        .then(() => {
                            deferred.resolve()
                        })
                        .catch((e) => {
                            console.error(e)
                        })
                },
                defer: true,
                async: true,
                queued: true,
            })
    }
    suite
        .on('cycle', function (event: Benchmark.Event) {
            event.target.hz = event.target!.hz! * parallel
            console.info(String(event.target))
        })
        .on('complete', async function (this: Benchmark.Target & Benchmark.Suite) {
            await storeResult(`transform-${name}-${target}`, this);
            console.info(
                `${this.name} bench suite: Fastest is ${chalk.green(
                    this.filter('fastest').map((t: Benchmark.Target) => t.name).toString(),
                )}`,
            )
            defer()
        });

    suite.run()

    await task
}