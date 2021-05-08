import { JscTarget } from '@swc/core';
import * as ts from 'typescript';

export function toTsTarget(target: JscTarget): ts.ScriptTarget {
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