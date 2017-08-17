const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('frontend', {extensions:['html']}))

const port = 3000;

const logArray = new Array();

app.post('/log', function (req, res) {
	let logStr = req.body.str;
	if (logStr.length > 0) {
		logArray.push(req.body.str);
	}
	res.json({'status':'success'});
});

app.get('/log', function (req, res) {
	res.json({
		'status': 'success',
		'data': logArray,
	});
});

app.listen(port, function() {
	console.log(`app listening on port ${port}`);
});

