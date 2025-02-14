import React,{useState,useEffect} from 'react'
import "./ListService.css"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import Accounts_Book_Keeping from "../../Assets/Services_list/Accounts-Book-Keeping.png"
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function TextMarketing() {
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
   <div className='list_building mt-5 mb-5 pt-4'>Text Marketing
</div>
   </div>
<div className='container'>

<div className='row'>
<div className='col-xl-8 col-lg- col-md- col-sm- col-'>
<img className='pt-5 service_img' src={Accounts_Book_Keeping}/>
<div>
<h1 className='ListHeading mt-5'>Expand Your Reach with Strategic Text Message Marketing
   </h1>
   <p className='Listsubheading'>In today's fast-paced digital world, capturing the attention of your audience requires not just reach, but relevance and timing. StopShopREI's Text Marketing Services merge the immediacy of SMS marketing with strategic targeting, positioning you ahead in the competitive real estate market. As one of the top digital marketing companies, we ensure that your message not only reaches your audience but also resonates with them.
   </p>
</div>
<div>
<h1 className='ListHeading mt-5'>Service Process: Your Journey to Effective Text Marketing
</h1>
<div className='row'>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>01</span>Understanding Your Audience</p>
<p className='listmarketing_par'>First, we do some research to understand your target demographic. This involves analyzing market trends and customer behaviors to tailor messages that speak directly to their needs and interests.
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>02</span>Crafting Compelling Messages</p>
<p className='listmarketing_par'>Our team of expert copywriters and marketers create concise, impactful messages. These messages are designed to engage and motivate your audience, turning every text into a potential lead.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>03</span>Strategic Deployment</p>
<p className='listmarketing_par'>Timing is everything in SMS marketing. We schedule text message blasts to hit when your audience is most receptive, increasing the likelihood of engagement and response.
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>04</span>Integration with Broader Campaigns</p>
<p className='listmarketing_par'>Text marketing doesn't exist in a vacuum. We integrate it with your wider marketing strategy, including telemarketing services and digital campaigns, for cohesive and consistent messaging.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>05</span>Analytics and Optimization</p>
<p className='listmarketing_par'>Post-campaign, we dive into the data. By analyzing response rates and engagement metrics, we fine-tune future campaigns, ensuring continuous improvement in your text marketing efforts.
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
   <h1 className='ListHeading'>Service Outcome: Real Results, Real Growth
   </h1>
   <p className='Listsubheading'>Our Text Marketing Services deliver impactful results:
   </p>
   <ol>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Engagement:</span> <span className='content_css'>Reach your audience directly on their most personal devices, leading to higher engagement rates.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Higher Conversion Rates:</span> <span className='content_css'>With targeted, well-timed messages, expect a significant boost in your conversion rates</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Cost-Effective Marketing:</span> <span className='content_css'>SMS marketing offers one of the highest ROI among marketing channels, ensuring your budget is used effectively.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Continuous Improvement:</span> <span className='content_css'>Regular analytics and optimization mean your campaigns get smarter, more effective, and more efficient over time.</span></li>
   </ol>
   </div>
   </div>
</div>
   
   
   <Footer/>
   </div>
  )
}

export default TextMarketing
