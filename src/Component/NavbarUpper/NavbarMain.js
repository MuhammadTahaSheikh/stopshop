import React, {useState} from 'react';
import "./NavbarMain.css";
import stopshop_logo from "../../Assets/stopshop_mainlogo.svg";
import { Link } from 'react-router-dom';

function NavbarMain() {
    const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className='sticky-top'>
      <div className='head_navbarmain'>
      <div className='row m-0 p-0'>
      <div className='col-xl-2 col-lg-3 col-md-2'>
      <div className="p-1 social-links">
      <a href="https://www.facebook.com/stopshoprei" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/stopshoprei/" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/company/stopshoprei/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
  </div>
      </div>
      <div className='col-xl-10 col-lg-9 col-md-10 '>
      <div className='content_navbar'>
    <span className="pt-3 start"> Get quick appointment and technical support: +1 (959) 500-5594</span>

    <span className="pt-3 end">
    <span>16 Stonefield Drive, Waterbury Connecticut, USA</span> <span className='p-2'> info@stopshoprei.com </span>
    
    </span>
  </div>
      
      </div>

      </div>
      </div>
      <nav class="navbar navbar-expand-md navbar-dark">
    <div class="container">
    <Link to='/'>
        <a class="navbar-brand" href="#">
            <img src={stopshop_logo} className='stopshop_logo'/>
        </a>
</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse nav_itemmenu" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto nav_subitemmenu">
                <li class="nav-item">
                <Link to='/' className='contact_ushref'>
                    <a class="nav-link contact_ushref"  href="#">Home</a>
                    </Link>
                </li>
                <li className="nav-item dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-expanded={showDropdown ? "true" : "false"}>
                  Our Service
                </a>
                <ul className={showDropdown ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown">
                <Link to='/list-service'> <li><a className="dropdown-item" href="#">List Building & Data Management</a></li></Link>
                <Link to='/cold-calling'> <li><a className="dropdown-item" href="#">Cold Calling</a></li></Link>
                  <Link to='/followup-manager'><li><a className="dropdown-item" href="#">Follow up Manager</a></li></Link>
                  <Link to='/acquistion-manager'><li><a className="dropdown-item" href="#">Acquisition Manager</a></li></Link>
                  <Link to='/digital-marketing'><li><a className="dropdown-item" href="#">Digital Marketing</a></li></Link>
                  <Link to='/email-marketing'><li><a className="dropdown-item" href="#">Email Marketing</a></li></Link>
                  <Link to='/ringless-voice'><li><a className="dropdown-item" href="#">Ringless Voice Mails</a></li></Link>
                  <Link to='/post-card'><li><a className="dropdown-item" href="#">Post Card Campaigns</a></li></Link>
                  <Link to='/text-marketing'><li><a className="dropdown-item" href="#">Text Marketing</a></li></Link>
                  <Link to='/account-book-keeping'><li><a className="dropdown-item" href="#">Accounts & Book Keeping</a></li></Link>
                  <Link to='/blog-content'><li><a className="dropdown-item" href="#">Blog and Content Writing</a></li></Link>
                </ul>
              </li>

                {/**
                <li class="nav-item">
                    <a class="nav-link" href="/#id_questions">OUR Service</a>
                    
                </li>
                 */}
                <li class="nav-item">
                <Link to='/blog' className='contact_ushref'>
                    <a class="nav-link" href="#">Blog</a>
                    </Link>
                </li>
                <li class="nav-item">
                <Link to='/about-us' className='contact_ushref'>
                    <a class="nav-link" href="#">About Us</a>
                    </Link>
                </li>
            </ul>
            <Link to='/contact-us' className='contact_ushref'>
            <button class="btn btn-login ml-md-2 contact_navbar">
            
          <a href='#contact_us' className='contact_ushref'>Contact us</a>  
         
            </button>
            </Link>
        </div>
    </div>
</nav>
    </div>
  )
}

export default NavbarMain
