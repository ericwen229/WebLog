const logController = require('../controllers/log')
const router = require('express').Router()

router.post('/logs', logController.appendLog)

router.get('/logs', logController.queryLog)

router.delete('/logs', logController.clearLog)

module.exports = router
