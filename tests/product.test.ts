import { product } from "../lib";

describe("product", () => {
  test("multiplies all numbers", () => {
    expect(product(1, 2, 3, 4, 5)).toEqual(120);
  });

  test("multiplies spread array", () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(product(...fibonacci)).toEqual(0);
    expect(product(...fibonacci.slice(1, fibonacci.length))).toEqual(2227680);
  });
});
