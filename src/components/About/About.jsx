import { useEffect, useState, useRef  } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const sectionsRef = useRef({});

  /* ================= BASIC REVEAL (SAFE) ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach(el =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  /* ================= TESTIMONIAL SLIDER ================= */
  const testimonials = [
    {
      name: "Carol McCarthy",
      role: "Product manager",
      image: "/assets/img/testimonial_1.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 5
    },
    {
      name: "Peter Johnson",
      role: "Web developer",
      image: "/assets/img/testimonial_2.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 5
    },
    {
      name: "Max Lawrence",
      role: "Digital marketing",
      image: "/assets/img/testimonial_3.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 5
    },
    {
      name: "Darlene Robertson",
      role: "Web design",
      image: "/assets/img/testimonial_4.jpeg",
      text: "I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone",
      rating: 4.5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
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
      {/* ================= PAGE HEADER ================= */}
      <section
        className="cs_page_header position-relative background-filled d-flex align-items-center justify-content-between"
        style={{ backgroundImage: "url(/assets/img/page_header_1.jpeg)" }}
      >
        <div className="container position-relative z-index-1">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-white cs_fs_18 cs_mb_5">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">About</li>
            </ol>
          </nav>
          <h1 className="cs_fs_48 cs_fs_lg_36 text-white m-0">About Us</h1>
        </div>
        <div className="page_header_overlay"></div>
      </section>

      


      <section 
        ref={(el) => (sectionsRef.current['history'] = el)}
        className="history-section scroll-reveal"
      >
        <div className="section-header-banner">
          <div className="banner-overlay"></div>
          <div className="container">
            <h1 className="banner-title">UGI History</h1>
            <p className="banner-subtitle">Peek into our history to know more about us</p>
          </div>
        </div>

        <div className="container history-content">
          <div className="section-intro scroll-reveal">
            <h2 className="section-title">We Are UGI</h2>
            <div className="title-line"></div>
          </div>

         <div className="vision-mission-grid nice-grid">
  <div className="vm-card scroll-reveal" style={{ animationDelay: "0.1s" }}>
    <div className="vm-card-inner">
      <span className="vm-badge">01</span>
      <h3 className="vm-title">Vision</h3>
      <p className="vm-text">
        As a group of initiatives, we aim to develop, advance, and redefine how
        business operates across our fields—creating outcomes that benefit both
        society and the economy.
      </p>
    </div>
  </div>

  <div className="vm-card scroll-reveal" style={{ animationDelay: "0.2s" }}>
    <div className="vm-card-inner">
      <span className="vm-badge">02</span>
      <h3 className="vm-title">Mission</h3>
      <p className="vm-text">
        To grow together with a single purpose by integrating IT, Luxury Gifting,
        Education, Automotive, and Tourism—building a strong, connected business
        ecosystem.
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
                    src="/assets/img/ugi-light.webp"
                      alt="Team Meeting"
                      className="img-fluid cs_rounded_15"
                    />
                  </div>
                  <div className="experience-badge">
                    <div className="badge-icon">
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M25 5L27.5 17.5L35 10L32.5 22.5L45 20L37.5 27.5L50 25L42.5 32.5L50 40L37.5 37.5L40 50L32.5 42.5L35 55L27.5 47.5L25 60L22.5 47.5L15 55L17.5 42.5L5 50L12.5 37.5L0 40L7.5 32.5L0 25L12.5 27.5L5 20L17.5 22.5L15 10L22.5 17.5L25 5Z" fill="white"/>
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
                 United Group of Initiatives is headquartered in Dubai and is initiated as a way to bring different business sectors into one goal.
                </p>

                <div className="skill-bars mb-4">
                  <div className="skill-item">
                    <div className="skill-header">
                    </div>
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="about-features">
                        {[
                            {
                            icon: "⚖️",
                            title: "Law Abiding",
                            desc: "As a business group, we are committed to achieving our objectives while adhering to the law."
                            },
                            {
                            icon: "🎯",
                            title: "Disciplined",
                            desc: "We meet the objectives with precision and punctuality thanks to our ideals of teamwork."
                            },
                            {
                            icon: "💎",
                            title: "Transparent",
                            desc: "As an open book, we follow the path of being honest and giving the right results."
                            }
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


      {/* ================= SERVICES ================= */}
      <section className="bg-primary cs_pt_140 cs_pb_110 services-section">
        <div className="container">
          <div className="row">
            {[
              {
                title: "Accounting and Bookkeeping",
                desc: "Services related to financial record-keeping, bookkeeping, tax preparation.",
                img: "/assets/img/service_1.jpeg",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M5 8H35V35H5V8Z" stroke="white" strokeWidth="2"/>
                    <path d="M12 2V8" stroke="white" strokeWidth="2"/>
                    <path d="M20 2V8" stroke="white" strokeWidth="2"/>
                    <path d="M28 2V8" stroke="white" strokeWidth="2"/>
                    <path d="M10 16H15V21H10V16Z" fill="white"/>
                    <path d="M17 16H22V21H17V16Z" fill="white"/>
                    <path d="M24 16H29V21H24V16Z" fill="white"/>
                  </svg>
                )
              },
              {
                title: "IT Support and Consulting",
                desc: "Providing technical support, network setup, software installation.",
                img: "/assets/img/service_2.jpeg",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="15" stroke="white" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2"/>
                    <path d="M20 5V15" stroke="white" strokeWidth="2"/>
                    <path d="M20 25V35" stroke="white" strokeWidth="2"/>
                    <path d="M5 20H15" stroke="white" strokeWidth="2"/>
                    <path d="M25 20H35" stroke="white" strokeWidth="2"/>
                  </svg>
                )
              },
              {
                title: "Marketing and Advertising",
                desc: "Services that help businesses create and execute marketing strategies.",
                img: "/assets/img/service_3.jpeg",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M8 32L16 8L24 24L32 12" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="8" r="2" fill="white"/>
                    <circle cx="24" cy="24" r="2" fill="white"/>
                    <circle cx="32" cy="12" r="2" fill="white"/>
                  </svg>
                )
              },
              {
                title: "Human Resources",
                desc: "Assistance with HR-related tasks such as recruitment, employee training, performance.",
                img: "/assets/img/service_4.jpeg",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="2"/>
                    <path d="M8 35C8 28 13 23 20 23C27 23 32 28 32 35" stroke="white" strokeWidth="2"/>
                  </svg>
                )
              },
            ].map((service, i) => (
              <div className="col-xl-3 col-md-6 reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="cs_service cs_style_1 bg-white cs_mb_30">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <div className="service-image">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid"
                    />
                    <div className="service-overlay"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="cs_fs_20 mb-2">{service.title}</h3>
                    <p className="mb-0">{service.desc}</p>
                  </div>
                  <div className="service-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <p className="services-footer-text">
              <span className="text-accent">Digital agency</span> services built specifically for your business
              <Link to="/services" className="ms-3 cs_btn cs_style_2">
                Find More Services
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="cs_pt_133 cs_pb_100 team-section">
        <div className="container">
          <div className="text-center mb-5 reveal">
            <h3 className="text-accent cs_fs_20 mb-2">Meet Our </h3>
            <h2 className="cs_fs_48 cs_fs_lg_36">
             UGI Team Members
            </h2>
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
              <div className="col-lg-4 col-md-6 reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
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
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                        <a href="#" className="social-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                        <a href="#" className="social-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <h2 className="cs_fs_48 cs_fs_lg_36 mb-4">What They're Saying?</h2>
                <p className="testimonial-description">
                  Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses.
                </p>
                <div className="testimonial-navigation mt-4">
                  <button className="testimonial-nav-btn prev" onClick={prevTestimonial}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="testimonial-nav-btn next" onClick={nextTestimonial}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(testimonial.rating) ? "#FFB800" : "#E0E0E0"}>
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                            </svg>
                          ))}
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
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