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
      
      {/* <!-- ===== End of Back to Top Button ===== --> */}
    </div>
    </div>
  );
}

export default AfterWraper;
