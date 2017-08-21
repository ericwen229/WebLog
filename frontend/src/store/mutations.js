export function UPDATE_LOG (state, log) {
  state.log = log
}

export function APPEND_LOG (state, log) {
  if (!Array.isArray(state.log)) {
    state.log = []
  }
  if (Array.isArray(log)) {
    state.log.concat(log)
  } else {
    state.log.push(log)
  }
}
