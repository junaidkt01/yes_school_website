"use client";

import Image from "next/image";
import "./MemorableMoments.scss";

const memorableMoments = [
  { title: "First Day at School", image: "/academic/memorable_moment1.png" },
  { title: "Parents Training", image: "/academic/memorable_moment2.png" },
  { title: "Teachers Training", image: "/academic/memorable_moment3.png" },
  { title: "Management Training", image: "/academic/memorable_moment4.png" },
  { title: "Alumni Training", image: "/academic/memorable_moment5.png" },
  { title: "Science Exhibition", image: "/academic/memorable_moment6.png" },
  { title: "Arts Fest", image: "/academic/memorable_moment7.png" },
  { title: "Sports Day", image: "/academic/memorable_moment8.png" },
  { title: "Inter Campus Contest", image: "/academic/memorable_moment9.png" },
  { title: "Magazine", image: "/academic/memorable_moment10.png" },
];

const MemorableMoments = () => {
  return (
    <section className="memorable_moments_section">
      <h2>
        Our <span>Memorable Moments</span>
      </h2>

      <div className="bg-lines">
        <svg
          className="lines_svg"
          viewBox="0 0 1400 1200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {[...Array(11)].map((_, i) => (
            <line
              key={i}
              x1={i * 130}
              y1={0}
              x2={i * 30}
              y2="1200"
              stroke="url(#grad)"
              strokeWidth="1.2"
            />
          ))}
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1400" y2="0">
              <stop stopColor="#2a1b63" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="#6a5acd" stopOpacity="0.25" />
              <stop offset="1" stopColor="#2a1b63" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="memorable_moments_container">
          {memorableMoments.map((item, index) => (
            <div key={index} className={`moment_card card_${index + 1}`}>
              <Image
                src="/pin.png"
                alt="pin"
                width={32}
                height={32}
                className="pin_icon"
              />
              <div className="image_wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={260}
                  height={320}
                />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemorableMoments;


