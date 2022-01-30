import React, { Component } from "react";

export default class NavHeader extends Component {
  render() {
    return (
      <section
        className="page-header overlay-gradient"
        style={{
          background: " url(assets/images/posters/movie-collection.jpg)",
        }}
      >
        <div className="container">
          <div className="inner">
            {/* <h2 className="title">{this.props.page}</h2> */}
            <ol className="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>{this.props.page}</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
