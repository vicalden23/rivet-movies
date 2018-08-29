let mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://vickialden123:vickialden123@ds129762.mlab.com:29762/rivet', { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', function() {
  console.log('Mongo connection open on ds129762.mlab.com:29762/rivet');
});

//define schema
let movieSchema = new mongoose.Schema({
	title: {type: String},
	mpaa_rating: {type: String},
	director: {type: String},
	realease_year: {type: Number},
	genres: {type: Array},
	total_voters: {type: Number, default: 0},
	average_rating: {type: Number, default: 0},
	comments: [String]
})

let Movie = mongoose.model('Movie', movieSchema, 'movies')

module.exports = Movie;
