import { curry } from "./curry";

/**
 * Evaluate the returned string from an operand.
 *
 * `isTypeOf :: string -> a -> boolean`
 */
export const isTypeOf = curry(
  <T>(
    type:
      | "undefined"
      | "function"
      | "boolean"
      | "string"
      | "number"
      | "bigint"
      | "symbol"
      | "object",
    operand: T,
  ): operand is T => typeof operand === type,
);
