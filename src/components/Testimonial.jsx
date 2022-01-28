import PropTypes from "prop-types";
import React, { Component } from "react";
import TestoSlider from "./TestoSlider";
export default class Testimonial extends Component {
  render() {
    return (
      <div>
        {/* // <!-- =============== START OF PAGE HEADER =============== --> */}
        <section
          className="page-header overlay-gradient"
          style={{
            background: "url(assets/images/posters/movie-collection.jpg)",
          }}
        >
          <div className="container">
            <div className="inner">
              <h2 className="title">Testimonials</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Testimonials</li>
              </ol>
            </div>
          </div>
        </section>
        {/* // <!-- =============== END OF PAGE HEADER =============== --> */}

        {/* // <!-- =============== START OF TESTIMONIALS =============== --> */}
        <TestoSlider />
        {/* // <!-- =============== END OF TESTIMONIALS =============== --> */}
      </div>
    );
  }
}
