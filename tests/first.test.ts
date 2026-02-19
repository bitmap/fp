import { first } from "../lib";
import { describe, test, expect } from "vitest";

describe("first", () => {
  const arr = [1, 2, 3, 4];

  test("returns first", () => {
    expect(first(arr)).toEqual(1);
  });
});
