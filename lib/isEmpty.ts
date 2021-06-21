import { isArray } from "./isArray";
import { isNull } from "./isNull";
import { isObject } from "./isObject";
import { isString } from "./isString";

/**
 * Checks if supplied value is it's types empty value and returns a boolean.
 *
 * `isEmpty :: a -> boolean`
 */
export function isEmpty(value: unknown): boolean {
  if (isNull(value)) {
    return true;
  }

  if (isArray(value) || isString(value)) {
    return !(value as []).length;
  }

  if (isObject(value)) {
    return !Object.getOwnPropertyNames(value).length;
  }

  return true;
}
