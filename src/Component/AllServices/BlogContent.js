import React, {useState,useEffect} from 'react'
import List_Building_Data_Management from "../../Assets/Services_list/Blog-and-Content-Writing.png"
import Footer from '../FooterStop/Footer'
import NavbarMain from '../NavbarUpper/NavbarMain';
import "./ListService.css"
import { Link } from 'react-router-dom';
import ultick from "../../Assets/ultick.png"
function BlogContent() {
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
   <div className='list_building mt-5 mb-5 pt-4'>Blog and Content Writing
   </div>
   </div>
<div className='container'>

<div className='row'>
<div className='col-xl-8 col-lg- col-md- col-sm- col-'>
<img className='pt-5 service_img' src={List_Building_Data_Management}/>
<div>
<h1 className='ListHeading mt-5'>Making Your Real Estate Brand Visible with SEO Content</h1>
   <p className='Listsubheading'>In the competitive world of real estate, compelling and SEO-optimized content is not just a luxury—it's a necessity. StopShopREI's Blog and Content Writing Services are designed to position your business as a thought leader in the industry. By blending insightful content with good SEO practices, we enhance your online presence, attract a wider audience, and establish your brand’s authority in the real estate market.

   </p>
</div>
<div>
<h1 className='ListHeading mt-5'>Service Process: Building Your Content Success Story</h1>
<div className='row'>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>01</span>Understanding Your Brand and Audience
</p>
<p className='listmarketing_par'>Our process begins with an in-depth understanding of your brand, goals, and target audience. This foundational step ensures that the content we create resonates with your readers and aligns with your business objectives.
</p>
</div>
</div>
<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>02</span>Keyword Research and SEO Strategy</p>
<p className='listmarketing_par'>Leveraging the latest tools in search optimization marketing, we conduct comprehensive keyword research. This guides our SEO strategy, ensuring that the content we produce is not only engaging but also ranks high in search engine results.
</p>
</div>
</div>

<div className='col-xl-6 col-lg- col-md- col-sm- col-'>
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>03</span>Crafting Quality Content</p>
<p className='listmarketing_par'>Our team of skilled SEO writers and content creators develop articles, blog posts, and other forms of content. Each piece is meticulously written to inform, engage, and inspire your audience, while incorporating SEO best practices.

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
<div>
<p className='listmarketing_content'><span className='listmarketing_num'>05</span>Publishing and Promotion
</p>
<p className='listmarketing_par'>Once the content is optimized, we assist with publishing it on your desired platforms. We also provide guidance on how to effectively promote your content to maximize reach and engagement.
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
   <h1 className='ListHeading'>Service Outcome: Enhanced Online Presence and Engagement
   </h1>
   <p className='Listsubheading'>Our Blog and Content Writing Services deliver impactful results:
   </p>
   <ol>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Improved Search Engine Rankings:</span> <span className='content_css'>Our strategic approach to cold calling significantly boosts the number of quality leads.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Greater Audience Engagement:</span> <span className='content_css'> With skilled virtual assistants engaging potential clients, witness a higher conversion from initial call to client acquisition.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Established Industry Authority:</span> <span className='content_css'> Our virtual call center and call center management systems streamline your outreach process, allowing you to focus on other critical business areas.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Increased Website Traffic:</span> <span className='content_css'> Regular analysis and strategy refinement ensure your cold calling efforts evolve with market trends and customer preferences.</span></li>
   <li className='list_style'><span className='list_bold'><span><img src={ultick} className='imgultick'/></span>Long-Term SEO Benefits:</span> <span className='content_css'> Consistent and quality content contributes to the overall SEO health of your website, providing lasting benefits.</span></li>

   </ol>
   </div>
   </div>
</div>
   
   
   <Footer/>
   </div>
  )
}

export default BlogContent
