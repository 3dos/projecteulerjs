const assert = require('assert').strict

const pe001 = require('./001')

const consoleColors =
  { green: '\x1b[32m'
  , red: '\x1b[31m'
  , yellow: '\x1b[33m'
  , reset: '\x1b[0m'
  }

const log = (...args) => console.log(...args, consoleColors.reset)
log.error = (...args) => console.error(consoleColors.red, ...args, consoleColors.reset)
log.info = (...args) => console.info(...args, consoleColors.reset)
log.success = (...args) => console.log(consoleColors.green, ...args, consoleColors.reset)
log.warn = (...args) => console.warn(consoleColors.yellow, ...args, consoleColors.reset)

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

test({
  unit: '001',
  should: 'sum all multiples of 3 and 5 below the provided limit',
  actual: pe001(10),
  expected: 23
})

// Print report
log.info(`${report.fail + report.pass} project Euler tests run!`)
if (report.fail > 0) {
  log.error(`✘ ${report.fail} tests failed!`)
}
if (report.pass > 0) {
  log.success(`✔ ${report.pass} tests passed!`)
}
