import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";

export default class MoviesGrid extends Component {
  state = {
    selectedCategory: 0,
    categories: [],
    renderCategories: "",
    movies: "",
    renderMovies: "",
    redirectDetail: false,
    redirectBook: false,
  };
  goDetails = (e) => {
    this.setState({
      redirectDetail: true,
    });
    localStorage.setItem("movie_id", e.target.value);
    console.log(e.target.value);
  };
  goBooK = (e) => {
    this.setState({
      redirectBook: true,
    });
    localStorage.setItem("movie_id", e.target.value);
    console.log(e.target.value);
  };
  goBooK = (e) => {
    this.setState({
      redirectBook: true,
    });
    localStorage.setItem("movie_id", e.target.value);
    console.log(e.target.value);
  };
  goBooK = (e) => {
    this.setState({
      redirectBook: true,
    });
    localStorage.setItem("movie_id", e.target.value);
    console.log(e.target.value);
  };

  componentDidMount() {
    axios
      .get("http://localhost/react-data/categories.php")
      .then((res) => {
        //Success alert
        this.setState({
          categories: res.data,
        });

        let allCategories = this.state.categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.category_name}
          </option>
        ));
        this.setState({
          renderCategories: allCategories,
        });
      });
    axios
      .get("http://localhost/react-data/movies.php")
      .then((res) => {
        //Success alert
        this.setState({
          movies: res.data,
        });
        localStorage.setItem("movies", JSON.stringify(res.data));
        let allMovies = this.state.movies.map((movie) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
            <div className="movie-box-2 mb30">
              <div className="listing-container movieGridImg">
                {/* <!-- Movie List Image --> */}
                <div className="listing-image">
                  {/* <!-- Play Button --> */}
                  <div className="play-btn">
                    <a href={movie.movie_trailer} className="play-video">
                      <i className="fa fa-play"></i>
                    </a>
                  </div>

                  {/* <!-- Buttons --> */}
                  <div className="buttons">
                    <a
                      href="#"
                      data-original-title="Rate"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      className="like"
                    >
                      <i className="icon-heart"></i>
                    </a>

                    <a
                      href="#"
                      data-original-title="Share"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      className="share"
                    >
                      <i className="icon-share"></i>
                    </a>
                  </div>

                  {/* <!-- Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>

                  {/* <!-- Image --> */}
                  <img
                    src={
                      "assets/images/movies/" + movie.movie_image.split("/")[1]
                    }
                    alt="Movie Image"
                  />
                </div>

                {/* <!-- Movie List Content --> */}
                <div className="listing-content">
                  <div className="inner">
                    <h4 className="title">{movie.movie_name}</h4>

                    {/* <p>{movie.movie_description}</p> */}
                    <button
                      value={movie.id}
                      name={this.movies}
                      onClick={this.goDetails}
                      className="btn btn-primary signupsubmit m-2"
                    >
                      details
                    </button>

                    <button
                      value={movie.id}
                      name={this.movies}
                      onClick={this.goBooK}
                      className="btn btn-primary signupsubmit m-2"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));

        this.setState({
          renderMovies: allMovies,
        });
      });
  }

  filtration = (e) => {
    this.setState({
      selectedCategory: e.target.value,
    });
    if (e.target.value != 0) {
      let filtered = this.state.movies.filter(
        (item) => item.category_id == e.target.value
      );
      let allMovies = filtered.map((movie) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
          <div className="movie-box-2 mb30">
            <div className="listing-container movieGridImg">
              {/* <!-- Movie List Image --> */}
              <div className="listing-image">
                {/* <!-- Play Button --> */}
                <div className="play-btn">
                  <a href={movie.movie_trailer} className="play-video">
                    <i className="fa fa-play"></i>
                  </a>
                </div>

                {/* <!-- Buttons --> */}
                <div className="buttons">
                  <a
                    href="#"
                    data-original-title="Rate"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="like"
                  >
                    <i className="icon-heart"></i>
                  </a>

                  <a
                    href="#"
                    data-original-title="Share"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="share"
                  >
                    <i className="icon-share"></i>
                  </a>
                </div>

                {/* <!-- Rating --> */}
                <div className="stars">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>

                {/* <!-- Image --> */}
                <img
                  src={
                    "assets/images/movies/" + movie.movie_image.split("/")[1]
                  }
                  alt="Movie Image"
                />
              </div>

              {/* <!-- Movie List Content --> */}
              <div className="listing-content">
                <div className="inner">
                  <h4 className="title">{movie.movie_name}</h4>

                  <button
                    value={movie.id}
                    name={this.movies}
                    onClick={this.goDetails}
                    className="btn btn-primary signupsubmit m-2"
                  >
                    details
                  </button>
                  <button
                    value={movie.id}
                    name={this.movies}
                    onClick={this.goBooK}
                    className="btn btn-primary signupsubmit m-2"
                  >
                    BookNow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));

      this.setState({
        renderMovies: allMovies,
      });
      console.log(e.target.value);
    } else {
      console.log("else");
      let allMovies = this.state.movies.map((movie) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={movie.id}>
          <div className="movie-box-2 mb30">
            <div className="listing-container movieGridImg">
              {/* <!-- Movie List Image --> */}
              <div className="listing-image">
                {/* <!-- Play Button --> */}
                <div className="play-btn">
                  <a href={movie.movie_trailer} className="play-video">
                    <i className="fa fa-play"></i>
                  </a>
                </div>

                {/* <!-- Buttons --> */}
                <div className="buttons">
                  <a
                    href="#"
                    data-original-title="Rate"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="like"
                  >
                    <i className="icon-heart"></i>
                  </a>

                  <a
                    href="#"
                    data-original-title="Share"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    className="share"
                  >
                    <i className="icon-share"></i>
                  </a>
                </div>

                {/* <!-- Rating --> */}
                <div className="stars">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>

                {/* <!-- Image --> */}
                <img
                  src={
                    "assets/images/movies/" + movie.movie_image.split("/")[1]
                  }
                  alt="Movie Image"
                />
              </div>

              {/* <!-- Movie List Content --> */}
              <div className="listing-content">
                <div className="inner">
                  <h4 className="title">{movie.movie_name}</h4>

                  <button
                    value={movie.id}
                    name={this.movies}
                    onClick={this.goDetails}
                    className="btn btn-primary signupsubmit m-2"
                  >
                    details
                  </button>
                  <button
                    value={movie.id}
                    name={this.movies}
                    onClick={this.goBooK}
                    className="btn btn-primary signupsubmit m-2"
                  >
                    BookNow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));

      this.setState({
        renderMovies: allMovies,
      });
    }
  };

  render() {
    return (
      <div style={{ marginTop: "10vh" }}>
        {this.state.redirectDetail === true ? (
          <Navigate to="/singleMovie" replace={true} />
        ) : (
          ""
        )}
        {this.state.redirectBook === true ? (
          <Navigate to="/Book" replace={true} />
        ) : (
          ""
        )}
        {/* <!-- =============== START OF PAGE HEADER =============== --> */}

        {/* <!-- =============== END OF PAGE HEADER =============== --> */}

        {/* <!-- =============== START OF MAIN =============== --> */}
        <main className="ptb100">
          <div className="container">
            {/* <!-- Start of Filters --> */}
            <div className="row mb50">
              <div className="col-md-6">
              
              </div>

              <div className="col-md-6">
                {/* <!-- Sort by --> */}
                <div className="sort-by">
                  <div className="sort-by-select">
                    <select
                      className="chosen-select-no-single"
                      onChange={this.filtration}
                    >
                      <option value="0" defaultValue>
                        Select Category
                      </option>
                      {this.state.renderCategories}
                    </select>
                  </div>
                </div>
                {/* <!-- Sort by / End --> */}
              </div>
            </div>
            {/* <!-- End of Filters --> */}

            {/* <!-- Start of Movie List --> */}
            <div className="row">
              {this.state.renderMovies != ""
                ? this.state.renderMovies
                : "No Movies In this Categories"}
            </div>
            {/* <!-- End of Movie List --> */}
          </div>
        </main>
      </div>
    );
  }
}