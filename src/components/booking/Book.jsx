import React, { Component } from 'react';
import "./book.css"

export class book extends Component {
  render() {
    return (
        <body>
                <div class="overlay"></div>
    <div class="page-container text-center min-vh-100 d-grid align-items-center">
      <div class="container">
        {/* <!-- <h1 class="page-title">Book Movie</h1> --> */}
        <div class="row">
          <div class="col-lg-4 p-0 offset-lg-1">
            <div class="img-container overflow-hidden">
              <img src="https://www.themoviedb.org/t/p/original/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-5 d-grid align-items-center">
            <form class="w-75 h-100 py-5 m-auto">
              <h1 class="h3 mb-3 fw-normal text-center form-title">Book Now</h1>
              <div class="form-floating form-group mb-3" />
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Name</label>
            
              {/* <!-- <div class="form-floating form-group mb-3"> */}
                {/* <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div> --> */}
              <div class="form-floating form-group mb-3">
                <input type="number" class="form-control" id="floatingPassword" placeholder="Phone Number" />
                <label for="floatingPassword">Phone Number</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                  <option value="1" selected>Movie One</option>
                  <option value="2">Movie Two</option>
                  <option value="3">Movie Three</option>
                  <option value="4">Movie Four</option>
                </select>
                <label for="floatingSelect">Select Movie</label>
              </div>
              <button class="w-100 btn btn-lg book-btn" type="submit">Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
        </body>
    );
  }
}

export default book;
