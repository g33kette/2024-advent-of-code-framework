export function stopWithError(errorMessage) {
    console.error('')
    console.error('ERROR: ' + errorMessage)
    console.error('')
    process.exit(0)
}

export function comment(message) {
    console.log(' ** ' + message + ' **')
}
