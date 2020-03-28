const testSuite = require('./utils/test-harness')
const pe001 = require('./001')

testSuite('Project Euler', test => {
  test(
    { unit: '001'
    , should: 'sum all multiples of 3 and 5 below the provided limit'
    , actual: pe001(10)
    , expected: 23
    }
  )
})
