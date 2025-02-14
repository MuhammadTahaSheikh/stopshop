import React, {useState, useEffect} from 'react'
import "./ListService.css"
import List_Building_Data_Management from "../../Assets/Services_list/Acquistion-Manager.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function AcquistionManager() {
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
     <div className='list_building mt-5 mb-5 pt-4'>Acquistion Manager
     </div>
</div>
  <div className='container'>
 
  <div className='row'>
  <div className='col-xl-8 col-lg- col-md- col-sm- col-'>
  <img className='pt-5 service_img' src={List_Building_Data_Management}/>
  <div>
  <h1 className='ListHeading mt-5'>Expertly Managing Real Estate Acquisitions for Optimal Results
     </h1>
     <p className='Listsubheading'>Our Acquisition Manager Services are the cornerstone of success for real estate investors and firms. We specialize in skillfully navigating the complex process of property acquisition, combining market expertise with strategic negotiations. Our service is designed to identify and secure valuable real estate opportunities, minimizing risks while maximizing returns.
     </p>
  </div>
  <div>
  <h1 className='ListHeading mt-5'>Service Process: Streamlining Your Real Estate Acquisition Journey
  </h1>
  <div className='row'>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>01</span>Market Analysis and Opportunity Identification  </p>
  <p className='listmarketing_par'>Our process begins with an exhaustive market analysis. We identify emerging trends, evaluate market conditions, and pinpoint properties that align with your investment criteria. This initial step sets the foundation for a targeted acquisition strategy.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>02</span>Property Evaluation and Due Diligence</p>
  <p className='listmarketing_par'>Each identified opportunity undergoes a rigorous evaluation process. Our team conducts comprehensive due diligence, assessing factors like property condition, legal compliances, and potential returns. This meticulous approach ensures informed decision-making.
  </p>
  </div>
  </div>
  
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>03</span>Negotiation and Deal Structuring</p>
  <p className='listmarketing_par'>Armed with in-depth analysis, our skilled negotiators engage with sellers. We strive to secure the best possible terms, optimizing the value of each acquisition. Our expertise in deal structuring further ensures transactions are aligned with your financial and strategic goals.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>04</span>Transaction Coordination and Closure</p>
  <p className='listmarketing_par'>From offer to closing, our team manages every aspect of the transaction. We coordinate with legal teams, financial institutions, and other stakeholders, ensuring a smooth and efficient process. Our attention to detail and proactive approach addresses potential hurdles, facilitating a successful acquisition.
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
     <h1 className='ListHeading'>Service Outcome: Successful Acquisitions and Enhanced Portfolio Performance
     </h1>
     <p className='Listsubheading'>Our Acquisition Manager Services lead to impactful results:
     </p>
     <ol>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Strategic Property Acquisition:</span> <span className='content_css'>We enable you to acquire properties that are strategically aligned with your investment goals, enhancing your portfolio's performance.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Minimized Risk:</span> <span className='content_css'>Our comprehensive due diligence and market analysis mitigate risks associated with property acquisitions.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Optimized Investment Returns:</span> <span className='content_css'>Through skilled negotiation and deal structuring, we aim to maximize your investment returns.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Streamlined Transaction Process:</span> <span className='content_css'> Our management of the acquisition process ensures transactions are efficient, transparent, and compliant.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Long-Term Portfolio Growth:</span> <span className='content_css'>With our post-acquisition support, properties are seamlessly integrated into your portfolio, contributing to its long-term growth and success.</span></li>

     </ol>
     </div>
     </div>
  </div>
     
     
     <Footer/>
     </div>
    )
  }
export default AcquistionManager
