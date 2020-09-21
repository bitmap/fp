# ƒp

Functional programming utilities for JavaScript.

## Install

```sh
npm install @bitmap/fp
```

## Utilities

- [reduce](#reduce)
- [map](#map)
- [filter](#filter)
- [concat](#concat)
- [slice](#slice)
- [splice](#splice)
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
filter(expression, list)
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

const a = [1, 2, 3, 4, 5, 6]

slice(2, 5, a) // -> [3, 4, 5]
```

## splice

Splice items into a list. Unlike `Array.prototype.splice`, return a new list.

```js
splice(list, start, deleteCount, ...items)
```

### Example

```js
import { splice } from '@bitmap/fp'

const a = [1, 4]

splice(a, 1, 1, 2, 3) // -> [1, 2, 3]
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
