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
  if (isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (!isNull(value) && isObject(value)) {
    return Object.getOwnPropertyNames(value).length === 0;
  }

  if (isString(value)) {
    return value === "";
  }

  return false;
}
