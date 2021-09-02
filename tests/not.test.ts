import { isNull, isArray, isEqual, isEmpty, not } from "../lib";
import type { Predicate } from "../lib/not";

describe("not", () => {
  const isNotNull = not(isNull);
  const isNotArray = not(isArray);
  const isNotEmpty = not(isEmpty);
  const isNot10 = not(isEqual(10) as Predicate);

  test("negates predicates", () => {
    expect(isNotNull(null)).toEqual(false);
    expect(isNotArray("test")).toEqual(true);
    expect(isNotEmpty([1, 2, 3])).toEqual(true);
    expect(isNot10(10)).toEqual(false);
  });
});
