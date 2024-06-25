export function not<T>(predicate: (...args: T[]) => boolean) {
  return (...args: T[]): boolean => !predicate(...args);
}
