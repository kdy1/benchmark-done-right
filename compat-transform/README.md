# Compatibilty transforms

This benchmark is about compatibility transforms, which is used to make code run on old browsers.
As some environments (es3, es5) are not supported by some tools, those are exlcuded.

This directory contains multiple benchmark files because the number of transforms applied to input vary seriously based on target (e.g. `es5`, `es2015`).

Note: Because I'm lazy and busy, babel becnhmark suite does not do many work.
I expect `es2016` benchmark suite of other tools should be compared to `preset-env` of babel.
