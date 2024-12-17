import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import { Navigation, Autoplay } from 'swiper/modules';
import "../sass/swiper.scss"

const Slider = () => {
  return (
    <div className="mainSliderBox">
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{
            width: '90%',
            height: 'auto',
          }}
        >
          <SwiperSlide className='swiper-content'>
            <div className="texts">
              <h2>Wood & Cloth Sofa</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
                vestibulum magna sed, convallis ex.</p>
            </div>
            <img src="https://themewagon.github.io/aranoz/img/banner_img.png" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide className='swiper-content'>
            <div className="texts">
              <h2>Wood & Cloth Sofa</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor,
                vestibulum magna sed, convallis ex.</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg12rY4hAs6ZGYTdp81do2Kz3EB1EusCtdOw&s" alt="Slide 2" />
          </SwiperSlide>

          <div className="swiper-button-prev sliderbutton"></div>
          <div className="swiper-button-next sliderbutton"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
