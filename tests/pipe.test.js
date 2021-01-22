import { pipe } from '../lib'

const g = n => n + 1
const f = n => n * 2
const value = 20

describe('pipe', () => {
  const h = pipe(f, g) // g(f(x))

  test('pipe', () => {
    expect(h(value)).toStrictEqual(41) // (20 * 2) + 1
  })

  test('mappable pipe', () => {

    const mappable = [value]
    const [a] = mappable.map(g).map(f)
    const [b] = mappable.map(x => f(g(x)))
    const c = pipe(f, g)(...mappable)
    expect(a && b && c === 41).toStrictEqual(true) // (20 * 2) + 1
  })
})
