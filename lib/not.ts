export type Predicate = (...args: any[]) => boolean

export function not(predicate: Predicate) {
  return (...args: any[]): boolean => !predicate(...args);
}
