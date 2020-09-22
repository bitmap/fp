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
- [filter](#filter)
- [concat](#concat)
- [slice](#slice)
- [splice](#splice)
- [reverse](#reverse)
- [any](#any)
- [all](#all)
- [find](#find)
- [findIndex](#findIndex)
- [includes](#includes)
- [indexOf](#indexOf)
- [pipe](#pipe)
- [compose](#compose)
- [curryPipe](#curryPipe)
- [curryCompose](#curryCompose)

## reduce

Reduce values in a list according to a reducer function. `reduce` args are curried.

```js
reduce(reducer, initialValue, list)
```

### Example

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

### Example

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

### Example

```js
import { map } from '@bitmap/fp'

const double = (n) => n * 2
const doubleAll = map(double)

doubleAll([1, 2, 3]) // -> [2, 4, 6]
```

## filter

Filter items from a list, and return a new list. `filter` args are curried.

```js
filter(conditionFunction, list)
```

### Example

```js
import { filter } from '@bitmap/fp'

const isOdd = (n) => n % 2 !== 0
const filterOdds = filter(isOdd)

const odds = filterOdds([1, 2, 3, 4]) // -> [1, 3]
```

## concat

Concat `n` lists into one list.

```js
concat(...lists)
```

### Example

```js
import { concat } from '@bitmap/fp'

const a = [1, 2, 3]
const b = [4, 5, 6]

concat(a, b) // -> [1, 2, 3, 4, 5, 6]
```

## slice

Return a sliced list. `slice` args are curried.

```js
slice(start, end, list)
```

### Example

```js
import { slice } from '@bitmap/fp'

const list = [1, 2, 3, 4, 5, 6]

slice(2, 5, list) // -> [3, 4, 5]
```

## splice

Splice items into a list. Unlike `Array.prototype.splice`, doesn't mutate target.

```js
splice(list, start, deleteCount, ...items)
```

### Example

```js
import { splice } from '@bitmap/fp'

const list = [1, 4]

splice(list, 1, 1, 2, 3) // -> [1, 2, 3]
```

## reverse

Reverse items in a list. Unlike `Array.prototype.reverse`, doesn't mutate target.

```js
reverse(list)
```

### Example

```js
import { reverse } from '@bitmap/fp'

const list = [1, 2, 3, 4]

reverse(list) // -> [4, 3, 2, 1]
```

## any

Returns true if any item in list meet the condition. `any` args are curried.

```js
any(conditionFunction, list)
```

### Example

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

### Example

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

### Example

```js
import { find } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findGreaterThanTen = find(greaterThanTen)

findGreaterThanTen([3, 5, 7, 9]) // -> undefined
findGreaterThanTen([5, 20, 100]) // -> 20
```

## findIndex

Returns index of first item from list that meets predicate. `findIndex` args are curried.

```js
findIndex(conditionFunction, list)
```

### Example

```js
import { findIndex } from '@bitmap/fp'

const greaterThanTen = x => x > 10
const findIndexGreaterThanTen = findIndex(greaterThanTen)

findIndexGreaterThanTen([3, 5, 7, 9]) // -> -1
findIndexGreaterThanTen([5, 20, 100]) // -> 1
```

## includes

Returns true if item is in the list. `includes` args are curried.

```js
includes(value, list)
```

### Example

```js
import { includes } from '@bitmap/fp'

const hasApple = includes('apple')

hasApple(['orange', 'banana', 'pear']) // -> false
hasApple(['kiwi', 'apple', 'coconut']) // -> true
```

## indexOf

Returns index if item in the list. `indexOf` args are curried.

```js
indexOf(value, list)
```

### Example

```js
import { indexOf } from '@bitmap/fp'

const hasApple = indexOf('apple')

hasApple(['orange', 'banana', 'pear']) // -> -1
hasApple(['kiwi', 'apple', 'coconut']) // -> 1
```

## pipe

Compose functions from left to right.

```js
pipe(...functions)(value)
```

### Example

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

### Example

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

### Example

```js
import { curry } from '@bitmap/fp'

const sum = curry((a, b, c) => a + b + c)

sum(1)(2)(3) // -> 6
```

## curryPipe

Compose functions until last argument is not a function, from left to right.

```js
curryPipe(...functions)(...)(value)
```

### Example

```js
import { curryPipe } from '@bitmap/fp'

const getFirstName = curryPipe(pickFirstWord, capitalize)
const greetPerson = getFirstName(greet, exclaim)

getFirstName('john smith') // -> John
greetPerson('john smith') // -> Hello, John!
```

## curryCompose

Compose functions until last argument is not a function, from right to left.

```js
curryPipe(...functions)(...)(value)
```

### Example

```js
import { curryCompose } from '@bitmap/fp'

const greetPerson = curryCompose(greet, exclaim)
const fixGreeting = greetPerson(capitalize, pickFirstWord)

greetPerson('john smith') // -> Hello, john smith!
fixGreeting('john smith') // -> Hello, John!
```
