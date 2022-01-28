import React from "react";

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
            {/* <!-- Start of Registration form --> */}
            <form id="cariera_registration" action="#" method="POST">
              <p className="status"></p>

              <div className="form-group">
                <label htmlFor="movify_user_login">Username</label>
                <input
                  name="movify_user_login"
                  id="movify_user_login"
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="movify_user_email">Email</label>
                <input
                  name="movify_user_email"
                  id="movify_user_email"
                  className="form-control"
                  type="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  name="movify_user_pass"
                  id="movify_password"
                  className="form-control"
                  type="password"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-main btn-effect nomargin"
                  value="Register"
                />
              </div>
            </form>
            {/* <!-- End of Registration form --> */}

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
