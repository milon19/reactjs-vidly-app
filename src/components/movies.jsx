import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies } = this.state;
    if (count === 0) return <h4>There are no movies in the database.</h4>;
    return (
      <div>
        <h4>Showing {count} movies in the database.</h4>
        <MoviesTable
          movies={movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Movies;
