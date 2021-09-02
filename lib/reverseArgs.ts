type Fn = (...arg: any[]) => any

export const reverseArgs = (fn: Fn) => (...args: any[]): Fn => fn(...args.reverse());
