import React from 'react';
import "../sass/bestSeller.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css'; 

const BestSeller = () => {
  return (
    <div className='bestSellerBox'>
      <div className="top">
        <h1>Best Sellers</h1>
      </div>
      <div className="bottom pt-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={4} 
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20, 
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20, 
            },
            40:{
              slidesPerView: 1, 
              spaceBetween: 10, 
            },
          }}
        >
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_5.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>

            </div>
          </SwiperSlide>
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_4.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_3.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_2.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_1.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_7.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="productCard">
            <div className="cardBody">
              <img src="https://themewagon.github.io/aranoz/img/product/product_8.png" alt="" />
              <p>Belt Watch</p>
              <span>150$</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
