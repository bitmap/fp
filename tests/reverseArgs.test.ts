import { clamp, reduce, reverseArgs } from "../lib";

describe("reverse", () => {
  test("reverses function", () => {
    expect(reverseArgs(clamp)(10, 5, 0)).toEqual(5);
  });

  test("reverses partial", () => {
    expect(reverseArgs(reduce((a, b) => a + b))([1, 2, 3], 0)).toEqual(6);
  });
});
