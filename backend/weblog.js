// external modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Config = require('./config');
var Queue = require('./queue');

// application setup
var router = express.Router();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('frontend', {extensions:['html']}))

var logQueue = new Queue(Config.maxLogNum);

router.post('/logs', function(req, res) {
	let logStr = req.body.str;
	if (logStr.length > 0) {
		logQueue.enqueue(logStr);
		io.emit('logUpdate', logStr);
	}
	res.json({'status':'success'});
	res.end();
});

router.get('/logs', function(req, res) {
	res.json({
		'status': 'success',
		'data': logQueue.toArray(),
	});
	res.end();
});

router.get('/export', function(req, res) {
	res.setHeader("Content-Disposition", "attachment; filename=export.txt");
	res.setHeader("Content-type", "text/plain");
	logQueue.toArray().forEach(function(element) {
		res.write(element);
	});
	res.end();
});

router.post('/clear', function(req, res) {
	logQueue.clear();
	res.end();
});

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on("disconnect", function() {
		console.log('a user disconnected');
	});
});

app.use('/api', router);

server.listen(Config.port, function() {
	console.log(`server listening on port ${Config.port}`);
});

