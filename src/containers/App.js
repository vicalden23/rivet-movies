import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MovieList from '../components/MovieList';
import MovieFilters from '../components/MovieFilters';

import store from '../redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<div>
	      	<MovieFilters />
	        <MovieList />
        </div>
      </Provider>
    )
  }
}

export default App;
