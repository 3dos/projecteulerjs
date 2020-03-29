const testSuite = require('./utils/test-harness')
const pe001 = require('./001')
const pe002 = require('./002')
const pe003 = require('./003')

testSuite('Project Euler', test => {
  test(
    { unit: '001'
    , should: 'sum all multiples of 3 and 5 below the provided limit'
    , actual: pe001(10)
    , expected: 23
    }
  )

  test(
    { unit: '002'
    , should: 'sum all even numbers from the fibonacci sequence below the provided limit'
    , actual: pe002(100)
    , expected: 44
    }
  )

  test(
    { unit: '003'
    , should: 'return the largest prime factor of the provided number'
    , actual: pe003(13195)
    , expected: 29
    }
  )
})
