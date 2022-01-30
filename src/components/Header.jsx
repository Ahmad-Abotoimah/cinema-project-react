import React from "react";
import AfterWraper from "./AfterWraper";
import { NavLink } from "react-router-dom";

function Header() {
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
            <a className="navbar-brand" href="index-2.html">
              {/* <!-- INSERT YOUR LOGO HERE --> */}
              <img
                src="assets/images/logo.svg"
                alt="logo"
                width="150"
                className="logo"
              />

              <img
                src="assets/images/logo-white.svg"
                alt="white logo"
                width="150"
                className="logo-white"
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
                  <NavLink className="link" to="/MoviesGrid">
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/UserProfile">
                    User Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="link" to="/SignUp">
                    SignUp
                  </NavLink>
                </li>
                <li className="nav-item m-auto">
                  <a
                    href="#login-register-popup"
                    className="btn btn-main btn-effect login-btn popup-with-zoom-anim"
                  >
                    <i className="icon-user"></i>login
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        <AfterWraper />
      </header>
    </div>
  );
  {
    /* <!-- ============== END OF HEADER NAVIGATION =============== -->;) */
  }
}

export default Header;
