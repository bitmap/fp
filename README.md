# ƒp

Functional programming utilities for JavaScript.

## Install

```sh
npm install @bitmap/fp
```


## Functions

### Arrays
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
- [includes](#includes)
- [excludes](#excludes)
- [position](#position)
- [positionLast](#positionLast)

### Objects

- [prop](#prop)
- [pluck](#pluck)
- [pick](#pick)
- [omit](#omit)

### Strings
- [split](#split)
- [join](#join)
- [reverse](#reverse)

### Utilities

- [compose](#compose)
- [pipe](#pipe)
- [curry](#curry)
- [identity](#identity)
- [isEqual](#isEqual)
- [isTypeOf](#isTypeOf)
  - [isBigInt](#isTypeOf)
  - [isBoolean](#isTypeOf)
  - [isFunction](#isTypeOf)
  - [isNumber](#isTypeOf)
  - [isObject](#isTypeOf)
  - [isString](#isTypeOf)
  - [isSymbol](#isTypeOf)
  - [isUndefined](#isTypeOf)
- [isArray](#isArray)
- [isNull](#isNull)


## reduce

Reduce values in a list according to a reducer function. `reduce` args are curried.

```js
reduce(reducer, initialValue, list)
```

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

```js
import { insert } from '@bitmap/fp'

const list = [1, 3]

insert(1, 2, list) // -> [1, 2, 3]
```


## insertAll

Insert items into a list. Unlike `Array.prototype.splice`, doesn't mutate target. `insertAll` args are curried.

```js
insertAll(start, items, list)
```

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

```js
import { findLast } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findLastGreaterThanTen = findLast(greaterThanTen)

findLastGreaterThanTen([3, 5, 7, 9]) // -> undefined
findLastGreaterThanTen([5, 20, 100]) // -> 100
```


## includes

Returns true if item is in the list. `includes` args are curried.

```js
includes(value, list)
```

__Example__

```js
import { includes } from '@bitmap/fp'

const hasApple = includes('apple')

hasApple(['orange', 'banana', 'pear']) // -> false
hasApple(['kiwi', 'apple', 'coconut']) // -> true
```


## excludes

Returns true if item is not in the list. `excludes` args are curried.

```js
excludes(value, list)
```

__Example__

```js
import { excludes } from '@bitmap/fp'

const hasApple = excludes('apple')

hasApple(['orange', 'banana', 'pear']) // -> true
hasApple(['kiwi', 'apple', 'coconut']) // -> false
```


## position

Return index of first found item in list. If arg is a predicate function,
returns index of the first item in a list that meets the condition. If no item
meets the criteria, it returns -1. `position` args are curried.

```js
position(value, list)
position(predicate, list)
```

__Example__

```js
import { position } from '@bitmap/fp'

const firstAppleIndex = position('apple')

firstAppleIndex(['orange', 'banana', 'pear', 'lemon']) // -> -1
firstAppleIndex(['kiwi', 'apple', 'coconut', 'apple']) // -> 1
```


## positionLast

Return index of last found item in list. If arg is a predicate function, returns
index of the last item in a list that meets the condition. If no item meets the
criteria, it returns -1. `positionLast` args are curried.

```js
positionLast(value, list)
positionLast(predicate, list)
```

__Example__

```js
import { positionLast } from '@bitmap/fp'

const lastAppleIndex = positionLast('apple')

lastAppleIndex(['orange', 'banana', 'pear', 'lemon']) // -> -1
lastAppleIndex(['kiwi', 'apple', 'coconut', 'apple']) // -> 3
```


## prop

Returns the value of `key` in object. `prop` args are curried.

```js
prop(key, object)
```

__Example__

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

__Example__

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

__Example__

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

__Example__

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

__Example__

```js
import { split } from '@bitmap/fp'

split(':', 'name:Cabe') // -> ['name', 'Cabe']
```


## join

Joins a list into a string, seperating each item by specified delimiter. `join` args are curried.

```js
join(delimiter, list)
```

__Example__

```js
import { join } from '@bitmap/fp'

join('|', [1, 2, 3, 4]) // -> '1|2|3|4'
```


## compose

Compose functions from right to left.

```js
compose(...functions)(value)
```

__Example__

```js
import { compose } from '@bitmap/fp'

const addOne = (n) => n + 1
const double = (n) => n * 2

const addOneThenDouble = compose(double, addOne)

addOneThenDouble(20) // 42
```


## pipe

Compose functions from left to right.

```js
pipe(...functions)(value)
```

__Example__

```js
import { pipe } from '@bitmap/fp'

const addOne = (n) => n + 1
const double = (n) => n * 2

const doubleThenAddOne = pipe(double, addOne)

doubleThenAddOne(20) // 41
```


## curry

Curry a function to allow it to be called partially.

```js
curry(function)
```

__Example__

```js
import { curry } from '@bitmap/fp'

const sum = curry((a, b, c) => a + b + c)

sum(1)(2)(3) // -> 6
```


## identity

Pass input as output.

```js
idendity(value)
```

__Example__

```js
import { idenity } from '@bitmap/fp'

const id = idenity('hello, world') // -> 'hello, world'
```


## isEqual

Compares two items and returns true if equal. `isEqual` args are curried.

```js
isEqual(a, b)
```

__Example__

```js
import { isEqual } from '@bitmap/fp'

isEqual(2, 2) // -> true
isEqual(2, 3) // -> false
```


## isTypeOf

Evaluate the returned string from an operand.

> Note: Additional helper functions `isUndefined`, `isFunction`, `isBoolean`, `isString`, `isNumber`, `isBigInt`, `isSymbol`, and `isObject` are also exported for convenience.

```js
isTypeOf('undefined' | 'function' | 'boolean' | 'string' | 'number' | 'bigint' | 'symbol' | 'object', value)
```

__Example__

```js
import { isTypeOf } from '@bitmap/fp'

isTypeOf('number', 2) // -> true
isTypeOf('object', []) // -> true

```


## isArray

Returns true if value is of the `Array` class.

```js
isArray(value)
```

__Example__

```js
import { isArray } from '@bitmap/fp'

isArray([1, 2, 3]) // -> true
isArray({ length: 3, 0: 1, 1: 2, 2: 3 }) // -> false

```


## isNull

Returns true if value is `null`

```js
isNull(value)
```

__Example__

```js
import { isNull } from '@bitmap/fp'

let value = null
isNull(value) // -> true

value = 'hello, world'
isNull(value) // -> false

```
