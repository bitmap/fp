export type Curried<A extends Array<any>, R> =
  <P extends Partial<A>>(...args: P) => P extends A
    ? R
    : A extends [...SameLength<P>, ...infer S]
      ? S extends Array<any>
        ? Curried<S, R>
        : never
      : never;

type SameLength<T extends Array<any>> = Extract<{ [K in keyof T]: any }, Array<any>>

/**
 * Returns a curried version of a function to allow it to be called partially.
 *
 * `curry :: (* -> a) -> (* -> a)`
 */
export const curry = <A extends Array<any>, R>(fn: (...args: A) => R): Curried<A, R> => {
  const partialFn = (...args: Array<any>): any =>
    args.length >= fn.length
      ? fn.call(null, ...args as any)
      : partialFn.bind(null, ...args);

  return partialFn;
};
