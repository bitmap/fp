import { sum } from './sum'

/**
 * Returns mean (average) of all arguments.
 *
 * `mean :: [number] -> number`
 */
export const mean = (...args: number[]): number => sum(...args) / args.length
