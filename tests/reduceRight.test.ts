import { reduceRight } from "../lib";

const arr = [...Array(100).keys()];
const reducer = (acc: number, n: number): number => acc + n;
const sum = reduceRight(reducer, 0);
const result = sum(arr);

describe("reduceRight", () => {
  test("reduces array from right", () => {
    expect(result).toEqual(4950);
  });
});
