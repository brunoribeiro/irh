var Movie = require('../models/movie');


exports.movie_create = function (req, res) {
    const movie = new Movie(
        {
            title: req.body.title,
            release_date: req.body.release_date,
            director: req.body.director,
            score: req.body.score,
            plot: req.body.plot,
            poster_url: req.body.poster_url
        }
    );

    movie.save(function (err, m) {
        if (err) return res.status(400).send(err);
        res.status(201).send(m);
    })
};

exports.movie_details = function (req, res) {
    Movie.findById(req.params.id, function (err, movie) {
        if (err) return res.status(404);
        res.status(200).send(movie);
    })
};

exports.movie_list = function (req, res) {
    Movie.find({}, function (err, movies) {
        if (err) return res.status(500).send(err);
        res.status(200).send(movies);
    })
};

exports.movie_update = function (req, res) {
    Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, movie) {
        if (err) return res.status(404).send(err);
        res.status(201).send(movie)
    });
};

exports.movie_delete = function (req, res) {
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.sendStatus(404);
        res.sendStatus(204);
    })
};