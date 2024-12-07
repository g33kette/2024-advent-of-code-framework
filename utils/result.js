/**
 * @typedef Result {{exampleAnswer, result, correctAnswer}}
 */

/**
 * @returns Result
 */
export function result(exampleAnswer, correctAnswer, result) {
    return {
        exampleAnswer,
        correctAnswer,
        result,
    }
}