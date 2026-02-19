import { pluck } from "../lib";
import { describe, test, expect } from "vitest";

describe("pluck", () => {
  const data = [
    {
      city: "New York",
      state: "NY",
    },
    {
      city: "San Francisco",
      state: "CA",
    },
    {
      city: "Portland",
      state: "OR",
    },
  ];

  test("returns pluck", () => {
    expect(pluck("state", data)).toEqual(["NY", "CA", "OR"]);
  });
});
