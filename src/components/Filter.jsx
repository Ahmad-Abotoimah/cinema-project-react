import React, { Component } from "react";
import axios from "axios";

export default class Filter extends Component {
  state = {
    categories: [],
    renderCategories: "",
  };
  componentDidMount() {
    axios
      .get("http://localhost/cinema-project-react/react-data/categories.php")
      .then((res) => {
        //Success alert
        this.setState({
          categories: res.data,
        });

        let allCategories = this.state.categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.category_name}
          </option>
        ));
        this.setState({
          renderCategories: allCategories,
        });
      });
  }
  render() {
    return (
      <div className="col-md-6">
        {/* <!-- Sort by --> */}
        <div className="sort-by">
          <div className="sort-by-select">
            <select
              className="chosen-select-no-single"
              onChange={this.filtration}
            >
              <option value="all" defaultValue>
                Select Category
              </option>
              {this.state.renderCategories}
            </select>
          </div>
        </div>
        {/* <!-- Sort by / End --> */}
      </div>
    );
  }
}
