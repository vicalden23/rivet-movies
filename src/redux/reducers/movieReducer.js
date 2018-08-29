import {
	FETCH_MOVIES,
	UPDATE_MOVIE
} from '../constants';

const initialState = {
	movies: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_MOVIES:
			return {
				...state, 
				movies: action.payload
			}
		case UPDATE_MOVIE:
			return {
				...state,
				movies: state.movies.map((movie) => {
					if (movie._id === action.payload._id) {
						movie = action.payload
					}
					return movie
				})
			}
		// case FILTER_MOVIES:
		// 	return {
		// 		...state,
		// 		movies: action.payload.filter(())
		// 	}
		default:
			return state;
	}
} 
