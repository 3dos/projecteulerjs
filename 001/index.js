// compose :: ((y -> z), (x -> y), ..., (a -> b)) -> a -> z
const compose = (...fs) => x => fs.reverse().reduce((y, f) => f(y), x)

// countArray :: Number -> [Number]
const countArray = x => Array.from({ length: x }).map((_, i) => i)

// isMultipleOf :: Number -> Number -> Boolean
const isMultipleOf = m => x => x % m === 0

// allMultiplesOfbelow :: Number -> Number -> [Number]
const allMultiplesOfBelow = m => x => countArray(x).filter(isMultipleOf(m))

// sum :: [Number] -> Number
const sum = xs => xs.reduce((x, y) => x + y)

// sumMultiplesOf3and5below :: Number -> Number
const sumMultiplesOf3and5below = limit =>
  compose(sum, allMultiplesOfBelow(3))(limit) +
  compose(sum, allMultiplesOfBelow(5))(limit)

module.exports = sumMultiplesOf3and5below
