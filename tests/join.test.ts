import { join } from "../lib";
import { describe, test, expect } from "vitest";

describe("join", () => {
  test("joins list into string with delimiter", () => {
    expect(join("|", [1, 2, 3, 4])).toEqual("1|2|3|4");
    expect(join(" and ", ["hall", "oates"])).toEqual("hall and oates");
  });
});
