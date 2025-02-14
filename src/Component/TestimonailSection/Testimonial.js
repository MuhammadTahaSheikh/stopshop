import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import feedback from "../../Assets/client_feedback.png";
import jay from "../../Assets/testimonial_img/Jay Halliburton.jpg";
import joe from "../../Assets/testimonial_img/Joe Field, We Close Fast, LLC.jpg";
import jeremy from "../../Assets/testimonial_img/Jeremy Smith.jpg";
import adam from "../../Assets/testimonial_img/Adam Chodes.jpg";
import Michael from "../../Assets/testimonial_img/Michael Moughames.jpg";
import abel from "../../Assets/testimonial_img/Abel Gervacio Jr. .jpg";
import sheena from "../../Assets/testimonial_img/person.png";

const Testimonial = () => {
  return (
    <div className="main_testimonial">
      <div className="container gtco-testimonials pt-5">
        <h2 className="client_head">
          Testimonials from Our Valued Clients Who Experienced Our REI Services
        </h2>
        <p className="client_subhead">
          Discover what clients of StopShopREI LLC have to say about how our
          cutting-edge REI marketing and <br /> CRM solutions have
          revolutionized their real estate ventures, optimized their processes,
          and elevated their success to new levels.
        </p>
        <OwlCarousel
          className="owl-carousel owl-theme"
          loop
          center
          margin={0}
          responsiveClass
          nav={true} // Show navigation arrows
          responsive={{
            0: { items: 1, nav: true },
            680: { items: 2, nav: true, loop: false },
            1000: { items: 3, nav: true },
          }}
        >
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={abel} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Abel Gervacio Jr, <br />
                  <span className="feedback_desig">
                    {" "}
                    Real Neighborhood Offer, LLC
                  </span>
                </h5>
                <p class="card-text feedback_content">
                  "A really big thank to StopShopREI LLC. They have done a
                  fantastic job with our back-end operations. They're basically
                  a one-stop shop for everything you need from an administrative
                  standpoint. They actually handle a lot of our back-end
                  operations, including the smartphone capability within Podio.
                  They handle everything within Podio. On top of that, they have
                  a fully staffed team available for you to use at any time of
                  the day whenever you have a question. Mohammed and his team
                  have done a great job. We've been able to scale the SMS side
                  of our marketing and have everything on the back end run as
                  smoothly as possible. So thank you, StopShopREI and your
                  team."{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={jay} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Jay Halliburton <br />
                  <span className="feedback_desig"> Jay Buys Detroit, LLC</span>
                </h5>
                <p class="card-text feedback_content">
                  "Hey guys, it's Jay with Jay Buys Detroit and I'm here to talk
                  to you about StopShopREI LLC. I've been working with these
                  guys for maybe. A year or so and in that year they have scaled
                  my business tremendously. They're perfect at lead management,
                  they're good at marketing campaigns, they're good at list
                  building, then it goes on and on. They help me with my Podio
                  CRM. They were able to expand those and I just want to say
                  that if you are even considering working with these guys, they
                  will improve your business. I'm still a client. I'm still
                  happy work with these guys daily, man. I couldn't imagine my
                  business without them. So shout out StopShopREI LLC"{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={joe} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Joe Field <br />
                  <span className="feedback_desig"> We Close Fast, LLC </span>
                </h5>
                <p class="card-text feedback_content">
                  "I've been working with StopShopREI LLC for about 2-3 years.
                  We've been consistently crushing it. We've been sending
                  thousands and thousands of texts a day. They know how to use
                  launch control. They know how to use batch leads. You know
                  what I mean? I don't know any other company that's better than
                  them when it comes to SMS Marketing & Cold Calling like it's
                  crazy. So you know what I mean? We're getting ready to scale
                  our texting team up, scale up the texting with StopShopREI
                  LLC. So I highly recommend them for sure. They won't let you
                  down."{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={jeremy} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Jeremey Smith
                  <br />
                  <span className="feedback_desig">
                    {" "}
                    Connect Real Estate, LLC{" "}
                  </span>
                </h5>
                <p class="card-text feedback_content">
                  "Highly recommend the StopShopREI LLC. They've been awesome
                  with our company. They've enhanced what we've done, what we're
                  doing in the real estate world helped us tremendously with SMS
                  Marketing, Cold Calling & KPIs and doing some of the tedious
                  tasks that we didn't have the time to do. But these guys are
                  experts at it, so we let them do it. So definitely recommend
                  the StopShopREI LLC"{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={adam} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Adam Chodes
                  <br />
                  <span className="feedback_desig">
                    {" "}
                    Atom Property Group, LLC{" "}
                  </span>
                </h5>
                <p class="card-text feedback_content">
                  "So I just want to quickly thank the whole StopShopREI LLC
                  organization. They've done a tremendous job from a development
                  standpoint and satisfying all the needs of, you know, my
                  business from a real estate standpoint and more so I can
                  definitely see the value that can be shared outside of just
                  real estate. So very much appreciate all the efforts from you
                  know his development team and their marketing efforts and
                  things of that nature. So I think they're just a strong
                  organization to work with and I'm very grateful. To have that
                  opportunity to work with Mohammed, his team, and have this
                  great partnership come to fruition and see how things play
                  out"{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={sheena} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Sheena Murray <br />
                  <span className="feedback_desig">
                    {" "}
                    Seven Pine Investment, LLC
                  </span>
                </h5>
                <p class="card-text feedback_content">
                  "Hi everyone, I just want to give a testimonial on StopShopREI
                  LLC and my experience with their group. Since I started, their
                  team has been very hands-on with me, taking the time to walk
                  me through and understand all the technology and the entire
                  process. He explained why all these software and technologies
                  are important, which was crucial for me as this is my first
                  time wholesaling. They made me comfortable with understanding
                  the upfront costs and establishing a monthly budget. The team
                  was very helpful in helping me understand the different
                  software and how they fit into the overall plan. Within two to
                  three weeks, I was already generating good leads from the time
                  I signed on and started this wholesaling journey. Since then,
                  the leads have continued to come in through positive text
                  messaging campaigns and cold calling campaigns. So far, I have
                  a couple of deals about to go under contract, one that is
                  already under contract. The team has also been very helpful in
                  creating a website to send interested buyers to. The overall
                  experience, including the weekly meetings, consistent
                  communication, and continuous support, has been fantastic. The
                  team also has lots of best practices and tools to help people,
                  whether you're seasoned or just starting out, to really get
                  your business up and running and to scale up once you are."{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img class="card-img-top" src={Michael} alt="feedback" />
              <div class="card-body">
                <h5 className="feedback_name">
                  Michael Moughames
                  <br />
                  <span className="feedback_desig">
                    {" "}
                    Cedar Acquisitions, LLC{" "}
                  </span>
                </h5>
                <p class="card-text feedback_content">
                  "With StopShopREI. LLC for the past three weeks now and
                  they're helping me automate my Go high level account with SMS,
                  emails and Bentley Outreach, I'm in the real estate
                  wholesaling niche and they basically automate my whole system
                  right now for outreach. So my acquisitions have never been
                  easier, never been more. They convert the best, I would say.
                  That's the word I was looking for. The conversion rates really
                  increased. Working with StopShopREI, LLC and his team has been
                  very easy. They are always responsive even at with you late
                  hours of the night"{" "}
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
