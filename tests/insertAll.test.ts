import { insertAll } from "../lib";
import { describe, test, expect } from "vitest";

describe("insertAll", () => {
  const months = ["Jan", "June"];
  const others = ["Feb", "March", "April", "May"];

  const allMonths = insertAll(1, others, months);

  test("inserts array", () => {
    expect(allMonths).toEqual(["Jan", "Feb", "March", "April", "May", "June"]);
  });

  test("no side-effects", () => {
    expect(months).toEqual(["Jan", "June"]);
  });
});
