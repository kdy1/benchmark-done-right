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
swc (es3) x 587 ops/sec ±1.39% (88 runs sampled)
typescript (es3) x 46.43 ops/sec ±9.63% (61 runs sampled)
babel (preset-env) x 58.23 ops/sec ±5.42% (64 runs sampled)
[es3] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es3)
[es3] Running async benchmarks
swc (es3) x 495 ops/sec ±1.07% (81 runs sampled)
[es3] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es3)
[es3] Running parallel benchmarks
swc (es3) x 1,446 ops/sec ±1.27% (79 runs sampled)
[es3] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es3)
[es5] Running single thread benchmarks
swc (es5) x 630 ops/sec ±0.95% (89 runs sampled)
typescript (es5) x 56.49 ops/sec ±5.42% (63 runs sampled)
babel (preset-env) x 68.67 ops/sec ±3.21% (66 runs sampled)
[es5] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es5)
[es5] Running async benchmarks
swc (es5) x 516 ops/sec ±1.09% (81 runs sampled)
[es5] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es5)
[es5] Running parallel benchmarks
swc (es5) x 1,559 ops/sec ±1.11% (79 runs sampled)
[es5] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es5)
[es2015] Running single thread benchmarks
swc (es2015) x 636 ops/sec ±1.38% (90 runs sampled)
esbuild (es2015) x 38.58 ops/sec ±0.47% (67 runs sampled)
typescript (es2015) x 64.99 ops/sec ±5.74% (66 runs sampled)
babel (preset-env) x 72.63 ops/sec ±2.08% (74 runs sampled)
[es2015] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2015)
[es2015] Running async benchmarks
swc (es2015) x 510 ops/sec ±1.31% (82 runs sampled)
esbuild (es2015) x 634 ops/sec ±2.90% (75 runs sampled)
[es2015] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2015)
[es2015] Running parallel benchmarks
swc (es2015) x 1,513 ops/sec ±1.15% (82 runs sampled)
esbuild (es2015) x 1,331 ops/sec ±2.46% (75 runs sampled)
[es2015] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2015)
[es2016] Running single thread benchmarks
swc (es2016) x 890 ops/sec ±0.81% (90 runs sampled)
esbuild (es2016) x 33.95 ops/sec ±0.63% (59 runs sampled)
typescript (es2016) x 65.74 ops/sec ±6.08% (68 runs sampled)
babel (preset-env) x 71.87 ops/sec ±2.82% (70 runs sampled)
[es2016] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2016)
[es2016] Running async benchmarks
swc (es2016) x 704 ops/sec ±1.18% (81 runs sampled)
esbuild (es2016) x 712 ops/sec ±0.92% (81 runs sampled)
[es2016] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2016),swc (es2016)
[es2016] Running parallel benchmarks
swc (es2016) x 2,118 ops/sec ±0.99% (82 runs sampled)
esbuild (es2016) x 1,492 ops/sec ±1.17% (82 runs sampled)
[es2016] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2016)
[es2017] Running single thread benchmarks
swc (es2017) x 901 ops/sec ±0.77% (90 runs sampled)
esbuild (es2017) x 27.42 ops/sec ±0.40% (49 runs sampled)
typescript (es2017) x 67.37 ops/sec ±5.12% (71 runs sampled)
babel (preset-env) x 73.05 ops/sec ±2.55% (66 runs sampled)
[es2017] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2017)
[es2017] Running async benchmarks
swc (es2017) x 689 ops/sec ±2.89% (80 runs sampled)
esbuild (es2017) x 692 ops/sec ±1.50% (80 runs sampled)
[es2017] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2017),swc (es2017)
[es2017] Running parallel benchmarks
swc (es2017) x 1,929 ops/sec ±1.64% (80 runs sampled)
esbuild (es2017) x 1,449 ops/sec ±1.21% (80 runs sampled)
[es2017] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2017)
[es2018] Running single thread benchmarks
swc (es2018) x 894 ops/sec ±0.92% (90 runs sampled)
esbuild (es2018) x 23.52 ops/sec ±0.48% (43 runs sampled)
typescript (es2018) x 68.45 ops/sec ±5.41% (68 runs sampled)
babel (preset-env) x 72.72 ops/sec ±3.30% (66 runs sampled)
[es2018] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2018)
[es2018] Running async benchmarks
swc (es2018) x 693 ops/sec ±1.22% (81 runs sampled)
esbuild (es2018) x 702 ops/sec ±1.06% (80 runs sampled)
[es2018] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2018),swc (es2018)
[es2018] Running parallel benchmarks
swc (es2018) x 2,110 ops/sec ±1.41% (81 runs sampled)
esbuild (es2018) x 1,482 ops/sec ±0.98% (81 runs sampled)
[es2018] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2018)
[es2019] Running single thread benchmarks
swc (es2019) x 909 ops/sec ±0.57% (92 runs sampled)
esbuild (es2019) x 20.52 ops/sec ±0.58% (38 runs sampled)
typescript (es2019) x 67.13 ops/sec ±5.23% (69 runs sampled)
babel (preset-env) x 72.36 ops/sec ±3.30% (67 runs sampled)
[es2019] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2019)
[es2019] Running async benchmarks
swc (es2019) x 698 ops/sec ±1.26% (82 runs sampled)
esbuild (es2019) x 709 ops/sec ±1.02% (81 runs sampled)
[es2019] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2019),swc (es2019)
[es2019] Running parallel benchmarks
swc (es2019) x 2,134 ops/sec ±1.18% (82 runs sampled)
esbuild (es2019) x 1,499 ops/sec ±1.00% (82 runs sampled)
[es2019] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2019)
[es2020] Running single thread benchmarks
swc (es2020) x 984 ops/sec ±0.81% (90 runs sampled)
esbuild (es2020) x 18.16 ops/sec ±0.48% (49 runs sampled)
typescript (es2020) x 67.06 ops/sec ±5.37% (68 runs sampled)
babel (preset-env) x 72.21 ops/sec ±3.25% (68 runs sampled)
[es2020] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2020)
[es2020] Running async benchmarks
swc (es2020) x 762 ops/sec ±1.09% (80 runs sampled)
esbuild (es2020) x 697 ops/sec ±1.08% (80 runs sampled)
[es2020] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es2020)
[es2020] Running parallel benchmarks
swc (es2020) x 2,322 ops/sec ±1.10% (80 runs sampled)
esbuild (es2020) x 1,477 ops/sec ±1.04% (80 runs sampled)
[es2020] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2020)
```
