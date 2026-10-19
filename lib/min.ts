/**
 * Returns minimum value of all arguments.
 *
 * `min :: [number] -> number`
 */
export const min = (...args: readonly number[]): number => {
  if (!args.length) {
    throw new Error("min requires at least one argument");
  }

  return Math.min(...args);
};