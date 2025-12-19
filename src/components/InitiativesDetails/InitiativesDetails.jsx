import { useState } from "react";
import "./initiativesdetails.css";

const INITIATIVES = {
  it: {
    label: "IT Industry",
    title: "IT INDUSTRY",
    brands: "WISHTREE | CYBERWOODZ",
    desc: `A collective group of experts focused on Intelligent Business
    Augmentation along with creative and results-driven solutions for your
    brand or for your business with the help of Digital Marketing,
    Website Development etc.`,
    img: "/assets/img/initiatives/img-2.webp",
  },
  education: {
    label: "Education",
    title: "EDUCATION",
    brands: "FOCUZ | SCHOLIUM | BRILLIANZ | INSPIRE",
    desc: `Our internationally recognized educational institutes aim to share
    knowledge with society and provide its members with knowledge,
    including basic facts, job skills, and cultural norms and values.`,
    img: "/assets/img/initiatives/img-2.webp",
  },
  tourism: {
    label: "Tourism",
    title: "TOURISM",
    brands: "RIVERWOODZ WATERLINES",
    desc: `Our houseboat tourisms are highly known for their overnight tours
    and for making fast trips through backwaters. Offering an amazing
    stay and cruise experience in Kerala.`,
    img: "/assets/img/initiatives/img-2.webp",
  },
  gifting: {
    label: "Luxury Gifting",
    title: "LUXURY GIFTING",
    brands: "LE ORENDA",
    desc: `We have highly elegant, classy and good-quality gift hampers to
    create a unique experience for every occasion and build bonds with
    people who matter most.`,
    img: "/assets/img/initiatives/img-2.webp",
  },
  automotive: {
    label: "Automotive",
    title: "AUTOMOTIVE",
    brands: "MOTO FACTORY",
    desc: `Our automobile industry represents freedom and economic growth.
    We aim to offer comfort and convenience for a better travel experience.`,
    img: "/assets/img/initiatives/img-2.webp",
  },
};

const InitiativesDetails = () => {
  const [activeKey, setActiveKey] = useState("it");
  const [animate, setAnimate] = useState(false);

  const handleChange = key => {
    if (key === activeKey) return;
    setAnimate(true);
    setTimeout(() => {
      setActiveKey(key);
      setAnimate(false);
    }, 250);
  };

  const data = INITIATIVES[activeKey];

  return (
    <section className="initiatives-wrapper cs_pt_140 cs_pb_115">
      <div className="container">

        {/* HEADING */}
        <div className="initiatives-heading">
          <span className="mini-title">UGI</span>
          <h2>Diverse Range Of Fields Under One Name</h2>
          <span className="heading-line" />
        </div>

        <div className="row">

          {/* LEFT LIST */}
          <div className="col-xl-4 col-lg-5 cs_mb_lg_60">
            <div className="cs_service_list">
              <h3 className="list-title">All Initiatives</h3>

              <ul>
                {Object.keys(INITIATIVES).map(key => (
                  <li key={key}>
                    <button
                      className={key === activeKey ? "active" : ""}
                      onClick={() => handleChange(key)}
                    >
                      {INITIATIVES[key].label}
                      <i className="fa-solid fa-arrow-right-long" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={`col-xl-8 col-lg-7 initiative-content ${animate ? "fade-out" : "fade-in"}`}>
            <div className="initiative-flex">

              {/* TEXT */}
              <div className="initiative-text">
                <h3>{data.title}</h3>
                <h5>{data.brands}</h5>

                <blockquote className="initiative-quote">
                  {data.desc}
                </blockquote>
              </div>

              {/* IMAGE */}
              <div className="initiative-image">
                <img src={data.img} alt={data.title} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InitiativesDetails;
