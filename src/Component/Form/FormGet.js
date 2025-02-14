import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormGet.css";
import { Link } from "react-router-dom";

import emailform from "./../../Assets/email_svgform.svg";
import phoneform from "./../../Assets/phone_svgform.svg";
import clockform from "./../../Assets/office_svgform.svg";
import locationform from "./../../Assets/location_svgform.svg";
import NavbarMain from "../NavbarUpper/NavbarMain";

import Footer from "../FooterStop/Footer";
import Map from "../Contact/Map";

function FormGet() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const checkboxRef = useRef(null);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "Contact Us",
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      document.getElementById("recaptchaError").innerText =
        "Please complete the reCAPTCHA verification.";
      return;
    }
    setLoading(true);

    fetch("https://workflow-automation.podio.com/catch/1034ep4y28lgxh3", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      timeout: 10000,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setLoading(false);
        setFormData({
          type: "Contact Us",
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        window.grecaptcha.reset();
        toast.success("Form was Submitted Successfully");
        setNotificationMessage("Request successful!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle other errors

        setLoading(false);
        setFormData({
          type: "Contact Us",
          name: "",
          email: "",
          phone: "",
          website: "", // Update this line
          message: "", // Update this line
        });
        window.grecaptcha.reset();
        toast.success("Form was Submitted Successfully");
        setNotificationMessage("Request successful!");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      });
  };

  useEffect(() => {
    // Load reCAPTCHA when component mounts
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      // Clean up reCAPTCHA script when component unmounts
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="main_div_form_get_in_touch">
      <NavbarMain />
      <div className="contact_back">
        <div className="list_building mt-5 mb-5 pt-4">
          Contact Us
          <div>
            <Link to="/">
              {" "}
              <span className="subHead_home">Home</span>
            </Link>{" "}
            <span className="arrow_sub pr-3">&#62;</span>
            <span className="subHead_about">Contact Us</span>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="formmain">
          <div>
            <div className="boxform mb-2">
              <div class="d-flex flex-row">
                <div class="p-2 ">
                  <img src={phoneform} alt="location" />
                </div>
                <div className="ml-3">
                  <div class="p-2 phone_numbercontact ">Telephone Number</div>
                  <div class="p-2 phone_numbercontact1">+1 (959) 500-5594</div>
                </div>
              </div>
            </div>
            <div className="boxform mb-2">
              {" "}
              <div class="d-flex flex-row">
                <div class="p-2 ">
                  <img src={locationform} alt="location" />
                </div>
                <div className="ml-3">
                  <div class="p-2 phone_numbercontact ">Company Location</div>
                  <div class="p-2 phone_numbercontact1">
                    16 Stonefield Drive, Waterbury Connecticut, USA
                  </div>
                </div>
              </div>
            </div>
            <div className="boxform mb-2">
              {" "}
              <div class="d-flex flex-row">
                <div class="p-2 ">
                  <img src={emailform} alt="location" />
                </div>
                <div className="ml-3">
                  <div class="p-2 phone_numbercontact ">Our Email Address</div>
                  <div class="p-2 phone_numbercontact1">
                    info@stopshoprei.com
                  </div>
                </div>
              </div>
            </div>
            <div className="boxform">
              {" "}
              <div class="d-flex flex-row">
                <div class="p-2 ">
                  <img src={clockform} alt="location" />
                </div>
                <div className="ml-3">
                  <div class=" phone_numbercontact ">Office Time</div>
                  <div class=" phone_numbercontact1">
                    Mon - Fri <br />
                    (9AM - 5PM EST )
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap"></div>
          <div className="boxform1">
            <h1 className="get_quote">Get a Quote</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit libero
              facilisis donec laoreetridiculus{" "}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="white_side_form_main_div1">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      className="input_style_name_form1"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <input
                      className="input_style_name_form1"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <input
                      className="input_style_name_form1"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                    />
                  </div>
                </div>

                <textarea
                  className="textarea_form_get_in_touch1"
                  value={formData.message}
                  name="message"
                  placeholder="Text Message"
                  onChange={handleChange}
                  required
                  type="text"
                />

                <div
                  className="g-recaptcha"
                  data-sitekey="6LcFP4kpAAAAALqux4QlCObuxveZAXODgy1yL0rn"
                  data-size="normal"
                  style={{
                    transform: "scale(0.77)",
                    WebkitTransform: "scale(0.77)",
                    transformOrigin: "0 0",
                    WebkitTransformOrigin: "0 0",
                    maxWidth: "100%",
                  }}
                ></div>

                <div className="text-danger" id="recaptchaError"></div>
                <div className="btn_submit">
                  <button
                    className="button_style_form_get_in_touch1"
                    type="submit"
                    disabled={loading}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Map />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default FormGet;
