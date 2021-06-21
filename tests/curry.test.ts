import { curry } from "../lib";

describe("curry", () => {
  const sum = curry((a: number, b: number, c: number) => a + b + c);

  test("curries function", () => {
    expect(sum(1, 2, 3) === sum(1)(2)(3)).toEqual(true);
  });
});
