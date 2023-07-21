import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";

const SwiperSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Slider1 />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slider2 />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slider3 />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slider4 />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
