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
        <div className="container-fluid">
          {/* <!-- ====== Start of Navbar ====== --> */}
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index-2.html">
              {/* <!-- INSERT YOUR LOGO HERE --> */}
              <img
                src="assets/images/logo.svg"
                alt="logo"
                width="150"
                className="logo"
              />
              {/* <!-- INSERT YOUR WHITE LOGO HERE --> */}
              <img
                src="assets/images/logo-white.svg"
                alt="white logo"
                width="150"
                className="logo-white"
              />
            </a>

            <button
              id="mobile-nav-toggler"
              className="hamburger hamburger--collapse"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

            {/* <!-- ====== Start of #main-nav ====== --> */}
            <div className="navbar-collapse" id="main-nav">
              {/* <!-- ====== Start of Main Menu ====== --> */}
              <ul className="navbar-nav mx-auto" id="main-menu">
                {/* <!-- Menu Item --> */}
                <li className="nav-item dropdown">
                  <NavLink className="link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="link" to="/Testimonial">
                    Testimonial
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="link" to="/MoviesList">
                    MoviesList
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
          </nav>
        </div>
        <AfterWraper />
      </header>
    </div>
  );
  {
    /* <!-- ============== END OF HEADER NAVIGATION =============== -->;) */
  }
}

export default Header;
