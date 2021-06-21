type Reducer<T> = (
  previousValue: T,
  currentValue: T,
  index: number,
  items: Array<T>,
) => T;

/**
 * Utility for scaffolding reduce and reduceRight
 *
 * `fold :: boolean -> ((a, b) -> a) -> a -> [b] -> a`
 */
export const fold = (fromRight: boolean) =>
  <T>(reducer: Reducer<T>, initial: T, items: Array<T>): T => {
    const { length } = items;
    let index = fromRight ? length : -1;
    let memo = initial;

    // eslint-disable-next-line no-plusplus
    while ((fromRight ? index-- : ++index < length)) {
      memo = reducer(memo, items[index], index, items);
    }

    return memo;
  };
