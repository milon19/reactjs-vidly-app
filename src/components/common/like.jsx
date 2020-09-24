import React, { Component } from "react";

class Like extends Component {
  render() {
    const { movie, onLike } = this.props;
    return (
      <i
        style={{ cursor: "pointer" }}
        className={this.getClasses()}
        onClick={() => onLike(movie)}
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
