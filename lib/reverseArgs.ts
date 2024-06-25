type Fn = (...arg: any[]) => any;

export const reverseArgs =
  (fn: Fn) =>
  (...args: any[]): Fn =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    fn(...args.reverse());
