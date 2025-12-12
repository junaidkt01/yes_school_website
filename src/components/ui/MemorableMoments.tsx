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

export default function MemorableMoments() {
  return (
    <section className="memorable_moments_section">
      <h2>
        Memorable Moments of <br /><span>YES INDIA Foundation</span>
      </h2>

      <div className="moments_wrapper">
        {/* Centered background lines */}
              {/* Horizontal Lines Background */}
        <div className="wall_bg"></div>

        <div className="moments_grid">
          {memorableMoments.map((item, index) => (
            <div key={index} className={`moment_card card_${index + 1}`}>
              <Image
                src="/pin.png"
                alt="pin"
                width={32}
                height={32}
                className="pin_icon"
              />
              <div className="image_box">
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
}



