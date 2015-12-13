const noop = () => {};
const _console = window.console || {}; // eslint-disable-line noconsole window
const log = {
  error: _console.error || noop,
  warn: _console.warn || noop,
  info: _console.log || noop,
  debug: _console.log || noop,
  trace: _console.log || noop
};

export default log;
