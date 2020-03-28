const { compose, sum } = require('../lib/helpers')

// countArray :: Number -> [Number]
const countArray = x => Array.from({ length: x }).map((_, i) => i)

// isMultipleOf :: Number -> Number -> Boolean
const isMultipleOf = m => x => x % m === 0

// allMultiplesOfbelow :: Number -> Number -> [Number]
const allMultiplesOfBelow = m => x => countArray(x).filter(isMultipleOf(m))

// sumMultiplesOf3and5below :: Number -> Number
const sumMultiplesOf3and5below = limit =>
  compose(sum, allMultiplesOfBelow(3))(limit) +
  compose(sum, allMultiplesOfBelow(5))(limit)

module.exports = sumMultiplesOf3and5below
