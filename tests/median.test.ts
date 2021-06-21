import { median } from "../lib";

describe("median", () => {
  test("finds median", () => {
    expect(median(15, 30, 15, 20, 1.5, 9, -12)).toEqual(15);
  });

  test("finds median of spread array", () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(median(...fibonacci)).toEqual(4);
  });
});
