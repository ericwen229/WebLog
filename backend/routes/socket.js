const logController = require('../controllers/log')

module.exports = function (socket) {

  socket.on('watch', logController.watch.bind(logController, socket))

}
