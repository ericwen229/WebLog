const express = require('express');
const bodyParser = require('body-parser');
const Config = require('./config');
const Queue = require('./queue');

const app = express();
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

app.use('/api', router);

app.listen(Config.port, function() {
	console.log(`app listening on port ${Config.port}`);
});

