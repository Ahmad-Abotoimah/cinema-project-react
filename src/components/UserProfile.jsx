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
  };
  //fetch data from database
  componentDidMount() {
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
    });
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
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{this.state.user.name}</h4>
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
