import React from "react";
// import { Helmet } from "react-helmet";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TestoSlider() {
  return (
    <div>
      {/* <Helmet>
        <script src="assets/js/owl.carousel.min.js"></script>
        </Helmet> */}
    
    <section classNameName="ptb100">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-12">
            {/* <!-- Start of Testimonial Slider --> */}
            {/* <div className="owl-carousel testimonial-slider"> */}
            <OwlCarousel
            className="testslider"
            items={1}
            >
              {/* <!-- === Start of Sliding Item 1 === --> */}
              <div className="item">
                <div className="testimonial-content">
                  <img src="assets/images/celebrities/celebrity1.jpg" style={{width: "20vw", height:"40vh", borderRadius: "50%" , margin: "25px 0px" }} alt="" />
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
                  <img src="assets/images/celebrities/celebrity2.jpg" style={{width: "20vw", height:"40vh", borderRadius: "50%" , margin: "25px 0px" }} alt="" />
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
                  <img src="assets/images/celebrities/celebrity6.jpg" style={{width: "20vw", height:"40vh", borderRadius: "50%" , margin: "25px 0px" }} alt="" />
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
              </OwlCarousel>
              {/* <!-- === End of Sliding Item 3 === --> */}
            </div>
            {/* <!-- End of Testimonial Slider --> */}
          </div>
          
        {/* </div> */}
      </div>
    </section>
    </div>
  );
}
