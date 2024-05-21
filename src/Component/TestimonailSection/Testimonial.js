import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Testimonial.css"
import feedback from "../../Assets/client_feedback.png"
const Testimonial = () => {


  return (
    <div className='main_testimonial'>
      <div className="container gtco-testimonials pt-5">
        <h2 className='client_head'>OUR CLIENT FEEDBACK</h2>
        <p className='client_subhead'>Intrinsicly transition intermandated content through accurate manufactured<br/>
        products. Uniquely exploit premier best.</p>
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
    1000: { items: 3, nav: true }
  }}
>
                                           
        <div>
        <div class="card text-center"><img class="card-img-top" src={feedback} alt="feedback"/>
          <div class="card-body">
            <h5 className='feedback_name'>JAMES PETERSON <br />
              <span className='feedback_desig'> CEO </span>
            </h5>
            <p class="card-text feedback_content">"StopShopREI transformed our digital marketing strategy. Their SEO service and keyword search optimization expertise significantly boosted our online presence." </p>
          </div>
        </div>
      </div>
      <div>
      <div class="card text-center"><img class="card-img-top" src={feedback} alt="feedback"/>
        <div class="card-body">
          <h5 className='feedback_name'>SARAH MILLER <br />
            <span className='feedback_desig'> REAL ESTATE BROKER </span>
          </h5>
          <p class="card-text feedback_content">"The real estate virtual assistant services from StopShopREI have been a game-changer for my business.I recommend them to anyone needing a top-notch realtor virtual assistant." </p>
        </div>
      </div>
    </div>
      <div>
        <div class="card text-center"><img class="card-img-top" src={feedback} alt="feedback"/>
          <div class="card-body">
            <h5 className='feedback_name'>MARK THOMPSON<br />
              <span className='feedback_desig'> MARKETING DIRECTOR </span>
            </h5>
            <p class="card-text feedback_content">"StopShopREI's email marketing and CRM email marketing services have revolutionized how we connect with clients. Their strategies in managing 
            leads have improved" </p>
          </div>
        </div>
      </div>
     <div>
        <div class="card text-center"><img class="card-img-top" src={feedback} alt="feedback"/>
          <div class="card-body">
            <h5 className='feedback_name'>EMILY JOHNSON<br />
              <span className='feedback_desig'> ENTREPRENEUR </span>
            </h5>
            <p class="card-text feedback_content">"As an agency specializing in social media agency marketing,
             we were impressed with StopShopREI's text marketing services. 
             Their approach helped us to reach
             our target audience" </p>
          </div>
        </div>
        </div>
        <div>
        <div class="card text-center"><img class="card-img-top" src={feedback} alt="feedback"/>
          <div class="card-body">
            <h5 className='feedback_name'>DAVID lEE<br />
              <span className='feedback_desig'> OPERATIONS MANAGER </span>
            </h5>
            <p class="card-text feedback_content">"Our collaboration with StopShopREI for call center and outbound calls has been incredibly successful. 
            Their proficiency has led to increase in our lead generation." </p>
          </div>
        </div>
       
        </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
