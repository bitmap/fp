import { compose } from '..'

const g = n => n + 1
const f = n => n * 2
const value = 20

describe('compose', () => {
  const h = compose(f, g) // f(g(x))

  it('compose', () => {
    expect.assertions(1)
    expect(h(value)).toStrictEqual(42) // (20 + 1) * 2
  })

  it('mappable compose', () => {
    expect.assertions(1)

    const mappable = [value]
    const [a] = mappable.map(g).map(f)
    const [b] = mappable.map(x => f(g(x)))
    const c = compose(f, g)(...mappable)
    expect(a && b && c === 42).toStrictEqual(true) // (20 + 1) * 2
  })
})
