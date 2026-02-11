import { sum } from "./sum";

/**
 * Returns mean (average) of all arguments.
 *
 * `mean :: [number] -> number`
 */
export const mean = (...args: number[]): number => {
  if (args.length === 0) {
    throw new Error("mean requires at least one argument");
  }

  return sum(...args) / args.length;
};
