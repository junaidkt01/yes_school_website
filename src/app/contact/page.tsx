"use client";
import Image from "next/image";
import { useState } from "react";

interface Location {
  title: string;
  address: string;
  city: string;
}
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: add actual form submission (e.g., email or API)
  };

  const locations: Location[] = [
    {
      title: "Registered Office",
      address: "RKP - V/720-A12, YES square,",
      city: "Calicut, Kerala - 673633",
    },
    {
      title: "Administrative Office",
      address: "A - 18, Ramanujan street,",
      city: "New Delhi, India - 700078",
    },
  ];

  return (
    <>
      <section className="contact_page">
        <div className="contact_header">
          <h2>Contact Us</h2>
          <p>
            <a href="mailto:info@yesindiafoundation.com">
              info@yesindiafoundation.com
            </a>{" "}
            &nbsp; | &nbsp;
            <a href="tel:+919895662111">+91 989 566 2111</a>
          </p>
        </div>

        <div className="contact_card">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit} className="contact_form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="wrapper_section">
        <div className="map_locations_container">
          {locations.map((location, index) => (
            <div key={index} className="map_bg_wrapper">
              {/* Map Background */}
              <div className="map_background">
                {/* Decorative map elements */}
                <Image
                  src={"/map_bg.png"}
                  width={600}
                  alt=""
                  height={440}
                  priority
                />
              </div>

              {/* Location Details Card */}
              <div className="location_details">
                <div>
                  <h6>{location.title}</h6>
                </div>
                <div className="location_address">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;

// // Contact.tsx
// "use client";
// import React from "react";

// // Type definition for location
// interface Location {
//   title: string;
//   address: string;
//   city: string;
// }

// const Contact: React.FC = () => {
//   // Location data
//   const locations: Location[] = [
//     {
//       title: "Registered Office",
//       address: "RKP - V/720-A12, YES square,",
//       city: "Calicut, Kerala - 673633",
//     },
//     {
//       title: "Administrative Office",
//       address: "A - 18, Ramanujan street,",
//       city: "New Delhi, India - 700078",
//     },
//   ];

//   return (
//     <div className="contact_section">
//       <div className="container">
//         <h2 className="section_title">Our Locations</h2>

//         <div className="map_locations_container">
//           {locations.map((location, index) => (
//             <div key={index} className="map_bg_wrapper">
//               {/* Map Background */}
//               <div className="map_background">
//                 {/* Decorative map elements */}
//                 <div className="map_overlay">
//                   <svg
//                     className="map_svg"
//                     viewBox="0 0 400 300"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     {/* Streets */}
//                     <path
//                       d="M0 150 L400 150"
//                       stroke="#4A90E2"
//                       strokeWidth="3"
//                       opacity="0.5"
//                     />
//                     <path
//                       d="M200 0 L200 300"
//                       stroke="#4A90E2"
//                       strokeWidth="3"
//                       opacity="0.5"
//                     />
//                     <path
//                       d="M50 100 L350 200"
//                       stroke="#4A90E2"
//                       strokeWidth="2"
//                       opacity="0.3"
//                     />
//                     <path
//                       d="M100 50 L300 250"
//                       stroke="#4A90E2"
//                       strokeWidth="2"
//                       opacity="0.3"
//                     />

//                     {/* Blocks */}
//                     <rect
//                       x="50"
//                       y="50"
//                       width="80"
//                       height="60"
//                       fill="#2E5A8A"
//                       opacity="0.4"
//                     />
//                     <rect
//                       x="270"
//                       y="180"
//                       width="80"
//                       height="60"
//                       fill="#2E5A8A"
//                       opacity="0.4"
//                     />
//                     <rect
//                       x="150"
//                       y="200"
//                       width="60"
//                       height="70"
//                       fill="#2E5A8A"
//                       opacity="0.4"
//                     />
//                   </svg>
//                 </div>

//                 {/* Location Markers */}
//                 <div className="location_marker marker_1">
//                   <div className="marker_ping"></div>
//                   <div className="marker_dot"></div>
//                 </div>

//                 <div className="location_marker marker_2">
//                   <div className="marker_ping"></div>
//                   <div className="marker_dot"></div>
//                 </div>

//                 {/* Main Location Pin */}
//                 <div className="main_pin">
//                   <div className="pin_shadow"></div>
//                   <svg
//                     width="40"
//                     height="50"
//                     viewBox="0 0 40 50"
//                     className="pin_svg"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M20 0C8.954 0 0 8.954 0 20c0 13.5 20 30 20 30s20-16.5 20-30c0-11.046-8.954-20-20-20z"
//                       fill="#FF6B35"
//                     />
//                     <circle cx="20" cy="20" r="8" fill="white" />
//                     <circle cx="20" cy="20" r="5" fill="#FF6B35" />
//                   </svg>
//                 </div>

//                 {/* Corner Icons */}
//                 <div className="corner_icons">
//                   <div className="icon_circle">
//                     <div className="icon_inner"></div>
//                   </div>
//                   <div className="icon_circle">
//                     <div className="icon_inner"></div>
//                   </div>
//                   <div className="icon_circle">
//                     <div className="icon_inner"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Location Details Card */}
//               <div className="location_details">
//                 <h3 className="location_title">{location.title}</h3>
//                 <div className="location_address">
//                   <p>{location.address}</p>
//                   <p>{location.city}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
