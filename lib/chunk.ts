import { curry } from "./curry";

/**
 * Splits a collection into slices of the specified length.
 *
 * `chunk :: number → [a] → [[a]]`
 */
export const chunk = curry(<T>(size: number, list: T[]): T[][] => {
  const length = Math.ceil(list.length / size);
  const chunks: T[][] = new Array(length);

  for (let index = 0; index < length; index += 1) {
    chunks[index] = list.slice(index * size, index * size + size);
  }

  return chunks;
});
