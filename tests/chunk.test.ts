import { chunk } from "../lib";

const data = [0, 1, 2, 3, 4];

describe("chunk", () => {
  test("chunks list", () => {
    expect(chunk(1, data)).toEqual([[0], [1], [2], [3], [4]]);
    expect(chunk(2, data)).toEqual([[0, 1], [2, 3], [4]]);
    expect(chunk(3, data)).toEqual([
      [0, 1, 2],
      [3, 4],
    ]);
    expect(chunk(4, data)).toEqual([[0, 1, 2, 3], [4]]);
    expect(chunk(5, data)).toEqual([[0, 1, 2, 3, 4]]);
    expect(chunk(6, data)).toEqual([[0, 1, 2, 3, 4]]);
  });
});
