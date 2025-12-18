import React, { useState } from "react";

const data = [
  {
    label: "IT INDUSTRY",
    title: "WISHTREE | CYBERWOODZ",
    desc:
      "A collective group of experts focused on Intelligent Business Augmentation along with creative and results-driven solutions for your brand or business.",
  },
  {
    label: "EDUCATION",
    title: "TECSWAN | FOCUZ | SCHOLIUM | BRILLIANZ | INSPIRE",
    desc:
      "Our internationally recognized educational institutes aim to share knowledge and provide professional and cultural learning.",
  },
  {
    label: "TOURISM",
    title: "RIVERWOODZ WATERLINES",
    desc:
      "Our houseboat tourism is known for overnight stays and serene backwater cruise experiences in Kerala.",
  },
  {
    label: "LUXURY GIFTING",
    title: "LE ORENDA",
    desc:
      "Premium gift hampers designed to create elegant experiences and lasting bonds for every occasion.",
  },
  {
    label: "AUTOMOTIVE",
    title: "MOTO FACTORY",
    desc:
      "Our automobile industry represents freedom and economic growth, offering comfort and convenience for better travel.",
  },
];

const Established = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [animKey, setAnimKey] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setAnimKey((k) => k + 1); // forces animation replay
  };

  return (
    <section className="established-section">
      <div className="container">
        {/* Heading */}
        <div className="established-heading">
          <span>We Are Established As</span>
          <h2>Diverse Range Of Fields Under One Name</h2>
        </div>

        {/* Layout */}
        <div className="established-layout">
          {/* LEFT LIST */}
          <div className="established-list">
            {data.map((item, index) => (
              <div
                key={item.label}
                className={`list-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="established-content">
            <div key={animKey} className="content-animate advanced">
              <h3 className="title-anim">
                {data[activeIndex].title}
              </h3>
              <p className="text-anim">
                {data[activeIndex].desc}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="established-image">
            <img
              key={animKey}
              src="assets/img/laptop.png"
              alt="UGI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Established;
