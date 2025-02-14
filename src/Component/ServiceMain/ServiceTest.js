import React, { useState, useEffect } from 'react';
import "./ServiceTest.css";

import one from "../../Assets/Services_list/postcardcamp.png";
import oneActive from "../../Assets/postcard_active.png";
import two from "../../Assets/textmarketing.png";
import twoActive from "../../Assets/textmarketing_active.png";
import three from "../../Assets/followupmanager.png";
import threeActive from "../../Assets/followupmanager_active.png";
import four from "../../Assets/acqmanager.png";
import fourActive from "../../Assets/acquisitionmanager_active.png";
import five from "../../Assets/disposition.png";
import fiveActive from "../../Assets/disposition_active.png";
import six from "../../Assets/emailmarketing.png";
import sixActive from "../../Assets/emailmarketing_active.png";
import seven from "../../Assets/ringless.png";
import sevenActive from "../../Assets/ringless_active.png";
import eight from "../../Assets/listbuilding.png";
import eightActive from "../../Assets/list_svg.svg";
import nine from "../../Assets/coldcalling.png";
import nineActive from "../../Assets/coldcalling_active.png";
import ten from "../../Assets/account.png";
import tenActive from "../../Assets/accountsandbookkeeping_active.png";
import eleven from "../../Assets/blogandcontent.png";
import elevenActive from "../../Assets/blog_svg.svg";

import bottomOne from "../../Assets/List Building Data Management.png"
import bottomTwo from "../../Assets/Cold Calling.png"
import bottomThree from "../../Assets/followup manager.png"
import bottomFour from "../../Assets/acquisition manager.png"
import bottomFive from "../../Assets/accounts and book keeping.png"
import bottomSix from "../../Assets/Email Marketing.png"
import bottomSeven from "../../Assets/ringles voice mail.png"
import bottomEight from "../../Assets/post card campaigns.png"
import bottomNine from "../../Assets/text marketing.png"
import bottomTen from "../../Assets/accounts and book keeping.png"
import bottomEleven from "../../Assets/blogs and content writing.png"

import { Link } from 'react-router-dom';

function ServiceTest() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [services, setServices] = useState([
    "List Building & Data Management",
    "Cold Calling",
    "Follow up Manager",
    "Acquisition Manager",
    "Digital Marketing",
    "Email Marketing",
    "Ringless Voice Mails",
    "Post Card Campaigns",
    "Text Marketing",
    "Accounts & Book Keeping",
    "Blog and Content Writing"
  ]);

  const [isServiceSelected, setIsServiceSelected] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isServiceSelected) {
        setSelectedServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
      }
    }, 3000); 

    const timeout = setTimeout(() => {
      setIsServiceSelected(false);
    }, 10000); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [services, isServiceSelected]);

  const handleServiceClick = (service) => {
    setSelectedServiceIndex(services.indexOf(service));
    setIsServiceSelected(true);
  };

  // Preload images
  useEffect(() => {
    const images = [
      one, oneActive,
      two, twoActive,
      three, threeActive,
      four, fourActive,
      five, fiveActive,
      six, sixActive,
      seven, sevenActive,
      eight, eightActive,
      nine, nineActive,
      ten, tenActive,
      eleven, elevenActive,
      bottomOne, bottomTwo, bottomThree, bottomFour, bottomFive,
      bottomSix, bottomSeven, bottomEight, bottomNine, bottomTen, bottomEleven
    ];

    images.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const serviceImages = {
    "List Building & Data Management": { regular: eight, active: eightActive },
    "Cold Calling": { regular: nine, active: nineActive },
    "Follow up Manager": { regular: three, active: threeActive },
    "Acquisition Manager": { regular: four, active: fourActive },
    "Digital Marketing": { regular: five, active: fiveActive },
    "Email Marketing": { regular: six, active: sixActive },
    "Ringless Voice Mails": { regular: seven, active: sevenActive },
    "Post Card Campaigns": { regular: one, active: oneActive },
    "Text Marketing": { regular: two, active: twoActive },
    "Accounts & Book Keeping": { regular: ten, active: tenActive },
    "Blog and Content Writing": { regular: eleven, active: elevenActive }
  };

  const serviceContent = {
    "List Building & Data Management": <p className='li_items ml-4'>We specialize in creating precise, efficient lists for your marketing campaigns, ensuring cost-effectiveness and success in your digital marketing endeavors.
    </p>,
    "Cold Calling":  <p className='li_items ml-4'>As a leading call center BPO, we excel in cold calling and telemarketing services, perfect for businesses seeking to enhance their lead generation and customer engagement strategies.
    </p>
    ,
    "Follow up Manager":  <p className='li_items ml-4'>Our follow-up managers specialize in nurturing and managing leads, employing strategies that transform prospects into profitable deals, a key aspect of effective CRM email marketing.
    </p>,
    "Acquisition Manager":  <p className='li_items ml-4'>Our team, skilled in real estate virtual assistant/realtor virtual assistant services, focuses on closing deals efficiently, making us an ideal partner for real estate professionals.
    </p>,
    "Digital Marketing":  <p className='li_items ml-4'>We provide comprehensive digital marketing services, including SEO service and search optimization marketing, to enhance your online visibility and drive targeted traffic.
    </p>,
    "Email Marketing":  <p className='li_items ml-4'>Leveraging our CRM and email marketing expertise, including HubSpot for email marketing, we craft compelling email campaigns that cut through the clutter. Our approach ensures your messages stand out, enhancing your email marketing efforts.
    </p>,
    "Ringless Voice Mails":  <p className='li_items ml-4'>Our service integrates seamlessly with CRM marketing email systems, offering a unique approach to connecting with your audience without intrusion.
    </p>,
    "Post Card Campaigns":  <p className='li_items ml-4'>Our campaigns leverage advanced printing technology and creative design, making us a go-to choice for companies seeking impactful post cards.</p>,
    "Text Marketing":  <p className='li_items ml-4'>Specializing in SMS marketing, we cater to agency social media marketing and digital marketing ads agency needs. Our text message marketing strategies are designed for maximum impact, ensuring your messages resonate with your audience.</p>,
    "Accounts & Book Keeping":  <p className='li_items ml-4'>Our team provides the best bookkeeping and financial management services that will help you maintain transparency and making informed business decisions.
    </p>,
    "Blog and Content Writing":  <p className='li_items ml-4'>As expert SEO writers, we create content that aligns with keyword search optimization, ensuring your brand's visibility and success in digital marketing.
    </p>
  };
  const serviceContentButton = {
    "List Building & Data Management": <Link to='/list-service'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Cold Calling": <Link to='/cold-calling'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Follow up Manager": <Link to='/followup-manager'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Acquisition Manager": <Link to='/acquistion-manager'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Digital Marketing": <Link to='/digital-marketing'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Email Marketing": <Link to='/email-marketing'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Ringless Voice Mails": <Link to='/ringless-voice'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Post Card Campaigns": <Link to='/post-card'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Text Marketing": <Link to='/text-marketing'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Accounts & Book Keeping": <Link to='/account-book-keeping'> <button className='discover_more'>DISCOVER MORE</button></Link>,
    "Blog and Content Writing":<Link to='/blog-content'> <button className='discover_more'>DISCOVER MORE</button></Link>
  };
  const serviceBottomImages = {
    "List Building & Data Management": bottomOne,
    "Cold Calling": bottomTwo,
    "Follow up Manager": bottomThree,
    "Acquisition Manager": bottomFour,
    "Digital Marketing": bottomFive,
    "Email Marketing": bottomSix,
    "Ringless Voice Mails": bottomSeven,
    "Post Card Campaigns": bottomEight,
    "Text Marketing": bottomNine,
    "Accounts & Book Keeping": bottomTen,
    "Blog and Content Writing": bottomEleven
  };
  return (
    <div>
      <div className='container pt-5'>
        <h1 className='dedicatedService_head'>Our Dedicated Services</h1>
        <p className='dedicatedService_content'>Intrinsicly transition intermandated content through accurate manufactured <br/>
        products. Uniquely exploit premier best.</p>
      </div>
      <div className="services-container pt-2">
        {services.map((service, index) => (
          <div key={index} className={"service" + (selectedServiceIndex === index ? " selected" : "")} onClick={() => handleServiceClick(service)}>
            <img src={selectedServiceIndex === index ? serviceImages[service].active : serviceImages[service].regular} alt={service} className={"service-image" + (selectedServiceIndex === index ? " slide-in" : "")} />
            <p className="service-description">{service}</p>
          </div>
        ))}
      </div>
      <div className='service_data mt-5'>
        {services[selectedServiceIndex] && (
          <div className="container selected-service">
            <div className='row both_content'>
              <div className='col-xl-4 col-lg- col-md-5 col-sm-3 col-12'><img src={serviceBottomImages[services[selectedServiceIndex]]} alt="Selected Service Image" className='service_img'/></div>
              <div className='col-xl-6 col-lg- col-md- col-sm- col- mb-5 dis_text'>
                <h2 className='content_name_Slider ml-4'>{services[selectedServiceIndex]}</h2>
                <p className='content_name_Slider_p'>{serviceContent[services[selectedServiceIndex]]}</p>
                <button className='discover_more ml-4'>{serviceContentButton[services[selectedServiceIndex]]}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceTest;
