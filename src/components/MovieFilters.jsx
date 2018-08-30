import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Row,
  Col,
  Button,
  ControlLabel,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
} from 'react-bootstrap';

import { filterMovies } from '../redux/actions/movieActions';

import '../containers/App.css';

class MovieFilters extends Component {
  constructor() {
    super();

    this.state = {
      genre: '',
      year: '',
      mpaa: '',
    };
  }


  handleSubmit(ev) {
    ev.preventDefault();
    this.props.filterMovies(this.state);
  }

  handleGenreChange(genre) {
    this.setState({
      genre,
    });
  }

  handleYearChange(year) {
    this.setState({
      year,
    });
  }

  handleMpaaChange(mpaa) {
    this.setState({
      mpaa,
    });
  }

  render() {
    const genres = ['Crime', 'Comedy', 'Drama', 'Action/Adventure', 'Thriller', 'Science Fiction/Fantasy', 'Family', 'Romance', 'Animation', 'Mystery', 'Horror'];

    const years = ['<1980', '1980-1989', '1990-1999', '2000-2009', '>2009'];

    const mpaas = ['G', 'PG', 'PG-13', 'R'];
    return (
      <div className="filter-container">
        <form>
          <ControlLabel>Genre</ControlLabel>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="genre"
              defaultValue=""
              onChange={this.handleGenreChange.bind(this)}
              className="radio-group"
            >
              <ToggleButton className="filter-radio-button" value="">All</ToggleButton>
              {
                genres.map((genre, i) => (
                  <ToggleButton key={`genre${i}`} className="filter-radio-button" value={genre}>{genre}</ToggleButton>
                ))
              }
            </ToggleButtonGroup>
          </ButtonToolbar>
          <Grid>
            <Row>
              <Col md={7} mdPush={7}>
                <ControlLabel>Year</ControlLabel>
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    name="year"
                    defaultValue=""
                    onChange={this.handleYearChange.bind(this)}
                    className="radio-group"
                  >
                    <ToggleButton className="filter-radio-button" value="">All</ToggleButton>
                    {
                      years.map((year, i) => (
                        <ToggleButton key={`years${i}`} className="filter-radio-button" value={year}>{year}</ToggleButton>
                      ))
                    }
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </Col>

              <Col md={5} mdPull={5}>
                <ControlLabel>MPAA Rating</ControlLabel>
                <ButtonToolbar>
                  <ToggleButtonGroup
                    type="radio"
                    name="mpaa"
                    defaultValue=""
                    onChange={this.handleMpaaChange.bind(this)}
                    className="radio-group"
                  >
                    <ToggleButton className="filter-radio-button" value="">All</ToggleButton>
                    {
                      mpaas.map((mpaa, i) => (
                        <ToggleButton key={`mpaas${i}`} className="filter-radio-button" value={mpaa}>{mpaa}</ToggleButton>
                      ))
                    }
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </Grid>
          <div className="button-container">
            <Button
              className="submit-filter-button"
              type="submit"
              onClick={this.handleSubmit.bind(this)}
            >
              APPLY FILTERS
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return {
    movies,
  };
}

export default connect(mapStateToProps, { filterMovies })(MovieFilters);
