import React from 'react';
import './ServicesAbout.css'; 
import account_book from "../../Assets/service_about/account_book.svg"
import blog_content from "../../Assets/service_about/blog_content.svg"
import cold_calling from "../../Assets/service_about/cold_calling.svg"
import digital_marketing from "../../Assets/service_about/digital_marketing.svg"
import email_marketing from "../../Assets/service_about/email_marketing.svg"
import post_card from "../../Assets/service_about/post_card.svg"
import ringless_voice from "../../Assets/service_about/ringless_voice.svg"
import text_marketing from "../../Assets/service_about/text_marketing.svg"
import { Link } from 'react-router-dom';

function ServicesAbout() {
  return (
    <div className='container'>
    <div>
    <p className='dedicated_services mt-5'>Our Dedicated Services</p>
    <p className='dedicated_services_content mb-5'>Intrinsicly transition intermandated content through accurate manufactured
    products. Uniquely exploit premier best.</p>
    </div>
      <div className="services-containerabout mb-5">
        <div className="service_about">
          <img src={text_marketing} alt="Service Image" />
          <div className="service-content">
            <h3 className='service_heading'>Text Marketing</h3>
            <p className='service_content'>Specializing in SMS marketing, we cater to agency social media marketing and digital marketing 
            ads agency needs. Our text message marketing strategies are designed for maximum impact,
             ensuring your messages resonate with your audience</p>
                            <Link to='/text-marketing' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
          </div>
        </div>
        <div className="service_about">
          <img src={cold_calling} alt="Service Image" />
          <div className="service-content">
            <h3 className='service_heading'>Cold Calling</h3>
            <p className='service_content'>As a leading call center BPO, we excel in cold calling and telemarketing services, perfect for
             businesses seeking to enhance their lead generation and customer engagement strategies.</p>
                            <Link to='/cold-calling' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
          </div>
        </div>
        <div className="service_about">
          <img src={email_marketing} alt="Service Image" />
          <div className="service-content">
            <h3 className='service_heading'>Email Marketing</h3>
            <p className='service_content'>Leveraging our CRM and email marketing expertise, including HubSpot for email marketing,
             we craft compelling email campaigns that cut through the clutter.
             Our approach ensures your messages stand out, enhancing your email marketing efforts.</p>
                            <Link to='/email-marketing' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
          </div>
        </div>
        <div className="service_about">
          <img src={ringless_voice} alt="Service Image" />
          <div className="service-content">
            <h3 className='service_heading'>Ringless Voice Mails</h3>
            <p className='service_content'>Our service integrates seamlessly with CRM marketing email systems, 
            offering a unique approach to connecting with your audience without intrusion.</p>
                            <Link to='/ringless-voice' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
          </div>
        </div>
        <div className="service_about">
        <img src={account_book} alt="Service Image" />
        <div className="service-content">
          <h3 className='service_heading'>Accounts & Book Keeping</h3>
          <p className='service_content'>Our team provides the best bookkeeping and financial management services
           that will help you maintain transparency and making informed business decisions.</p>
                          <Link to='/account-book-keeping' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
        </div>
      </div>
      <div className="service_about">
        <img src={post_card} alt="Service Image" />
        <div className="service-content">
          <h3 className='service_heading'>Post Card Campigns</h3>
          <p className='service_content'>Our campaigns leverage advanced printing technology and creative design, 
          making us a go-to choice for companies seeking impactful post cards.</p>
                          <Link to='/post-card' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
        </div>
      </div>
      <div className="service_about">
        <img src={blog_content} alt="Service Image" />
        <div className="service-content">
          <h3 className='service_heading'>Blog and Content Writing</h3>
          <p className='service_content'>As expert SEO writers, we create content that aligns with keyword search optimization,
           ensuring your brand's visibility and success in digital marketing.</p>
                          <Link to='/blog-content' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
        </div>
      </div>
      <div className="service_about">
        <img src={digital_marketing} alt="Service Image" />
        <div className="service-content">
          <h3 className='service_heading'>Digital Marketing</h3>
          <p className='service_content'>We provide comprehensive digital marketing services, including SEO service and search optimization marketing, to enhance your online visibility and drive targeted traffic.</p>
                          <Link to='/digital-marketing' className='contact_ushref1'>
<a href="#" className="service-button_about">Explore More</a></Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ServicesAbout;
