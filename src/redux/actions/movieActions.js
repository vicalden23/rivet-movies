import axios from 'axios';
import {
  FETCH_MOVIES,
  UPDATE_MOVIE,
  FILTER_MOVIES,
} from '../constants';

export const fetchMovies = () => (dispatch) => {
  axios.get('http://localhost:2023/api/movies')
    .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data,
    }))
    .catch((err) => {
      throw new Error(`Could not fetch movies: ${err}`);
    });
};

export const addComment = (id, comment) => (dispatch) => {
  axios.post(`http://localhost:2023/api/movies/${id}/comment`, {
    comment,
  })
    .then(response => dispatch({
      type: UPDATE_MOVIE,
      payload: response.data,
    }));
};

export const addRating = (id, rating) => (dispatch) => {
  axios.post(`http://localhost:2023/api/movies/${id}/rating`, {
    rating,
  })
    .then(response => dispatch({
      type: UPDATE_MOVIE,
      payload: response.data,
    }));
};

export const filterMovies = filters => (dispatch) => {
  axios.get('http://localhost:2023/api/movies')
    .then((response) => {
      const payload = {
        filters,
        data: response.data,
      };
      return dispatch({
        type: FILTER_MOVIES,
        payload,
      });
    });
};
