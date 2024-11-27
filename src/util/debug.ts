export const debug = (debug: boolean) => (debugStr: string) => {
    if (debug) console.log(debugStr)
}