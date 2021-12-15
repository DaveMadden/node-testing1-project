const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const result = utils.trimProperties(input)
    expect(result).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = input;
    const expected = input;
    const result = utils.trimProperties(input)
    // console.log(input)
    // console.log(actual)
    // console.log(expected)
    // console.log(result)
    expect(result).not.toBe(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const result = utils.trimPropertiesMutation(input)
    expect(result).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = input
    const actual = utils.trimPropertiesMutation(input)
    // console.log(input)
    // console.log(actual)
    // console.log(expected)
    // console.log(result)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [
      { integer: 3 },
      { integer: 12 },
      { integer: -5 },
      { integer: 0 },
      { integer: 33 },
      { integer: 666 }
    ]
    const result = utils.findLargestInteger(input)
    expect(result).toEqual(666)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const initialCount = counter.countDown()
    expect(initialCount).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondCount = counter.countDown()
    expect(secondCount).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const zero = counter.countDown()
    const notNegative = counter.countDown()

    expect(zero).toBe(0)
    expect(notNegative).toBe(0)

  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const first = seasons.next()
    expect(first).toBe("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const second = seasons.next()
    expect(second).toBe("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const third = seasons.next()
    expect(third).toBe("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const fourth = seasons.next()
    expect(fourth).toBe("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const fifth = seasons.next()
    expect(fifth).toBe("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let result
    for (let i=0; i < 40; i++){
      result = seasons.next()
    }
    expect(result).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(33)).toBe(33)
    expect(focus.drive(11)).toBe(44)

  })
  test('[16] driving the car uses gas', () => {
    const initTank = focus.tank
    focus.drive(60)
    const newTank = focus.tank

    expect(newTank).toBe(initTank - (60 / focus.mpg))

  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    const emptyOdom = focus.odometer
    focus.drive(10) //shouldn't work
    const emptyPlus = focus.odometer
    expect(emptyOdom).toBe(emptyPlus)
    focus.refuel(20)
    const fueledUp = focus.drive(10)
    expect(fueledUp).toBe(emptyPlus + 10)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const fullTank = focus.tank
    focus.refuel(10)
    const checkTank = focus.tank
    expect(fullTank).toBe(checkTank)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    let isEvenEven = await utils.isEvenNumberAsync(6)
    expect(isEvenEven).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    let isOddEven = await utils.isEvenNumberAsync(15)
    expect(isOddEven).toBe(false)
  })
})