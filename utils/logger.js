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

module.exports = log
