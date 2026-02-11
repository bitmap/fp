/**
 * Returns a function that calls the original function with reversed argument order.
 *
 * `reverseArgs :: ((...a) -> b) -> ((...a) -> b)`
 */
export function reverseArgs<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  return (...args: Args): Return => {
    return fn(...(args.reverse() as Args));
  };
}
