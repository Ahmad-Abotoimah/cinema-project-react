import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.addFormData = this.addFormData.bind(this);
    this.emailRef = React.createRef();
    this.nameRef = React.createRef();
    this.passRef = React.createRef();
    this.state = {
      valid: true,
      errors: {},
      name: "",
      email: "",
      password: "",
      isLoged: false,
      redirect:false,
      loged_user:{}
    };
  }
 
  setValue = (e) => {
    this.setState({ errors: "" });
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  //Form Submission
  addFormData(evt) {
    evt.preventDefault();
    let valid = true;
    let isloged = false;
    let errors = {};
    //define regex
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

    //Email Validation
    if (this.state.email === "") {
      errors["email"] = "This field is required!";
      valid = false;
    } else if (!emailRegex.test(this.state.email)) {
      errors["email"] = " not valid email , should be example@example.com";
      valid = false;

    }

    if (this.state.name == "") {
      valid = false;

      errors["name"] = " required!";
    }

    //password this.state.validation
    if (this.state.password == "") {
      errors["password"] = " required!";
      valid = false;
    } else if (!passRegex.test(this.state.password)) {
      errors["password"] = "not valid password, should be more than 6 char";
      valid = false;
    }

    this.setState({ errors: errors });
    if (valid === true) {
      var fd = new FormData();
      fd.append("myUsername", this.nameRef.current.value);
      fd.append("myEmail", this.emailRef.current.value);
      fd.append("password", this.passRef.current.value);

      let loged_user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      localStorage.setItem("loggd_user", JSON.stringify(loged_user));
      localStorage.setItem("is_logged", true);
    
      this.setState({
        loged_user:loged_user
      })
      axios
        .post("http://localhost/php-projects/react-data/sign.php", fd)
        .then((res) => {
          //Success alert
          alert("Success");
          this.myFormRef.reset();
        });
        this.setState({
          redirect:true
        })
      this.setState({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  render() {
    return (
      <div>
            {this.state.redirect === true ? <Navigate to="/" replace={true}   /> :   ""
        }
        <section
          style={{
            background: " url(assets/images/posters/movie-collection.jpg)",
          }}
        >
    
        </section>
        <main
          className="login-register-page"
          style={{
            backgroundImage: "url(assets/images/posters/movie-collection.jpg)",
          }}
        >
          <div className="container">
            {/* <!-- =============== START OF LOGIN & REGISTER POPUP =============== --> */}

            <div className="container mb-5  text-left w-50 signup">
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
                        onChange={this.setValue}
                        type="text"
                        className="form-control"
                        id="myEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        ref={this.emailRef}
                        name="email"
                        value={this.state.email}
                      />
                      <small className="text-danger">
                        {this.state.errors["email"]}
                      </small>
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.setValue}
                        type="text"
                        className="form-control"
                        id="Username"
                        placeholder="Enter Username"
                        ref={this.nameRef}
                        name="name"
                        value={this.state.name}
                      />
                      <small className="text-danger">
                        {this.state.errors["name"]}
                      </small>
                    </div>
                    <div className="form-group">
                      <input
                        onChange={this.setValue}
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        ref={this.passRef}
                        name="password"
                        value={this.state.password}
                      />
                      <small className="text-danger">
                        {this.state.errors["password"]}
                      </small>
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-primary signupsubmit"
                    >
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
