import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const TestimonialCarousel = () => {
  const testimonialData = [
    // ... (rest of the testimonialData)
  ];

  useEffect(() => {
    const slideHolder = document.querySelector("#slideHolder");

    for (let i of testimonialData) {
      slideHolder.innerHTML += (
        `<div className="swiper-slide">
          <div className="ImgHolder"><img src="${i.avatar}" alt="${i.name}" /></div>
          <div className="ContentHolder">
            <h3>${i.name}</h3>
            <p>${i.review}</p>
          </div>
        </div>`
      );
    }
  }, [testimonialData]);

  return (
    <Swiper
      className="swiper-container"
      spaceBetween={30}
      slidesPerView={2.3}
      centeredSlides
      loop
      autoplay={{ delay: 5000 }}
      coverflowEffect={{
        rotate: 0,
        depth: 800,
        slideShadows: true,
      }}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
    >
      {/* Slides */}
      {testimonialData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="ImgHolder"><img src={item.avatar} alt={item.name} /></div>
          <div className="ContentHolder">
            <h3>{item.name}</h3>
            <p>{item.review}</p>
          </div>
        </SwiperSlide>
      ))}
      {/* Add more slides if needed */}
    </Swiper>
  );
};

export default TestimonialCarousel;
