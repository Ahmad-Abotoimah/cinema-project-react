import React, { Component } from "react";
import "./book.css";

export class book extends Component {
  render() {
    return (
      <div className="bookingContainer">
        <div className="overlay"></div>
        <div className="page-container text-center min-vh-100 d-grid align-items-center">
          <div className="container">
            {/* <!-- <h1 className="page-title">Book Movie</h1> --> */}
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
                <form className="w-75 h-100 py-5 m-auto">
                  <h1 className="h3 mb-3 fw-normal text-center form-title">
                    Book Now
                  </h1>
                  <div className="form-floating form-group mb-3" />
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Name</label>

                  {/* <!-- <div className="form-floating form-group mb-3"> */}
                  {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div> --> */}
                  <div className="form-floating form-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="floatingPassword">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option value="1" defaultValue>
                        Movie One
                      </option>
                      <option value="2">Movie Two</option>
                      <option value="3">Movie Three</option>
                      <option value="4">Movie Four</option>
                    </select>
                    <label htmlFor="floatingSelect">Select Movie</label>
                  </div>
                  <button className="w-100 btn btn-lg book-btn" type="submit">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default book;
