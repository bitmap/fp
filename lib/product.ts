import { multiply } from './multiply'
import { reduce } from './reduce'

/**
 * Returns product of all arguments.
 *
 * `product :: [number] -> number`
 */
export const product = (...args: number[]): number => reduce(multiply, 1, args)
