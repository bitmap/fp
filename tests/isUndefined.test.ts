import { isUndefined } from "../lib";
import { describe, test, expect } from "vitest";

describe("isUndefined", () => {
  test("returns true if value is undefined", () => {
    let test: string | undefined = void 0;
    expect(isUndefined(test)).toEqual(true);

    test = "test";
    expect(isUndefined(test)).toEqual(false);
  });
});
