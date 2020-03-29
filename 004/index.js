const { last
      , filter
      , pipe
      , range
      , reverseString
      , sortBy
      , toString
      , uniq } = require('../lib/helpers')

// Hell this is all but optimized. Every number is multiplied together then
// filtered. I'm still quite hesitating with functional programming and should
// come here later to optimize this.
// TODO: Optimiiiiize

// biggestXDigitNumber :: Number -> Number
const biggestXDigitNumber = x => parseInt(''.padEnd(x, '9'))

// smallestXDigitNumber :: Number -> Number
const smallestXDigitNumber = x => parseInt('1'.padEnd(x, '0'))

// halves :: String -> [String]
const halves = s =>
  [ s.slice(0, Math.floor(s.length / 2))
  , s.slice(-Math.floor(s.length / 2))
  ]

// isPalindromic :: String -> Boolean
const isPalindromic = s =>
  halves(toString(s)).reduce((first, last) => first === reverseString(last))

// allDecreasingXDigitNumbers :: Number -> [Number]
const allDecreasingXDigitNumbers =
  d => range(smallestXDigitNumber(d))(biggestXDigitNumber(d) + 1)

// allProducts :: [Number] -> Number
const allProducts = xs => xs.flatMap(x => xs.map(y => x * y))

// largestPalindromeOfProduct :: Number -> Number
const largestPalindromeOfProduct = pipe(
  allDecreasingXDigitNumbers,
  allProducts,
  filter(isPalindromic),
  uniq,
  sortBy((x, y) => x - y),
  last
)

module.exports = largestPalindromeOfProduct
