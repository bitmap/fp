import { any } from "../lib";

test("any", () => {
  const anyGreaterThanTen = any((a) => a > 10);

  expect(anyGreaterThanTen([-25, 5, 10])).toEqual(false);
  expect(anyGreaterThanTen([10, 20, 30])).toEqual(true);
});
