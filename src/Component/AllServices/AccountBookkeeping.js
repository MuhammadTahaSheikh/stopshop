import React, {useState, useEffect} from 'react'
import List_Building_Data_Management from "../../Assets/Services_list/Accounts-Book-Keeping.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import { Link } from 'react-router-dom';
import "./ListService.css"
import ultick from "../../Assets/ultick.png"
function AccountBookkeeping() {
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
     <div className='list_building mt-5 mb-5 pt-4'>Accounts & Book Keeping
  </div>
</div>
  <div className='container'>
  
  <div className='row'>
  <div className='col-xl-8 col-lg- col-md- col-sm- col-'>
  <img className='pt-5 service_img' src={List_Building_Data_Management}/>
  <div>
  <h1 className='ListHeading mt-5'>Precision and Clarity in Real Estate Financial Management
     </h1>
     <p className='Listsubheading'>At StopShopREI, our Accounts and Bookkeeping Services are tailored to meet the specific needs of the real estate industry. We provide comprehensive financial solutions that ensure accuracy, compliance, and clarity, enabling you to make informed business decisions and focus on growth.
     </p>
  </div>
  <div>
  <h1 className='ListHeading mt-5'>Service Process: Streamlining Your Financial Management  </h1>
  <div className='row'>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>01</span>Initial Assessment and Setup</p>
  <p className='listmarketing_par'>Our engagement begins with a detailed assessment of your current financial processes and systems. We then set up a customized accounting framework that aligns with your business structure and real estate activities.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>02</span>Transaction Recording and Reconciliation  </p>
  <p className='listmarketing_par'>We carefully record and categorize all financial transactions related to your real estate operations. Regular reconciliation is performed to ensure accuracy and consistency in your financial records.
  </p>
  </div>
  </div>
  
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>03</span>Financial Reporting and Analysis</p>
  <p className='listmarketing_par'>Our team generates comprehensive financial reports, including income statements, balance sheets, and cash flow statements. These reports offer valuable insights into your financial performance and are essential for strategic planning.
  </p>
  </div>
  </div>
  <div className='col-xl-6 col-lg- col-md- col-sm- col-'>
  <div>
  <p className='listmarketing_content'><span className='listmarketing_num'>04</span>Compliance and Regulatory Adherence </p>
  <p className='listmarketing_par'>Staying compliant with financial regulations is crucial. We ensure that all accounting practices adhere to the relevant laws and standards, providing peace of mind and safeguarding your business.
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
     <h1 className='ListHeading'>Service Outcome: Financial Clarity and Business Growth
     </h1>
     <p className='Listsubheading'>Our Accounts and Bookkeeping Services deliver significant benefits:
     </p>
     <ol>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Accurate Financial Records:</span> <span className='content_css'> Enjoy the confidence that comes with accurate and up-to-date financial records, essential for effective management and decision-making.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Regulatory Compliance:</span> <span className='content_css'> Rest assured that your financial practices are compliant with all necessary regulations, reducing the risk of penalties or legal issues.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Informed Business Decisions:</span> <span className='content_css'> With clear financial insights, make informed decisions that drive the growth and profitability of your real estate business.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Time and Resource Savings:</span> <span className='content_css'> Free up valuable time and resources by entrusting your financial management to experts, allowing you to focus on core business activities.</span></li>
     <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Strategic Financial Planning:</span> <span className='content_css'> Benefit from our expertise in financial analysis and planning to strategize for long-term success and sustainability.</span></li>

     </ol>
     </div>
     </div>
  </div>
     
     
     <Footer/>
     </div>
    )
  }

export default AccountBookkeeping
