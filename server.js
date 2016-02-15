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
* Rest Modules
*/
const rest = {};
rest.users = require('./modules/users/users.routes');
rest.articles = require('./modules/articles/articles.routes');

app.use('/users', rest.users);
app.use('/articles', rest.articles);

app.listen(3000, () => {
	console.log("App listening on port 3000!");
});