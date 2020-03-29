const { compose, countArray, isMultipleOf, sum } = require('../lib/helpers')

// allMultiplesOfbelow :: Number -> Number -> [Number]
const allMultiplesOfBelow = m => x => countArray(x).filter(isMultipleOf(m))

// sumMultiplesOfBelow :: Number -> Number -> Number
const sumMultiplesOfBelow = m => compose(sum, allMultiplesOfBelow(m))

// sumMultiplesOf3and5below :: Number -> Number
const sumMultiplesOf3and5below = limit =>
  sumMultiplesOfBelow(3)(limit) +
  sumMultiplesOfBelow(5)(limit)

module.exports = sumMultiplesOf3and5below
