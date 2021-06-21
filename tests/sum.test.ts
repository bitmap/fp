import { sum } from "../lib";

describe("sum", () => {
  test("sums all numbers", () => {
    expect(sum(15, 30, 15, 20, 1.5, 9, -12)).toEqual(78.5);
  });

  test("sums spread array", () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(sum(...fibonacci)).toEqual(88);
  });
});
