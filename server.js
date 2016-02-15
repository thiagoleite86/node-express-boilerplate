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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
* Resource Modules
*/
const resource = {};
resource.user = require('/modules/user');
resource.articles = require('./modules/articles');

app.use('/users', resource.user);
app.use('/articles', resource.articles);

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});