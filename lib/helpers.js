// compose :: ((y -> z), (x -> y), ..., (a -> b)) -> a -> z
const compose = (...fs) => x => fs.reverse().reduce((y, f) => f(y), x)

// filter :: (a -> Boolean) -> [a] -> [a]
const filter = f => xs => xs.filter(f)

// isEven :: Number -> Boolean
const isEven = x => x % 2 === 0

// map :: (a -> b) -> [a] -> [b]
const map = f => xs => xs.map(f)

// sum :: [Number] -> Number
const sum = xs => xs.reduce((x, y) => x + y)

module.exports =
  { compose
  , filter
  , isEven
  , map
  , sum
  }
