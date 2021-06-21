import { reject } from "../lib";

describe("reject", () => {
  const isEven = (n: number): boolean => n % 2 === 0;
  const isOdd = (n: number): boolean => n % 2 !== 0;
  const rejectEven = reject(isOdd);
  const rejectOdd = reject(isEven);
  const odds = rejectEven([1, 2, 3, 4]);
  const evens = rejectOdd([1, 2, 3, 4]);

  test("rejects odd numbers", () => {
    expect(odds).toEqual([2, 4]);
  });

  test("rejects even numbers", () => {
    expect(evens).toEqual([1, 3]);
  });
});
