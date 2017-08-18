// external modules
const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const bodyParser = require('body-parser');
const Config = require('./config');
const Queue = require('./queue');

// application setup
const router = express.Router();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('frontend', {extensions:['html']}))

const logQueue = new Queue(Config.maxLogNum);

router.post('/logs', function (req, res) {
	let logStr = req.body.str;
	if (logStr.length > 0) {
		logQueue.enqueue(req.body.str);
	}
	res.json({'status':'success'});
});

router.get('/logs', function (req, res) {
	res.json({
		'status': 'success',
		'data': logQueue.toArray(),
	});
});

router.ws('/test', function (ws, req) {
	ws.on('message', function (msg) {
		console.log(msg);
	});
});

app.use('/api', router);

app.listen(Config.port, function () {
	console.log(`app listening on port ${Config.port}`);
});

