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
swc (es3) x 520 ops/sec ±0.71% (90 runs sampled)
typescript (es3) x 40.56 ops/sec ±9.35% (62 runs sampled)
babel (preset-env) x 46.67 ops/sec ±7.48% (61 runs sampled)
[es3] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es3)
[es3] Running async benchmarks
swc (es3) x 435 ops/sec ±1.48% (83 runs sampled)
[es3] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es3)
[es3] Running parallel benchmarks
swc (es3) x 1,351 ops/sec ±1.00% (81 runs sampled)
[es3] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es3)
[es5] Running single thread benchmarks
swc (es5) x 552 ops/sec ±0.76% (92 runs sampled)
typescript (es5) x 47.74 ops/sec ±5.03% (59 runs sampled)
babel (preset-env) x 55.04 ops/sec ±6.63% (59 runs sampled)
[es5] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es5)
[es5] Running async benchmarks
swc (es5) x 455 ops/sec ±1.15% (84 runs sampled)
[es5] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es5)
[es5] Running parallel benchmarks
swc (es5) x 1,406 ops/sec ±1.59% (83 runs sampled)
[es5] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es5)
[es2015] Running single thread benchmarks
swc (es2015) x 550 ops/sec ±0.70% (92 runs sampled)
esbuild (es2015) x 37.29 ops/sec ±0.58% (64 runs sampled)
typescript (es2015) x 56.70 ops/sec ±4.66% (64 runs sampled)
babel (preset-env) x 56.43 ops/sec ±3.03% (62 runs sampled)
[es2015] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2015)
[es2015] Running async benchmarks
swc (es2015) x 451 ops/sec ±0.88% (83 runs sampled)
esbuild (es2015) x 660 ops/sec ±2.03% (81 runs sampled)
[es2015] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2015)
[es2015] Running parallel benchmarks
swc (es2015) x 1,404 ops/sec ±1.39% (83 runs sampled)
esbuild (es2015) x 1,337 ops/sec ±1.68% (76 runs sampled)
[es2015] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2015)
[es2016] Running single thread benchmarks
swc (es2016) x 827 ops/sec ±0.73% (92 runs sampled)
esbuild (es2016) x 32.85 ops/sec ±0.94% (58 runs sampled)
typescript (es2016) x 57.86 ops/sec ±5.13% (66 runs sampled)
babel (preset-env) x 57.60 ops/sec ±2.06% (60 runs sampled)
[es2016] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2016)
[es2016] Running async benchmarks
swc (es2016) x 666 ops/sec ±1.74% (83 runs sampled)
esbuild (es2016) x 710 ops/sec ±0.94% (83 runs sampled)
[es2016] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2016)
[es2016] Running parallel benchmarks
swc (es2016) x 2,120 ops/sec ±0.91% (82 runs sampled)
esbuild (es2016) x 1,464 ops/sec ±1.27% (81 runs sampled)
[es2016] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2016)
[es2017] Running single thread benchmarks
swc (es2017) x 830 ops/sec ±0.53% (94 runs sampled)
esbuild (es2017) x 26.19 ops/sec ±0.50% (47 runs sampled)
typescript (es2017) x 58.62 ops/sec ±5.18% (65 runs sampled)
babel (preset-env) x 57.92 ops/sec ±3.39% (61 runs sampled)
[es2017] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2017)
[es2017] Running async benchmarks
swc (es2017) x 665 ops/sec ±1.04% (81 runs sampled)
esbuild (es2017) x 706 ops/sec ±0.94% (80 runs sampled)
[es2017] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2017)
[es2017] Running parallel benchmarks
swc (es2017) x 2,041 ops/sec ±2.65% (80 runs sampled)
esbuild (es2017) x 1,477 ops/sec ±1.32% (81 runs sampled)
[es2017] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2017)
[es2018] Running single thread benchmarks
swc (es2018) x 820 ops/sec ±1.07% (91 runs sampled)
esbuild (es2018) x 22.95 ops/sec ±0.49% (42 runs sampled)
typescript (es2018) x 59.41 ops/sec ±4.67% (68 runs sampled)
babel (preset-env) x 58.64 ops/sec ±2.93% (62 runs sampled)
[es2018] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2018)
[es2018] Running async benchmarks
swc (es2018) x 658 ops/sec ±0.94% (83 runs sampled)
esbuild (es2018) x 684 ops/sec ±2.00% (80 runs sampled)
[es2018] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2018)
[es2018] Running parallel benchmarks
swc (es2018) x 2,057 ops/sec ±1.81% (80 runs sampled)
esbuild (es2018) x 1,333 ops/sec ±1.91% (75 runs sampled)
[es2018] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2018)
[es2019] Running single thread benchmarks
swc (es2019) x 834 ops/sec ±0.49% (92 runs sampled)
esbuild (es2019) x 20.54 ops/sec ±0.88% (38 runs sampled)
typescript (es2019) x 58.39 ops/sec ±5.11% (65 runs sampled)
babel (preset-env) x 59.24 ops/sec ±1.93% (61 runs sampled)
[es2019] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2019)
[es2019] Running async benchmarks
swc (es2019) x 674 ops/sec ±0.89% (83 runs sampled)
esbuild (es2019) x 686 ops/sec ±1.93% (78 runs sampled)
[es2019] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is esbuild (es2019)
[es2019] Running parallel benchmarks
swc (es2019) x 2,120 ops/sec ±1.07% (82 runs sampled)
esbuild (es2019) x 1,370 ops/sec ±2.29% (75 runs sampled)
[es2019] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2019)
[es2020] Running single thread benchmarks
swc (es2020) x 905 ops/sec ±0.57% (92 runs sampled)
esbuild (es2020) x 18.76 ops/sec ±0.53% (50 runs sampled)
typescript (es2020) x 58.99 ops/sec ±5.17% (65 runs sampled)
babel (preset-env) x 58.81 ops/sec ±2.85% (62 runs sampled)
[es2020] Transform rxjs/Observable.ts benchmark bench suite: Fastest is swc (es2020)
[es2020] Running async benchmarks
swc (es2020) x 725 ops/sec ±1.23% (83 runs sampled)
esbuild (es2020) x 701 ops/sec ±1.20% (82 runs sampled)
[es2020] Transform rxjs/Observable.ts async benchmark bench suite: Fastest is swc (es2020)
[es2020] Running parallel benchmarks
swc (es2020) x 1,758 ops/sec ±3.07% (69 runs sampled)
esbuild (es2020) x 1,451 ops/sec ±2.06% (79 runs sampled)
[es2020] Transform rxjs/Observable.ts parallel benchmark bench suite: Fastest is swc (es2020)
```
