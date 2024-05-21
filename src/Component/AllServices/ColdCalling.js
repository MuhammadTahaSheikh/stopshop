import React, {useState,useEffect} from 'react'
import "./ListService.css"
import List_Building_Data_Management from "../../Assets/Services_list/Cold-Calling.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function ColdCalling() {
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
   <div className='list_building mt-5 mb-5 pt-4'>Cold Calling
   </div>
   </div>
<div className='container'>

<div className='row'>
<div className='col-xl-8 col-lg- col-md- col-sm- col-'>
<img className='pt-5 service_img' src={List_Building_Data_Management}/>
<div>
<h1 className='ListHeading mt-5'>Transforming Conversations into Conversions with Expert Cold Calling
   </h1>
   <p className='Listsubheading'>Cold calling remains a vital tool for generating leads and building client relationships. At StopShopREI, our Cold Calling Services redefine this traditional technique with a blend of modern strategies and skilled communication. Leveraging the expertise of the best virtual assistants and a robust virtual call center framework, we ensure your business not only reaches potential clients but also engages them effectively.


   </p>
</div>
<div>
<h1 className='ListHeading mt-5'>Service Process: Your Pathway to Successful Cold Calling</h1>
<div className='row'>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>01</span>Defining the Target Audience
</p>
<p className='listmarketing_par'>Our journey begins with identifying your ideal customer profile. This involves thorough market research to understand the demographics and preferences of potential clients.



</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>02</span>Scripting and Strategy Development</p>
<p className='listmarketing_par'>We craft compelling call scripts tailored to resonate with your target audience. Our strategy encompasses not just words, but also the tone, timing, and approach for each call.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>03</span>Employing Skilled Virtual Assistants</p>
<p className='listmarketing_par'>Our team of experienced virtual assistants for business takes the forefront in making outbound calls. They are trained in the nuances of real estate and skilled in the art of conversation.
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>04</span>Implementing Call Center BPO Operations</p>
<p className='listmarketing_par'>We work like a state-of-the-art virtual call center, we manage call flows, ensuring efficiency and professionalism in every interaction. Our call center management system tracks and monitors all calls for quality assurance.
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
   <h1 className='ListHeading'>Service Outcome: Effective Lead Generation and Business Growth
   </h1>
   <p className='Listsubheading'>Our Cold Calling Services yield significant benefits:
   </p>
   <ol>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Enhanced Lead Generation:</span> <span className='content_css'>Our strategic approach to cold calling significantly boosts the number of quality leads.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Conversion Rates:</span> <span className='content_css'> With skilled virtual assistants engaging potential clients, witness a higher conversion from initial call to client acquisition.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Optimized Marketing Budget:</span> <span className='content_css'> Our virtual call center and call center management systems streamline your outreach process, allowing you to focus on other critical business areas.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Continuous Improvement::</span> <span className='content_css'> Regular analysis and strategy refinement ensure your cold calling efforts evolve with market trends and customer preferences.</span></li>
   </ol>
   </div>
   </div>
</div>
   
   
   <Footer/>
   </div>
  )
}

export default ColdCalling
