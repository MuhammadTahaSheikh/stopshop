// Slider.js
import React, { useState, useEffect } from 'react';
import "./Services.css"
import one from "../../Assets/acqmanager.png"
import two from "../../Assets/disposition.png"
import three from "../../Assets/followupmanager.png"
import four from "../../Assets/ringless.png"
import five from "../../Assets/emailmarketing.png"
import six from "../../Assets/postcard.png"
import seven from "../../Assets/textmarketing.png"
import eight from "../../Assets/listbuilding.png"
import nine from "../../Assets/coldcalling.png"

const Services = ({ onSlideChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const slideContent = [
    'Content for Slide 1',
    'Content for Slide 2',
    'Content for Slide 3',
    'Content for Slide 4',
    'Content for Slide 5',
    'Content for Slide 6',
    'Content for Slide 7',
    'Content for Slide 8',
    'Content for Slide 9',
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setHoveredSlide(null); 
    if (onSlideChange) {             
      onSlideChange(index);    
    }
  };
                 
  const handleSlideHover = (index) => {                                  
    setHoveredSlide(index);                           
  };

  const handleSlideLeave = () => {
    setHoveredSlide(null);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (hoveredSlide === null) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideContent.length);
      }
    }, 5000); // Adjusted to match the rotation duration
  
    return () => clearTimeout(timeoutId);
  }, [currentSlide, hoveredSlide]);
  
  

  
                              
  return (
    <div>          
      <div className="slider-container">
        <section id="slideshow">
          <div className="entire-content">
            <div className="content-carrousel">
              {[
                one, two, three, four, five, one, seven, eight, nine
              ].map((image, index) => (
                <figure
                  key={index}                                                         
                  className={`shadow1 ${index === hoveredSlide ? 'hovered' : ''}`}
                  onClick={() => handleSlideChange(index)}
                  onMouseEnter={() => handleSlideHover(index)}            
                  onMouseLeave={handleSlideLeave}    
                >
                  <img src={image} alt={`Slide ${index + 1}`} />   
                </figure>
              ))}
            </div>
          </div>           
        </section>
      </div>
      <div>
        {/* Render content based on current or hovered slide */}
        <div className='content_of_first_slide'>{slideContent[hoveredSlide !== null ? hoveredSlide : currentSlide]}</div>
      </div>
    </div>
  );
};

export default Services;
