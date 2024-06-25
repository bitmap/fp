import { isUndefined } from "../lib";

test("isUndefined", () => {
  let test: string | undefined = void 0;
  expect(isUndefined(test)).toEqual(true);

  test = "test";
  expect(isUndefined(test)).toEqual(false);
});
