import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
export default class UserProfile extends Component {
  state = {
    dataFetched: [],
    user: JSON.parse(localStorage.getItem("loggd_user"))
      ? JSON.parse(localStorage.getItem("loggd_user"))
      : "",
    movies: JSON.parse(localStorage.getItem("movies"))
      ? JSON.parse(localStorage.getItem("movies"))
      : "",
    renderBooks: "",
    weather: JSON.parse(localStorage.getItem("weather"))
      ? JSON.parse(localStorage.getItem("weather"))
      : "",
    status: "",
    day: new Date().toString().slice(0, 3),
    todayDate: new Date().toString().slice(3, 15),
  };
  //fetch data from database
  componentDidMount() {
    let fetched = "";
    let date = new Date();
    let today = date.toString().slice(0, 3);
    let todayDate = date.toString().slice(3, 15);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=+Amman+&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
      )
      .then((res) => {
        localStorage.setItem("weather", JSON.stringify(res.data));
      });
    axios
      .get("http://localhost/php-projects/react-data/booking_details.php/")
      .then((res) => {
        let x = res.data;
        let userId = JSON.parse(localStorage.getItem("loggd_user")).email;
        console.log(JSON.parse(localStorage.getItem("loggd_user")));
        let user_books = x.filter((book) => book.user_email == userId);
        localStorage.setItem("user_books", JSON.stringify(user_books));
      });
    let z = JSON.parse(localStorage.getItem("user_books")).map((item) => (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>
          {
            this.state.movies.filter((movie) => movie.id == item.movie_id)[0]
              .movie_name
          }
        </td>
        <td>{item.seats}</td>
        <td>{item.book_price}</td>
        <td>{item.show_time}</td>
        <td>{item.created_at.split(" ")[0]}</td>
      </tr>
    ));
    this.setState({
      renderBooks: z,
      wether: JSON.parse(localStorage.getItem("weather")),
    });
    console.log(this.state.weather);
    if (this.state.weather.main.temp < 20) {
      this.setState({
        status: "cold",
      });
    } else if (
      this.state.weather.main.temp > 20 &&
      this.state.weather.main.temp < 30
    ) {
      this.setState({
        status: "cool",
      });
    } else {
      this.setState({
        status: "Sunny",
      });
    }
  }
  render() {
    return (
      <div>
        <div className="container userprofile">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center pt-5">
                      <img
                        style={{ margin: "-5vh", marginBottom: "10px" }}
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h5 style={{ marginTop: "-3vh" }}>
                          {this.state.user.name}
                        </h5>
                        <h6>
                          {"Today is : " +
                            this.state.day +
                            " -" +
                            this.state.todayDate}
                        </h6>
                        <small>
                          {"Temp In Amman Now is : " +
                            this.state.weather.main.temp +
                            " c"}
                        </small>
                        <br />
                        <small>
                          {this.state.status == "cold"
                            ? "OOPS The Climate Today is  " +
                              this.state.status +
                              " Take care! "
                            : "Nice! the climate today is : " +
                              this.state.status +
                              "injoy!"}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body new-card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary pt-3">
                        {this.state.user.name}
                      </div>
                    </div>
                    <hr />
                    <br />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary pt-3">
                        {this.state.user.email}
                      </div>
                    </div>
                    <hr />
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Movie Name</th>
                  <th scope="col">Number of Seats</th>
                  <th scope="col">Ticket Price</th>
                  <th scope="col">Show Time</th>
                  <th scope="col">Book date</th>
                </tr>
              </thead>
              <tbody>{this.state.renderBooks}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
