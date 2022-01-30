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
      .get("http://localhost/php-projects/react-data/connect.php/")
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

          localStorage.setItem("isLoged", this.state.isLoged);
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
                    <button type="submit" className="btn btn-primary">
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

// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// // import TextBox from "../core/textField/textField";
// import { Component } from "react";
// import axios from "axios";

// class Signup extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       data: [],
//       email: "",
//       password: "",
//       user_data: {},
//       errors: {},
//       isLoged: false,
//     };
//   }
//   componentDidMount() {
//     fetch("http://localhost/cinema-project-react/react-data/login.php")
//       .then((res) => res.json())
//       .then((data) => this.setState({ data: data }));
//   }

//   onChangeEmail(e) {
//     this.setState({
//       email: e.target.value,
//     });
//   }

//   onChangePassword(e) {
//     this.setState({
//       password: e.target.value,
//     });
//   }
//   onSubmit(e) {
//     e.preventDefault();
//     let valid = true;
//     let errors = {};

//     //Email Validation
//     if (this.state.email === "") {
//       errors["email"] = " required!";
//       valid = false;
//     }
//     //password Validation
//     if (this.state.password === "") {
//       errors["password"] = " required!";
//       valid = false;
//     }

//     if (valid === true) {
//       this.state.data.map((item) => {
//         if (
//           this.state.email === item.email &&
//           this.state.password === item.password
//         ) {
//           this.setState({
//             isLoged: true,
//             user_data: {
//               name: item.name,
//               email: item.email,
//               phone: item.phone,
//             },
//           });

//           localStorage.setItem("isLoged", this.state.isLoged);
//           localStorage.setItem(
//             "user_data",
//             JSON.stringify(this.state.user_data)
//           );
//         }
//       });
//     }
//     this.setState({ errors: errors });
//   }

//   render() {
//     return (
//       <div className="card">
//         <Card className="cardStyle">
//           <CardContent>
//             <div className="signupText">lOGIN</div>

//             <TextBox
//               label="Email"
//               value={this.state.email}
//               name="email"
//               onChange={this.onChangeEmail}
//             />
//             <small>{this.state.errors["email"]}</small>

//             <TextBox
//               label="Password"
//               value={this.state.password}
//               name="password"
//               onChange={this.onChangePassword}
//             />
//             <small>{this.state.errors["password"]}</small>
//           </CardContent>

//           <CardActions className="CardActions">
//             <Button
//               style={{ background: "black", color: "white" }}
//               onClick={this.onSubmit}
//             >
//               {" "}
//               lOGIN
//             </Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }

// export default Signup;
