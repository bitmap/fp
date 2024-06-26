import { copy } from "../lib";

describe("copy", () => {
  test("copies list", () => {
    expect(copy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("copies object", () => {
    expect(copy({ hello: "world" })).toEqual({ hello: "world" });
  });

  test("deep copies", () => {
    const obj1 = { a: 100 };
    const obj2 = { b: obj1 };
    const obj3 = copy(obj2);
    obj3.b.a = 200;

    expect(obj2.b.a).toBe(obj1.a);
  });
});
