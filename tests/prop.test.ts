import { prop } from "../lib";

describe("prop", () => {
  const obj = {
    fruits: ["apple", "orange", "banana"],
    total: 138,
  };

  test("returns prop", () => {
    expect(prop("fruits", obj)).toEqual(["apple", "orange", "banana"]);
  });

  const data = {
    name: "Bob",
    age: 40,
  };

  const name = prop("name");

  test("returns prop value", () => {
    expect(name(data)).toEqual("Bob");
  });

  let rename = name(data);
  rename = "Tom";

  test("no side-effects", () => {
    expect(data.name).toEqual("Bob");
    expect(rename).toEqual("Tom");
  });
});
