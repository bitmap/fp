export type Curried<Args extends unknown[], ReturnType> =
  <PartialArgs extends Partial<Args>>(...args: PartialArgs) => PartialArgs extends Args
    ? ReturnType
    : Args extends [...Extract<{ [Key in keyof PartialArgs]: unknown }, unknown[]>, ...infer Arg]
      ? Arg extends unknown[]
        ? Curried<Arg, ReturnType>
        : ReturnType
      : ReturnType;

/**
 * Returns a curried version of a function to allow it to be called partially.
 *
 * `curry :: (* -> a) -> (* -> a)`
 */
export function curry<A extends Array<any>, R>(curriedFn: (...args: A) => R): Curried<A, R> {
   return function partialFn(...args) {
    return args.length >= curriedFn.length
      ? curriedFn.call(null, ...args)
      : partialFn.bind(null, ...args);
  };
}
