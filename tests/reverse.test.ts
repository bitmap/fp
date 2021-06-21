import { reverse } from "../lib";

describe("reverse", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const str = "I am a string";

  test("reverses array", () => {
    expect(reverse(arr)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  test("reverses string", () => {
    expect(reverse(str)).toEqual("gnirts a ma I");
  });
});
