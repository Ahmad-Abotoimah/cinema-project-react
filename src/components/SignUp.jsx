import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.addFormData = this.addFormData.bind(this);
  }
  //Form Submission
  addFormData(evt) {
    evt.preventDefault();
    const fd = new FormData();
    fd.append("myUsername", this.refs.myUsername.value);
    fd.append("myEmail", this.refs.myEmail.value);
    fd.append("password", this.refs.password.value);

    axios
      .post("http://localhost/php-projects/react-data/sign.php", fd)
      .then((res) => {
        //Success alert
        alert("Success");
        this.myFormRef.reset();
      });
  }

  render() {
    return (
      <div className="wrapper">
        <section
          className="page-header overlay-gradient"
          style={{
            background: " url(assets/images/posters/movie-collection.jpg)",
          }}
        >
          <div className="container">
            <div className="inner">
              <h2 className="title">Contact Us</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Contact Us</li>
              </ol>
            </div>
          </div>
        </section>
        <main
          className="login-register-page"
          style={{
            backgroundImage: "url(assets/images/posters/movie-collection.jpg)",
          }}
        >
          <div className="container">
            {/* <!-- =============== START OF LOGIN & REGISTER POPUP =============== --> */}

            <div className="container mb-5  text-left w-50">
              <div className="mt-5">
                <div className="small-dialog-headline">
                  <h4 className="text-center">Sign Up</h4>
                </div>

                <div className="small-dialog-content">
                  <form
                    ref={(el) => (this.myFormRef = el)}
                    onSubmit={this.addFormData}
                  >
                    <div className="form-group">
                      <input
                        required
                        type="email"
                        className="form-control"
                        id="Email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        ref="myEmail"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="Username"
                        placeholder="Enter Username"
                        ref="myUsername"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        type="password"
                        className="form-control"
                        id="Username"
                        placeholder="Enter Password"
                        ref="password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
    {
      /* <!-- =============== END OF WRAPPER =============== -->; */
    }
  }
}
