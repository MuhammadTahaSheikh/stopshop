import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import './Servicetest.css'; // Adjust the path based on your project structure
import one from "../../Assets/acqmanager.png";
import two from "../../Assets/disposition.png";
import three from "../../Assets/followupmanager.png";
import four from "../../Assets/ringless.png";
import five from "../../Assets/emailmarketing.png";
import six from "../../Assets/postcard.png";
import seven from "../../Assets/textmarketing.png";
import eight from "../../Assets/listbuilding.png";
import nine from "../../Assets/coldcalling.png";
import Services from './Services';

function Servicetest() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper('.swiper-container.two', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 0,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            on: {
                slideChangeTransitionEnd: function () {
                    setCurrentSlide(this.activeIndex);
                },
            },
        });

        swiperRef.current = swiper;

        const interval = setInterval(() => {
            swiperRef.current.slideNext();
        }, 2500);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const slideContent = [
        'Content for Slide 1',
        'Content for Slide 2',
        'Content for Slide 3',
        'Content for Slide 4',
        <Services key="services" />,
        'Content for Slide ',
        'Content for Slide 7',
        'Content for Slide 8',
        'Content for Slide 9',
    ];

    return (
    <div>
    <div class="swiper-container two">
    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                <div class="slider-image">
                    <img src={one} alt="Slide 1" />
                </div>
            </div>
                        <div class="swiper-slide">
                <div class="slider-image">
                    <img src={two}/>
                </div>
            </div>
                        <div class="swiper-slide">
                <div class="slider-image">
                    <img src={three}/>
                </div>
            </div>
                        <div class="swiper-slide">
                <div class="slider-image">
                    <img src={four}/>
                </div>
            </div>
                        <div class="swiper-slide">
                <div class="slider-image">
                    <img src={five}/>
                </div>
            </div>
            <div class="swiper-slide">
            <div class="slider-image">
                <img src={six}/>
            </div>
        </div>
                    <div class="swiper-slide">
            <div class="slider-image">
                <img src={seven}/>
            </div>
        </div>
                    <div class="swiper-slide">
            <div class="slider-image">
                <img src={eight}/>
            </div>
        </div>
                    <div class="swiper-slide">
            <div class="slider-image">
                <img src={nine}/>
            </div>
        </div>
    </div>
   
</div>
<div className="slide-content">
<p>{slideContent[currentSlide]}</p>
</div>
    </div>
  )
}

export default Servicetest
