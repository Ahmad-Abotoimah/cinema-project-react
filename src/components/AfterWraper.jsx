import React from "react";
import SignUp from "./SignUp";
function AfterWraper() {
  return (
    <div>
      {/* <!-- =============== START OF GENERAL SEARCH WRAPPER =============== --> */}
      <div className="general-search-wrapper">
        <form className="general-search" role="search" method="get" action="#">
          <input type="text" placeholder="Type and hit enter..." />
          <span
            id="general-search-close"
            className="ti-close toggle-search"
          ></span>
        </form>
      </div>
      {/* <!-- =============== END OF GENERAL SEARCH WRAPPER =============== --> */}

      {/* <!-- =============== START OF LOGIN & REGISTER POPUP =============== --> */}
      <div
        id="login-register-popup"
        className="small-dialog zoom-anim-dialog mfp-hide"
      >
        {/* <!-- ===== Start of Signin wrapper ===== --> */}
        <div className="signin-wrapper">
          <div className="small-dialog-headline">
            <h4 className="text-center">Sign in</h4>
          </div>

          <div className="small-dialog-content">
            {/* <!-- Start of Login form --> */}
            <form id="cariera_login" method="post">
              <p className="status"></p>

              <div className="form-group">
                <label htmlFor="username">Username or Email *</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Your Username or Email *"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Your Password *"
                />
              </div>

              <div className="form-group">
                <div className="checkbox pad-bottom-10">
                  <input
                    id="check1"
                    type="checkbox"
                    name="remember"
                    value="yes"
                  />
                  <label htmlFor="check1">Keep me signed in</label>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Sign in"
                  className="btn btn-main btn-effect nomargin"
                />
              </div>
            </form>
            {/* <!-- End of Login form --> */}

            <div className="bottom-links">
              <span>
                Not a member?
                <a className="signUpClick">Sign up</a>
              </span>
              <a className="forgetPasswordClick pull-right">Forgot Password</a>
            </div>
          </div>
        </div>
        {/* <!-- ===== End of Signin wrapper ===== --> */}

        {/* <!-- ===== Start of Signup wrapper ===== --> */}
        <div className="signup-wrapper">
          <div className="small-dialog-headline">
            <h4 className="text-center">Sign Up</h4>
          </div>

          <div className="small-dialog-content">
            <SignUp />

            <div className="bottom-links">
              <span>
                Already have an account?
                <a className="signInClick">Sign in</a>
              </span>

              <a className="forgetPasswordClick pull-right">Forgot Password</a>
            </div>
          </div>
          {/* <!-- .small-dialog-content --> */}
        </div>
        {/* <!-- ===== End of Signup wrapper ===== --> */}

        {/* <!-- ===== Start of Forget Password wrapper ===== --> */}
        <div className="forgetpassword-wrapper">
          <div className="small-dialog-headline">
            <h4 className="text-center">Forgotten Password</h4>
          </div>

          <div className="small-dialog-content">
            {/* <!-- Start of Forger Password form --> */}
            <form id="forget_pass_form" action="#" method="post">
              <p className="status"></p>

              <div className="form-group">
                <label htmlFor="password">Email Address *</label>
                <input
                  type="email"
                  name="user_login"
                  className="form-control"
                  id="email3"
                  placeholder="Email Address *"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  value="Get New Password"
                  className="btn btn-main btn-effect nomargin"
                />
              </div>
            </form>
            {/* <!-- End of Forger Password form --> */}

            <div className="bottom-links">
              <a className="cancelClick">Cancel</a>
            </div>
          </div>
          {/* <!-- .small-dialog-content --> */}
        </div>
        {/* <!-- ===== End of Forget Password wrapper ===== --> */}
      </div>
      {/* <!-- =============== END OF LOGIN & REGISTER POPUP =============== --> */}

      {/* <!-- ===== Start of Back to Top Button ===== --> */}
      <div id="backtotop">
        <a href="#"></a>
      </div>
      {/* <!-- ===== End of Back to Top Button ===== --> */}
    </div>
  );
}

export default AfterWraper;
