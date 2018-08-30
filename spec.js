// TODO: set up test environemnt

// process.env.NODE_ENV = 'test';

// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let server = require('./server');
// let should = chai.should();

// describe('Movies', () => {

// 	describe('/GET movies', () => {
// 		it('should retrieve all movies', (done) => {
// 			chai.request(server)
// 				.get('/api/movies')
// 				.end((err, res) => {
// 					res.should.have.status(200);
// 					res.body.should.be.a('array');
// 					res.body[0].title.should.be.a('string');
// 					done();
// 				});
// 		});
// 	});

// 	describe('/POST comment', () => {
// 		it('/api/movies/:id/comment', (done =>{
// 			let body = { comment: 'This movie was fantastic!'}
// 			chai.request(server)
// 				.post('/api/movies/:id/comment')
// 				.send(body)
// 				.end((err, res) => {
// 					res.should.be.a('object');
// 					res.body.comments.should.be.a('array');
// 					res.body.comments.should.include(body.comment);
// 					done();
// 				})
// 		})
// 	})

// 	describe('/POST rating', () => {
// 		it('/api/movies/:id/rating', (done =>{
// 			let body = { rating: 5}
// 			chai.request(server)
// 				.post('/api/movies/:id/comment')
// 				.send(body)
// 				.end((err, res) => {
// 					res.should.be.a('object');
// 					res.body.average_rating.should.be.a('number');
// 					res.body.total_ratings.should.not.be(0);
// 					done();
// 				})
// 		})
// 	})
// })