import { Log } from '@/apis'
import Socket from '@/apis/socket'

export function startSync ({ commit }) {
  Socket.emit('watch')
  Socket.on('log', log => {
    commit('APPEND_LOG', log)
  })
  return Log.get().then(({ body: log }) => {
    commit('UPDATE_LOG', log)
  })
}

export function clearLog ({ commit }) {
  return Log.delete().then(() => {
    commit('UPDATE_LOG', [])
  })
}
