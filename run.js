import { fileExists } from './utils/fileHandling.js'
import { stopWithError } from './utils/output.js'

console.log('------------------------------------')
console.log('Advent of Code 🎄 2024')
console.log('------------------------------------')

const runAll = process.argv.indexOf('/all') >= 0

if (runAll) {
    for (let i = 1; i <= 25; i++) {
        const day = i < 10 ? '0' + i.toString() : i.toString()
        if (!fileExists(buildDayEntryPath(day))) {
            continue
        }
        i > 1 && console.log('------------------------------------')
        await runDayEntry(day)
    }
} else {
    await runDayEntry()
}

console.log('------------------------------------')
console.log('🎅 Merry Christmas!')
console.log('------------------------------------')

function getDayArg() {
    const day = process.argv[2]
    if (day.length > 1) {
        return day
    }
    return '0' + day
}

function buildDayEntryPath(day) {
    return './' + day + '/index.js'
}

/**
 * @param {string} [day]
 */
async function runDayEntry(day) {
    day = day ?? getDayArg()
    if (!day) {
        stopWithError(
            'You need to specify which day 🤦 e.g. "npm run advent 01"',
        )
    }
    const dayEntryPath = buildDayEntryPath(day)
    if (!fileExists(dayEntryPath)) {
        stopWithError('Day [' + day + '] is not found 😭')
    }
    console.log('[ Day ' + day + ' ]')
    try {
        const { part1, part2 } = await import(dayEntryPath)
        const isExample = process.argv.indexOf('/example') >= 0
        displayAnswer('Part 1', part1 ? part1() : undefined, isExample)
        displayAnswer('Part 2', part2 ? part2() : undefined, isExample)
    } catch (e) {
        stopWithError(e)
    }
}

/**
 * @param {string} title
 * @param {Result|undefined} result
 * @param {boolean} isExample
 */
function displayAnswer(title, result, isExample) {
    let star = '-'
    if (
        (isExample && result && result?.exampleAnswer === result?.result) ||
        (!isExample && result && result?.correctAnswer === result?.result)
    ) {
        star = '⭐'
    }
    console.log(star + '  ' + title + ': ' + (result?.result ?? '-'))
}
