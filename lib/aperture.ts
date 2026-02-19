/**
 * Returns a new list, composed of n-tuples of consecutive elements.
 *
 * `aperture :: number → [a] → [[a]]`
 */
export function aperture<T>(size: number, list: T[]): T[][] {
  if (size < 1) {
    throw new Error("aperture size must be at least 1");
  }

  return Array.from(
    { length: list.length - (size - 1) },
    (_, i) => list.slice(i, i + size),
  );
}
