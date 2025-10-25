"use client";
import Image from "next/image";


const InstituteType = () => {
  const institutions = [
    {
      title: "Yaseen English School",
      image: "/yaseen-school.png",
    },
    {
      title: "YES India Public School",
      image: "/yes-public-school.png",
    },
    {
      title: "EC Yes Pre-life Schools",
      image: "/ec-yes-prelife.png",
    },
  ];

  return (
    <section className="institutions_types_container">
      <div className="institutions_types_wrapper">
        <h1 className="institutions_heading">
          Types of YES <br /> Institutions
        </h1>

        <div className="institutes_lists_wrapper">
          {institutions.map((institution, index) => (
            <div key={index} className="institution_card">
              <div className="institution_image_wrapper">
                <Image
                  src={institution.image}
                  alt={institution.title}
                  width={400}
                  height={300}
                  className="institution_image"
                />
              </div>
              <p>{institution.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstituteType;
