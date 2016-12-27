var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/', middleware.requireAuthentication, function (req, res) {
	res.send('Hello!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT);