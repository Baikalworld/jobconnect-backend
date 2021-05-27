require('dotenv').config();
require('colors');

const express = require('express');
const cors = require('cors');

const jobadds = require('./api/jobadds');
const errorHandler = require('./middlewares/error')
const connectDB = require('./dbinit');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('hello!!!'))
app.use('/jobadds', jobadds)
app.use(errorHandler);

app.listen(5000, () => console.log('Started up server on http://localhost:5000'.rainbow.bold.inverse))