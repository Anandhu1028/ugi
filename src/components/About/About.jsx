import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import JourneyTimeline from "../JourneyTimeline";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const sectionsRef = useRef({});

  /* ================= BASIC REVEAL (SAFE) ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ================= TESTIMONIAL SLIDER ================= */
  const testimonials = [
    {
      name: "Carol McCarthy",
      role: "Product manager",
      image: "/assets/img/testimonial_1.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 5,
    },
    {
      name: "Peter Johnson",
      role: "Web developer",
      image: "/assets/img/testimonial_2.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 5,
    },
    {
      name: "Max Lawrence",
      role: "Digital marketing",
      image: "/assets/img/testimonial_3.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 5,
    },
    {
      name: "Darlene Robertson",
      role: "Web design",
      image: "/assets/img/testimonial_4.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 4.5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <>
     
     {/* ================= About BANNER ================= */}
      <section className="career-banner">
        <div
          className="career-banner-bg"
          style={{
            backgroundImage: `         
              url(/assets/img/ugi-banner-History-1.jpg)
            `,
          }}
        />

        <div className="career-banner-inner reveal active">
          <span className="career-badge">UGI - ABOUT US</span>

          <h1 className="career-title">
            Peek into our history to know more about us
          </h1>


          <div className="career-banner-line" />
        </div>
      </section>

      <section
        ref={(el) => (sectionsRef.current["history"] = el)}
        className="history-section scroll-reveal"
      >
        <div className="container history-content">
          <div className="section-intro scroll-reveal">
            <h2 className="section-title">We Are UGI</h2>

            <div className="title-line"></div>
          </div>

          <div className="vision-mission-grid nice-grid">
            <div
              className="vm-card scroll-reveal"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="vm-card-inner">
                <span className="vm-badge">01</span>
                <h3 className="vm-title">Vision</h3>
                <p className="vm-text">
                  As a group of initiatives, we aim to develop, advance, and
                  redefine how business operates across our fields—creating
                  outcomes that benefit both society and the economy.
                </p>
              </div>
            </div>

            <div
              className="vm-card scroll-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="vm-card-inner">
                <span className="vm-badge">02</span>
                <h3 className="vm-title">Mission</h3>
                <p className="vm-text">
                  To grow together with a single purpose by integrating IT,
                  Luxury Gifting, Education, Automotive, and Tourism—building a
                  strong, connected business ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="cs_pt_135 cs_pb_80 position-relative about-main-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 cs_mb_lg_55">
              <div className="about-images-wrapper reveal">
                <div className="main-image-container">
                  <img
                    src="/assets/img/about/ugi-website-banners-e1672753477412.webp"
                    alt="Experience"
                    className="img-fluid cs_rounded_15 main-about-img"
                  />
                  <div className="floating-element">
                    <img
                      src="/assets/img/ugilogo.webp"
                      alt="Team Meeting"
                      className="img-fluid cs_rounded_15"
                    />
                  </div>
                  <div className="experience-badge">
                    <div className="badge-icon">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          d="M25 5L27.5 17.5L35 10L32.5 22.5L45 20L37.5 27.5L50 25L42.5 32.5L50 40L37.5 37.5L40 50L32.5 42.5L35 55L27.5 47.5L25 60L22.5 47.5L15 55L17.5 42.5L5 50L12.5 37.5L0 40L7.5 32.5L0 25L12.5 27.5L5 20L17.5 22.5L15 10L22.5 17.5L25 5Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="badge-text">
                      <div className="badge-number">32K+</div>
                      <div className="badge-label">Projects</div>
                    </div>
                    <div className="badge-text">
                      <div className="badge-number">1170+</div>
                      <div className="badge-label">Employees </div>
                    </div>
                    <div className="badge-text">
                      <div className="badge-number">64+</div>
                      <div className="badge-label">Events </div>
                    </div>
                    <div className="badge-text">
                      <div className="badge-number">23+</div>
                      <div className="badge-label"> Locations</div>
                    </div>
                  </div>
                  <div className="dots-decoration"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div className="about-content">
                <h2 className="cs_fs_48 cs_fs_lg_36 mb-4 about-title">
                  <span className="text-accent">Grow Faster</span>
                </h2>
                <p className="about-description mb-4">
                  United Group of Initiatives is headquartered in Dubai and is
                  initiated as a way to bring different business sectors into
                  one goal.
                </p>

                <div className="skill-bars mb-4">
                  <div className="skill-item">
                    <div className="skill-header"></div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="about-features">
                  {[
                    {
                      icon: "⚖️",
                      title: "Law Abiding",
                      desc: "As a business group, we are committed to achieving our objectives while adhering to the law.",
                    },
                    {
                      icon: "🎯",
                      title: "Disciplined",
                      desc: "We meet the objectives with precision and punctuality thanks to our ideals of teamwork.",
                    },
                    {
                      icon: "💎",
                      title: "Transparent",
                      desc: "As an open book, we follow the path of being honest and giving the right results.",
                    },
                  ].map((item, index) => (
                    <div className="feature-item" key={index}>
                      <div className="feature-icon">
                        <span className="feature-emoji">{item.icon}</span>
                      </div>

                      <div className="feature-content">
                        <h4 className="feature-title">{item.title}</h4>
                        <p className="feature-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHAIRMAN SECTION ================= */}
      <section className="chairman-section-about cs_pt_135 cs_pb_100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 reveal">
              <div className="chairman-image-wrapper">
                <div className="chairman-decorations">
                  <div className="chairman-circle chairman-circle-1"></div>
                  <div className="chairman-circle chairman-circle-2"></div>
                  <div className="chairman-circle chairman-circle-3"></div>
                  <div className="chairman-dots"></div>
                </div>
                <img
                  src="/assets/img/about/ajith-ns-01-01-scaled.webp"
                  alt="Chairman Ajith M.S"
                />
              </div>
            </div>

            <div className="col-lg-7 reveal">
              <div className="chairman-content">
                <div className="chairman-intro mb-4">
                  <p className="chairman-greeting">
                    I, <span className="chairman-name">Ajith N.S</span>the
                    substantive chairman of UGI, Welcome to our impressive
                    website. Please allow me to give you a brief power
                    introduction of our strong company and me.
                  </p>
                  <br />
                  <p>
                    Every one of us is striving and working arduously to reach a
                    goal that we all share. Therefore, if we both want the same
                    thing, why work alone to get it when we can work together to
                    do so?
                  </p>
                  <p>
                    Each of us is thriving and striving to reach their
                    respective goals, which we all share. So why try to
                    accomplish it alone if we can accomplish it together if we
                    have the same goal? UGI is the solution where we adhere to
                    the principle of “One for all,” which means various
                    businesses with a same objective. It is a grouping of top
                    businesses from industries including Education, IT,
                    Automotive, Tourism, and Luxury goods that is dispersed
                    across a region of five nations and is still growing. As we
                    accomplish all of our milestones with passion and a huge
                    amount of time and work, our achievements as compared to
                    other businesses are more wealthy. UGI has steadfastly
                    advocated for better business methods and higher levels of
                    client satisfaction ever since its founding and being a
                    Chairman of UGI I’ve assisted in the launch of digital and
                    influencer strategies with some of the most recognizable
                    brands in the world.
                  </p>
                </div>

                <div className="chairman-stats-inline">
                  <div className="stat-inline-item">
                    <div className="stat-inline-number">1170+</div>
                    <div className="stat-inline-label">Employees</div>
                  </div>
                  <div className="stat-inline-item">
                    <div className="stat-inline-number">23+</div>
                    <div className="stat-inline-label">Locations</div>
                  </div>
                  <div className="stat-inline-item">
                    <div className="stat-inline-number">32K+</div>
                    <div className="stat-inline-label">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* UGI Story Section */}
          <div className="ugi-story-section mt-5">
            <div className="text-center mb-5">
              <h2 className="cs_fs_48 cs_fs_lg_36 mb-4">UGI Is My Story</h2>
            </div>

            <div className="row">
              <div className="col-lg-6 mb-4 reveal">
                <div className="story-card">
                  <h3 className="story-title">Where I started</h3>
                  <div className="story-content">
                    <p>
                      I was born and raised in Alleppey, a coastal region known
                      as the "Venice of the East". Initially, I began my career
                      as a Chef but being inspired by the stories of my
                      forefathers, the skill of the which me started its pursuit
                      of becoming a businessman. In all of my endeavors, I
                      achieved my goal by being creative and an innovative
                      thinker.
                    </p>
                    <p>
                      The wise say, offer blood, sweat, and tears and in return,
                      you shall receive your blessing. This collaboration of
                      smart thinking and hard work has helped us grow into the
                      successful company we are now, branches out into every
                      field we placed our hands on.
                    </p>
                    <p>
                      My vision has always been crystal clear because of the
                      entrepreneurial zeal that has led me to inspire all the
                      younger generation to take advantage of new technologies
                      and business expansion opportunities with confidence and
                      belief.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4 reveal">
                <div className="story-card">
                  <h3 className="story-title">Where I am Now</h3>
                  <div className="story-content">
                    <p>
                      You can refer to me as an angel investor, serial
                      entrepreneur, millennial mentor, philanthropist, or
                      technology evangelist. I, Ajith Nalmalackal Suprabha,
                      encourage, inspire, and instruct companies on how to use
                      developing technology to grow their operations, stand out
                      from the competition, and interact with companies for a
                      burgeoning IT company for many Fortune 50 enterprise
                      firms.
                    </p>
                    <p>
                      UGI takes that expertise to the next level by offering a
                      new strategy powered by technology to stand out from
                      today's digital cacophony. My businesses are spread out
                      among the education sector across a variety of
                      backgrounds. Being the Chairman of UGI, I've assisted in
                      the launch of digital and influencer strategies with some
                      of the most recognizable brands in the world.
                    </p>
                    <p>
                      I'm one of the co-founders & directors of Brilliant
                      Educational Group & Inspire University. And also a
                      technology evangelist for many Fortune 50 enterprise
                      firms. My businesses are spread out among the seven
                      emirates of the United Arab Emirates, Bahrain, Kuwait,
                      Oman, India, and Georgia. They are still growing and
                      looking forward to new commercial ventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



 <section className="journey-intro cs_pt_100 cs_pb_80">
  <div className="container">
    <div className="row align-items-center">
      
      {/* LEFT CONTENT */}
      <div className="col-lg-6 reveal">
        <h3 className="text-accent cs_fs_20 mb-2">UGI</h3>
        <h2 className="cs_fs_48 cs_fs_lg_36 mb-4">
          Our Journey
        </h2>
        <p className="journey-description">
          UGI is one of the well-known conglomerates in the Middle East with
          9 companies established across GCC countries, India, and Georgia.
          We collaborate globally and continuously innovate to reshape industries.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-6">
        <div className="journey-image-wrapper">
          <img
          src="/assets/img/about/about-img-3-Photoroom.png"
          alt="UGI Journey"
          className="flag-image"
        />

        </div>
      </div>

    </div>
  </div>
</section>
<section className="journey-stack-section">
  <ScrollStack useWindowScroll={false}>
    <ScrollStackItem bg="/assets/img/about-Journey/Journey-one.png">
      <h2>2017</h2>
      <p>Founded UGI in Dubai</p>
    </ScrollStackItem>

    <ScrollStackItem bg="/assets/img/logos/moto.png">
      <h2>2017</h2>
      <p>Established Moto Factory in Kerala</p>
    </ScrollStackItem>

    <ScrollStackItem bg="/assets/img/logos/focuz.png">
      <h2>2018</h2>
      <p>Established Focuz Academy in Kerala</p>
    </ScrollStackItem>

    <ScrollStackItem bg="/assets/img/logos/cyberwoodz.png">
      <h2>2019</h2>
      <p>
        Le Orenda, Wishtree Infosolutions (Dubai) & Cyberwoodz (Kerala)
      </p>
    </ScrollStackItem>

    <ScrollStackItem bg="/assets/img/logos/tecswan.webp">
      <h2>2020</h2>
      <p>Inception of Tecswam in Dubai & Kerala</p>
    </ScrollStackItem>

    <ScrollStackItem bg="/assets/img/logos/river.png">
      <h2>2022</h2>
      <p>Established RiverWoodz in Kerala</p>
    </ScrollStackItem>

    <ScrollStackItem>
      <h2>Upcoming</h2>
      <p>Dreamzone, Scholium (Dubai), Cafe 33 (Kerala)</p>
    </ScrollStackItem>
  </ScrollStack>
</section>


      {/* ================= TEAM ================= */}
      <section className="cs_pt_133 cs_pb_100 team-section">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h3 className="text-accent cs_fs_20 mb-2">Meet Our </h3>
            <h2 className="cs_fs_48 cs_fs_lg_36">UGI Team Members</h2>
          </div>

          <div className="row justify-content-center">
            {[
              {
                name: "Ralph Edwards",
                role: "Web designer",
                img: "/assets/img/team_member_1.jpeg",
              },
              {
                name: "Wade Warren",
                role: "Marketing Coordinator",
                img: "/assets/img/team_member_2.jpeg",
              },
              {
                name: "Jane Cooper",
                role: "Creative Designer",
                img: "/assets/img/team_member_3.jpeg",
              },
            ].map((member, i) => (
              <div
                className="col-lg-4 col-md-6 reveal"
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="cs_team cs_style_1 cs_mb_30">
                  <div className="team-image-wrapper">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="img-fluid team-member-img"
                    />
                    <div className="team-overlay">
                      <div className="team-social">
                        <a href="#" className="social-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                        <a href="#" className="social-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                        <a href="#" className="social-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 9H2V21H6V9Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="cs_pt_100 cs_pb_140 testimonial-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 reveal">
              <div className="testimonial-header">
                <h3 className="text-accent cs_fs_20 mb-2">Testimonial</h3>
                <h2 className="cs_fs_48 cs_fs_lg_36 mb-4">
                  What They're Saying?
                </h2>
                <p className="testimonial-description">
                  Providing legal advice, contract drafting, compliance
                  assistance, intellectual property protection, and other legal
                  support for businesses.
                </p>
                <div className="testimonial-navigation mt-4">
                  <button
                    className="testimonial-nav-btn prev"
                    onClick={prevTestimonial}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="testimonial-nav-btn next"
                    onClick={nextTestimonial}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-7 reveal">
              <div className="testimonial-slider">
                <div className="testimonial-track">
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                      <div className="testimonial-content">
                        <div className="testimonial-avatar">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-rating">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill={
                                i < Math.floor(testimonial.rating)
                                  ? "#FFB800"
                                  : "#E0E0E0"
                              }
                            >
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                          ))}
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">
                          <h4 className="testimonial-name">
                            {testimonial.name}
                          </h4>
                          <p className="testimonial-role">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
