/**
 * Returns a sequence of integers from `start` (inclusive) to `end` (exclusive).
 * Counts down when `start` is greater than `end`.
 *
 * `range :: (number, number) -> [number]`
 */
export function range(start: number, end: number): number[] {
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
    throw new Error("range requires integer start and end values");
  }

  const result: number[] = [];

  if (start < end) {
    for (let i = start; i < end; i++) result.push(i);
  } else {
    for (let i = start; i > end; i--) result.push(i);
  }

  return result;
}
