import "./login.css";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextBox from "../core/textField/textField";
import { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      data: [],
      email: "",
      password: "",
      user_data: {},
      errors: {},
      isLoged: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost/reactProject/login.php")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    let valid = true;
    let errors = {};

    //Email Validation
    if (this.state.email === "") {
      errors["email"] = " required!";
      valid = false;
    }
    //password Validation
    if (this.state.password === "") {
      errors["password"] = " required!";
      valid = false;
    }

    if (valid === true) {
      this.state.data.map((item) => {
        if (
          this.state.email === item.email &&
          this.state.password === item.password
        ) {
          this.setState({
            isLoged: true,
            user_data: {
              name: item.name,
              email: item.email,
              phone: item.phone,
            },
          });

          localStorage.setItem("isLoged", this.state.isLoged);
          localStorage.setItem(
            "user_data",
            JSON.stringify(this.state.user_data)
          );
        }
      });
    }
    this.setState({ errors: errors });
  }

  render() {
    return (
      <div className="card">
        <Card className="cardStyle">
          <CardContent>
            <div className="signupText">lOGIN</div>

            <TextBox
              label="Email"
              value={this.state.email}
              name="email"
              onChange={this.onChangeEmail}
            />
            <small>{this.state.errors["email"]}</small>

            <TextBox
              label="Password"
              value={this.state.password}
              name="password"
              onChange={this.onChangePassword}
            />
            <small>{this.state.errors["password"]}</small>
          </CardContent>

          <CardActions className="CardActions">
            <Button
              style={{ background: "black", color: "white" }}
              onClick={this.onSubmit}
            >
              {" "}
              lOGIN
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Login;
