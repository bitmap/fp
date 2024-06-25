import { omit, map } from "../lib";

interface User {
  name: string;
  age?: number;
  city?: string;
  state?: string;
}

describe("omit", () => {
  test("returns omit", () => {
    const data: User = {
      name: "Tom",
      age: 32,
      city: "New York",
      state: "NY",
    };

    expect(omit(["name", "age", "donk"], data)).toEqual({
      city: "New York",
      state: "NY",
    });
  });

  test("mappable", () => {
    const data: User[] = [
      {
        name: "Tom",
        age: 32,
        city: "New York",
        state: "NY",
      },
      {
        name: "Dick",
        age: 41,
        city: "San Francisco",
        state: "CA",
      },
      {
        name: "Harry",
        age: 27,
        city: "Portland",
        state: "OR",
      },
      {
        name: "Jim",
      },
    ];

    const omitFrom = map(omit(["name", "city"]), data);

    expect(omitFrom).toEqual([
      {
        age: 32,
        state: "NY",
      },
      {
        age: 41,
        state: "CA",
      },
      {
        age: 27,
        state: "OR",
      },
      {},
    ]);
  });
});
