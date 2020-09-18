import curryCompose from '../curryCompose'
import curryPipe from '../curryPipe'
import map from '../map'
import filter from '../filter'

const name = 'john smith'
const pickFirstWord = str => str.split(' ')[0]
const capitalize = str => str[0].toUpperCase().concat(str.substring(1))
const exclaim = str => `${str}!`
const greet = str => `Hello, ${str}`


describe('curryCompose', () => {
  const greetPerson = curryCompose(greet, exclaim)
  const fixGreeting = greetPerson(capitalize, pickFirstWord)

  it('greets user', () => {
    expect.assertions(1)
    expect(greetPerson(name)).toBe('Hello, john smith!')
  })
  it('fixes name', () => {
    expect.assertions(1)
    expect(fixGreeting(name)).toBe('Hello, John!')
  })
})

describe('curryPipe', () => {

  const getFirstName = curryPipe(pickFirstWord, capitalize)
  const greetPerson = getFirstName(greet, exclaim)

  it('greets user', () => {
    expect.assertions(1)
    expect(getFirstName(name)).toBe('John')
  })
  it('fixes name', () => {
    expect.assertions(1)
    expect(greetPerson(name)).toBe('Hello, John!')
  })

  const mockData = [
    {
      name: 'Larry',
      age: 30,
    },
    {
      name: 'Geoff',
      age: 50,
    },
    {
      name: 'Moe',
      age: 40,
    },
    {
      name: 'Curly',
      age: 20,
    },
  ]
  const sortBy = key => data => data.sort((a, b) => b[key] - a[key])
  const sortByAge = sortBy('age')
  const filterUnder50 = filter(user => user.age < 50)
  const getName = map(user => user.name)
  const toLowerCase = string => string.toLowerCase()

  const sortUsers = curryPipe(sortByAge)
  const filterUsers = sortUsers(filterUnder50)
  const getUserNames = filterUsers(getName)(map(toLowerCase))(mockData)

  it('gets names', () => {
    expect.assertions(1)
    expect(getUserNames).toStrictEqual(['moe', 'larry', 'curly'])
  })

  it('has no side-effects', () => {
    expect.assertions(5)

    const updateX = n => coords => Object.assign({}, coords, { x: coords.x + n })
    const updateY = n => coords => Object.assign({}, coords, { y: coords.y + n })

    const data = { x: 12, y: 0 }
    const move = curryPipe

    const newPosition = move(updateX(13), updateX(25), updateY(-4))(data)

    expect(newPosition.x).toBe(50)
    expect(newPosition.y).toBe(-4)
    expect(move(updateY(21))(newPosition).y).toBe(17) // -4 + 21 = 17

    // No side effects
    expect(data.x).toBe(12)
    expect(data.y).toBe(0)
  })

})


describe('createCurryFlow', () => {
  const add = a => b => a + b
  const sub = a => b => b - a
  const mul = a => b => a * b
  const div = a => b => b / a

  const divideByTwo = div(2)
  const double = mul(2)
  const subtractFive = sub(5)
  const addTenadd = add(10)

  const composition = [
    divideByTwo,
    double,
    subtractFive,
    addTenadd,
  ]

  const composeMath = curryCompose(...composition)
  const pipeMath = curryPipe(...composition.reverse())

  it('has equality', () => {
    expect.assertions(1)
    expect(composeMath(10) === pipeMath(10)).toStrictEqual(true)
  })
})
