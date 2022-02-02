import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  state = {
    movies: "",
  };
  componentDidMount() {
    axios
      .get("http://localhost/php-projects/react-data/movies.php/")
      .then((res) => {
        //Success alert
        this.setState({
          movies: res.data,
        });
        this.state.movies
          .filter((movies) => movies.movie_name === "ahmad")
          .map((movies) => console.log(movies));
      });
  }

  handleSearch = () => {
    // alert("Search");
  };
  handleSubmit = () => {
    console.log();
  };
  render() {
    return (
      <div className="search-form-wrapper search-form-rev">
        <div className="container">
          {/* <!-- ===== START OF SEARCH FORM ===== -->*/}
          <form id="search-form-1" onSubmit={this.handleSubmit()}>
            <div className="row justify-content-center">
              <div className="col-md-8 col-sm-10 col-12">
                <div className="form-group">
                  <input
                    name="search-keyword"
                    type="text"
                    id="search-keyword"
                    className="form-control"
                    placeholder="Enter Movies or Series Title"
                    onChange={this.handleSearch()}
                  />
                  <button type="submit" className="btn btn-main btn-effect">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* <!-- ===== END OF SEARCH FORM ===== --> */}
        </div>
      </div>
    );
  }
}
