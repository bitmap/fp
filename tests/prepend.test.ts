import { prepend } from "../lib";

describe("prepend", () => {
  const arr = [1, 2, 3, 4];

  test("returns prepended array", () => {
    expect(prepend(0, arr)).toEqual([0, 1, 2, 3, 4]);
  });
});
