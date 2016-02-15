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
resource.users = require('./modules/users/users.routes');
resource.articles = require('./modules/articles/articles.routes');

app.use('/users', resource.users);
app.use('/articles', resource.articles);

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});