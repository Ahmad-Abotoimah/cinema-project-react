import React, { Component } from "react";

export default class MovieDetails extends Component {
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
                  <img src="assets/images/posters/poster-1.jpg" alt="" />

                  <a
                    href="https://www.youtube.com/watch?v=Q0CbN8sfihY"
                    className="play-video"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>

                <div className="movie-details">
                  <h3 className="title">Star Wars: The Movie</h3>

                  <ul className="movie-subtext">
                    <li>PG-13</li>
                    <li>2h 32min</li>
                    <li>Action, Adventure, Fantasy</li>
                    <li>15 December 2017 (USA)</li>
                  </ul>

                  <a href="#" className="btn btn-main btn-effect">
                    trailer
                  </a>
                  <a href="#" className="btn btn-main btn-effect">
                    watch later
                  </a>
                  <a href="#" className="btn rate-movie">
                    <i className="icon-heart"></i>
                  </a>

                  <div className="rating mt10">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span>296 Ratings</span>
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============== End OF MOVIE DETAIL INTRO 2 =============== --> */}

        {/* <!-- =============== START OF MOVIE DETAIL MAIN SECTION =============== --> */}
        <section className="movie-detail-main ptb100">
          <div className="container">
            <div className="row">
              {/* <!-- Start of Movie Main --> */}
              <div className="col-lg-8 col-sm-12">
                <div className="inner pr50">
                  {/* <!-- Storyline --> */}
                  <div className="storyline">
                    <h3 className="title">Storyline</h3>

                    <p>
                      In ut odio libero, at vulputate urna. Nulla tristique mi a
                      massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                      commodo gravida. Cras suscipit, quam vitae adipiscing
                      faucibus, risus nibh laoreet odio, a porttitor metus eros
                      ut enim. Morbi augue velit, tempus mattis dignissim nec,
                      porta sed risus. Donec eget magna eu lorem tristique
                      pellentesque eget eu dui. Fusce lacinia tempor malesuada.
                      Ut lacus sapien, placerat a ornare nec, elementum sit amet
                      felis. Maecenas pretium lorem hendrerit eros sagittis
                      fermentum.
                    </p>
                  </div>

                  {/* <!-- Media --> */}
                  <div className="movie-media mt50">
                    <h3 className="title"> Photos & Videos</h3>

                    <ul className="image-gallery isotope">
                      <li className="element">
                        <a href="assets/images/blog/bloglist-1.jpg">
                          <img
                            src="assets/images/blog/bloglist-1.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/blog/bloglist-2.jpg">
                          <img
                            src="assets/images/blog/bloglist-2.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/other/home2-bg.jpg">
                          <img
                            src="assets/images/other/home2-bg.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/blog/bloglist-2.jpg">
                          <img
                            src="assets/images/blog/bloglist-2.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/blog/bloglist-1.jpg">
                          <img
                            src="assets/images/blog/bloglist-1.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/blog/bloglist-3.jpg">
                          <img
                            src="assets/images/blog/bloglist-3.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/blog/bloglist-1.jpg">
                          <img
                            src="assets/images/blog/bloglist-1.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/other/landscape.jpg">
                          <img
                            src="assets/images/other/landscape.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>

                      <li className="element">
                        <a href="assets/images/other/home2-bg.jpg">
                          <img
                            src="assets/images/other/home2-bg.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End of Movie Main --> */}

              {/* <!-- Start of Sidebar --> */}
              <div className="col-lg-4 col-sm-12">
                <div className="sidebar">
                  {/* <!-- Start of Details Widget --> */}
                  <aside className="widget widget-movie-details">
                    <h3 className="title">Details</h3>

                    <ul>
                      <li>
                        <strong>Release date: </strong>December 15, 2017
                      </li>
                      <li>
                        <strong>Director: </strong>
                        <a href="#">Rian Johnson</a>
                      </li>
                      <li>
                        <strong>Budget: </strong>200 million USD
                      </li>
                      <li>
                        <strong>Country: </strong>USA
                      </li>
                      <li>
                        <strong>Language: </strong>English
                      </li>
                      <li>
                        <strong>Production Co: </strong>
                        <a href="#">Lucasfilm</a>
                      </li>
                    </ul>
                  </aside>
                  {/* <!-- End of Details Widget --> */}

                  {/* <!-- Start of Details Widget --> */}
                  <aside className="widget widget-movie-cast">
                    <h3 className="title">Cast</h3>

                    <ul className="cast-wrapper">
                      <li>
                        <a href="celebrity-detail.html">
                          <span className="circle-img">
                            <img
                              src="assets/images/celebrities/celebrity1.jpg"
                              alt=""
                            />
                          </span>
                          <h6 className="name">Bryan Doe</h6>
                        </a>
                      </li>

                      <li>
                        <a href="celebrity-detail.html">
                          <span className="circle-img">
                            <img
                              src="assets/images/celebrities/celebrity2.jpg"
                              alt=""
                            />
                          </span>
                          <h6 className="name">Baron Saul</h6>
                        </a>
                      </li>

                      <li>
                        <a href="celebrity-detail.html">
                          <span className="circle-img">
                            <img
                              src="assets/images/celebrities/celebrity3.jpg"
                              alt=""
                            />
                          </span>
                          <h6 className="name">Ewan Actor</h6>
                        </a>
                      </li>

                      <li>
                        <a href="celebrity-detail.html">
                          <span className="circle-img">
                            <img
                              src="assets/images/celebrities/celebrity4.jpg"
                              alt=""
                            />
                          </span>
                          <h6 className="name">Nicole Beet</h6>
                        </a>
                      </li>
                    </ul>

                    <a
                      href="celebrities-list.html"
                      className="btn btn-main btn-effect mt20"
                    >
                      view all
                    </a>
                  </aside>
                  {/* <!-- End of Details Widget --> */}
                </div>
              </div>
              {/* <!-- End of Sidebar --> */}
            </div>
          </div>
        </section>
      </div>
    ));
    this.setState({});
  }

  render() {
    return <div>{"ddddddddddd"}</div>;
  }
}
