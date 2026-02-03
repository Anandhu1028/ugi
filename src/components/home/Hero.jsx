import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "/assets/img/ugi-banner-1.jpg",
    title: <>One for All is a notion <br /> We Uphold</>,
  },
  {
    img: "/assets/img/ugi-banner4.jpg",
    title: <>Embedding Digital <br /> Solutions To Businesses</>,
  },
  {
    img: "/assets/img/ugi-banner-3.jpg",
    title: <>Quality Learning <br /> For Every Individual</>,
  },
  {
    img: "/assets/img/ugi-banner-5.jpg",
    title: <>Experiance Mobility With  <br /> Power & ComfortFor </>,
  },
  {
    img: "/assets/img/ugi-banner-6.jpg",
    title: <>Explore Serenity With <br /> Luxury Cruising</>,
  },
];

const Hero = () => {
  return (
    <section className="cs_hero_1-wrap position-relative cs_hero_slider">
      
  {/* SOCIAL ICONS – FIXED LEFT */}
  <div className="cs_hero_social">
    <div className="cs_social_btns d-flex flex-column cs_row_gap_15">
      <a href="https://x.com/ugi__group"><i className="fa-brands fa-x-twitter" /></a>
      <a href="https://www.facebook.com/ugigroupofinitiatives"><i className="fa-brands fa-facebook-f" /></a>
      <a href="https://in.pinterest.com/uginitiatives/"><i className="fa-brands fa-pinterest-p" /></a>
      <a href="https://www.linkedin.com/uas/login"><i className="fa-brands fa-linkedin-in" /></a>
      <a href="https://www.instagram.com/ugigroupofinitiatives/"><i className="fa-brands fa-instagram" /></a>
      <a href="https://www.youtube.com/channel/UCOVJgk1yk41TsUpSQjzuNtA"><i className="fa-brands fa-youtube" /></a>
      <a href="https://wa.me/9539014658"><i className="fa-brands fa-whatsapp" /></a>
    </div>
  </div>

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


      <div>
        {/* nav buttons */}
        <div>
          <div className = "cs_swiper_button_prev"></div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
