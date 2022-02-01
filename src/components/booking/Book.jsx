import React, { Component } from "react";
import "./book.css";
import axios from "axios";
import "reactjs-popup/dist/index.css";
import swal from 'sweetalert'

import { Navigate } from "react-router-dom";

export class book extends Component {
  constructor(props) {
    super(props);
    this.addFormData = this.addFormData.bind(this);
    this.seatRef = React.createRef();
    this.timeRef = React.createRef();
    this.state = {
      valid: true,
      errors: {},
      seats: "",
      show_time: "",
      isLoged: true,
      movie_id: "",
      our_movie: "",
      times: "",
      timeRender: "",
      book_price: "",
      user: JSON.parse(localStorage.getItem("loggd_user"))
        ? JSON.parse(localStorage.getItem("loggd_user"))
        : "",
      redirectLogin: false,
      redirectBook: false,
      current_user: "",
    };
  }

  componentDidMount() {
    var login = this.state.redirectLogin;
    var book = this.state.redirectBook;

    // localStorage.setItem("is_logged",true);
    let checkLogin = JSON.parse(localStorage.getItem("is_logged"));

    if (checkLogin == true) {
      login = false;
      book = true;
    } else {
      login = true;
      book = false;
    }

    this.setState({
      redirectLogin: login,
      redirectBook: book,
    });
    let our_movie = JSON.parse(localStorage.getItem("movies"));
    let movie_id = JSON.parse(localStorage.getItem("movie_id"));
    let movie_times = our_movie[0].movie_daily_show.split(",");
    let time_Render = movie_times.map((item) => (
      <option value={item} key={item}>
        {" "}
        {item}{" "}
      </option>
    ));
    this.setState({
      movie_id: movie_id,
      our_movie: our_movie,
      times: movie_times,
      timeRender: time_Render,
      book_price: our_movie.movie_price,
    });
  }
  handleSeat = (e) => {
    this.setState({
      seats: e.target.value,
    });
  };
  handleTime = (e) => {
    this.setState({
      show_time: e.target.value,
    });
  };
  //Form Submission
  addFormData(evt) {
    evt.preventDefault();

    let movies = JSON.parse(localStorage.getItem("movies"));
    let movie_id = JSON.parse(localStorage.getItem("movie_id"));

    let selected_movie = movies.filter((movie) => movie.id == movie_id);
    console.log(this.state.user);
    console.log(this.state.user.email);
    console.log(selected_movie[0].movie_price);
    console.log(selected_movie[0].id);
    let fd = new FormData();
    fd.append("seats", this.state.seats);
    fd.append("show_time", this.state.show_time);
    fd.append("movie_price", selected_movie[0].movie_price);
    fd.append("movie_id", selected_movie[0].id);
    fd.append("user_id", 1); //local
    fd.append("user_email", this.state.user.email); //local

    axios
      .post("http://localhost/php-projects/react-data/booking.php", fd)
      .then((res) => {
        //Success alert
        this.myFormRef.reset();
      });

   
  }
  sweet=()=>{
    swal({

      title: "You are Register in Successfully ",
      text: "Welcome!",
      icon: "success",
      button: 'ok'
  });

  }

  render() {
    return (
      <div>
        {this.state.redirectLogin === true ? (
          <Navigate to="/Login" replace={true} />
        ) : (
          ""
        )}
        <div className="overlay"></div>
        <div className="bookingContainer">
          <div className="container">
            <div className="booking-details">
              <div className="row">
                <div className="col-lg-4 p-0 offset-lg-1">
                  <div className="img-container overflow-hidden">
                    <img
                      src="https://www.themoviedb.org/t/p/original/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-5 d-grid align-items-center">
                  <form
                    className="w-75 h-100 py-5 m-auto"
                    onSubmit={this.addFormData}
                    ref={(el) => (this.myFormRef = el)}
                  >
                    {/* <h1 className="h3 mb-3 fw-normal text-center form-title">Book Now</h1> */}
                    <div className="form-floating form-group mb-3" />
                    <div className="form-floating mb-3">
                      <label
                        htmlFor="floatingSelect"
                        className="fw-normal text-white "
                      >
                        Select Time
                      </label>
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                        name="movie_times"
                        ref={this.timeRef}
                        value={this.state.show_time}
                        onChange={this.handleTime}
                      >
                        <option value="1" defaultValue>
                          1
                        </option>
                        <option value="2" defaultValue>
                          2
                        </option>
                        <option value="3" defaultValue>
                          3
                        </option>
                        <option value="4" defaultValue>
                          4
                        </option>
                      </select>
                    </div>

                    <div className="form-floating mb-3">
                      <label
                        htmlFor="floatingSelect"
                        className="fw-normal text-white "
                      >
                        Select number of Seats
                      </label>
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating abel select example"
                        name="movie_times"
                        ref={this.seatRef}
                        value={this.state.seats}
                        onChange={this.handleSeat}
                      >
                        <option value="1" defaultValue>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                   
                        <button
                          className="w-100 btn btn-lg book-btn"
                          type="submit"
                         onClick={this.sweet}
                         
                        >
                          Book Now
                        </button>
                     
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default book;
