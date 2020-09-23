import React, { Component } from "react";

class Like extends Component {
  render() {
    const { movie, onLiked } = this.props;
    return (
      <i
        style={{ cursor: "pointer" }}
        className={this.getClasses()}
        onClick={() => onLiked(movie)}
      ></i>
    );
  }

  getClasses() {
    let classes = "fa fa-heart";
    if (!this.props.movie.liked) {
      classes += "-o";
    }
    return classes;
  }
}

export default Like;
