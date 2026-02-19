import { includes } from "../lib";
import { describe, test, expect } from "vitest";

describe("includes", () => {
  test("returns true if value is in list", () => {
    const hasApple = includes("apple");
    expect(hasApple(["kiwi", "banana", "apple"])).toEqual(true);
    expect(hasApple(["kiwi", "banana", "grape"])).toEqual(false);
  });
});
