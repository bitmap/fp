export type Curried<Args extends Array<any>, ReturnType> =
  <PartialArgs extends Partial<Args>>(...args: PartialArgs) => PartialArgs extends Args
    ? ReturnType
    : Args extends [...Extract<{ [Key in keyof PartialArgs]: any }, Array<any>>, ...infer Arg]
      ? Arg extends Array<any>
        ? Curried<Arg, ReturnType>
        : never
      : never;

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
