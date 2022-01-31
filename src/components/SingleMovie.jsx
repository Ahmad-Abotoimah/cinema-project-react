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
          <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col-md-12 justify-content-start">
                <div className="movie-poster w-25 col-md-4">
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

                <div className="movie-details col-md-8 newDetails">
                  <h3 className="title">{movie.movie_name}  {movie.movie_rate} </h3>
                  <hr/>
                  {/* <div className="rating mt10 w-25">{movie.movie_description}</div> */}
                  <div className="movie-subtext">
                    <p> <span className="newStyle">Movie Daily Show: </span> {movie.movie_daily_show} </p>
                    <p> <span className="newStyle">Movie Duration: </span> {movie.movie_time_lenght} </p>
                    <p> <span className="newStyle">Movie Cinemas: </span>  {movie.movie_cinemas} </p>
                    <p> <span className="newStyle">Ticket Price: </span>  {movie.movie_price} </p>
                  </div>
                  {/* <ul className="movie-subtext">
                    <li> Movie Duration: {movie.movie_time_lenght}</li>
                    <li> Ticket Price: {movie.movie_time_lenght}</li>
                    <li> Movie Duration: {movie.movie_time_lenght}</li>
                    <li> Movie Duration: {movie.movie_time_lenght}</li>
                    <li className="text-break w-25" >{movie.movie_description}</li>
                    <li>{movie.created_at.split(" ")[0]}</li>
                  </ul> */}

                  <a
                    href={movie.movie_trailer}
                    className="btn btn-main btn-effect"
                    target="_blank"
                  >
                    trailer
                  </a>

                  {/* <div className="rating mt10">{movie.movie_rate}</div> */}
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          className="movie-detail-intro overlay-gradient ptb100"
          style={{ background: "url(assets/images/other/movie-detail-bg.jpg)" }}
        ></section> */}
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
