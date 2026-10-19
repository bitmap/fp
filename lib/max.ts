/**
 * Returns maximum value of all arguments.
 *
 * `max :: [number] -> number`
 */
export const max = (...args: readonly number[]): number => {
  if (!args.length) {
    throw new Error("max requires at least one argument");
  }

  return Math.max(...args);
};