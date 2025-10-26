"use client";

import { campuses } from "@/utils/locationCampus";
import Image from "next/image";
import React from "react";
import { PlayCircle } from "lucide-react";

const Page = () => {
  // const router = useRouter();

  const handleVideoClick = (url: string) => {
    // Navigate to external video URL (can be YouTube, Vimeo, or any link)
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Banner Section */}
      <section className="institutions_banner_container">
        <div className="institutions_banner_wrapper">
          <Image
            src="/about_banner.png"
            alt="about_banner"
            width={1600}
            height={750}
            priority
            className="about_banner_image"
          />
          <div className="institutions_banner_content">
            <h1>
              A Closer Look <br />
              YES India Institutions <br /> Locations & Imagery
            </h1>
          </div>
        </div>
      </section>

      {/* Institutions List Section */}
      <section className="wrapper_section">
        <div className="institutions_listing_container">
          <p>
            {`The Foundation's 42 schools and 11 special learning institutes are
            spread across vibrant campuses, each designed to create a conducive
            learning environment. With state-of-the-art facilities, spacious
            classrooms, and well-equipped resources, these institutions reflect
            the foundation's commitment to quality education. Visuals of these
            campuses, along with their locations, offer a glimpse into the
            environments where students learn, grow and thrive.`}
          </p>

          <div className="campus_grid">
            {campuses.map((campus, i) => (
              <div key={i} className="campus_card">
                <div className="campus_image_wrapper">
                  <Image
                    src={campus.image}
                    alt={campus.location}
                    width={400}
                    height={300}
                    className="campus_image"
                  />

                  {/* Play Button Overlay */}
                  <button
                    className="video_play_button"
                   onClick={() => campus.url && handleVideoClick(campus.url)}
                    aria-label={`Play video for ${campus.location}`}
                  >
                    <PlayCircle size={64} className="play_icon" />
                  </button>

                  {/* Gradient Overlay + Location */}
                  <div className="campus_overlay">
                    <p className="campus_location">{campus.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
