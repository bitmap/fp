import { compact } from "../lib";

const flag1 = true;
const flag2 = true;
const flag3 = false;

describe("compact", () => {
  test("returns list without falsey values", () => {
    expect(
      compact([
        0,
        1,
        "",
        "a",
        {},
        [],
        null,
        undefined,
        flag1 ? "b" : "no",
        flag2 && "c",
        flag3 && "d",
      ]),
    ).toEqual([1, "a", {}, [], "b", "c"]);
  });
});
