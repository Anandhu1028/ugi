import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "/assets/img/hero1.jpeg",
    title: <>One for All is a notion <br /> We uphold</>,
  },
  {
    img: "/assets/img/hero2.jpeg",
    title: <>Embedding Digital <br /> Solutions To Businesses</>,
  },
  {
    img: "/assets/img/hero_slider_3.jpeg",
    title: <>Quality Learning <br /> For Every Individual</>,
  },
  {
    img: "/assets/img/hero_slider_4.jpeg",
    title: <>Explore Serenity With <br /> Luxury Cruising</>,
  },
];

const Hero = () => {
  return (
    <section className="cs_hero_1-wrap position-relative cs_hero_slider">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        className="cs_parallax_slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="cs_hero_slide">
              {/* BACKGROUND IMAGE */}
              <div
                className="cs_hero_bg"
                style={{ backgroundImage: `url(${slide.img})` }}
              />

              {/* DARK OVERLAY */}
              <div className="cs_hero_overlay" />

              {/* CONTENT */}
              <div className="container cs_hero_content">
                <h1 className="text-white cs_fs_60">
                  {slide.title}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
};

export default Hero;
