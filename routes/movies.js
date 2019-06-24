const express = require('express');
const controller = require('../controllers/movie');
const router = express.Router();

router.get('/', function(req, res, next) {
  controller.movie_list(req, res)
});

router.post('/', function (req, res) {
  controller.movie_create(req,res);
});

router.get('/:id', function (req, res, next) {
  controller.movie_details(req,res)
});

router.patch('/:id', function (req, res, next) {
  controller.movie_update(req,res)
});

router.delete('/:id', function (req, res, next) {
  controller.movie_delete(req,res)
});

module.exports = router;
