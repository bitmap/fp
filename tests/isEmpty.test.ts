import { isEmpty } from "../lib";

test("isEmpty", () => {
  expect(isEmpty(null)).toEqual(true);
  expect(isEmpty(undefined)).toEqual(true);

  expect(isEmpty("")).toEqual(true);
  expect(isEmpty("hello")).toEqual(false);

  expect(isEmpty([])).toEqual(true);
  expect(isEmpty([1, 2, 3])).toEqual(false);

  expect(isEmpty({})).toEqual(true);
  expect(isEmpty({ a: 1, b: 2, c: 3 })).toEqual(false);

});
