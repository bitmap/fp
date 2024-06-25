import { isNull, isArray, isEqual, isEmpty, not } from "../lib";

describe("not", () => {
  const isNotNull = not(isNull);
  const isNotArray = not(isArray);
  const isNotEmpty = not(isEmpty);
  const isNot10 = not<number>((n) => isEqual(10, n));

  test("negates predicates", () => {
    expect(isNotNull(null)).toEqual(false);
    expect(isNotArray("test")).toEqual(true);
    expect(isNotEmpty([1, 2, 3])).toEqual(true);
    expect(isNot10(10)).toEqual(false);
  });
});
