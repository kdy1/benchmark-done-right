import { run } from "./common";

export async function runTransforms() {
    await run('es3')
    await run('es5')
    await run('es2015')
    await run('es2016')
    await run('es2017')
    await run('es2018')
    await run('es2019')
    await run('es2020')
}