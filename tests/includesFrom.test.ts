import { includesFrom } from "../lib";
import { describe, test, expect } from "vitest";

describe("includesFrom", () => {
  test("returns true if value is in list from specified index", () => {
    const hasApple = includesFrom(2, "apple");
    expect(hasApple(["grape", "kiwi", "banana", "apple"])).toEqual(true);
    expect(hasApple(["apple", "kiwi", "banana", "grape"])).toEqual(false);
  });
});
