import { sum } from "./sum";

/**
 * Returns mean (average) of all arguments.
 *
 * `mean :: [number] -> number`
 */
export const mean = (...args: Array<number>): number => sum(...args) / args.length;
