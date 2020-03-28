const assert = require('assert').strict

const log = require('./logger')

/**
 * A simple test harness
 * 
 * ## Usage
 * 
 * ```js
 * testSuite('Project Euler', test => {
 *  test({
 *    unit: '001',
 *    should: 'sum all multiples of 3 and 5',
 *    actual: pe001(10),
 *    expected: 23
 *  })
 * })
 * ```
 * 
 * @param {string} description describes the test suite
 * @param {function} suite Provides the assertion function to the suite
 */
const testSuite = (description = '', suite) => {
  const report =
    { fail: 0
    , pass: 0
    }

  const test = ({ unit = '', should = '', actual, expected } = {}) => {
    try {
      assert.deepEqual(actual, expected)
      log.success(`✔ [PASS] ${unit} should ${should}\n`)
      report.pass++
    } catch (err) {
      log.error(`✘ [FAIL] ${unit} should ${should}\n`)
      log.warn(`expected: ${err.expected}`)
      log.warn(`received: ${err.actual}\n`)
      log.info(err.message, '\n')
      report.fail++
    }
  }

  suite(test)

  // Print report
  log.info(`${description} > ${report.fail + report.pass} tests run!`)
  if (report.fail > 0) {
    log.error(`✘ ${report.fail} tests failed!`)
  }
  if (report.pass > 0) {
    log.success(`✔ ${report.pass} tests passed!`)
  }
}

module.exports = testSuite
