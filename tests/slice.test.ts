import { slice } from "../lib";

describe("slice", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const slicedA = slice(2, 8);
  const slicedB = slice(0, -5);
  const slicedC = slice(-2, arr.length);

  test("slices array", () => {
    expect(slicedA(arr)).toEqual([2, 3, 4, 5, 6, 7]);
    expect(slicedB(arr)).toEqual([0, 1, 2, 3, 4]);
    expect(slicedC(arr)).toEqual([8, 9]);
  });

  test("equals Array.slice", () => {
    expect(slicedA(arr)).toEqual(arr.slice(2, 8));
    expect(slicedB(arr)).toEqual(arr.slice(0, -5));
    expect(slicedC(arr)).toEqual(arr.slice(-2, arr.length));
  });
});
