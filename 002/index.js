const { compose, filter, isEven, sum } = require('../lib/helpers')

// addNextFibo :: [Number] -> [Number]
const addNextFibo = list =>
  [ ...list
  , list[list.length - 1] + list[list.length - 2]
  ]

// fiboUntil :: Number -> [Number]
const fiboUntil = (limit, list = [1, 2]) =>
  list[list.length - 1] <= limit
    ? fiboUntil(limit, addNextFibo(list))
    : list.slice(0, -1)

// sumEvenFiboBelow :: Number -> Number
const sumEvenFiboBelow = compose(
  sum,
  filter(isEven),
  fiboUntil
)

module.exports = sumEvenFiboBelow
