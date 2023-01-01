import React from "react";
import SliderProducts from "../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Slider.css";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          767: {
            slidesPerView: 3,
          },
          567: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {SliderProducts.map((slide, i) => {
          return (
            <SwiperSlide>
              <div className="left-s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>{slide.price}$</span>
                <div className="">Shop Now</div>
              </div>
              <img src={slide.img} alt="product-image" className="img-p" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
