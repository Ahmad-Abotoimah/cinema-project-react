import React from "react";

export default function TestoSlider() {
  return (
    <section className="ptb100">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Start of Testimonial Slider --> */}
            <div className="testimonial-slide">
              {/* <!-- === Start of Sliding Item 1 === --> */}
              <div className="item">
                <div className="testimonial-content">
                  <img src="assets/images/celebrities/celebrity1.jpg" />
                  <div className="testimonial-comment">
                    <h4>Brayan Doe</h4>
                    <span className="testimonial-info">CEO, Google</span>
                    <p>
                      Quo rem cumque facere modi beatae. Deleniti nisi, repellat
                      quae aspernatur consequatur consequuntur, fugit asperiores
                      delectus beatae. Quae veniam, quidem cupiditate quia? Ut
                      iste deleniti.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- === End of Sliding Item 1 === --> */}

              {/* <!-- === Start of Sliding Item 2 === --> */}
              <div className="item">
                <div className="testimonial-content">
                  <img src="assets/images/celebrities/celebrity2.jpg" alt="" />
                  <div className="testimonial-comment">
                    <h4>Baron Saul</h4>
                    <span className="testimonial-info">CEO, Google</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- === End of Sliding Item 2 === --> */}

              {/* <!-- === Start of Sliding Item 3 === --> */}
              <div className="item">
                <div className="testimonial-content">
                  <img src="assets/images/celebrities/celebrity6.jpg" alt="" />
                  <div className="testimonial-comment">
                    <h4>Tiffany Smith</h4>
                    <span className="testimonial-info">CEO, Google</span>
                    <p>
                      Quo rem cumque facere modi beatae. Deleniti nisi, repellat
                      quae aspernatur consequatur consequuntur, fugit asperiores
                      delectus beatae. Quae veniam, quidem cupiditate quia? Ut
                      iste deleniti.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- === End of Sliding Item 3 === --> */}
            </div>
            {/* <!-- End of Testimonial Slider --> */}
          </div>
        </div>
      </div>
    </section>
  );
}
