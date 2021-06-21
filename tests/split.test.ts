import { split } from "../lib";

describe("split", () => {
  const string = "I am a string";
  const splitSpaces = split(" ");

  test("splits string", () => {
    expect(splitSpaces(string)).toEqual(["I", "am", "a", "string"]);
  });

  test("splits by delimiter", () => {
    expect(split(":", "uno::dos:  ! ")).toEqual(["uno", "", "dos", "  ! "]);
  });
});
