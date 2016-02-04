'use strict';

/**
* Module dependencies
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/*
* Configure App
*/
app.use(bodyParser.urencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/teste', function(req, res) {
	res.send('hello world');
});

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});