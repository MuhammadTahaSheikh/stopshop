import React, {useState,useEffect} from 'react'
import List_Building_Data_Management from "../../Assets/Services_list/Email-marketing.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import "./ListService.css"
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function EmailMarketing() {
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
   <div className='list_building mt-5 mb-5 pt-4'>Email Marketing

</div>
   </div>
<div className='container'>

<div className='row'>
<div className='col-xl-8 col-lg- col-md- col-sm- col-'>
<img className='pt-5 service_img' src={List_Building_Data_Management}/>
<div>
<h1 className='ListHeading mt-5'>Crafting Compelling Email Campaigns for Real Estate Customer Success
   </h1>
   <p className='Listsubheading'>
   Email marketing stands as a cornerstone for generating leads and nurturing client relationships. StopShopREI's Email Marketing Services blend creativity with technology to ensure your messages not only reach inboxes but also capture attention and drive action. Specializing in CRM and email marketing strategies, we are your go-to agency marketing digital solutions for the real estate sector.
   </p>
</div>
<div>
<h1 className='ListHeading mt-5'>Service Process: Crafting Your Email Marketing Success</h1>
<div className='row'>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>01</span>Audience Analysis and Segmentation
</p>
<p className='listmarketing_par'>Our approach starts with a deep dive into your audience demographics. We segment your contact list based on various criteria to ensure personalized and relevant communication.

</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>02</span>Creating Engaging Content
</p>
<p className='listmarketing_par'>
Content is king in email marketing. Our team develops compelling and visually appealing email content that resonates with your audience, whether it's for an email campaign or routine communication.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>03</span>Utilizing Advanced CRM Email Marketing Tools
</p>
<p className='listmarketing_par'>We leverage CRM marketing email tools like HubSpot for email marketing, ensuring efficient management of your email campaigns. These tools allow for automation, tracking, and analysis of your emails.
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>04</span>Launching and Managing Campaigns
</p>
<p className='listmarketing_par'>With everything in place, we launch your email campaigns, ensuring they are delivered at optimal times for maximum engagement.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>

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
   <h1 className='ListHeading'>Service Outcome: Tangible Results and Growth
   </h1>
   <p className='Listsubheading'>Our Email Marketing Services deliver significant benefits:
   </p>
   <ol>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Lead Generation:</span> <span className='content_css'>Our strategic approach to cold calling significantly boosts the number of quality leads.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Enhanced Engagement:</span> <span className='content_css'> With skilled virtual assistants engaging potential clients, witness a higher conversion from initial call to client acquisition.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Improved Conversion Rates:</span> <span className='content_css'> Our virtual call center and call center management systems streamline your outreach process, allowing you to focus on other critical business areas.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>CRM Integration and Efficiency:</span> <span className='content_css'> Utilizing tools like HubSpot for email marketing, we streamline your email campaigns with your CRM system, enhancing overall marketing efficiency.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Data-Driven Strategies:</span> <span className='content_css'> Regular analysis and optimization based on campaign data lead to more effective and impactful email marketing strategies over time.</span></li>
   </ol>
   </div>
   </div>
</div>
   
   
   <Footer/>
   </div>
  )
}
export default EmailMarketing
