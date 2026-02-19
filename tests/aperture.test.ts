import { aperture } from "../lib";
import { describe, test, expect } from "vitest";

describe("aperture", () => {
  test("creates n-tuples of consecutive elements", () => {
    const list = [1, 2, 3, 4, 5];
    const size2 = aperture(2, list);
    const size3 = aperture(3, list);
    const size5 = aperture(5, list);
    const size7 = aperture(7, list);

    expect(size2).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]]);
    expect(size3).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
    expect(size5).toEqual([[1, 2, 3, 4, 5]]);
    expect(size7).toEqual([]);
  });

  test("throws error when size is 0", () => {
    expect(() => aperture(0, [1, 2, 3])).toThrow("aperture size must be at least 1");
  });

  test("throws error when size is negative", () => {
    expect(() => aperture(-1, [1, 2, 3])).toThrow("aperture size must be at least 1");
  });
});
