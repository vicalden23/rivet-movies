import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../redux/actions/movieActions';
import MovieItem from './MovieItem';

import '../containers/App.css'

class MovieList extends Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies } = this.props.movies;
    return (
      <div className='list-container'>
        {
          movies.length ? movies.map((movie) => {
            return (
              <MovieItem movieData={movie} key={movie._id}/>
            );
          })

          : ''
        }
      </div>
    );
  }
}

function mapStateToProps({movies}) {
  return {
    movies: movies
  }
}

export default connect(mapStateToProps, {fetchMovies})(MovieList);
