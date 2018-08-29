import {
	FETCH_MOVIES,
	UPDATE_MOVIE,
	FILTER_MOVIES
} from '../constants.js';
import axios from 'axios';

export const fetchMovies = () => dispatch => {

	axios.get(`http://localhost:2023/api/movies`)
		.then(response => {
			return dispatch({
				type: FETCH_MOVIES,
				payload: response.data
			})
		})
		.catch(err => {
			throw new Error(`Could not fetch movies: ${err}`)
		})
}

export const addComment = (id, comment) => dispatch => {
	axios.post(`http://localhost:2023/api/movies/${id}/comment`, {
		comment: comment
	})
		.then(response => {
			return dispatch({
				type: UPDATE_MOVIE,
				payload: response.data
			})
		})
}

export const addRating = (id, rating) => dispatch => {
	axios.post(`http://localhost:2023/api/movies/${id}/rating`, {
		rating: rating
	})
		.then(response => {
			return dispatch({
				type: UPDATE_MOVIE,
				payload: response.data
			})
		})
}

export const filterMovies = (filters) => dispatch => {
	axios.get(`http://localhost:2023/api/movies`)
		.then(response => {
			let payload = {
				filters: filters,
				data: response.data
			}
			return dispatch({
				type: FILTER_MOVIES,
				payload: payload
			})
		})
}
