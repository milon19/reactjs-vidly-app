import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like movie={movie} onLike={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies } = this.props;
    return <Table columns={this.columns} data={movies} />;
  }
}

export default MoviesTable;