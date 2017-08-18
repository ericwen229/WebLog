const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('frontend', {extensions:['html']}))

const Config = require('./config')
const Queue = require('./queue')

const logQueue = new Queue(Config.maxLogNum);

app.post('/log', function (req, res) {
	let logStr = req.body.str;
	if (logStr.length > 0) {
		logQueue.enqueue(req.body.str);
	}
	res.json({'status':'success'});
});

app.get('/log', function (req, res) {
	res.json({
		'status': 'success',
		'data': logQueue.toArray(),
	});
});

app.listen(Config.port, function() {
	console.log(`app listening on port ${Config.port}`);
});

