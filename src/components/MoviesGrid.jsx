import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";
export default class MoviesGrid extends Component {
  render() {
    return (
      <div>
        {/* <!-- =============== START OF PAGE HEADER =============== --> */}
        <NavHeader page={"Movies"}/>
        {/* <!-- =============== END OF PAGE HEADER =============== --> */}

        {/* <!-- =============== START OF MAIN =============== --> */}
        <main className="ptb100">
          <div className="container">
            {/* <!-- Start of Filters --> */}
            <div className="row mb50">
              <div className="col-md-6">
                {/* <!-- Layout Switcher --> */}
                <div className="layout-switcher">
                  <Link classNameName="list active" to="/MoviesList">
                    <i classNameName="fa fa-align-justify"></i>
                  </Link>
                  <Link classNameName="list active" to="/MoviesGrid">
                    <i classNameName="fa fa-th"></i>
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
            <div className="row">
              {/* <!-- Movie List Item --> */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="movie-box-2 mb30">
                  <div className="listing-container">
                    {/* <!-- Movie List Image --> */}
                    <div className="listing-image">
                      {/* <!-- Play Button --> */}
                      <div className="play-btn">
                        <a
                          href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                          className="play-video"
                          target="_blank"
                        >
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
                          target="_blank"
                        >
                          <i className="icon-heart"></i>
                        </a>

                        <a
                          href="#"
                          data-original-title="Share"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          className="share"
                          target="_blank"
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
                      <img src="assets/images/posters/poster-1.jpg" alt="" />
                    </div>

                    {/* <!-- Movie List Content --> */}
                    <div className="listing-content">
                      <div className="inner">
                        <h2 className="title">Star Wars</h2>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua enim ad minim veniam...
                        </p>

                        <a
                          href="movie-detail.html"
                          className="btn btn-main btn-effect"
                        >
                          details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Movie List Item --> */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="movie-box-2 mb30">
                  <div className="listing-container">
                    {/* <!-- Movie List Image --> */}
                    <div className="listing-image">
                      {/* <!-- Play Button --> */}
                      <div className="play-btn">
                        <a
                          href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                          className="play-video"
                        >
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
                          <i className="fa fa-star-half-o"></i>
                          <i className="fa fa-star-o"></i>
                        </div>
                      </div>

                      {/* <!-- Image --> */}
                      <img src="assets/images/posters/poster-2.jpg" alt="" />
                    </div>

                    {/* <!-- Movie List Content --> */}
                    <div className="listing-content">
                      <div className="inner">
                        <h2 className="title">The Brain</h2>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua enim ad minim veniam...
                        </p>

                        <a
                          href="movie-detail.html"
                          className="btn btn-main btn-effect"
                        >
                          details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Movie List Item --> */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="movie-box-2 mb30">
                  <div className="listing-container">
                    {/* <!-- Movie List Image --> */}
                    <div className="listing-image">
                      {/* <!-- Play Button --> */}
                      <div className="play-btn">
                        <a
                          href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                          className="play-video"
                        >
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
                      <img src="assets/images/posters/poster-3.jpg" alt="" />
                    </div>

                    {/* <!-- Movie List Content --> */}
                    <div className="listing-content">
                      <div className="inner">
                        <h2 className="title">The Mummy</h2>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua enim ad minim veniam...
                        </p>

                        <a
                          href="movie-detail.html"
                          className="btn btn-main btn-effect"
                        >
                          details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Movie List Item --> */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="movie-box-2 mb30">
                  <div className="listing-container">
                    {/* <!-- Movie List Image --> */}
                    <div className="listing-image" />

                    {/* <!-- Play Button --> */}
                    <div className="play-btn">
                      <a
                        href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                        className="play-video"
                      >
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
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                      </div>
                    </div>

                    {/* <!-- Image --> */}
                    <img src="assets/images/posters/poster-5.jpg" alt="" />
                  </div>

                  {/* <!-- Movie List Content --> */}
                  <div className="listing-content">
                    <div className="inner">
                      <h2 className="title">Daredevil</h2>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua enim ad minim veniam...
                      </p>

                      <a
                        href="movie-detail.html"
                        className="btn btn-main btn-effect"
                      >
                        details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Movie List Item --> */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="movie-box-2 mb30">
                <div className="listing-container">
                  {/* <!-- Movie List Image --> */}
                  <div className="listing-image">
                    {/* <!-- Play Button --> */}
                    <div className="play-btn">
                      <a
                        href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                        className="play-video"
                      >
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
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                      </div>
                    </div>

                    {/* <!-- Image --> */}
                    <img src="assets/images/posters/poster-6.jpg" alt="" />
                  </div>

                  {/* <!-- Movie List Content --> */}
                  <div className="listing-content">
                    <div className="inner">
                      <h2 className="title">Stranger Things</h2>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua enim ad minim veniam...
                      </p>

                      <a
                        href="movie-detail.html"
                        className="btn btn-main btn-effect"
                      >
                        details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Movie List Item --> */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="movie-box-2 mb30">
                <div className="listing-container">
                  {/* <!-- Movie List Image --> */}
                  <div className="listing-image">
                    {/* <!-- Play Button --> */}
                    <div className="play-btn">
                      <a
                        href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                        className="play-video"
                      >
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
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                    </div>

                    {/* <!-- Image --> */}
                    <img src="assets/images/posters/poster-8.jpg" alt="" />
                  </div>

                  {/* <!-- Movie List Content --> */}
                  <div className="listing-content">
                    <div className="inner">
                      <h2 className="title">The Flash</h2>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua enim ad minim veniam...
                      </p>

                      <a
                        href="movie-detail.html"
                        className="btn btn-main btn-effect"
                      >
                        details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </main>
        {/* <!-- End of Pagination --> */}
      </div>
    );
  }
}
