/**
 * Returns mode (most frequent occuring value) of all arguments.
 *
 * `mode :: [number] -> number
 */
export const mode = (...args: number[]): number => {
  const dict: Record<string, number> = {};
  let comparator = 0;
  let mode = null;

  for (const item of args) {
    const freq = dict[item] ? dict[item] + 1 : 1;

    if (freq > comparator) {
      comparator = freq;
      mode = item;
    }

    dict[item] = freq;
  }

  return mode;
};
