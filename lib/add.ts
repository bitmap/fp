import { curry } from './curry'

/**
 * Add two numbers together `add` args are curried.
 *
 * `add :: number -> number -> number`
 */
export const add = curry((a:number, b:number):number => a + b)
