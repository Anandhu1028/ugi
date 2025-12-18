import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section className="cs_hero_1-wrap position-relative cs_hero_slider bg-primary">
      {/* ================= SLIDER ================= */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        className="cs_parallax_slider"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <img
              src="/assets/img/hero_slider_1.jpeg"
              alt="Slider"
              className="cs_entity_img"
            />
            <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />

            <div className="container">
              <div className="cs_hero_text cs_zindex_5">
                
                <h1 className="text-white cs_fs_60">
                 One for All is a notion  <br /> We uphold
                </h1>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <img
              src="/assets/img/hero_slider_2.jpeg"
              alt="Slider"
              className="cs_entity_img"
            />
            <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />

            <div className="container">
              <div className="cs_hero_text cs_zindex_5">
                
                <h1 className="text-white cs_fs_60">
                 Embedding Digital <br /> Solutions To Businesses
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <img
              src="/assets/img/hero_slider_3.jpeg"
              alt="Slider"
              className="cs_entity_img"
            />
            <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />

            <div className="container">
              <div className="cs_hero_text cs_zindex_5">
                
                <h1 className="text-white cs_fs_60">
                 Quality Learning  <br /> For Every Individual
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
       {/* Slide 4 */}
        <SwiperSlide>
          <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <img
              src="/assets/img/hero_slider_3.jpeg"
              alt="Slider"
              className="cs_entity_img"
            />
            <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />

            <div className="container">
              <div className="cs_hero_text cs_zindex_5">
                
                <h1 className="text-white cs_fs_60">
                Explore Serenity With  <br /> Luxury Cruising
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
{/* Slide 5 */}
        <SwiperSlide>
          <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <img
              src="/assets/img/hero_slider_3.jpeg"
              alt="Slider"
              className="cs_entity_img"
            />
            <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />

            <div className="container">
              <div className="cs_hero_text cs_zindex_5">
                
                <h1 className="text-white cs_fs_60">
                Experiance mobility  with  <br /> Power  & Comfort
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
     

      {/* Slide 6 */}
        <SwiperSlide>
          <div className="cs_hero cs_style_1 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <img
              src="/assets/img/hero_slider_3.jpeg"
              alt="Slider"
              className="cs_entity_img"
            />
            <div className="bg-primary opacity-75 position-absolute w-100 h-100 start-0 top-0" />

            <div className="container">
              <div className="cs_hero_text cs_zindex_5">
                
                <h1 className="text-white cs_fs_60">
               Sharing Gratitude  with<br /> Maginficent items
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


      

      {/* ================= SLIDER NAV ================= */}
      <div className="cs_slider_navigation d-flex flex-column position-absolute cs_zindex_4">
        <div className="cs_swiper_button_prev cs_height_45 cs_width_45 bg-white rounded-circle d-flex align-items-center justify-content-center" />
        <div className="cs_swiper_button_next cs_height_45 cs_width_45 bg-white rounded-circle d-flex align-items-center justify-content-center" />
      </div>

      {/* ================= SOCIAL ICONS (LEFT SIDE) ================= */}
     {/* ================= SOCIAL ICONS (LEFT SIDE) ================= */}
<div className="cs_social_btns d-flex flex-column cs_column_gap_15 cs_row_gap_15 position-absolute cs_zindex_5">

  <a
          href="https://x.com/ugi__group"
          className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
        >
          <i className="fa-brands fa-twitter" />
        </a>

  <a
    href="https://www.facebook.com/ugigroupofinitiatives"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
    aria-label="Facebook"
  >
    <i className="fa-brands fa-facebook-f" />
  </a>

  <a
    href="https://www.pinterest.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
    aria-label="Pinterest"
  >
    <i className="fa-brands fa-pinterest-p" />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
    aria-label="LinkedIn"
  >
    <i className="fa-brands fa-linkedin-in" />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
    aria-label="Instagram"
  >
    <i className="fa-brands fa-instagram" />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
    aria-label="YouTube"
  >
    <i className="fa-brands fa-youtube" />
  </a>

  <a
    href="https://wa.me/8001234567"
    target="_blank"
    rel="noopener noreferrer"
    className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
    aria-label="WhatsApp"
  >
    <i className="fa-brands fa-whatsapp" />
  </a>

</div>

    </section>
  );
};

export default Hero;
