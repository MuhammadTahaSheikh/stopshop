import React from "react";
import "./Works.css";
function Works() {
  return (
    <div>
      <div className="container">
        <div className="text-center pt-5">
          <h1 className="works_head">How It Works</h1>
          <p className="works_paragraph">
            Intrinsicly transition intermandated content through accurate
            manufactured <br />
            products. Uniquely exploit premier best.
          </p>
        </div>
        <div className="row text-center position-relative line_start_all">
          <div className="col-12">
            <div className="line-with-circles">
              <div className="circle-number start">1</div>
              <div className="circle-number middle">2</div>
              <div className="circle-number end yellow-circle">3</div>
            </div>
            <div className="line-yellow"></div>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <h1 className="point_heading">Connect With Us</h1>
            <p className="point_content">
              Book a FREE Strategy Session to chat with our sales advisors about
              your business needs.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <h1 className="point_heading">Customized Recruitment</h1>
            <p className="point_content">
              We'll create a company profile and craft a personalized
              recruitment plan to find a Remote Professional perfectly suited to
              your goals.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
            <h1 className="point_heading">Smooth Onboarding</h1>
            <p className="point_content">
              Once you've selected your Professional, our operations team will
              facilitate a seamless transition, giving you back valuable time to
              focus on your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
