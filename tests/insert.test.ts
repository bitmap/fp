import { insert } from "../lib";

describe("insert", () => {
  const months = ["Jan", "March", "April", "June"];

  const monthsA = insert(1, "Feb", months);
  const monthsB = insert(4, "May", monthsA);
  const monthsC = insert(monthsB.length, "Dec", monthsB);
  const monthsD = insert(-3, "Feb", months);

  test("inserts array", () => {
    expect(monthsA).toEqual(["Jan", "Feb", "March", "April", "June"]);
    expect(monthsB).toEqual(["Jan", "Feb", "March", "April", "May", "June"]);
    expect(monthsC).toEqual(["Jan", "Feb", "March", "April", "May", "June", "Dec"]);
    expect(monthsD).toEqual(["Jan", "Feb", "March", "April", "June"]);
  });

  test("no side-effects", () => {
    expect(months).toEqual(["Jan", "March", "April", "June"]);
  });
});
