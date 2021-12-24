import { aperture } from "../lib";

test("aperture", () => {
  const list = [1, 2, 3, 4, 5];
  const size2 = aperture(2, list);
  const size3 = aperture(3, list);
  const size5 = aperture(5, list);
  const size7 = aperture(7, list);

  expect(size2).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]]);
  expect(size3).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
  expect(size5).toEqual([[1, 2, 3, 4, 5]]);
  expect(size7).toEqual([]);
});
