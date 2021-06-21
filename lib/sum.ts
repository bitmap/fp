import { add } from "./add";
import { reduce } from "./reduce";

/**
 * Returns sum of all arguments.
 *
 * `sum :: [number] -> number`
 */
export const sum = (...args: Array<number>): number => reduce(add, 0, args);
