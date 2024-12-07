import fs from 'fs'

export const fileExists = (filePath) => {
    return fs.existsSync(filePath)
}

/**
 * @returns {string}
 */
export const readFileContent = (filePath) => {
    try {
        return fs.readFileSync(filePath, 'utf8')
    } catch (err) {
        throw new Error('Error reading file:' + err)
    }
}

/**
 * @returns {string[]}
 */
export const readFileLines = (filePath) => {
    try {
        return readFileContent(filePath).split('\r\n')
    } catch (err) {
        throw new Error('Error reading file:' + err)
    }
}

/**
 * @returns {string[][]}
 */
export const readFileTable = (filePath, splitter) => {
    try {
        const lines = readFileLines(filePath)
        return splitLinesToTable(lines, splitter)
    } catch (err) {
        throw new Error('Error reading file:' + err)
    }
}

/**
 * @param {string[]} data
 * @param {*} [splitter]
 * @returns {string[][]}
 */
export function splitLinesToTable(data, splitter) {
    return data.map((line) => line.split(splitter ?? /\s+/g))
}
