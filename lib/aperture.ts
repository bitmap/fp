/**
 * Returns a new list, composed of n-tuples of consecutive elements.
 *
 * `aperture :: number → [a] → [[a]]`
 */
export function aperture<T>(size: number, list: T[]): T[][] {
  return Array.from(
    { length: list.length - (size - 1) },
    (_, i) => list.slice(i, i + size),
  );
}
