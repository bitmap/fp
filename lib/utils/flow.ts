import { fold } from "./fold";

type Fn = (arg: any) => any
type ArgT<T> = T extends (arg: infer A) => any ? A : never;

/**
 * Utility to scaffold compose/pipe. Accepts a list of unary functions as
 * arguments. Returns a reducer based on direction.
 *
 * `flow :: boolean -> [(a -> b)] -> a -> b`
 */
export const flow = (fromRight: boolean) =>
  <Fns extends Array<Fn>>(...fns: Fns) =>
    (value: ArgT<Fns[0]>): ArgT<Fns[0]> =>
      fold(fromRight)(
        (memo: Fn, fn: Fn) => fn(memo), value, fns,
      );
