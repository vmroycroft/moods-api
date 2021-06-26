require('dotenv').config();
const connectDB = require('./db');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const https = require('https');

/**
 * DB
 */
connectDB();

/**
 * API
 */

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/moods', require('./routes/moods'));

const port = process.env.PORT || 5000;

https
	.createServer(
		{
			key: fs.readFileSync('./localhost.key'),
			cert: fs.readFileSync('./localhost.cert')
		},
		app
	)
	.listen(port, () => {
		console.log(`Server running at https://localhost:${port}`);
	});
