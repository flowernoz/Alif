import React, { useRef, useState } from "react";
// Import Swiper React components
import { useNavigate, createSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { katalogCarousel } from "../../static/carouseldata";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CatalogCarousel.css";
// import required modules
import { Navigation } from "swiper/modules";

export default function CatalogCarousel() {
  const navigate = useNavigate();
  function navigatetoCategory(title) {
    navigate({
      pathname: "categories",
      search: `${createSearchParams({
        category: `${title}`,
      })}`,
    });
  }
  return (
    <div id="categories_main" className="CatalogCarousel">
      <div className="hide">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper hidden"
        >
          {katalogCarousel.map((item, index) => (
            <SwiperSlide key={index}>
              <button onClick={() => navigatetoCategory(item.title)}>
                <div className="katalogImg">
                  <img src={item.image} alt="images" />
                </div>
                <span>{item.title}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="categoriya">
        {katalogCarousel.map((item, index) => (
          <div key={index}>
            <button
              className="pathtocategory"
              onClick={() => navigatetoCategory(item.title)}
            >
              <div className="katalogImg">
                <img src={item.image} alt="images" />
              </div>
              <span>{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
