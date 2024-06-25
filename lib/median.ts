/**
 * Returns median of all arguments.
 *
 * `median :: [number] -> number`
 */
export const median = (...args: number[]): number => {
  const sorted = args.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
};
