import { all } from "../lib";
import { describe, test, expect } from "vitest";

describe("all", () => {
  test("returns true if all items meet condition", () => {
    const allGreaterThanTen = all((a: number) => a > 10);

    expect(allGreaterThanTen([-5, 20, 30])).toEqual(false);
    expect(allGreaterThanTen([20, 30, 40])).toEqual(true);
  });
});
