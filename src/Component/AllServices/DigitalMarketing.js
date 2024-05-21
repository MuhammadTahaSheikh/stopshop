import React, {useState, useEffect} from 'react'
import "./ListService.css"
import List_Building_Data_Management from "../../Assets/Services_list/Accounts-Book-Keeping.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function DigitalMarketing() {
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
     <div className='list_building mt-5 mb-5 pt-4'>Digital Marketing
  </div>
     </div>
  <div className='container'>
  
  <div className='row'>
  <div className='col-xl-8 col-lg- col-md- col-sm- col-'>
  <img className='pt-5 service_img' src={List_Building_Data_Management}/>
  <div>
  <h1 className='ListHeading mt-5'>Comprehensive Digital Marketing Solutions
     </h1>
     <p className='Listsubheading'>You can’t survive in today’s world without a strong business presence. Right? StopShopREI’s Digital Marketing Services are tailored to elevate your brand, ensuring maximum visibility and engagement. As a premier digital marketing ad agency, we specialize in creating strategies that combine creativity with data-driven insights, positioning you as a leader in the real estate market.
     </p>
  </div>
  <div>
  <h1 className='ListHeading mt-5'>Service Process: Managing Your Digital Marketing Success
  </h1>
  <div className='row'>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>01</span>Digital Strategy Development</p>
  <p className='listmarketing_par'>Every successful campaign begins with a solid strategy. Our team collaborates with you to understand your business goals, target audience, and market dynamics. This foundational step guides the entire digital marketing process.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>02</span>Multi-Channel Campaign Execution</p>
  <p className='listmarketing_par'>As a comprehensive company for digital marketing, we implement campaigns across multiple channels. This includes search engine optimization (SEO), pay-per-click (PPC) ads, social media marketing, and email marketing. Our approach ensures a cohesive and consistent brand message.
  </p>
  </div>
  </div>
  
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>03</span>Content Creation by Expert Marketers</p>
  <p className='listmarketing_par'>Content is at the heart of digital marketing. Our team of skilled content marketers crafts engaging and informative content tailored to your brand and audience. This content not only attracts but also retains customer interest.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>04</span>Targeted Advertising</p>
  <p className='listmarketing_par'>Utilizing advanced targeting techniques, our digital marketing ads agency ensures that your advertisements reach the right audience at the right time. We manage ad campaigns on various platforms, including Google Ads and social media, to maximize exposure and ROI.
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
     <h1 className='ListHeading'>Service Outcome: Enhanced Online Presence and Business Growth
     </h1>
     <p className='Listsubheading'>Our Digital Marketing Services deliver substantial benefits:
     </p>
     <ol>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Online Visibility:</span> <span className='content_css'>With targeted SEO and digital advertising, we boost your brand's online presence, making it easier for potential clients to find you.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Higher Engagement Rates:</span> <span className='content_css'>Our content marketing and social media strategies engage audiences, fostering interaction and building relationships.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Improved Lead Generation:</span> <span className='content_css'>By reaching the right audience with the right message, our campaigns significantly enhance lead generation efforts.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Maximized ROI:</span> <span className='content_css'> Our data-driven approach ensures that your marketing budget is utilized effectively, maximizing returns on investment.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Brand Authority and Trust:</span> <span className='content_css'>Through consistent and quality online content, we establish your brand as a trustworthy authority in the real estate industry.</span></li>

     </ol>
     </div>
     </div>
  </div>
     
     
     <Footer/>
     </div>
    )
  }
export default DigitalMarketing
