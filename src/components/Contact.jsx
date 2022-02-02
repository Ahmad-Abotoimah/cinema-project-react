import React, { Component } from "react";
import swal from "sweetalert";
import axios from "axios";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.addFormData = this.addFormData.bind(this);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.subjectRef = React.createRef();
    this.msgRef = React.createRef();
    this.state = {
      valid: true,
      errors: {},
      name: "",
      email: "",
      subject: "",
      msg: "",
      isLoged: true,
      movie_id: "",
      our_movie: "",
      times: "",
      timeRender: "",
      book_price: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSubject = (e) => {
    this.setState({
      subject: e.target.value,
    });
  };
  handleMsg = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };
  //Form Submission
  addFormData(evt) {
    evt.preventDefault();

    // let movies = JSON.parse(localStorage.getItem("movies"));
    // let movie_id = JSON.parse(localStorage.getItem("movie_id"));
    // let selected_movie = movies.filter((movie) => movie.id == movie_id);

    let fd = new FormData();
    fd.append("user_name", this.state.name);
    fd.append("user_email", this.state.email);
    fd.append("subject", this.state.subject);
    fd.append("msg", this.state.msg);
    axios
      .post("http://localhost/react-data/contact.php", fd)
      .then((res) => {
        //Success alert
        this.myFormRef.reset();
      });
  }
  sweet = () => {
    swal({
      title: "Thanks For Contact Us!",
      text: "We Well Back To You Within 3 days!",
      icon: "success",
      button: "ok",
    });
  };

  render() {
    return (
      <div>
        {/* <!-- =============== START OF MAIN =============== --> */}
        <main className="contact-page ptb100 contactForm">
          <div className="container">
            <div className="row">
              {/* <!-- Start of Contact Details --> */}
              <div className="col-md-4 col-sm-12">
                <h3 className="title text-left">Info</h3>

                <div className="details-wrapper">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}

                  <ul className="contact-details">
                    <li>
                      <i className="icon-phone"></i>
                      <strong>Phone:</strong>
                      <span>(123) 123-456 </span>
                    </li>
                    <li>
                      <i className="icon-printer"></i>
                      <strong>Fax:</strong>
                      <span>(123) 123-456 </span>
                    </li>
                    <li>
                      <i className="icon-globe"></i>
                      <strong>Web:</strong>
                      <span>
                        <a href="#">www.movify.com</a>
                      </span>
                    </li>
                    <li>
                      <i className="icon-paper-plane"></i>
                      <strong>E-Mail:</strong>
                      <span>
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="1a73747c755a77756c737c6334797577"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Start of Contact Details --> */}

              {/* <!-- Start of Contact Form --> */}
              <div className="col-md-8 col-sm-12">
                <h3 className="title">Contact Form</h3>

                {/* <!-- Start of Contact Form --> */}
                <form
                  id="contact-form"
                  ref={(el) => (this.myFormRef = el)}
                  onSubmit={this.addFormData}
                >
                  {/* <!-- contact result --> */}
                  <div id="contact-result"></div>
                  {/* <!-- end of contact result --> */}

                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      id="user_name"
                      ref={this.nameRef}
                      className="form-control input-box"
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      autoComplete="off"
                      onChange={this.handleName}
                      value={this.state.name}
                    />
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      id="user_email"
                      ref={this.emailRef}
                      className="form-control input-box"
                      type="email"
                      name="user_email"
                      placeholder="your-email@movify.com"
                      autoComplete="off"
                      onChange={this.handleEmail}
                      value={this.state.email}
                    />
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      id="subject"
                      ref={this.subjectRef}
                      className="form-control input-box"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      autoComplete="off"
                      onChange={this.handleSubject}
                      value={this.state.subject}
                    />
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group mb20">
                    <textarea
                      id="msg"
                      ref={this.msgRef}
                      className="form-control textarea-box"
                      rows="8"
                      name="msg"
                      placeholder="Type your message..."
                      onChange={this.handleMsg}
                      value={this.state.msg}
                    ></textarea>
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group text-center">
                    <button
                      className="btn btn-main btn-effect"
                      type="submit"
                      onClick={this.sweet}
                    >
                      Send message
                    </button>
                  </div>
                </form>
                {/* <!-- End of Contact Form --> */}
              </div>
              {/* <!-- Start of Contact Form --> */}
            </div>
          </div>
        </main>
        {/* <!-- =============== END OF MAIN =============== --> */}
      </div>
    );
  }
}
