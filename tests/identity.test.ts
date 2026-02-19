import { identity } from "../lib";
import { describe, test, expect } from "vitest";

describe("identity", () => {
  test("return identity", () => {
    expect(identity("hello, world")).toEqual("hello, world");
  });
});
