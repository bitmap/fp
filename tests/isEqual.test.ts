import { isEqual } from "../lib";

test("isEqual", () => {
  const isNegativeOne = isEqual(-1);

  expect(isNegativeOne(-1)).toEqual(true);
  expect(isNegativeOne(0)).toEqual(false);
});
