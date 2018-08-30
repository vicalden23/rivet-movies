const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Movie = require('./db/Movie');

const router = express();

// enable CORS
router.use(cors());

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.listen(2023, () => {
  console.log('LISTENING PORT NUMBER 2023');
});

/**
	// use lines below to insert seed data into db collection (MOVIES SHOULD ALREADY EXIST in database since using mlab)
	let movieData = require('./movie_seeds.json')
	Movie.collection.insert(movieData.movies, () => console.log('successfully stored data'))
	*/

// GET: /api/movies
// returns all movies
router.get('/api/movies', (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      res.send('something went wrong');
      next();
    }
    res.status(200).json(movies);
  });
});

// POST: /api/movies/:id/rating
// Adds a single star rating to a movie
router.post('/api/movies/:id/rating', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send('Could not find movie');
      next();
    }
    // calculate the new star rating average
    movie.total_voters += 1;
    movie.average_rating += ((req.body.rating - movie.average_rating) / movie.total_voters);

    movie.save((err, updatedMovie) => {
      if (err) {
        res.send('Could not update movie');
        next();
      }
      res.json(updatedMovie);
    });
  });
});

// POST: /api/movies/:id/comment
// Adds a comment to a movie
router.post('/api/movies/:id/comment', (req, res, next) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send('Could not find movie');
      next();
    }
    // add a comment to the list of movie comments
    if (req.body.comment) movie.comments.push(req.body.comment);
    movie.save((err, updatedMovie) => {
      if (err) {
        res.send('Could not update movie');
        next();
      }
      res.json(updatedMovie);
    });
  });
});
