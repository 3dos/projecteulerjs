const { add
      , compose
      , countArray
      , filter
      , isMultipleOf
      , last
      } = require('../lib/helpers')

// isFactorOf :: Number -> Number -> Boolean
const isFactorOf = x => f => isMultipleOf(f)(x)

// allFactors :: Number -> [Number]
const allFactors = x => countArray(x).filter(isFactorOf(x))

// isPrime :: Number -> Boolean
const isPrime = x =>
  countArray(x)
    .map(add(1))
    .filter(isFactorOf(x))
    .length === 2

// largestPrimeFactorOf :: Number -> Number
const largestPrimeFactorOf = compose(
  last,
  filter(isPrime),
  allFactors
)

module.exports = largestPrimeFactorOf