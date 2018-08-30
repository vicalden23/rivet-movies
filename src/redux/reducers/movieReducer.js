import {
  FETCH_MOVIES,
  UPDATE_MOVIE,
  FILTER_MOVIES,
} from '../constants';

const initialState = {
  movies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie._id === action.payload._id) {
            movie = action.payload;
          }
          return movie;
        }),
      };
    case FILTER_MOVIES:
      return {
        ...state,
        movies: action.payload.data.filter((movie) => {
          const filters = action.payload.filters;
          // return the movies that meet the filter requirements
          if (filters.genre) {
            if (!movie.genres.includes(filters.genre)) return false;
          }

          if (filters.mpaa) {
            if (movie.mpaa_rating !== filters.mpaa) return false;
          }

          if (filters.year) {
            const years = ['<1980', '1980-1989', '1990-1999', '2000-2009', '>2009'];

            if (filters.year === years[0] && movie.release_year < 1980) return true;
            if (filters.year === years[1] && movie.release_year < 1990 && movie.release_year >= 1980) return true;
            if (filters.year === years[2] && movie.release_year < 2000 && movie.release_year >= 1990) return true;
            if (filters.year === years[3] && movie.release_year < 2010 && movie.release_year >= 2000) return true;
            if (filters.year === years[4] && movie.release_year >= 2010) return true;
            return false;
          }

          return true;
        }),
      };
    default:
      return state;
  }
}
