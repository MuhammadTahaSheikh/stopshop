
import React from 'react';
import "./Faq.css";
import faqline from "../../Assets/faqline.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Faq() {
 
  return (
    <div className='main_faq'>
    <div className='container'>
    <div className='row'>
   <div className='col-xl-6 col-lg-'>
   <h1 className='faq_head'>Frequently Asked Questions</h1>
   <img src={faqline} alt='faq'/>
   <p className='faq_ques'>Have Questions In Your Mind?
   Get <span className='faq_queso'>  The Answers Now</span></p>
   </div>
   <div class="col-xl-6 col-lg- accordion" id="accordionExample">

   
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong className='faq_contenthead'>What is real estate marketing in business automation?</strong> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Real estate marketing involves promoting properties and real estate services through various strategies, including digital advertising, social media, and direct mail, to attract potential buyers and sellers.
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong className='faq_contenthead'>What type of marketing channel or way is best for real estate?</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The best marketing for real estate typically combines digital marketing, such as SEO and social media, with traditional methods like networking and print advertising, tailored to the target market and property type.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong className='faq_contenthead'>What are the 4 P's of marketing in terms of real estate?</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The 4 P's of real estate are Product (the property), Price (valuation), Place (location), and Promotion (marketing strategies).
      </div>
    </div>
  </div>
  <div class="accordion-item">
  <h2 class="accordion-header" id="headingFour">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    <strong className='faq_contenthead'>Which social media app is the King of social media marketing?</strong>
    </button>
  </h2>
  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    The "king" of social media marketing is often considered “Facebook” due to its vast user base and advanced targeting capabilities, making it a powerful tool for marketers.
    </div>
  </div>
</div>
</div>
  </div>
  </div>
    </div>
  )
}

export default Faq
