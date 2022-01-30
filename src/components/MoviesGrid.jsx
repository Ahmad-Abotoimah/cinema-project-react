import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";
// import { createBrowserHistory } from "history";
export default class MoviesGrid extends Component {
  state = {
    movies: "",
    renderMovies: "",
  };
  goDetails = (e) => {
    localStorage.setItem("movie_id", e.target.value);
    window.location = "/MoviesGrid/MovieDetails";
    // createBrowserHistory("/MoviesGrid/MovieDetails")
  };

  componentDidMount() {
    let str =
      "C:UsersOrangeDesktopcinema-project-reactpublicassetsimagesmovies/1643471653gold.png";
    console.log("assets/images/movies/" + str.split("/")[1]);
    axios
      .get("http://localhost/cinema-project-react/react-data/movies.php/")
      .then((res) => {
        //Success alert
        this.setState({
          movies: res.data,
        });
        localStorage.setItem("movies", JSON.stringify(res.data));
        let allMovies = this.state.movies.map((movie) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="movie-box-2 mb30">
              <div className="listing-container">
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
                    <h2 className="title">{movie.movie_name}</h2>

                    <p>{movie.movie_description}</p>
                    <button
                      value={movie.id}
                      name={this.movies}
                      onClick={this.goDetails}
                      className="btn btn-primary"
                    >
                      details
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
  render() {
    return (
      <div>
        {/* <!-- =============== START OF PAGE HEADER =============== --> */}
        <NavHeader page={"Movies"} />
        {/* <!-- =============== END OF PAGE HEADER =============== --> */}

        {/* <!-- =============== START OF MAIN =============== --> */}
        <main className="ptb100">
          <div className="container">
            {/* <!-- Start of Filters --> */}
            <div className="row mb50">
              <div className="col-md-6">
                {/* <!-- Layout Switcher --> */}
                <div className="layout-switcher">
                  <Link className="list active" to="/MoviesList">
                    <i className="fa fa-align-justify"></i>
                  </Link>
                  <Link className="list active" to="/MoviesGrid">
                    <i className="fa fa-th"></i>
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                {/* <!-- Sort by --> */}
                <div className="sort-by">
                  <div className="sort-by-select">
                    <select className="chosen-select-no-single">
                      <option>Default Order</option>
                      <option>Featured</option>
                      <option>Top Viewed</option>
                      <option>Top Rated</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>
                {/* <!-- Sort by / End --> */}
              </div>
            </div>
            {/* <!-- End of Filters --> */}

            {/* <!-- Start of Movie List --> */}
            <div className="row">{this.state.renderMovies}</div>
            {/* <!-- End of Movie List --> */}

            {/* <!-- Start of Pagination --> */}
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <nav className="pagination">
                  <ul>
                    <li>
                      <a href="#" className="current-page">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- End of Pagination --> */}
      </div>
    );
  }
}
