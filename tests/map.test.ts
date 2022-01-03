import { map, take } from "../lib";

describe("map", () => {
  const arr = [1, 2, 3];
  const double = (n: number): number => n * 2;
  const doubleAll = map(double);
  const doubled = doubleAll(arr);

  test("doubles array", () => {
    expect(doubled).toEqual([2, 4, 6]);
  });

  test("converts type", () => {
    expect(map((x) => `${x}!`)([1, 2, 3])).toEqual(["1!", "2!", "3!"]);
  });

  test("other lib functions", () => {
    const first2 = map(take(2));
    expect(first2([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 2], [4, 5]]);
  });

  test("with index", () => {
    const multiplyByIndex = map((x: number, i) => x * i);
    expect(multiplyByIndex([1, 2, 3, 4, 5, 6])).toEqual([0, 2, 6, 12, 20, 30]);
  });
});
