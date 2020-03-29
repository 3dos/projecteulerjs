// add :: Number -> Number -> Number
const add = x => y => x + y

// compose :: ((y -> z), (x -> y), ..., (a -> b)) -> a -> z
const compose = (...fs) => x => fs.reverse().reduce((y, f) => f(y), x)

// countArray :: Number -> [Number]
const countArray = x => Array.from({ length: x }).map((_, i) => i)

// filter :: (a -> Boolean) -> [a] -> [a]
const filter = f => xs => xs.filter(f)

// isEven :: Number -> Boolean
const isEven = x => x % 2 === 0

// isMultipleOf :: Number -> Number -> Boolean
const isMultipleOf = m => x => x % m === 0

// last :: [a] -> a
const last = xs => xs[xs.length - 1]

// map :: (a -> b) -> [a] -> [b]
const map = f => xs => xs.map(f)

// sum :: [Number] -> Number
const sum = xs => xs.reduce((x, y) => x + y)

module.exports =
  { add
  , compose
  , countArray
  , filter
  , isEven
  , isMultipleOf
  , last
  , map
  , sum
  }
