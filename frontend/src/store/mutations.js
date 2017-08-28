export function UPDATE_LOG (state, log) {
  state.log = log
}

export function APPEND_LOG (state, logs) {
  if (!Array.isArray(state.log)) {
    state.log = []
  }
  if (Array.isArray(logs)) {
    state.log.push.apply(state.log, logs)
  } else {
    state.log.push(logs)
  }
}
