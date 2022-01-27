import React from "react";

function Search() {
  const handleSearch = (e) => {
    console.log(e);
  };
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="search-form-wrapper search-form-rev">
      <div className="container">
        {/* <!-- ===== START OF SEARCH FORM ===== -->*/}
        <form id="search-form-1" onSubmit={handleSubmit()}>
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-10 col-12">
              <div className="form-group">
                <input
                  name="search-keyword"
                  type="text"
                  id="search-keyword"
                  value=""
                  className="form-control"
                  placeholder="Enter Movies or Series Title"
                  onChange={handleSearch()}
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

export default Search;
