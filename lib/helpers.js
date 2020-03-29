// add :: Number -> Number -> Number
const add = x => y => x + y

// compose :: ((y -> z), (x -> y), ..., (a -> b)) -> a -> z
const compose = (...fs) => x => fs.reverse().reduce((y, f) => f(y), x)

// countArray :: Number -> [Number]
const countArray = x => [...Array(x).keys()]

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

// pipe :: ((a -> b), (b -> c), ..., (y -> z)) -> a -> z
const pipe = (...fs) => x => fs.reduce((y, f) => f(y), x)

// range :: Number -> Number -> [Number]
const range = s => e => countArray(e - s).map((_, i) => i + s)

// reverseString :: String -> String
const reverseString = s => s.split('').reverse().join('')

// sortBy :: ((Number, Number) -> Number) -> [Number] -> [Number]
const sortBy = f => xs => xs.sort(f)

// sum :: [Number] -> Number
const sum = xs => xs.reduce((x, y) => x + y)

// toString :: a -> String
const toString = x => x.toString()

// uniq :: [a] -> [a]
const uniq = xs => [...new Set(xs)]

module.exports =
  { add
  , compose
  , countArray
  , filter
  , isEven
  , isMultipleOf
  , last
  , map
  , pipe
  , range
  , reverseString
  , sortBy
  , sum
  , toString
  , uniq
  }
