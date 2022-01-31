import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    dataFetched: [],
  };
  constructor(props) {
    super(props);

    this.setValue = this.setValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //fetch data from database
  componentDidMount() {
    axios
      .get("http://localhost/cinema-project-react/react-data/connect.php/")
      .then((res) => {
        this.setState({
          dataFetched: res.data,
        });
      });
  }

  setValue = (e) => {
    this.setState({ errors: "" });
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };
  //Form Submission
  onSubmit(e) {
    console.log(this.state.dataFetched);
    e.preventDefault();

    let valid = true;
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
      this.state.dataFetched.map((item) => {
        if (
          this.state.email === item.email &&
          this.state.password === item.password
        ) {
          this.setState({
            isLoged: true,
            user_data: {
              name: item.name,
              email: item.email,
            },
          });

          localStorage.setItem("is_logged",valid);
          localStorage.setItem("user_data", JSON.stringify(item));
        }
      });
      alert("success");
    }
    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
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
                  <h4 className="text-center">Login </h4>
                </div>

                <div className="small-dialog-content">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        onChange={this.setValue}
                        type="text"
                        className="form-control"
                        id="myEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        // ref="myEmail"
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
                        type="password"
                        className="form-control"
                        id="Username"
                        placeholder="Enter Password"
                        // ref="password"
                        name="password"
                        value={this.state.password}
                      />
                      <small className="text-danger">
                        {this.state.errors["password"]}
                      </small>
                    </div>
                    <button type="submit" className="btn btn-primary signupsubmit">
                      Login
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


