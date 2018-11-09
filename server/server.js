const env = process.env.NODE_ENV || 'developement';
const configEnv = require('./../config/configEnv');
configEnv();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// Load routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const connections = require('./routes/api/connections');
const search = require('./routes/api/search');

// Load passport auth strategy
const configurePassport = require('./../config/passport');

const app = express();


// Use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGODB_URI;
const dbOptions = { useNewUrlParser: true };

// Connect to MongoDB
mongoose
	.connect(db, dbOptions)
	.then(() => console.log('Connected to MongoDB!'))
	.catch(err => console.log('Unable to connect to MongoDB'));

// Passport middleware
app.use(passport.initialize());

// Passport config
configurePassport(passport);

// API routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/connections', connections);
app.use('/api/search', search);


// server static assets if in production
if (env === 'production') {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		const clientIndexHtml = path.resolve(__dirname, 'client', 'build', 'index.html');
		res.sendFile(clientIndexHtml);
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`**** ${env.toUpperCase()} ****`);
	console.log(`server running at localhost:${port}`);
	// console.log(process.env.MONGODB_URI);
});

module.exports = app;