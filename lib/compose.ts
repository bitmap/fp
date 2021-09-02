import { Curried } from "./curry";
import { reduceRight } from "./reduceRight";

type Fn = (arg: any) => any
type ArgT<T> = T extends (arg: infer A) => any ? A : never;
type Reducer<T> = Curried<[], ArgT<T>>

/**
 * Compose unary function output from right to left.
 *
 * `compose(a, b, c)(x)` is equivelent to `a(b(c(x)))`
 *
 * `compose :: [(a -> b)] -> a -> b`
 */
 export const compose = <Fns extends Array<Fn>>(...fns: Fns) =>
 (value: ArgT<Fns[0]>): Reducer<Fns[0]> =>
    reduceRight((memo: Fn, fn: Fn) => fn(memo), value, fns);
