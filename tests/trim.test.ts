import { trim } from "../lib";
import { describe, test, expect } from "vitest";

describe("trim", () => {
  test("trims string", () => {
    expect(trim("     I am a string     ")).toEqual("I am a string");
  });
});
