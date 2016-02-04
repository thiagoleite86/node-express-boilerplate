'use strict';

/**
* Module dependencies
*/
const express = require('express');
const app = express();

app.get('/teste', function(req, res) {
	res.send('hello world');
});

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});