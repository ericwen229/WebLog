import { Log } from '@/apis'
import Socket from '@/apis/socket'

export function startSync ({ commit }) {
  Log.get().then(({ body: { data: log } }) => {
    commit('UPDATE_LOG', log)
  })
  Socket.on('logUpdate', log => {
    commit('APPEND_LOG', log)
  })
}

export function clearLog ({ commit }) {
  commit('UPDATE_LOG', [])
}
