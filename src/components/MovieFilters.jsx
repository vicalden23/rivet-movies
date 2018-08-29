import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
  Radio
} from 'react-bootstrap';

import { filterMovies } from '../redux/actions/movieActions';

import '../containers/App.css';

class MovieFilters extends Component {

  //this.props.filterMovies();

  handleSubmit(ev) {
    ev.preventDefault()
    this.genreGroup.value
  }

  render() {
    const { movies } = this.props.movies;
    return (
      <div className='filter-container'>
        <form>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <h5>
                  Genre:
                </h5>
                <Radio name="genreGroup" inline>Crime</Radio>
                <Radio name="genreGroup" inline>Drama</Radio>
                <Radio name="genreGroup" inline>Comedy</Radio>
                <Radio name="genreGroup" inline>Comedy</Radio>
                <Radio name="genreGroup" inline>Comedy</Radio>
                <Radio name="genreGroup" inline>Comedy</Radio>
              </Col>

              <Col xs={6} md={4}>
                <h5>
                  Year:
                </h5>
              </Col>
              
              <Col xs={6} md={4}>
                <h5>
                  MPAA Rating:
                </h5>
              </Col>
            </Row>
          </Grid>
          <Button
            className='submit-button'
            type='submit'
            onClick={this.handleSubmit.bind(this)}> 
            PLACE ORDER
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({movies}) {
  return {
    movies: movies
  }
}

export default connect(mapStateToProps, {filterMovies})(MovieFilters);
