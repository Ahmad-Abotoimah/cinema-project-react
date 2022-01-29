import React, { Component } from "react";
import NavHeader from "./NavHeader";
export default class Contact extends Component {
  render() {
    return (
      <div>
        
        {/* <!-- =============== START OF PAGE HEADER =============== --> */}
        <NavHeader page={"Contact Us"}/>
        {/* <!-- =============== END OF PAGE HEADER =============== --> */}

        {/* <!-- =============== START OF MAIN =============== --> */}
        <main className="contact-page ptb100">
          <div className="container">
            <div className="row">
              {/* <!-- Start of Contact Details --> */}
              <div className="col-md-4 col-sm-12">
                <h3 className="title">Info</h3>

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
                <form id="contact-form">
                  {/* <!-- contact result --> */}
                  <div id="contact-result"></div>
                  {/* <!-- end of contact result --> */}

                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      className="form-control input-box"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      autoComplete="off"
                    />
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      className="form-control input-box"
                      type="email"
                      name="email"
                      placeholder="your-email@movify.com"
                      autoComplete="off"
                    />
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      className="form-control input-box"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      autoComplete="off"
                    />
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group mb20">
                    <textarea
                      className="form-control textarea-box"
                      rows="8"
                      name="message"
                      placeholder="Type your message..."
                    ></textarea>
                  </div>

                  {/* <!-- Form Group --> */}
                  <div className="form-group text-center">
                    <button className="btn btn-main btn-effect" type="submit">
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
