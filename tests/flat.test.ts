import { flat } from "../lib";

describe("flat", () => {
  test("flattens", () => {
    expect(flat([0, [1, 2], [3, 4], [5]])).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("flattens 2 deep", () => {
    expect(flat([0, [1, 2, [3, 4]], [5]])).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("flattens 3 deep", () => {
    expect(flat([0, [1, 2, [3, 4, [5]]]])).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("no side-effects", () => {
    const origin = [{ a: 0 }, [{ a: 1 }, { a: 2 }, [{ a: 3 }, { a: 4 }, [{ a: 5 }]]]];
    const flattened = flat(origin);
    expect(flattened).toEqual([{ a: 0 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]);

    const n = flattened[0] as { a: number };
    n.a += 1;

    expect(origin).toEqual([{ a: 0 }, [{ a: 1 }, { a: 2 }, [{ a: 3 }, { a: 4 }, [{ a: 5 }]]]]);
    expect(flattened).toEqual([{ a: 1 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]);
  });
});
