import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

import { addComment, addRating } from '../redux/actions/movieActions';
import CommentList from './CommentList';

import '../containers/App.css';

class MoveItem extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

  onStarClick(nextValue) {
    this.props.addRating(this.props.movieData._id, nextValue);
  }

  onStarHover(nextValue) {
    this.setState({
      rating: nextValue,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addComment(this.props.movieData._id, this.comment.value);
    this.formRef.reset();
  }

  render() {
    const movie = this.props.movieData;
    return (
      <div className="movie-card">
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <div>
                <h3>
                  {movie.title}, {movie.release_year}
                </h3>
                <p>
                  {movie.mpaa_rating}
                </p>
                <p>
                  Directed by: {movie.director}
                </p>
                <StarRatingComponent
                  className="star-average"
                  name="total-average"
                  editing={false}
                  starCount={5}
                  value={movie.average_rating}
                />
                <p className="star-average-numbers">
                  {movie.average_rating.toFixed(1)}/{movie.total_voters} votes
                </p>
              </div>
            </Col>

            <Col xs={6} md={4}>
              <CommentList comments={movie.comments} />
            </Col>

            <Col xs={6} md={4}>
              <p className="rate-movie-title">
                Rate this Movie:
              </p>
              <StarRatingComponent
                className="rate-movie"
                name="rate-movie"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
                onStarHover={this.onStarHover.bind(this)}
              />
              <form ref={el => this.formRef = el}>
                <div>
                  <FormGroup>
                    <FormControl
                      componentClass="textarea"
                      maxLength={500}
                      inputRef={text => this.comment = text}
                    />
                  </FormGroup>
                </div>
                <div>
                  <Button
                    className="submit-button"
                    type="submit"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Submit Comment
                  </Button>
                </div>
              </form>
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ movie }) {
  return {
    movie,
  };
}

export default connect(mapStateToProps, { addComment, addRating })(MoveItem);
