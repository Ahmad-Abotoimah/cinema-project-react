import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

export default class MoviesList extends Component {
  state = {
    movies: "",
    renderMovies: "",
  };
  componentDidMount() {
    let str =
      "C:UsersOrangeDesktopcinema-project-reactpublicassetsimagesmovies/1643471653gold.png";
    console.log("assets/images/movies/" + str.split("/")[1]);
    axios
      .get("http://localhost/php-projects/react-data/movies.php/")
      .then((res) => {
        //Success alert
        this.setState({
          movies: res.data,
        });
        let allMovies = this.state.movies.map((movie) => (
          <div className="col-md-12 col-sm-12">
            <div className="movie-list-1 mb30">
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
                    >
                      <i className="icon-heart"></i>
                    </a>

                    <a
                      href="#"
                      data-original-title="Share"
                      data-toggle="tooltip"
                      data-placement="bottom"
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
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>

                  {/* <!-- Image --> */}
                  <img
                    src={
                      "assets/images/movies/" + movie.movie_image.split("/")[1]
                    }
                    alt="aaaa"
                  />
                </div>

                {/* <!-- Movie List Content --> */}
                <div className="listing-content">
                  <div className="inner">
                    <h2 className="title">{movie.movie_name}</h2>

                    <p>{movie.movie_description}</p>

                    <a
                      href="movie-detail.html"
                      className="btn btn-main btn-effect"
                      target="_blank"
                    >
                      details
                    </a>
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
        <section
          className="page-header overlay-gradient"
          style={{
            background: "url(assets/images/posters/movie-collection.jpg)",
          }}
        >
          <div className="container">
            <div className="inner">
              <h2 className="title">Movie List 1</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Movie List 1</li>
              </ol>
            </div>
          </div>
        </section>
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
            {/* <!-- End of Pagination --> */}
          </div>
        </main>
        {/* <!-- =============== END OF MAIN =============== --> */}
      </div>
    );
  }
}
