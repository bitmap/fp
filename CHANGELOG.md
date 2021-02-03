# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.0]

Initial conversion to TypeScript

### Added

- isUndefined
- isNull
- isObject
- isEqual
- isTypeOf
- isSymbol
- isBigInt

### Changed

- renamed `indexOf` -> `position`
- renamed `indexOfLast` -> `positionLast`
- consolidated `findIndexOf` and `findIndexOfLast` into `position` and
  `positionLast` by allowing first arg to be predicate
- consolidated `pipe` and `compose` into `flow` utility
- Refactored `omit`

## [0.8.0]

### Added

- identity
- isString
- isNumber
- isBoolean
- isArray

### Changed

- renamed findIndex -> findIndexOf
- renamed findLastIndex -> findIndexOfLast
- removed all default exports
- moved ./lib/\_\_tests__ => ./test
- fixed commonjs support

## [0.7.0]

### Added

- join
- split

### Changed

- reverse handles strings

## [0.6.0]

### Added

- omit
- flat
- flatMap
- filterMap
- rejectMap

## [0.5.0]

### Added

- pluck (maps prop, no longer alias)
- pick

## [0.4.0]

### Added

- indexOfLast
- append
- prepend
- copy
- first
- last
- prop (pluck)
- reject
- drop
- dropRight
- dropFirst
- dropLast
- take
- takeRight
- sort

## [0.3.0]

### Added

- insert
- insertAll
- any
- all
- find
- findIndex
- findLast
- findLastIndex
- includes
- indexOf
- reverse
- reduceRight

### Changed

Refactored for performance:
- map
- filter
- pipe
- comose
- concat

### Removed
- splice
- curryPipe
- curryCompose

## [0.2.0]

### Added

- slice
- splice

## [0.1.0]

Initial commit

### Added

- reduce
- map
- filter
- concat
- pipe
- compose
- curryPipe
- curryCompose
