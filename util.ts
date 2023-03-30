import Benchmark from 'benchmark'
import { JscTarget } from '@swc/core';
import * as ts from 'typescript';
import * as path from 'path';
import { promises as fs } from 'fs';

export async function store(op: string, res: { [name: string]: number }) {
    const dataDir = path.join(__dirname, '.data');
    await fs.mkdir(dataDir, { recursive: true });

    const f = path.join(dataDir, `${op}.json`);
    await fs.writeFile(f, JSON.stringify(res), 'utf8')
}

export async function storeResult(op: string, res: Benchmark.Target & Benchmark.Suite) {
    const reduced = res.reduce((arg: any, v: any) => {
        return {
            [v.name]: v.hz,
            ...arg
        };
    }, {});


    await store(op, reduced)
}

export function toTsTarget(target: JscTarget): ts.ScriptTarget | undefined {
    switch (target) {
        case "es3":
            return ts.ScriptTarget.ES3
        case "es5":
            return ts.ScriptTarget.ES5
        case "es2015":
            return ts.ScriptTarget.ES2015
        case "es2016":
            return ts.ScriptTarget.ES2016
        case "es2017":
            return ts.ScriptTarget.ES2017
        case "es2018":
            return ts.ScriptTarget.ES2018
        case "es2019":
            return ts.ScriptTarget.ES2019
        case "es2020":
            return ts.ScriptTarget.ES2020
    }
}