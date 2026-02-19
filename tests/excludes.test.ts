import { excludes } from "../lib";
import { describe, test, expect } from "vitest";

describe("excludes", () => {
  test("returns true if value is not in list", () => {
    const excludesApple = excludes("apple");
    expect(excludesApple(["kiwi", "banana", "apple"])).toEqual(false);
    expect(excludesApple(["kiwi", "banana", "grape"])).toEqual(true);
  });
});
