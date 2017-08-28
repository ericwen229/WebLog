const Events = require('events')

class LogModel extends Events {

  constructor () {
    super()

    this._data = []
  }

  append (logs) {
    if (!Array.isArray(logs)) {
      logs = [ logs ]
    }
    Array.prototype.push.apply(this._data, logs)
    this._data.concat(logs)
    this.emit('append', logs)
    this.emit('change')
  }

  query (start = 0, end) {
    return this._data.slice(start, end)
  }

  clear () {
    this._data = []
    this.emit('clear')
    this.emit('change')
  }

}

module.exports = new LogModel()
