import { join } from '../lib'

describe('join', () => {
  test('returns joined string', () => {
    expect(join('|', [1, 2, 3, 4])).toBe('1|2|3|4')
    expect(join(' and ', ['hall', 'oates'])).toBe('hall and oates')
  })
})
