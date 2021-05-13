# Benchmark for js dev tools, done right

This repo contains correct benchmark for various tools.

Many benchmarks suck, because they don't align tasks the tool does.
Car costs more than apple for good reasons, but many people compares price of apple and car.

To be fair, benchmarks are grouped base on their tasks.

Each directory contains simple description for tasks.
(But don't expect too much, I don't like documenting stuffs)

## Running benchmarks

```sh
npm i
npm run bench
```

## Benchmark results

Run on `MacBook Pro (13-inch, 2020, Four Thunderbolt 3 ports)`, `2.3 GHz Quad Core Intel Core i7`, `32GB 3733 MHz LPDDR4X`.

What really matters is parallel benchmark because it represents real word usages, assuming the build tool you are using is not a dumb.

### Compatibility transforms

Note: `esbuild` does not support `es3` nor `es5`.

```sh
[es3] Running single thread benchmarks
swc (es3) x 582 ops/sec ±0.61% (91 runs sampled)
typescript (es3) x 45.87 ops/sec ±9.81% (59 runs sampled)
babel (preset-env) x 56.45 ops/sec ±7.03% (64 runs sampled)
[es3] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es3)
[es3] Running async benchmarks
swc (es3) x 427 ops/sec ±3.66% (73 runs sampled)
[es3] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es3)
[es3] Running parallel benchmarks
swc (es3) x 1,284 ops/sec ±1.58% (77 runs sampled)
[es3] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es3)
[es5] Running single thread benchmarks
swc (es5) x 614 ops/sec ±0.81% (93 runs sampled)
typescript (es5) x 54.67 ops/sec ±5.64% (62 runs sampled)
babel (preset-env) x 65.57 ops/sec ±3.62% (69 runs sampled)
[es5] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es5)
[es5] Running async benchmarks
swc (es5) x 459 ops/sec ±3.40% (73 runs sampled)
[es5] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es5)
[es5] Running parallel benchmarks
swc (es5) x 1,315 ops/sec ±1.51% (79 runs sampled)
[es5] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es5)
[es2015] Running single thread benchmarks
swc (es2015) x 619 ops/sec ±0.99% (91 runs sampled)
esbuild (es2015) x 37.57 ops/sec ±0.46% (65 runs sampled)
typescript (es2015) x 65.10 ops/sec ±6.05% (67 runs sampled)
babel (preset-env) x 71.44 ops/sec ±2.37% (72 runs sampled)
[es2015] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2015)
[es2015] Running async benchmarks
swc (es2015) x 499 ops/sec ±2.35% (81 runs sampled)
esbuild (es2015) x 699 ops/sec ±1.34% (78 runs sampled)
[es2015] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2015)
[es2015] Running parallel benchmarks
swc (es2015) x 1,524 ops/sec ±1.50% (83 runs sampled)
esbuild (es2015) x 1,462 ops/sec ±2.42% (81 runs sampled)
[es2015] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2015)
[es2016] Running single thread benchmarks
swc (es2016) x 884 ops/sec ±0.95% (90 runs sampled)
esbuild (es2016) x 32.51 ops/sec ±0.57% (57 runs sampled)
typescript (es2016) x 67.41 ops/sec ±4.97% (69 runs sampled)
babel (preset-env) x 71.28 ops/sec ±2.60% (69 runs sampled)
[es2016] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2016)
[es2016] Running async benchmarks
swc (es2016) x 706 ops/sec ±1.06% (79 runs sampled)
esbuild (es2016) x 653 ops/sec ±3.00% (75 runs sampled)
[es2016] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es2016)
[es2016] Running parallel benchmarks
swc (es2016) x 2,128 ops/sec ±1.15% (82 runs sampled)
esbuild (es2016) x 1,359 ops/sec ±2.45% (72 runs sampled)
[es2016] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2016)
[es2017] Running single thread benchmarks
swc (es2017) x 896 ops/sec ±0.70% (92 runs sampled)
esbuild (es2017) x 26.85 ops/sec ±1.04% (48 runs sampled)
typescript (es2017) x 66.80 ops/sec ±5.19% (71 runs sampled)
babel (preset-env) x 71.47 ops/sec ±2.55% (69 runs sampled)
[es2017] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2017)
[es2017] Running async benchmarks
swc (es2017) x 662 ops/sec ±2.34% (79 runs sampled)
esbuild (es2017) x 703 ops/sec ±1.09% (80 runs sampled)
[es2017] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2017)
[es2017] Running parallel benchmarks
swc (es2017) x 2,105 ops/sec ±2.51% (82 runs sampled)
esbuild (es2017) x 1,486 ops/sec ±0.98% (81 runs sampled)
[es2017] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2017)
[es2018] Running single thread benchmarks
swc (es2018) x 884 ops/sec ±1.03% (89 runs sampled)
esbuild (es2018) x 22.23 ops/sec ±0.59% (41 runs sampled)
typescript (es2018) x 67.70 ops/sec ±5.58% (68 runs sampled)
babel (preset-env) x 71.03 ops/sec ±3.29% (68 runs sampled)
[es2018] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2018)
[es2018] Running async benchmarks
swc (es2018) x 688 ops/sec ±1.10% (81 runs sampled)
esbuild (es2018) x 713 ops/sec ±0.94% (82 runs sampled)
[es2018] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2018)
[es2018] Running parallel benchmarks
swc (es2018) x 2,119 ops/sec ±1.36% (82 runs sampled)
esbuild (es2018) x 1,493 ops/sec ±0.98% (82 runs sampled)
[es2018] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2018)
[es2019] Running single thread benchmarks
swc (es2019) x 893 ops/sec ±0.80% (90 runs sampled)
esbuild (es2019) x 19.58 ops/sec ±0.69% (41 runs sampled)
typescript (es2019) x 66.81 ops/sec ±5.52% (70 runs sampled)
babel (preset-env) x 71.76 ops/sec ±2.55% (67 runs sampled)
[es2019] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2019)
[es2019] Running async benchmarks
swc (es2019) x 681 ops/sec ±5.16% (80 runs sampled)
esbuild (es2019) x 717 ops/sec ±0.92% (82 runs sampled)
[es2019] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2019)
[es2019] Running parallel benchmarks
swc (es2019) x 2,141 ops/sec ±1.01% (82 runs sampled)
esbuild (es2019) x 1,489 ops/sec ±1.03% (81 runs sampled)
[es2019] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2019)
[es2020] Running single thread benchmarks
swc (es2020) x 968 ops/sec ±0.80% (90 runs sampled)
esbuild (es2020) x 17.74 ops/sec ±0.57% (48 runs sampled)
typescript (es2020) x 68.43 ops/sec ±6.50% (68 runs sampled)
babel (preset-env) x 72.04 ops/sec ±2.49% (67 runs sampled)
[es2020] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2020)
[es2020] Running async benchmarks
swc (es2020) x 761 ops/sec ±1.29% (82 runs sampled)
esbuild (es2020) x 719 ops/sec ±0.91% (83 runs sampled)
[es2020] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es2020)
[es2020] Running parallel benchmarks
swc (es2020) x 2,297 ops/sec ±1.16% (83 runs sampled)
esbuild (es2020) x 1,505 ops/sec ±1.04% (82 runs sampled)
[es2020] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2020)
```
