import { pipe } from '../lib'

describe('pipe', () => {
  test('pipes unary number arg', () => {
    const g = (n: number): number => n + 1
    const f = (n: number): number => n * 2
    const h = pipe(f, g)

    expect(h(20)).toEqual(41)
  })

  test('pipes unary string arg', () => {
    const g = (n: string): string => `${n}1`
    const f = (n: string): string => `${n}2`
    const h = pipe(f, g)

    expect(h('0')).toEqual('021')
  })
})
