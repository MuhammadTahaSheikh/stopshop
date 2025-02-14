import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import batchlead from "../../Assets/Banner/batchlead.png";
import ringcentral from "../../Assets/Banner/ringcentral.png";
import zapier from "../../Assets/Banner/zapier.png";
import launchcontrol from "../../Assets/Banner/launch.png";
import callrail from "../../Assets/Banner/callrei.png";
import batchdialer from "../../Assets/Banner/batchdialer.png";
import twilio from "../../Assets/Banner/twilio.png";
import docusign from "../../Assets/Banner/docusign.png";
import clickup from "../../Assets/Banner/clickup.png";
import jotform from "../../Assets/Banner/jotform.png";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <h3 className="slide-text">
            <img src={batchlead} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={ringcentral} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={zapier} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={launchcontrol} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={callrail} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={batchdialer} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={twilio} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={docusign} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={clickup} alt="batchlead" />
          </h3>
        </div>
        <div className="slide">
          <h3 className="slide-text">
            <img src={jotform} alt="batchlead" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
