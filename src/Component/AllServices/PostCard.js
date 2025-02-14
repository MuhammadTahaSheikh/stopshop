import React, {useState,useEffect} from 'react'
import List_Building_Data_Management from "../../Assets/Services_list/Post-Card-Campigns.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import "./ListService.css"
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function PostCard() {
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
      const [hoveredIndex, setHoveredIndex] = useState(null);
  
      const handleMouseEnter = index => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };
    return (
     <div>
     <NavbarMain/>
     <div className='service_back'>
     <div className='list_building mt-5 mb-5 pt-4'>Post Card Campaigns
     </div>
     </div>
  <div className='container'>
 
  <div className='row'>
  <div className='col-xl-8 col-lg- col-md- col-sm- col-'>
  <img className='pt-5 service_img' src={List_Building_Data_Management}/>
  <div>
  <h1 className='ListHeading mt-5'>Captivating Your Audience with Personalized and Impactful Postcard Campaigns  </h1>
     <p className='Listsubheading'>StopShopREI's Postcard Campaign Services blend creative design with strategic targeting to create impactful marketing campaigns for the real estate industry. Our service is dedicated to leveraging the power of physical mail to connect with your audience in a meaningful way, setting you apart in the competitive market.
     </p>
  </div>
  <div>
  <h1 className='ListHeading mt-5'>Service Process: Crafting Your Successful Postcard Campaign</h1>
  <div className='row'>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>01</span>Audience Targeting and Strategy Development
  </p>
  <p className='listmarketing_par'>Every effective campaign begins with understanding your audience. We identify the demographics and preferences of your target market, developing a tailored strategy that aligns with your marketing goals.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>02</span>Creative Design and Messaging
  </p>
  <p className='listmarketing_par'>Our team of designers and copywriters work collaboratively to create visually appealing and message-driven postcards. We focus on designs that capture attention and content that resonates with your audience, ensuring your brand's message is delivered effectively.
  </p>
  </div>
  </div>
  
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>03</span>Quality Printing and Production</p>
  <p className='listmarketing_par'>We ensure that every postcard is printed to the highest quality standards, using premium materials that reflect the professionalism of your brand. Our attention to detail in production guarantees that each piece is a tangible representation of your commitment to quality.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>04</span>Distribution and Mailing</p>
  <p className='listmarketing_par'>Efficient and timely distribution is key to the success of a postcard campaign. We manage the logistics of mailing, ensuring that your postcards reach the intended recipients at the optimal time for maximum impact.
  </p>
  </div>
  </div>
  
 
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  
  </div>
  </div>
  </div>
  </div>
  <div className='col-xl-4 col-lg-6 col-md-8 col-sm- col-'>
  <div className='Services_list mt-4'>
  <div>
  <h3 className='service_head m-3'>Services</h3>
  <ul className="list">
  {
      
    [<Link to='/list-service' className='service_list'>01 List Building & Data Management</Link>, 
    <Link to='/text-marketing' className='service_list'>02 Text Marketing</Link>,
    <Link to='/cold-calling' className='service_list'>03 Cold Calling</Link>,
    <Link to='/email-marketing' className='service_list'>04 Email Marketing</Link>,
    <Link to='/digital-marketing' className='service_list'>05 Digital Marketing</Link>,
    <Link to='/ringless-voice' className='service_list'>06 Ringless Voice Mails</Link>,
    <Link to='/followup-manager' className='service_list'>07 Follow up Manager</Link>,
    <Link to='/acquistion-manager' className='service_list'>08 Acquistion Manager</Link>,
    "09 Dispostions",
    <Link to='/account-book-keeping' className='service_list'>10 Accounts & Book Keeping</Link>,
    <Link to='/post-card' className='service_list'>11 Post Card Campigns</Link>,
    <Link to='/blog-content' className='service_list'>12 Blog and Content Writing</Link>
    ]
      
      
      
      .map((item, index) => (
    <li
      key={index}
      className={`list-item ${hoveredIndex === index ? 'hovered' : ''} m-3 list_stylecol` }
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      
    >
     {item}
      <span className={`arrow ${hoveredIndex === index ? 'up' : ''}`}>&#x25BC;</span>
    </li>
  ))}
  </ul>
  </div>
  
  
  </div>
  
  </div>
  </div>
  </div>
  <div className='container'>
     <div className='row'>
  <div className='col-8'>
     <h1 className='ListHeading'>Service Outcome: Enhanced Engagement and Brand Recognition
     </h1>
     <p className='Listsubheading'>Our Postcard Campaign Services deliver significant benefits:
     </p>
     <ol>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Brand Visibility:</span><span className='content_css'>Stand out in your market with a unique, tangible marketing medium that grabs attention.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Personalized Audience Connection:</span><span className='content_css'> Foster a personal connection with your audience through targeted, physical messaging.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Higher Engagement Rates:</span><span className='content_css'> Experience increased engagement rates as recipients are more likely to read and remember physical mail compared to digital alternatives.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Tangible Marketing Presence:</span><span className='content_css'> Create a lasting impression with a physical item that recipients can touch, feel, and keep.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Measurable Results:</span><span className='content_css'> Track the success of your campaign with our thorough analysis, allowing for data-driven decisions in future marketing endeavors.</span></li>
  
     </ol>
     </div>
     </div>
  </div>
     
     
     <Footer/>
     </div>
    )
  }

export default PostCard
