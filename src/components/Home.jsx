import React, { Component } from "react";
import Search from "./Search";
import { Helmet } from "react-helmet";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <script src="assets/js/owl.carousel.min.js"></script>
        </Helmet>

        <section id="slider" className="full-slider">
          <div className="rev-slider-wrapper fullscreen-container overlay-gradient">
            {/* <div className="rev_slider fullscreenbanner"> */}{" "}
            {/* {/* ===== SLIDE NR. 1 ===== --> */}
            {/* {/* MAIN IMAGE --> */}
            <iframe
              id="myVideo"
              autoPlay
              muted
              loop
              width="650"
              height="2"
              src="https://www.youtube.com/embed/5FgZNCgVFkM?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&autohide=1&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* {/* LAYER NR. 1 --> */}
            <div
              className="tp-caption tp-resizeme"
          
            >
              START STREAMING NOW
            </div>
            {/* {/* ===== SLIDE NR. 2 ===== --> */}
         
          </div>
        </section>

        {/* {/* =============== START OF LATEST MOVIES SECTION =============== --> */}
        <section className="latest-movies ptb100">
          <div className="container">
            {/* {/* Start of row --> */}
            <div className="row">
              <div className="col-md-8">
                <h2 className="title whitelabel">Latest Movies</h2>
              </div>

              <div className="col-md-4 align-self-center text-right">
                <NavLink to="/MoviesGrid" className="btn btn-icon btn-main btn-effect">
                  view all
                  <i className="ti-angle-double-right"></i>
                </NavLink>
              </div>
            </div>
            {/* {/* End of row --> */}

            {/* {/* Start of Latest Movies Slider --> */}
       
            <OwlCarousel>
              {/* {/* === Start of Sliding Item 1 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-1.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start 7of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Star Wars</a>
                    </h4>
                    <span className="released">14 Dec 2017</span>
                  </div>
                  {/* {/* End of Movie Details --> */}

                  {/* {/* Start of Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>7.5 / 10</span>
                  </div>
                  {/* {/* End of Rating --> */}
                </div>
                {/* {/* End of Movie Box --> */}
              </div>
              {/* {/* === End of Sliding Item 1 === --> */}

              {/* {/* === Start of Sliding Item 2 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-2.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Brain</a>
                    </h4>
                    <span className="released">20 Dec 2017</span>
                  </div>
                  {/* {/* End of Movie Details --> */}

                  {/* {/* Start of Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>7.2 / 10</span>
                  </div>
                  {/* {/* End of Rating --> */}
                </div>
                {/* {/* End of Movie Box --> */}
              </div>
              {/* {/* === End of Sliding Item 2 === --> */}

              {/* {/* === Start of Sliding Item 3 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-3.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Mummy</a>
                    </h4>
                    <span className="released">9 Jun 2017</span>
                  </div>
                  {/* {/* End of Movie Details --> */}

                  {/* {/* Start of Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>5.5 / 10</span>
                  </div>
                  {/* {/* End of Rating --> */}
                </div>
                {/* {/* End of Movie Box --> */}
              </div>
              {/* {/* === End of Sliding Item 3 === --> */}

              {/* {/* === Start of Sliding Item 4 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-4.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Parrot</a>
                    </h4>
                    <span className="released">20 Jan 2017</span>
                  </div>
                  {/* {/* End of Movie Details --> */}

                  {/* {/* Start of Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>5.2 / 10</span>
                  </div>
                  {/* {/* End of Rating --> */}
                </div>
                {/* {/* End of Movie Box --> */}
              </div>
              {/* {/* === End of Sliding Item 4 === --> */}

              {/* {/* === Start of Sliding Item 5 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-1.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Star Wars</a>
                    </h4>
                    <span className="released">14 Dec 2017</span>
                  </div>
                  {/* {/* End of Movie Details --> */}

                  {/* {/* Start of Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>7.5 / 10</span>
                  </div>
                  {/* {/* End of Rating --> */}
                </div>
                {/* {/* End of Movie Box --> */}
              </div>
              {/* {/* === End of Sliding Item 5 === --> */}

              {/* {/* === Start of Sliding Item 6 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-2.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Brain</a>
                    </h4>
                    <span className="released">20 Dec 2017</span>
                  </div>
                  {/* {/* End of Movie Details --> */}

                  {/* {/* Start of Rating --> */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>7.2 / 10</span>
                  </div>
                  {/* {/* End of Rating --> */}
                </div>
                {/* {/* End of Movie Box --> */}
              </div>
              {/* {/* === End of 7Sliding Item 6 === --> */}
              {/* </div> */}
            </OwlCarousel>
            {/* {/* End of Latest Movies Slider --> */}
          </div>
          <Search />
        </section>
        {/* {/* =============== END OF LATEST MOVIES SECTION =============== --> */}

        {/* {/* =============== START OF UPCOMING MOVIES SECTION =============== --> */}
        <section
          className="upcoming-movies parallax ptb100"
          data-background="assets/images/posters/movie-collection.jpg"
          data-color="#3e4555"
          data-color-opacity="0.95"
        >
          <div className="container">
            {/* {/* Start of row --> */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title text-white">Upcoming Movies & TV Shows</h2>
              </div>
            </div>
            {/* {/* End of row --> */}

            {/* {/* Start of row --> */}
            <div className="row mt50">
              {/* {/* === Start of Upcoming Featured Movies & TV Shows === --> */}
              <div className="col-md-8">
                {/* {/* Start of Upcoming Featured Item --> */}
                <div className="movie-box-1 upcoming-featured-item">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img
                      src="assets/images/movies/upcoming-featured-item.jpg"
                      alt=""
                    />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Tomb Raider</a>
                    </h4>
                    <span className="released">Release Date: 15 Mar 2018</span>
                  </div>
                  {/* {/* End of Movie Details --> */}
                </div>
                {/* {/* End of Upcoming Featured Item --> */}
              </div>
              {/* {/* === End of Upcoming Featured Movies & TV Shows === --> */}

              {/* {/* === Start of Upcoming Movies & TV Shows === --> */}
              <div className="col-md-4">
                {/* {/* Start of Upcoming Item 1 --> */}
                <div className="movie-box-1 upcoming-item">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img
                      src="assets/images/movies/upcoming-item-1.jpg"
                      alt=""
                    />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Jungle</a>
                    </h4>
                  </div>
                  {/* {/* End of Movie Details --> */}
                </div>
                {/* {/* End of Upcoming Item 1 --> */}

                {/* {/* Start of Upcoming Item 2 --> */}
                <div className="movie-box-1 upcoming-item mt20">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img
                      src="assets/images/movies/upcoming-item-2.jpg"
                      alt=""
                    />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* {/* End of Buttons --> */}

                  {/* {/* Start of Movie Details --> */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Fast and Furious</a>
                    </h4>
                  </div>
                  {/* {/* End of Movie Details --> */}
                </div>
                {/* {/* End of Upcoming Item 2 --> */}
              </div>
              {/* {/* === End of Upcoming Movies & TV Shows === --> */}
            </div>
            {/* {/* End of row --> */}
          </div>
        </section>
        {/* {/* =============== END OF UPCOMING MOVIES SECTION =============== --> */}

        {/* {/* =============== START OF LATEST TV SHOW SECTION =============== --> */}
        <section className="latest-tvshows ptb100">
          <div className="container">
            {/* {/* Start of row --> */}
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <h2 className="title whitelabel">Latest TV Shows</h2>
              </div>

              <div className="col-md-4 col-sm-12 align-self-center text-right">
              <NavLink to="/MoviesGrid" className="btn btn-icon btn-main btn-effect">
                  view all
                  <i className="ti-angle-double-right"></i>
                </NavLink>
              </div>
            </div>
            {/* {/* End of row --> */}

            {/* {/* Start of Latest Movies Slider --> */}
            <div className="owl-carousel latest-tvshows-slider mt20">
              {/* {/* === Start of Sliding Item 1 === --> */}
              <div className="item">
                {/* {/* Start of Movie Box --> */}
                <div className="movie-box-1">
                  {/* {/* Start of Poster --> */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-5.jpg" alt="" />
                  </div>
                  {/* {/* End of Poster --> */}

                  {/* {/* Start of Buttons --> */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* End of Buttons */}

                  {/* Start of Movie Details -->
                            <div className="movie-details">
                                <h4 className="movie-title">
                                    <a href="movie-detail.html">Daredevil</a>
                                </h4>
                                <span className="released">19 Apr 2015</span>
                            </div>
                            {/* End of Movie Details */}

                  {/* Start of Rating */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>8.7 / 10</span>
                  </div>
                  {/* End of Rating */}
                </div>
                {/* End of Movie Box */}
              </div>
              {/* === End of Sliding Item 1 === */}

              {/* === Start of Sliding Item 2 === */}
              <div className="item">
                {/* Start of Movie Box */}
                <div className="movie-box-1">
                  {/* Start of Poster */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-6.jpg" alt="" />
                  </div>
                  {/* End of Poster */}

                  {/* Start of Buttons */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* End of Buttons */}

                  {/* Start of Movie Details */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Stranger Things</a>
                    </h4>
                    <span className="released">15 Jul 2016</span>
                  </div>
                  {/* End of Movie Details */}

                  {/* Start of Rating */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>9 / 10</span>
                  </div>
                  {/* End of Rating */}
                </div>
                {/* End of Movie Box */}
              </div>
              {/* === End of Sliding Item 2 === */}

              {/* === Start of Sliding Item 3 === */}
              <div className="item">
                {/* Start of Movie Box */}
                <div className="movie-box-1">
                  {/* Start of Poster */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-7.jpg" alt="" />
                  </div>
                  {/* End of Poster */}

                  {/* Start of Buttons */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* End of Buttons */}

                  {/* Start of Movie Details */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Luke Cage</a>
                    </h4>
                    <span className="released">30 Sep 2016</span>
                  </div>
                  {/* End of Movie Details */}

                  {/* Start of Rating */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>7.6 / 10</span>
                  </div>
                  {/* End of Rating */}
                </div>
                {/* End of Movie Box */}
              </div>
              {/* === End of Sliding Item 3 === */}

              {/* === Start of Sliding Item 4 === */}
              <div className="item">
                {/* Start of Movie Box */}
                <div className="movie-box-1">
                  {/* Start of Poster */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-8.jpg" alt="" />
                  </div>
                  {/* End of Poster */}

                  {/* Start of Buttons */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* End of Buttons */}

                  {/* Start of Movie Details */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">The Flash</a>
                    </h4>
                    <span className="released">7 Oct 2014</span>
                  </div>
                  {/* End of Movie Details */}

                  {/* Start of Rating */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <span>8 / 10</span>
                  </div>
                  {/* End of Rating */}
                </div>
                {/* End of Movie Box */}
              </div>
              {/* === End of Sliding Item 4 === */}

              {/* === Start of Sliding Item 5 === */}
              <div className="item">
                {/* Start of Movie Box */}
                <div className="movie-box-1">
                  {/* Start of Poster */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-5.jpg" alt="" />
                  </div>
                  {/* End of Poster */}

                  {/* Start of Buttons */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* End of Buttons */}

                  {/* Start of Movie Details */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Daredevil</a>
                    </h4>
                    <span className="released">19 Apr 2015</span>
                  </div>
                  {/* End of Movie Details */}

                  {/* Start of Rating */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>8.7 / 10</span>
                  </div>
                  {/* End of Rating */}
                </div>
                {/* End of Movie Box */}
              </div>
              {/* === End of Sliding Item 5 === */}

              {/* === Start of Sliding Item 6 === */}
              <div className="item">
                {/* Start of Movie Box */}
                <div className="movie-box-1">
                  {/* Start of Poster */}
                  <div className="poster">
                    <img src="assets/images/posters/poster-6.jpg" alt="" />
                  </div>
                  {/* End of Poster */}

                  {/* Start of Buttons */}
                  <div className="buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                      className="play-video"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  {/* End of Buttons */}

                  {/* Start of Movie Details */}
                  <div className="movie-details">
                    <h4 className="movie-title">
                      <a href="movie-detail.html">Stranger Things</a>
                    </h4>
                    <span className="released">15 Jul 2016</span>
                  </div>
                  {/* End of Movie Details */}

                  {/* Start of Rating */}
                  <div className="stars">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </div>
                    <span>9 / 10</span>
                  </div>
                  {/* End of Rating */}
                </div>
                {/* End of Movie Box */}
              </div>
              {/* === End of Sliding Item 6 === */}
            </div>
            {/* End of Latest Movies Slider */}
          </div>
        </section>
        {/* =============== END OF LATEST TV SHOW SECTION =============== */}

        {/* =============== START OF HOW IT WORKS SECTION =============== */}
        <section className="how-it-works bg-light ptb100">
          <div className="container">
            {/* Start of row */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">How it works?</h2>
                <h6 className="subtitle">
                  We will show you step by step how to start watching your
                  favorite movies & tv shows starting now!
                </h6>
              </div>
            </div>
            {/* End of row */}

            {/* Start of Timeline */}
            <div className="timeline">
              <span className="main-line"></span>

              {/* === Start of Timeline Step 1 === */}
              <div className="timeline-step row">
                <span className="timeline-step-btn">Step 1</span>

                {/* Start of Timeline Text */}
                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                  <div className="timeline-text">
                    <h3>Create an account</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                {/* End of Timeline Text */}

                {/* Start of Timeline Image */}
                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                  <div className="timeline-image">
                    <img src="assets/images/other/signup.png" alt="" />
                  </div>
                </div>
                {/* End of Timeline Image */}
              </div>
              {/* === End of Timeline Step 1 === */}

              {/* === Start of Timeline Step 2 === */}
              <div className="timeline-step row">
                <span
                  className="timeline-step-btn"
                  // style="color: #2a7bc2; background: #c1ddf5;"
                >
                  Step 2
                </span>

                {/* Start of Timeline Image */}
                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                  <div className="timeline-image">
                    <img src="assets/images/other/pricing.png" alt="" />
                  </div>
                </div>
                {/* End of Timeline Image */}

                {/* Start of Timeline Text */}
                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                  <div className="timeline-text-right">
                    <h3>Choose your Plan</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                {/* End of Timeline Text */}
              </div>
              {/* === End of Timeline Step 2 === */}

              {/* === Start of Timeline Step 3 === */}
              <div className="timeline-step row">
                <span
                  className="timeline-step-btn"
                  // style="color: #eb305f; background: #f9c8d4;"
                >
                  Step 3
                </span>

                {/* Start of Timeline Text */}
                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                  <div className="timeline-text">
                    <h3>Enjoy Movify</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                {/* End of Timeline Text */}

                {/* Start of Timeline Image */}
                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                  <div className="timeline-image">
                    <img src="assets/images/other/enjoy-movify.png" alt="" />
                  </div>
                </div>
                {/* End of Timeline Image */}
              </div>
              {/* === End of Timeline Step 3 === */}
            </div>
            {/* End of Timeline */}
          </div>
        </section>
        {/* =============== END OF HOW IT WORKS SECTION =============== */}

        {/* =============== END OF COUNTER SECTION =============== */}
        <section className="counter bg-main-gradient ptb50 text-center">
          <div className="container">
            <div className="row">
              {/* 1st Count up item */}
              <div className="col-md-4 col-sm-12">
                <span className="counter-item" data-from="0" data-to="964">
                  0
                </span>
                <h4>Movies</h4>
              </div>

              {/* 2nd Count up item */}
              <div className="col-md-4 col-sm-12">
                <span className="counter-item" data-from="0" data-to="743">
                  0
                </span>
                <h4>TV Shows</h4>
              </div>

              {/* 3rd Count up item */}
              <div className="col-md-4 col-sm-12">
                <span className="counter-item" data-from="0" data-to="1207">
                  0
                </span>
                <h4>Users</h4>
              </div>
            </div>
          </div>
        </section>
        {/* =============== END OF COUNTER SECTION =============== */}

        {/* =============== END OF BECOME PREMIUM SECTION =============== */}
        <section className="become-premium ptb100">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12 mb50">
                <h3 className="title whitelabel">Become a Premium Member</h3>
                <h6 className="subtitle whitelabel">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis.
                </h6>
              </div>

              <div className="col-md-7 col-sm-12">
                {/* Start of Pricing Table */}
                <div className="pricing-table-1">
                  {/* ===== Start of Featured Holder ===== */}
                  <div className="features-holder">
                    <div className="features-title">
                      <h5 className="whitelabel">What You Get</h5>
                    </div>

                    {/* Start of Features List */}
                    <div className="features-list-wrapper">
                      <ul className="features-list">
                        {/* List Item */}
                        <li>
                          <h6>HD available</h6>
                        </li>

                        {/* List Item */}
                        <li>
                          <h6>Ultra HD available</h6>
                        </li>

                        {/* List Item */}
                        <li>
                          <h6>Unlimited Movies and TV shows</h6>
                        </li>

                        {/* List Item */}
                        <li>
                          <h6>Watch on your phone & tablet</h6>
                        </li>

                        {/* List Item */}
                        <li>
                          <h6>Download and watch offline</h6>
                        </li>

                        {/* List Item */}
                        <li>
                          <h6>Screens you can watch</h6>
                        </li>

                        {/* List Item */}
                        <li>
                          <h6>First Month Free</h6>
                        </li>
                      </ul>
                    </div>
                    {/* Start of Features List */}
                  </div>
                  {/* ===== End of Featured Holder ===== */}

                  {/* ===== Start of Price Table Featured ===== */}
                  <div className="price-table price-table-featured">
                    {/* Start of Table Header */}
                    <div className="table-header">
                      <h5>Premium</h5>
                    </div>
                    {/* End of Table Header */}

                    {/* Start Table Content */}
                    <div className="table-content">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>5</li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                      </ul>
                    </div>
                    {/* End Table Content */}

                    {/* Start Table Footer */}
                    <div className="table-footer">
                      <div className="price-holder">
                        <span className="currency">$</span>
                        <span className="price">19.99</span>
                        <span className="time">/ mon</span>
                      </div>
                      <a
                        href="#"
                        target="_self"
                        className="btn btn-main btn-effect"
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                    {/* End Table Footer */}
                  </div>
                  {/* ===== End of Price Table Featured ===== */}

                  {/* ===== Start of Price Table ===== */}
                  <div className="price-table">
                    {/* Start of Table Header */}
                    <div className="table-header">
                      <h5>Basic</h5>
                    </div>
                    {/* End of Table Header */}

                    {/* Start Table Content */}
                    <div className="table-content">
                      <ul>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                        </li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                        </li>
                        <li>
                          <i className="fa fa-times"></i>
                        </li>
                        <li>1</li>
                        <li>
                          <i className="fa fa-check"></i>
                        </li>
                      </ul>
                    </div>
                    {/* End Table Content */}

                    {/* Start Table Footer */}
                    <div className="table-footer">
                      <div className="price-holder">
                        <span className="currency">$</span>
                        <span className="price">9.99</span>
                        <span className="time">/ mon</span>
                      </div>
                      <a
                        href="#"
                        target="_self"
                        className="btn btn-main btn-effect"
                      >
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                    {/* End Table Footer */}
                  </div>
                  {/* ===== End of Price Table ===== */}
                </div>
                {/* End of Pricing Table */}
              </div>
            </div>
          </div>
        </section>
        {/* =============== END OF BECOME PREMIUM SECTION =============== */}

        {/* =============== END OF BLOG SECTION =============== */}
        <section className="blog bg-light ptb100">
          <div className="container">
            {/* Start of row */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Latest News</h2>
                <h6 className="subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy consectetuer adipiscing.
                </h6>
              </div>
            </div>
            {/* End of row */}

            {/* Start of row */}
            <div className="row mt50">
              {/* 1st Blog Item */}
              <div className="col-md-4">
                <div className="bloglist-post-holder shadow-hover">
                  {/* Blog Post Thumbnail */}
                  <a
                    href="blog-post-detail.html"
                    className="bloglist-thumb-link hover-link"
                  >
                    <div
                      className="bloglist-post-thumbnail"
                      style={{
                        background: "url(assets/images/blog/bloglist-1.jpg)",
                      }}
                    ></div>
                  </a>

                  {/* Blog Post Text Wrapper */}
                  <div className="bloglist-text-wrapper">
                    {/* Author Avatar */}
                    <span className="circle-img bloglist-avatar">
                      <img
                        src="assets/images/user.png"
                        width="50"
                        height="50"
                        alt="author img"
                      />
                    </span>

                    <h4 className="bloglist-title">
                      <a href="blog-post-detail.html">Top 10 Action Movies</a>
                    </h4>

                    <div className="bloglist-meta">
                      <i className="fa fa-calendar"></i> 01/02/2018
                    </div>

                    <div className="bloglist-excerpt">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis...
                      </p>
                      <a href="#" className="btn btn-main btn-effect">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd Blog Item */}
              <div className="col-md-4">
                <div className="bloglist-post-holder shadow-hover">
                  {/* Blog Post Thumbnail */}
                  <a
                    href="blog-post-detail.html"
                    className="bloglist-thumb-link hover-link"
                  >
                    <div
                      className="bloglist-post-thumbnail"
                      style={{
                        background: "url(assets/images/blog/bloglist-2.jpg)",
                      }}
                    ></div>
                  </a>

                  {/* Blog Post Text Wrapper */}
                  <div className="bloglist-text-wrapper">
                    {/* Author Avatar */}
                    <span className="circle-img bloglist-avatar">
                      <img
                        src="assets/images/user.png"
                        width="50"
                        height="50"
                        alt="author img"
                      />
                    </span>

                    <h4 className="bloglist-title">
                      <a href="blog-post-detail.html">Oscar Awards</a>
                    </h4>

                    <div className="bloglist-meta">
                      <i className="fa fa-calendar"></i> 01/02/2018
                    </div>

                    <div className="bloglist-excerpt">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis...
                      </p>
                      <a href="#" className="btn btn-main btn-effect">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd Blog Item */}
              <div className="col-md-4">
                <div className="bloglist-post-holder shadow-hover">
                  {/* Blog Post Thumbnail */}
                  <a
                    href="blog-post-detail.html"
                    className="bloglist-thumb-link hover-link"
                  >
                    <div
                      className="bloglist-post-thumbnail"
                      style={{
                        background: "url(assets/images/blog/bloglist-3.jpg)",
                      }}
                    ></div>
                  </a>

                  {/* Blog Post Text Wrapper */}
                  <div className="bloglist-text-wrapper">
                    {/* Author Avatar */}
                    <span className="circle-img bloglist-avatar">
                      <img
                        src="assets/images/user.png"
                        width="50"
                        height="50"
                        alt="author img"
                      />
                    </span>

                    <h4 className="bloglist-title">
                      <a href="blog-post-detail.html">Top Upcoming Movies</a>
                    </h4>

                    <div className="bloglist-meta">
                      <i className="fa fa-calendar"></i> 01/02/2018
                    </div>

                    <div className="bloglist-excerpt">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis...
                      </p>
                      <a href="#" className="btn btn-main btn-effect">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of row */}
          </div>
        </section>
        {/* =============== END OF BLOG SECTION =============== */}

        {/* =============== END OF SUBSCRIBE SECTION =============== */}
        <section className="subscribe bg-light2 ptb100">
          <div className="container">
            {/* Start of row */}
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="title">Join Movify Now!</h2>
                <h6 className="subtitle">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy consectetuer adipiscing.
                </h6>
              </div>
            </div>
            {/* End of row */}

            {/* Start of row */}
            <div className="row justify-content-center">
              <div className="col-md-7 col-sm-10 col-12">
                {/* Subscribe Form */}
                <form action="#" className="mailchimp mt50" noValidate>
                  {/* Form */}
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="email"
                        name="EMAIL"
                        className="form-control"
                        id="mc-email"
                        placeholder="Your Email"
                        autoComplete="off"
                      />
                      <label htmlFor="mc-email"></label>
                      <button type="submit" className="btn btn-main btn-effect">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End of row */}
          </div>
        </section>
        {/* =============== END OF SUBSCRIBE SECTION =============== */}
      </div>
    );
  }
}
