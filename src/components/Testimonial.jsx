import PropTypes from "prop-types";
import React, { Component } from "react";
import TestoSlider from "./TestoSlider";
import NavHeader from "./NavHeader";
export default class Testimonial extends Component {
  render() {
    return (
      <div>
        {/* // <!-- =============== START OF PAGE HEADER =============== --> */}
        <NavHeader page={"Testimonials"}/>
        {/* // <!-- =============== END OF PAGE HEADER =============== --> */}

        {/* // <!-- =============== START OF TESTIMONIALS =============== --> */}
        <TestoSlider />
        {/* // <!-- =============== END OF TESTIMONIALS =============== --> */}
      </div>
    );
  }
}
