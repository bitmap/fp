import { join } from "../lib";

test("join", () => {
  expect(join("|", [1, 2, 3, 4])).toEqual("1|2|3|4");
  expect(join(" and ", ["hall", "oates"])).toEqual("hall and oates");
});
