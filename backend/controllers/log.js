const logModel = require('../models/log')

class LogController {

  constructor () {
    logModel.on('append', logs => {
      io.to('log').emit('log', logs)
    })
  }

  appendLog (req, res) {
    const log = req.body.str
    logModel.append(log)
    res.ok({ status: 'success '})
  }

  queryLog (req, res) {
    const start = parseInt(req.query.start) || 0
    const end = parseInt(req.query.end) || undefined
    const download = parseInt(req.query.download) || false

    const data = logModel.query(start, end)

    if (download) {
      res.setHeader('Content-Disposition', 'attachment; filename=export.txt')
      res.type('text')
      res.send(data.join(''))
    } else {
      res.ok(data)
    }

  }

  clearLog (req, res) {
    logModel.clear()
    res.ok()
  }

  watch (socket) {
    socket.join('log')
  }

}

module.exports = new LogController()
