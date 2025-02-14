import React from "react";
import "./NavbarUpdate.css";
import banner from "../../Assets/NavbarUpdate/banner.png";
import stopshop from "../../Assets/NavbarUpdate/stopshop.png";
import tickIcon from "../../Assets/NavbarUpdate/tickIcon.png";
function NavbarUpdate() {
  return (
    <div className="navbar_background">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-8 col-">
            <p className="experience_navbar">
              Experience the Remote Revolution
            </p>
            <p className="elevate_realestate">
              Elevate Your Real Estate Game with Our Trusted Remote
              Professionals.
            </p>
            <p class="red-line"></p>

            <p className="explore_realestate">
              Explore How Our Remote Professionals (RP's) Are Transforming Real
              Estate <br /> Ventures for Thousands Today
            </p>
            <p className="welcome_family">Welcome to the Family</p>
            <div className="d-flex pl-2">
              {" "}
              <div class="horizontal-line mr-2 mt-1"></div>
              <p className="hire_professional">
                Hire Your Remote Professional Today and <br />{" "}
                <span className="save68">Save 68% </span> on Overhead Costs from
                Day One.
              </p>
            </div>
            <div className="row arrow_img">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm col-12 ">
                <div className="banner_img">
                  <img src={stopshop} />
                  <p className="stopshop_support pl-2">
                    StopshopREI LLC Thrives in Supporting Diverse Industries,
                    Such as
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm col-12 ">
                <ul className="list-content">
                  <li className="list-icon">
                    <img src={tickIcon} alt="Tick" className="list-icon" />
                    Realtors/Agents
                  </li>
                  <li className="list-icon">
                    <img src={tickIcon} alt="Tick" className="list-icon" />{" "}
                    Brokers
                  </li>
                  <li className="list-icon">
                    <img src={tickIcon} alt="Tick" className="list-icon" />{" "}
                    Investors
                  </li>
                  <li className="list-icon">
                    <img src={tickIcon} alt="Tick" className="list-icon" />{" "}
                    Wholesalers
                  </li>
                  <li className="list-icon">
                    <img src={tickIcon} alt="Tick" className="list-icon" />{" "}
                    Multi-Family Ventures
                  </li>
                  <li className="list-icon">
                    <img src={tickIcon} alt="Tick" className="list-icon" /> Land
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8 col-">
            <div className="notepad_back">
              <p className="free_consultancy pt-5">Book a Free Consultancy</p>
              <p className="commited_consultancy">
                We're committed to fostering a remote workforce that seamlessly
                integrates with our clients' operations. Through top-notch
                customer service and cost-effective solutions, we pave the way
                for exponential business growth.
              </p>
              <div className="d-flex justify-content-center mt-5">
                <button className="btn_schedule">Schedule Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarUpdate;
