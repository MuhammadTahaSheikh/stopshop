import React, { useState, useEffect } from "react";
import "./Footer.css";
import blog1 from "../../Assets/footer_blog.png";
import blog from "../../Assets/blog_footer2.png";
import phone from "../../Assets/footer_phone.png";
import email from "../../Assets/footer_email.png";
import address from "../../Assets/footer_address.png";
import arrow from "../../Assets/link_arrow.png";
import phone_circle from "../../Assets/phone_circle.png";
import { Link } from "react-router-dom";
import Loader from "../Sign/Loader";
import axios from "axios";
import slugify from "slugify";

function Footer() {
  const [filteredRelatedPostData, setFilteredRelatedPostData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsCountPerPages, setitemsCountPerPages] = useState(0);
  const [lastpage, setlastpage] = useState(0);
  const [blogsdata, setblogsdata] = useState("");
  const extractDateFromUpdatedAt = (updated_at) => {
    if (updated_at) {
      const datePart = updated_at.split("T")[0];
      return datePart;
    }
    // Handle the case where updated_at is undefined or null
    return null; // or any other appropriate default value
  };

  useEffect(() => {
    getblogsdata();
  }, [currentPage]);
  const getblogsdata = () => {
    axios
      .get(`/api/posts?page=${currentPage}`)
      .then((res) => {
        setblogsdata(res.data);
        setFilteredRelatedPostData(res.data.data);
        setTotalPages(res?.data?.total);
        setitemsCountPerPages(res?.data?.per_page);
        setlastpage(res?.data?.last_page);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  };
  return (
    <div className="main_footer">
      <footer class="footer">
        <div class="container">
          <div className="upper_footer">
            <div class="d-flex flex-row ">
              <div class="col-xl-5 col-lg-5 upper_main pl-5">
                Get your Free Business Consultation
              </div>
              <div class="col-xl-2 col-lg-2">
                <img
                  className="phone_circle"
                  src={phone_circle}
                  alt="phonecircle"
                />
              </div>
              <div class="col-xl-4 col-lg-5">
                <p className="uperfotter_phone">+1 (959) 500-5594</p>
                <p className="uperfotter_phone1">info@stopshoprei.com</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-md-6 footer-col">
              <h4 className="footer_heading">About Company</h4>
              <p className="sub_contact_detail">
                StopShopREI is committed to staying ahead of the curve,
                continuously adapting to the ever-evolving real estate
                landscape. We envision a future where every real estate has
                access to the tools and knowledge they need to succeed in a
                competitive market.
              </p>
              <div class="social-links">
                <a href="https://www.facebook.com/stopshoprei" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UChVmY2CdcZGEVUq6Dh0WloQ"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/stopshoprei/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/stopshoprei/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 footer-col">
              <h4 className="footer_heading">Quick link</h4>
              <ul className="ql">
                <li>
                  {" "}
                  <Link to="/about-us" className="contact_ushref">
                    <a href="#">
                      <span>
                        <img
                          className="pr-2 ql_links"
                          src={arrow}
                          alt="arrow"
                        />
                      </span>
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/#id_feedback">
                    <span>
                      <img className="pr-2 ql_links" src={arrow} alt="arrow" />
                    </span>
                    Client Feedback
                  </a>
                </li>
                <li>
                  <a href="/#id_questions">
                    <span>
                      <img className="pr-2 ql_links" src={arrow} alt="arrow" />
                    </span>
                    Our Services
                  </a>
                </li>
                <li>
                  <Link to="/contact-us" className="contact_ushref">
                    <a href="/contact-us">
                      <span>
                        <img
                          className="pr-2 ql_links"
                          src={arrow}
                          alt="arrow"
                        />
                      </span>
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-md-6 footer-col">
              <h4 className="footer_heading">Recent Posts</h4>
              <div className="">
                {filteredRelatedPostData ? (
                  filteredRelatedPostData
                    .sort(
                      (a, b) => new Date(b.created_at) - new Date(a.created_at)
                    )
                    .slice(0, 2) // Slice the array to only show the first 2 items
                    .map((data, index) => (
                      <div className="related_post_div" key={data.id}>
                        <Link
                          to={`/blogs/${data.id}/${slugify(data.title, {
                            lower: true,
                          })}`}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-3">
                              <img
                                className="image_related_post"
                                src={data?.image_url}
                                alt="blog post"
                              />
                            </div>
                            <div className="col-lg-8 col-md-8 col-8">
                              <p className="desp_related_post">
                                {data?.created_at
                                  ? extractDateFromUpdatedAt(data?.created_at)
                                  : null}
                              </p>
                              <p className="heading_related_post1">
                                {data?.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                ) : (
                  <Loader />
                )}
              </div>
            </div>
            <div class="col-xl-3 col-md-6 footer-col">
              <h4 className="footer_heading">Contact Details</h4>
              <h2 className="sub_contact">Phone Number</h2>
              <div class="d-flex flex-row">
                <img class="p-2 contact_img" src={phone} alt="phone" />
                <div class="p-2 sub_contact_detail">+1 (959) 500-5594</div>
              </div>
              <h2 className="sub_contact">Email Address</h2>
              <div class="d-flex flex-row">
                <img class="p-2 contact_img" src={email} alt="email" />
                <div class="p-2 sub_contact_detail">info@stopshoprei.com</div>
              </div>
              <h2 className="sub_contact">Office Location</h2>
              <div class="d-flex flex-row">
                <img class="p-2 contact_img" src={address} alt="address" />
                <div class="p-2 sub_contact_detail">
                  16 Stonefield Drive, Waterbury Connecticut, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer_last p-3">
        © 2023 StopShopRei. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
