# ƒp

Functional programming utilities for JavaScript.

## Install

```sh
npm install @bitmap/fp
```

## Utilities

- [reduce](#reduce)
- [reduceRight](#reduceRight)
- [map](#map)
- [flat](#flat)
- [flatMap](#flatMap)
- [filter](#filter)
- [filterMap](#filterMap)
- [reject](#reject)
- [rejectMap](#rejectMap)
- [concat](#concat)
- [copy](#copy)
- [slice](#slice)
- [append](#append)
- [prepend](#prepend)
- [insert](#insert)
- [insertAll](#insertAll)
- [reverse](#reverse)
- [sort](#sort)
- [first](#first)
- [last](#last)
- [drop](#drop)
- [dropRight](#dropRight)
- [dropFirst](#dropFirst)
- [dropLast](#dropLast)
- [take](#take)
- [takeRight](#takeRight)
- [any](#any)
- [all](#all)
- [find](#find)
- [findLast](#findLast)
- [findIndexOf](#findIndexOf)
- [findIndexOfLast](#findIndexOfLast)
- [includes](#includes)
- [indexOf](#indexOf)
- [indexOfLast](#indexOfLast)
- [pipe](#pipe)
- [compose](#compose)
- [curry](#curry)
- [prop](#prop)
- [pluck](#pluck)
- [pick](#pick)
- [omit](#omit)
- [split](#split)
- [join](#join)

## reduce

Reduce values in a list according to a reducer function. `reduce` args are curried.

```js
reduce(reducer, initialValue, list)
```

#### Example

```js
import { reduce } from '@bitmap/fp'

const sum = (a, b) => a + b
const items = [1, 2, 3, 4]

reduce(sum, 0, items) // -> 10
```

## reduceRight

Reduce values in a list according to a reducer function in reverse order. `reduceRight` args are curried.

```js
reduceRight(reducer, initialValue, list)
```

#### Example

```js
import { reduceRight } from '@bitmap/fp'

const sum = (a, b) => a + b
const items = [1, 2, 3, 4]

reduceRight(sum, 0, items) // -> 10
```

## map

Apply function to each items in a list, and return a new list. `map` args are curried.

```js
map(mapFunction, list)
```

#### Example

```js
import { map } from '@bitmap/fp'

const double = (n) => n * 2
const doubleAll = map(double)

doubleAll([1, 2, 3]) // -> [2, 4, 6]
```

## flat

Return a flattened list.

```js
flat(list, depth)
```

#### Example

```js
import { flat } from '@bitmap/fp'

flat([0, [1, 2], [3, 4], [5]]) // -> [0, 1, 2, 3, 4, 5]
flat([0, [1, 2, [3, 4, [5]]]], 3) // -> [0, 1, 2, 3, 4, 5]
```

## flatMap

Apply function to each items in a list, and return a flattened list. `flatMap` args are curried.

```js
flatMap(flatMapFunction, list)
```

#### Example

```js
import { flatMap } from '@bitmap/fp'

const users = ['@cabe', '@bitmap']
const indexUsers = flatMap((user, index) => [index, user])

indexUsers(users) // -> [0, '@cabe', 1, '@bitmap']
```

## filter

Filter items from a list, and return a new list. `filter` args are curried.

```js
filter(conditionFunction, list)
```

#### Example

```js
import { filter } from '@bitmap/fp'

const isOdd = (n) => n % 2 !== 0
const filterOdds = filter(isOdd)

filterOdds([1, 2, 3, 4]) // -> [1, 3]
```

## filterMap

Apply filter and map to a list, and return a new list. `filterMap` args are curried.

```js
filterMap(conditionFunction, mapFunction, list)
```

#### Example

```js
import { filterMap } from '@bitmap/fp'

const isOdd = (n) => n % 2 !== 0
const double = (n) => n * 2
const doubleOdds = filterMap(isOdd, double)

doubleOdds([1, 2, 3, 4]) // -> [3, 6]
```

## reject

Reject items from a list, and return a new list. The opposite of [filter](#filter). `reject` args are curried.

```js
reject(conditionFunction, list)
```

#### Example

```js
import { reject } from '@bitmap/fp'

const isOdd = (n) => n % 2 !== 0
const rejectOdds = reject(isOdd)

rejectOdds([1, 2, 3, 4]) // -> [2, 4]
```

## rejectMap

Apply reject and map to a list, and return a new list. `rejectMap` args are curried.

```js
rejectMap(conditionFunction, mapFunction, list)
```

#### Example

```js
import { rejectMap } from '@bitmap/fp'

const isOdd = (n) => n % 2 !== 0
const double = (n) => n * 2
const doubleEvens = rejectMap(isOdd, double)

doubleEvens([1, 2, 3, 4]) // -> [4, 8]
```

## concat

Concat `n` lists into one list.

```js
concat(...lists)
```

#### Example

```js
import { concat } from '@bitmap/fp'

const a = [1, 2, 3]
const b = [4, 5, 6]

concat(a, b) // -> [1, 2, 3, 4, 5, 6]
```

## copy

Returns a new copy of the list

```js
copy(list)
```

#### Example

```js
import { copy } from '@bitmap/fp'

const list = [1, 2, 3]

copy(list) // -> [1, 2, 3]
```

## slice

Return a sliced list. `slice` args are curried.

```js
slice(start, end, list)
```

#### Example

```js
import { slice } from '@bitmap/fp'

const list = [1, 2, 3, 4, 5, 6]

slice(2, 5, list) // -> [3, 4, 5]
```

## append

Appends item to the end of a list. Unlike `Array.prototype.push`, doesn't mutate target. `append` args are curried.

```js
append(item, list)
```

#### Example

```js
import { append } from '@bitmap/fp'

const list = [1, 2]

append(3, list) // -> [1, 2, 3]
```

## prepend

Prepends item to the beginning of a list. Unlike `Array.prototype.unshift`, doesn't mutate target. `prepend` args are curried.

```js
prepend(item, list)
```

#### Example

```js
import { prepend } from '@bitmap/fp'

const list = [1, 2]

prepend(0, list) // -> [0, 1, 2]
```

## insert

Insert item into a list. Unlike `Array.prototype.splice`, doesn't mutate target. `insert` args are curried.

```js
insert(start, item, list)
```

#### Example

```js
import { insert } from '@bitmap/fp'

const list = [1, 3]

insert(1, 2, list) // -> [1, 2, 3]
```

## insertAll

Insert itemm into a list. Unlike `Array.prototype.splice`, doesn't mutate target. `insertAll` args are curried.

```js
insertAll(start, items, list)
```

#### Example

```js
import { insertAll } from '@bitmap/fp'

const list = [1, 4]

insertAll(1, [2, 3], list) // -> [1, 2, 3, 4]
```

## reverse

Reverse a string or items in a list. Unlike `Array.prototype.reverse`, doesn't mutate target.

```js
reverse(list)
```

#### Example

```js
import { reverse } from '@bitmap/fp'

const list = [1, 2, 3, 4]

reverse(list) // -> [4, 3, 2, 1]

const string = 'functional'

reverse(string) // -> 'lanoitcnuf'
```

## sort

Sorts items in a list according to comparator function. Unlike `Array.prototype.sort`, doesn't mutate target.

```js
sort(compareFunction, list)
```

#### Example

```js
import { sort } from '@bitmap/fp'

const sortAscending = (a, b) => a - b
const list = [40, 21, 32, 17]

sort(sortAscending, list) // -> [17, 21, 32, 40]
```

## first

Returns first item in a list.

```js
first(list)
```

#### Example

```js
import { first } from '@bitmap/fp'

const list = [1, 2, 3, 4]

first(list) // -> 1
```

## last

Returns last item in a list.

```js
last(list)
```

#### Example

```js
import { last } from '@bitmap/fp'

const list = [1, 2, 3, 4]

last(list) // -> 4
```

## drop

Drops `n` items from left. `drop` args are curried.

```js
drop(n, list)
```

#### Example

```js
import { drop } from '@bitmap/fp'

const list = [1, 2, 3, 4]

drop(2, list) // -> [3, 4]
```

## dropRight

Drops `n` items from right. `dropRight` args are curried.

```js
dropRight(n, list)
```

#### Example

```js
import { dropRight } from '@bitmap/fp'

const list = [1, 2, 3, 4]

dropRight(2, list) // -> [1, 2]
```

## dropFirst

Drops first item from list.

```js
dropFirst(list)
```

#### Example

```js
import { dropFirst } from '@bitmap/fp'

const list = [1, 2, 3, 4]

dropFirst(2, list) // -> [2, 3, 4]
```

## dropLast

Drops last item from list.

```js
dropLast(list)
```

#### Example

```js
import { dropLast } from '@bitmap/fp'

const list = [1, 2, 3, 4]

dropLast(2, list) // -> [1, 2, 3]
```

## take

Takes `n` items from left. `take` args are curried.

```js
take(n, list)
```

#### Example

```js
import { take } from '@bitmap/fp'

const list = [1, 2, 3, 4]

take(2, list) // -> [1, 2]
```

## takeRight

Takes `n` items from right. `takeRight` args are curried.

```js
takeRight(n, list)
```

#### Example

```js
import { takeRight } from '@bitmap/fp'

const list = [1, 2, 3, 4]

takeRight(2, list) // -> [3, 4]
```

## any

Returns true if any item in list meet the condition. `any` args are curried.

```js
any(conditionFunction, list)
```

#### Example

```js
import { any } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const anyGreaterThanTen = any(greaterThanTen)

anyGreaterThanTen([3, 5, 7, 9]) // -> false
anyGreaterThanTen([5, 20, 100]) // -> true
```

## all

Returns true if all item in list meet the condition. `all` args are curried.

```js
all(conditionFunction, list)
```

#### Example

```js
import { all } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const allGreaterThanTen = all(greaterThanTen)

allGreaterThanTen([3, 5, 7, 9]) // -> false
allGreaterThanTen([5, 20, 100]) // -> false
allGreaterThanTen([50, 15, 99]) // -> true
```

## find

Returns first item from list that meets predicate. `find` args are curried.

```js
find(conditionFunction, list)
```

#### Example

```js
import { find } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findGreaterThanTen = find(greaterThanTen)

findGreaterThanTen([3, 5, 7, 9]) // -> undefined
findGreaterThanTen([5, 20, 100]) // -> 20
```

## findLast

Returns last item from list that meets predicate. `findLast` args are curried.

```js
findLast(conditionFunction, list)
```

#### Example

```js
import { findLast } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findLastGreaterThanTen = findLast(greaterThanTen)

findLastGreaterThanTen([3, 5, 7, 9]) // -> undefined
findLastGreaterThanTen([5, 20, 100]) // -> 100
```

## findIndexOf

Returns index of first item from list that meets predicate. `findIndexOf` args are curried.

```js
findIndexOf(conditionFunction, list)
```

#### Example

```js
import { findIndexOf } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findIndexOfGreaterThanTen = findIndexOf(greaterThanTen)

findIndexOfGreaterThanTen([3, 5, 7, 9]) // -> -1
findIndexOfGreaterThanTen([5, 20, 100]) // -> 1
```

## findIndexOfLast

Returns index of last item from list that meets predicate. `findIndexOfLast` args are curried.

```js
findIndexOfLast(conditionFunction, list)
```

#### Example

```js
import { findIndexOfLast } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findIndexOfLastGreaterThanTen = findIndexOfLast(greaterThanTen)

findIndexOfLastGreaterThanTen([3, 5, 7, 9]) // -> -1
findIndexOfLastGreaterThanTen([5, 20, 100]) // -> 2
```

## includes

Returns true if item is in the list. `includes` args are curried.

```js
includes(value, list)
```

#### Example

```js
import { includes } from '@bitmap/fp'

const hasApple = includes('apple')

hasApple(['orange', 'banana', 'pear']) // -> false
hasApple(['kiwi', 'apple', 'coconut']) // -> true
```

## indexOf

Returns first index of item in the list. `indexOf` args are curried.

```js
indexOf(value, list)
```

#### Example

```js
import { indexOf } from '@bitmap/fp'

const firstAppleIndex = indexOf('apple')

firstAppleIndex(['orange', 'banana', 'pear', 'lemon']) // -> -1
firstAppleIndex(['kiwi', 'apple', 'coconut', 'apple']) // -> 1
```

## indexOfLast

Returns last index of item in the list. `indexOfLast` args are curried.

```js
indexOfLast(value, list)
```

#### Example

```js
import { indexOfLast } from '@bitmap/fp'

const lastAppleIndex = indexOfLast('apple')

lastAppleIndex(['orange', 'banana', 'pear', 'lemon']) // -> -1
lastAppleIndex(['kiwi', 'apple', 'coconut', 'apple']) // -> 3
```

## pipe

Compose functions from left to right.

```js
pipe(...functions)(value)
```

#### Example

```js
import { pipe } from '@bitmap/fp'

const addOne = (n) => n + 1
const double = (n) => n * 2

const doubleThenAddOne = pipe(double, addOne)

doubleThenAddOne(20) // 41
```

## compose

Compose functions from right to left.

```js
compose(...functions)(value)
```

#### Example

```js
import { compose } from '@bitmap/fp'

const addOne = (n) => n + 1
const double = (n) => n * 2

const addOneThenDouble = compose(double, addOne)

addOneThenDouble(20) // 42
```

## curry

Curry a function to allow it to be called partially.

```js
curry(function)
```

#### Example

```js
import { curry } from '@bitmap/fp'

const sum = curry((a, b, c) => a + b + c)

sum(1)(2)(3) // -> 6
```

## prop

Returns the value of `key` in object. `prop` args are curried.

```js
prop(key, object)
```

#### Example

```js
import { prop } from '@bitmap/fp'

const data = {
  name: 'Cabe',
  username: 'bitmap',
  title: 'Developer',
}

prop('username', data) // -> 'bitmap'
```

## pluck

Returns [map](#map) of `key` values from a list of objects. `pluck` args are curried.

```js
pluck(key, list)
```

#### Example

```js
import { pluck } from '@bitmap/fp'

const data = [
  {
    city: 'New York',
    state: 'NY',
  },
  {
    city: 'San Francisco',
    state: 'CA',
  },
   {
    city: 'Portland',
    state: 'OR',
  }
]

pluck('state', data) // -> ['NY', 'CA', 'OR']
```

## pick

Returns copy of object with supplied `keys` and all other properties omitted. `pick` args are curried.

```js
pick(keys, object)
```

#### Example

```js
import { pick } from '@bitmap/fp'

const data = {
  name: 'Cabe',
  age: 32,
  position: 'Developer',
  state: 'NY',
  city: 'New York',
}

pick(['name', 'position'], data) // -> { name: 'Cabe', position: 'Developer' }
```

## omit

Returns copy of object with supplied `keys` omitted. opposite of [pick](#pick). `omit` args are curried.

```js
omit(keys, object)
```

#### Example

```js
import { omit } from '@bitmap/fp'

const data = {
  name: 'Cabe',
  age: 32,
  position: 'Developer',
  state: 'NY',
  city: 'New York',
}

omit(['age', 'state', 'city'], data) // -> { name: 'Cabe', position: 'Developer' }
```


## split

Splits a string by delimiter into a list. `split` args are curried.

```js
split(delimiter, string)
```

#### Example

```js
import { split } from '@bitmap/fp'

split(':', 'name:Cabe') // -> ['name', 'Cabe']
```

## join

Joins a list into a string, seperating each item by specified delimiter. `join` args are curried.

```js
join(delimiter, list)
```

#### Example

```js
import { join } from '@bitmap/fp'

join('|', [1, 2, 3, 4]) // -> '1|2|3|4'
```
