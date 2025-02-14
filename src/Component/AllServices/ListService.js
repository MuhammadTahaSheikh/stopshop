import React, {useState, useEffect} from 'react'
import "./ListService.css"
import List_Building_Data_Management from "../../Assets/List-Building-Data-Management.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"

function ListService() {
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
<div className='list_building mt-5 mb-5 pt-4'>List Building & Data Management
</div>
</div>
<div className='container'>


<div className='row'>
<div className='col-xl-8 col-lg- col-md- col-sm- col-'>
<img className='pt-5 service_img' src={List_Building_Data_Management}/>
<div>
<h1 className='ListHeading mt-5'>Turning Prospects into Profits with Precision and Expertise
   </h1>
   <p className='Listsubheading'>In the real of real estate marketing, the power of a well-crafted list cannot be overstated. At StopShopREI, our List Marketing Services are designed to transform your outreach strategy, ensuring every call, email, and message reaches the right audience. As a leading name among media marketing agencies, we specialize in leveraging data to maximize your business impact.
   </p>
</div>
<div>
<h1 className='ListHeading mt-5'>Service Process: Your Path to Effective List Marketing</h1>
<div className='row'>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>01</span>Comprehensive Analysis</p>
<p className='listmarketing_par'>We start by thoroughly understanding your target market. Our team analyzes market trends, demographic data, and behavioral patterns to create a foundational base for your list building.

</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>02</span>Tailored List Creation</p>
<p className='listmarketing_par'>Using our insights from the market analysis, we craft a customized list that aligns with your specific goals. This list is not just data – it's a roadmap to  clients who need what you're offering
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>03</span>Integration with Marketing Channels</p>
<p className='listmarketing_par'>We start by thoroughly understanding your target market. Our team analyzes market trends, demographic data, and behavioral patterns to create a foundational base for your list building.

</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>04</span>Cold Calling and Outreach</p>
<p className='listmarketing_par'>With the list in hand, our team, including the best virtual assistants and seasoned marketers, initiates the outreach. We employ cold calling and other direct marketing techniques to engage with your audience effectively.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>05</span>Continuous Optimization</p>
<p className='listmarketing_par'>List marketing is not a 'set and forget' strategy. We constantly analyze the responses, refine the list, and optimize our approaches to ensure maximum ROI.

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
   <h1 className='ListHeading'>Service Outcome: Tangible Results, Real Impact
   </h1>
   <p className='Listsubheading'>Our List Marketing Services culminate in tangible outcomes for your real estate business:
   </p>
   <ol>
 <li className='list_style'>
 <span className='list_bold'>
  <span><img src={ultick} className='imgultick'/></span>
  Enhanced Lead Generation:</span><span className='content_css'> By reaching the right audience, our services significantly improve your lead generation efforts.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Conversion Rates:</span><span className='content_css'> With targeted outreach, expect higher conversion rates from prospect to client.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Optimized Marketing Budget:</span> <span className='content_css'>Efficient list utilization means your marketing budget is spent on leads with the highest conversion potential.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Sustainable Business Growth:</span> <span className='content_css'>Our approach is designed for long-term success, ensuring continual growth in your client base and market presence.</span></li>
   </ol>
   </div>
   </div>
</div>
   
   
   <Footer/>
   </div>
  )
}

export default ListService
