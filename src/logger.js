const noop = () => {};
const _console = window.console || {}; // eslint-disable-line noconsole window
const log = {
  error: _console.error.bind(_console) || noop,
  warn: _console.warn.bind(_console) || noop,
  info: _console.log.bind(_console) || noop,
  debug: _console.log.bind(_console) || noop,
  trace: _console.log.bind(_console) || noop
};

export default log;
