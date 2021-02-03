import { filter } from '../filter'
import { includes } from '../includes'
import { excludes } from '../excludes'

export function extract(keep: boolean) {
  return <T extends Record<string, unknown>, K extends Extract<keyof T, string>>(keys: K[], object: T): { [k: string]: any } => {

    function keysFilter([key]: K): boolean {
      const pick = includes(key)
      const omit = excludes(key)
      return keep ? pick(keys) : omit(keys)
    }

    const filtered = filter(keysFilter, Object.entries(object))

    return Object.fromEntries(filtered)
  }
}
