import { last } from "../lib";

describe("last", () => {
  const arr = [1, 2, 3, 4];

  test("returns last", () => {
    expect(last(arr)).toEqual(4);
  });
});
