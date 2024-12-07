// File paths are relative to the root run.js

import { result } from '../utils/result.js'

// Change ./template to ./{NUMBER}
const EXAMPLE_DATA = './template/example.txt'
const CHALLENGE_DATA = './template/data.txt'
const RUN_DATA =
    process.argv.indexOf('/example') >= 0 ? EXAMPLE_DATA : CHALLENGE_DATA

export function part1() {
    const output = 'Let\s Go! Data here: ' + RUN_DATA
    // Fill in `exampleAnswer` when you start, and `correctAnswer` when you pass
    return result(0, 0, output)
}

// export function part2 () {
//     const output = 'Let\s Go!'
//     return result(0, 0, output)
// }
