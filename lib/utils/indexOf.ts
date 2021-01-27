import { curry, Curried } from '../curry'
import { isFunction } from '../isFunction'
import { reverse } from '../reverse'
import { undefinedIfNegativeOne } from './undefinedIfNegativeOne'

type CurriedIndexOf = Curried<[predicate: any, list: any[]], number | undefined>

/**
 * Utility to scaffold position and positionLast. Returns a curried function
 * that accepts a predicate and a list, which returns the index of item in list
 * based on specifed direction
 *
 * `indexOf :: boolean -> a | (a -> boolean) -> [a] -> number | undefined`
 */
export const indexOf = (fromRight: boolean): CurriedIndexOf =>
  curry(
    <T>(predicate: T | ((value: T) => boolean), list: T[]): number | undefined => {
      let index = -1

      if (isFunction(predicate)) {
        if (fromRight) {
          index = reverse(list).findIndex(predicate as ((value: T) => boolean))
          index = index !== -1 ? (list.length - 1) - index : index
        } else {
          index = list.findIndex(predicate as ((value: T) => boolean))
        }
      } else {
        const searchFn = fromRight ? 'lastIndexOf' : 'indexOf'
        index = list[searchFn](predicate as T)
      }

      return undefinedIfNegativeOne(index)
    },
  )
