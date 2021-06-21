import { isTypeOf } from "./isTypeOf";

/**
 * Returns true if value is a function
 *
 * `isFunction :: a -> boolean`
 */
export const isFunction = isTypeOf("function");
