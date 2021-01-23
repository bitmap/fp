import { compose } from '../lib'

describe('compose', () => {
  test('composes unary number arg', () => {
    const g = (n: number): number => n + 1
    const f = (n: number): number => n * 2
    const h = compose(f, g)

    expect(h(20)).toStrictEqual(42)
  })

  test('composes unary string arg', () => {
    const g = (n: string): string => `${n}1`
    const f = (n: string): string => `${n}2`
    const h = compose(f, g)

    expect(h('0')).toStrictEqual('012')
  })
})
