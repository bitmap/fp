import { isEmpty } from "../lib";

test("isEmpty", () => {
  expect(isEmpty("")).toEqual(true);
  expect(isEmpty("hello")).toEqual(false);

  expect(isEmpty([])).toEqual(true);
  expect(isEmpty([1, 2, 3])).toEqual(false);

  expect(isEmpty({})).toEqual(true);
  expect(isEmpty({ a: 1, b: 2, c: 3 })).toEqual(false);

  expect(isEmpty(null)).toEqual(false);
  expect(isEmpty(undefined)).toEqual(false);
  expect(isEmpty(0)).toEqual(false);
  expect(isEmpty(true)).toEqual(false);
  expect(isEmpty(false)).toEqual(false);

  const map = new Map();
  const set = new Set();
  expect(isEmpty(map)).toEqual(true);
  expect(isEmpty(set)).toEqual(true);

  map.set("test", 0);
  set.add(0);

  expect(isEmpty(map)).toEqual(false);
  expect(isEmpty(set)).toEqual(false);
});
