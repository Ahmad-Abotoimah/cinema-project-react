import React from "react";
// import { Login } from './Login';
import Signup  from './signup/Signup';

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
        {/* <Login /> */}
        {/* <!-- ===== End of Signin wrapper ===== --> */}

        {/* <!-- ===== Start of Signup wrapper ===== --> */}
        <Signup/>
        {/* <!-- ===== End of Signup wrapper ===== --> */}

        {/* <!-- ===== Start of Forget Password wrapper ===== --> */}
      
      {/* <!-- ===== End of Back to Top Button ===== --> */}
    </div>
    </div>
  );
}

export default AfterWraper;
