import { add, subtract, subtractBy, multiply, divide, divideBy, remainder, modulo } from "../lib";

describe("math", () => {
  test("add", () => {
    expect(add(15, 30)).toEqual(45);

    const add5 = add(5);
    expect(add5(95)).toEqual(100);
    expect(add5(-5)).toEqual(0);
  });

  test("subtract", () => {
    expect(subtract(10, 5)).toEqual(5);

    const complementaryAngle = subtract(90);
    expect(complementaryAngle(30)).toEqual(60);
    expect(complementaryAngle(72)).toEqual(18);
  });

  test("subtractBy", () => {
    expect(subtractBy(30, 45)).toEqual(15);

    const minus10 = subtractBy(10);
    expect(minus10(12)).toEqual(2);
    expect(minus10(5)).toEqual(-5);
  });

  test("multiply", () => {
    expect(multiply(5, 8)).toEqual(40);

    const double = multiply(2);
    const triple = multiply(3);
    expect(double(10)).toEqual(20);
    expect(triple(double(10))).toEqual(60);
  });

  test("divide", () => {
    expect(divide(16, 8)).toEqual(2);

    const reciprocal = divide(1);
    expect(reciprocal(4)).toEqual(0.25);
    expect(reciprocal(0.5)).toEqual(2);
  });

  test("divideBy", () => {
    expect(divideBy(10, 100)).toEqual(10);

    const toEm = divideBy(16);
    const half = divideBy(2);
    expect(half(10)).toEqual(5);
    expect(toEm(18)).toEqual(1.125);
  });

  test("remainder", () => {
    expect(remainder(4, 2)).toEqual(0);
    expect(remainder(-3, 4)).toEqual(-3);
  });

  test("modulo", () => {
    expect(modulo(4, 2)).toEqual(0);
    expect(modulo(-3, 4)).toEqual(1);
  });
});
