import { includesFrom } from "../lib";

test("includes", () => {
  const hasApple = includesFrom(2, "apple");
  expect(hasApple(["grape", "kiwi", "banana", "apple"])).toEqual(true);
  expect(hasApple(["apple", "kiwi", "banana", "grape"])).toEqual(false);
});
