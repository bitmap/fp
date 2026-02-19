import { zip } from "../lib";

describe("zip", () => {
  test("combine multiple arrays into tuples", () => {
    expect(zip(["a", "b", "c"], [1, 2, 3])).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  test("handles arrays of different lengths", () => {
    expect(zip([1, 2, 3], ["a", "b"])).toEqual([
      [1, "a"],
      [2, "b"],
    ]);

    expect(zip([1, 2], ["a", "b", "c", "d"])).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });

  test("handles empty arrays", () => {
    expect(zip([], [1, 2, 3])).toEqual([]);
    expect(zip([1, 2, 3], [])).toEqual([]);
    expect(zip([], [])).toEqual([]);
  });

  test("handles single element arrays", () => {
    expect(zip([1], ["a"])).toEqual([[1, "a"]]);
    expect(zip([1], ["a", "b"])).toEqual([[1, "a"]]);
  });

  test("works with curried form", () => {
    const zipWithNumbers = zip([1, 2, 3]);
    expect(zipWithNumbers(["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });
});
