import React from "react";
import "../NavbarMain/Navbar.css";
import stopshop_logo from "../../Assets/stopshop_logo.png";
import { Link } from "react-router-dom";

import arrownav from "../../Assets/arrownav.png";
function Navbar() {
  return (
    <div>
      <div className="gen_sol">
        <div className="row m-0 p-0 navbarcontent_row">
          <div className="col-xl-1 col-lg-0"></div>
          <div className="col-xl-8 col-lg-12 col-md-12 col-12">
            <p className="navbar_main_head">Complete Real Estate </p>
            <p className="navbar_main_subhead">
              LEAD GENERATION{" "}
              <span className="navbar_main_subheadcolor">SOLUTIONS</span>
            </p>
            <p className="navbar_main_content">
              StopShopREI is Your Premier Digital Marketing and Virtual{" "}
              <span class="visible-br">
                <br />
              </span>
              <span>Assistance Hub</span>
            </p>
            <div className="mt-3">
              <Link to="/list-service">
                <button className="discover_btn">DISCOVER MORE</button>
              </Link>{" "}
              &nbsp;
              <button className="callnow_btn">
                <a className="call_btn" href="tel:+1 (959) 500-5594">
                  Call now
                  <img src={arrownav} alt="arrownav" />
                </a>
              </button>
            </div>
          </div>
          <div className="col-xl-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
