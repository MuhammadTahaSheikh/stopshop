import React, { useState, useEffect } from "react";
import Navbar from "./NavbarMain/Navbar";
import NavbarMain from "./NavbarUpper/NavbarMain";
import ServiceTest from "./ServiceMain/ServiceTest";
import Pricing from "./PricingPlan/Pricing";
import Testimonial from "./TestimonailSection/Testimonial";
import Faq from "./FrequentlyAQ/Faq";
import Footer from "./FooterStop/Footer";


function AllCOmponent() {
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
  return (
    <div>
     
      <NavbarMain />
      <Navbar />

      <div id="id_questions">
        {" "}
        <ServiceTest />
      </div>
      <Pricing />
      <div id="id_feedback">
        <Testimonial />
      </div>
      <Faq />
      <div id="contact_us">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default AllCOmponent;
