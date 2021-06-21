import { clamp } from "../lib";

describe("clamp", () => {
  test("clamps value", () => {
    expect(clamp(0, 1.5, 2)).toEqual(1.5);
  });

  test("clamps partial", () => {
    const clamp2 = clamp(-2, 2);
    expect(clamp2(10)).toEqual(2);
    expect(clamp2(-5)).toEqual(-2);
  });
});
