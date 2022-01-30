import React, { Component } from "react";

export default class MovieDetails extends Component {
  state = {
    ourMovie: [],
    movieId: "",
  };
  componentDidMount() {
    let movieId = localStorage.getItem("movie_id");
    let ourMovie = JSON.parse(localStorage.getItem("movies")).filter(
      (movie) => movie.id === movieId
    );
    this.setState({
      ourMovie: ourMovie,
      movieId: movieId,
    });
  }

  render() {
    console.log(this.state.movies);
    return <div>{}</div>;
  }
}
