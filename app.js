const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const moviesRouter = require('./routes/movies');
const mongoose = require('mongoose');
const config = require('./config/config');


mongoose.connect(`mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`, {useNewUrlParser: true}, function (err, res) {
    if (err) throw err;
    console.log('Connected to MongoDB');
});


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(function (req, res, next) {
    if (!req.headers['x-auth'])
        res.sendStatus(401);

    if (!Buffer.from(req.headers['x-auth'], 'base64').includes("ironhack"))
        res.sendStatus(403);
    next()
});
app.use('/movies', moviesRouter);

module.exports = app;
