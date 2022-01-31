import React, { Component } from "react";

export default class singleMovie extends Component {
  state = {
    ourMovie: "",
    movieId: "",
    movieRender: "",
  };
  componentDidMount() {
    let movieId = localStorage.getItem("movie_id");
    let ourMovieF = JSON.parse(localStorage.getItem("movies")).filter(
      (movie) => movie.id === movieId
    );
    this.setState({
      ourMovie: ourMovieF,
      movieId: movieId,
    });
    let movieR = ourMovieF.map((movie) => (
      <div>
        <section
          className="movie-detail-intro overlay-gradient ptb100"
          style={{ background: "url(assets/images/other/movie-detail-bg.jpg)" }}
        ></section>
        {/* // <!-- =============== END OF MOVIE DETAIL INTRO =============== --> */}

        {/* // <!-- =============== START OF MOVIE DETAIL INTRO 2 =============== --> */}
        <section className="movie-detail-intro2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="movie-poster">
                  <img
                    src={
                      "assets/images/movies/" + movie.movie_image.split("/")[1]
                    }
                    alt="Movie Image"
                  />

                  <a
                    href={movie.movie_trailer}
                    className="play-video"
                    target="_blank"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>

                <div className="movie-details">
                  <h3 className="title">{movie.movie_name}</h3>

                  <ul className="movie-subtext">
                    <li>2h 32min / 30should be dynamic</li>
                    <li>{}</li>
                    <li>{movie.created_at.split(" ")[0]}</li>
                  </ul>

                  <a
                    href={movie.movie_trailer}
                    className="btn btn-main btn-effect"
                    target="_blank"
                  >
                    trailer
                  </a>

                  <div className="rating mt10">{movie.movie_rate}</div>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ));
    this.setState({
      movieRender: movieR,
    });
  }

  render() {
    return <div>{this.state.movieRender}</div>;
  }
}
