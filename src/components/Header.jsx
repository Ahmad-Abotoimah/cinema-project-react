import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import Login from "./Login";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: JSON.parse(localStorage.getItem("is_logged")),
      li: "SignUp",
      path: "/SignUp",
      renderLi: "",
      userProfileLi: "",
      loginLi: "",
    };
  }
  componentDidMount = () => {
    if (this.state.login == true) {
      this.setState({
        renderLi: (
          <NavLink className="link" to="/Logout">
            Logout
          </NavLink>
        ),
        userProfileLi: (
          <NavLink className="link" to="/UserProfile">
            Profile
          </NavLink>
        ),
      });
    } else {
      this.setState({
        renderLi: (
          <li className="nav-item logout">
            <NavLink className="link" to="/SignUp">
              SignUp
            </NavLink>
          </li>
        ),
        userProfileLi: "",
        loginLi: (
          <NavLink className="link" to="/Login">
            Login
          </NavLink>
        ),
      });
    }
  };

  render() {
    return (
      <div>
        {/* <!-- =============== START OF PRELOADER =============== --> */}
        <div className="loading">
          <div className="loading-inner">
            <div className="loading-effect">
              <div className="object"></div>
            </div>
          </div>
        </div>
        {/* <!-- =============== END OF PRELOADER =============== --> */}

        {/* <!-- =============== START OF RESPONSIVE - MAIN NAV =============== --> */}
        <nav id="main-mobile-nav"></nav>
        {/* <!-- =============== END OF RESPONSIVE - MAIN NAV =============== --> */}
        <header className="header header-fixed header-transparent text-white">
          <nav className="navbar navbar-expand-lg navbar-light backgroundnav">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                {/* <!-- INSERT YOUR LOGO HERE --> */}
                <img
                  src="assets/images/logo7.png"
                  alt="logo"
                  width="50"
                  className="logo"
                  style={{ marginLeft: "70px" }}
                />

                <img
                  src="assets/images/logo7.png"
                  alt="white logo"
                  width="50"
                  className="logo-white"
                  style={{ marginLeft: "70px" }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" id="main-menu">
                  {/* <!-- Menu Item --> */}
                  <li className="nav-item">
                    <NavLink className="link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="link" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="link" to="/Testimonial">
                      Testimonial
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="link" to="/AboutUs">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="link" to="/MoviesGrid">
                      Movies
                    </NavLink>
                  </li>
                  <li className="nav-item">{this.state.userProfileLi}</li>
                  <li className="nav-item">{this.state.renderLi}</li>
                  <li className="nav-item">{this.state.loginLi}</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
