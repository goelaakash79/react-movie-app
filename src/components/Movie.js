import React, {Component} from 'react';

class Movie extends Component{
  render(){
    console.log(this.props);
    const { movies } = this.props;
    const movieList = movies.map(movie => {
      return (
        <div className="movie card col-sm-3">
          <div>Movie: {movie.movie_name}</div>
          <div>Rating: {movie.rating}</div>
          <div>IMDB Id: {movie.imdb_id}</div>
        </div>
      )
    });
    return (
      <div className="movie-list row col-lg-12">
        { movieList }
      </div>
    )
  }
}

export default Movie;
