import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { homeCarousel } from "../../static/carouseldata";
import "./Homecarousel.css";
export default function HomeCarousel() {
  return (
    <div className="HomeCarousel">
      <Swiper
        style={{
          "--swiper-navigation-color": "#333",
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#aaa8a8",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {homeCarousel.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="slide" className="slides"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
