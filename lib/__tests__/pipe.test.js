import { pipe } from '..'

const g = n => n + 1
const f = n => n * 2
const value = 20

describe('pipe', () => {
  const h = pipe(f, g) // g(f(x))

  it('pipe', () => {
    expect.assertions(1)
    expect(h(value)).toStrictEqual(41) // (20 * 2) + 1
  })

  it('mappable pipe', () => {
    expect.assertions(1)

    const mappable = [value]
    const [a] = mappable.map(g).map(f)
    const [b] = mappable.map(x => f(g(x)))
    const c = pipe(f, g)(...mappable)
    expect(a && b && c === 41).toStrictEqual(true) // (20 * 2) + 1
  })
})
