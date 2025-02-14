import React, {useState,useEffect} from 'react'
import List_Building_Data_Management from "../../Assets/Services_list/Ringless-Voice-Mails.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import "./ListService.css"
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function RinglessVoice() {
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
   <div className='list_building mt-5 mb-5 pt-4'>Ringless Voice Mails
</div>
   </div>
<div className='container'>

<div className='row'>
<div className='col-xl-8 col-lg- col-md- col-sm- col-'>
<img className='pt-5 service_img' src={List_Building_Data_Management}/>
<div>
<h1 className='ListHeading mt-5'>Innovative Messaging for Impactful Real Estate Communication</h1>
   <p className='Listsubheading'>At StopShopREI, we recognize the power of direct and personal communication in the real estate sector. Our Ringless Voicemail Services offer a unique way to reach clients without intruding on their time. This voicemail service for small business and larger enterprises alike is an efficient tool to deliver your message directly to your clients' voicemail, ensuring your voice is heard without the pressure of traditional real estate cold callers.
   </p>
</div>
<div>
<h1 className='ListHeading mt-5'>Service Process: Seamless Integration of Ringless Voicemail</h1>
<div className='row'>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>01</span>Strategy Development
</p>
<p className='listmarketing_par'>Our journey begins with a comprehensive strategy session. We work with you to understand your messaging goals and target audience, tailoring a plan that aligns with your real estate objectives.
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>02</span>Crafting Your Message</p>
<p className='listmarketing_par'>Our team of skilled writers and real estate virtual assistants craft concise, engaging, and impactful voice messages. These messages are designed to resonate with your audience and prompt action.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>03</span>Delivery & Deploy</p>
<p className='listmarketing_par'>Creative analysis is important. It is common for marketers to measure campaign performance at a superficial level. But to fully understand it,
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>04</span>SEO Optimization and Quality Checks</p>
<p className='listmarketing_par'>Every piece of content undergoes thorough SEO optimization service checks. We ensure that it meets all the criteria for SEO effectiveness, including keyword usage, readability, and link structure.
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
   <h1 className='ListHeading'>Service Outcome: Effective Reach and Enhanced Engagement
   </h1>
   <p className='Listsubheading'>Our Ringless Voicemail Services deliver substantial benefits:
   </p>
   <ol>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Targeted Messaging:</span> <span className='content_css'>Our strategic approach to cold calling significantly boosts the number of quality leads.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Engagement:</span> <span className='content_css'> With skilled virtual assistants engaging potential clients, witness a higher conversion from initial call to client acquisition.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Cost-Effective Strategy:</span> <span className='content_css'> Our virtual call center and call center management systems streamline your outreach process, allowing you to focus on other critical business areas.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Efficient Time Management:</span> <span className='content_css'> Regular analysis and strategy refinement ensure your cold calling efforts evolve with market trends and customer preferences.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Enhanced Client Relationship:</span> <span className='content_css'> This non-intrusive approach is appreciated by clients, fostering a positive perception of your brand and services.</span></li>

   </ol>
   </div>
   </div>
</div>
   
   
   <Footer/>
   </div>
  )
}


export default RinglessVoice
