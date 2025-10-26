
import { IndiaMap } from "@/components/ui/IndiaMap";
import MarqueeCarousal from "@/components/ui/MarqueeCarousal";
import Image from "next/image";
import Link from "next/link";

const about = () => {


  return (
    <>
      <section className="about_banner_container">
        <div className="about_banner_wrapper">
          <Image
            src="/about_banner.png"
            alt="about_banner"
            width={1600}
            height={750}
            priority
            className="about_banner_image"
          />
          <div className="about_banner_content">
            <h1>
              About <br /> YES India Foundation
            </h1>
          </div>
        </div>
      </section>

      <section className="wrapper_section">
        <div className="about_contents_wrapper">
          <p>
            <span>YES India Foundation</span> is an educational and humanitarian
            initiative, aiming the educational and social uplift of the backward
            communities in India. Shaping the better culture, YES India
            Foundation could become successful, within a short span of time, in
            providing the value-based education through its academic
            institutions. <br /> Currently, it has a huge network of educational
            institutes across India - spread over 8 states of India; namely
            Kerala, Karnataka, Andhra Pradesh, Maharashtra, Rajasthan, Bihar,
            West Bengal and Jammu Kashmir. Recently, around 16000 students are
            beneficiaries of 53 institutes including 8 residential institutes
            under YES India Foundation. As its inception was there, the state of
            Jammu and Kashmir is hosting most of its educational institutions.{" "}
            <br /> For this purpose, YES India Foundation focuses on holistic &
            all-round educational plans - ensuring the quality education to the
            marginalized people, fostering the social leaders through
            residential institutes up to Post Graduate level. <br /> YES India
            Foundation guides them until they can withstand in the current of
            modern world, by offering them the quality-based education,
            scholarships and facilities. <br /> It specially brings up the
            selective talented students by providing all of their needs, to
            shape the leaders too for the society to mould the best of next
            generation.
          </p>
        </div>
      </section>

 

      <section className="milestone_section wrapper_section">
        <div>
          <h1>
            Milestones <br /> of Growth
          </h1>
          <p>Yearly Progress Since 2007</p>
        </div>
        <div>
          <p>
            From its humble beginnings in 2007 from Poonch, YES India Foundation
            has charted a remarkable path of expansion and progress. Each year
            has brought new achievements whether it&#39;s opening more
            institutes, enhancing infrastructure or launching innovative
            programs. The foundation&#39;s growth is a testament to its
            dedication to making quality education a reality for more students
            across India, year after year. Every milestone marks a step closer
            to a brighter, more educated future, to the tailored goal.
          </p>
        </div>
      </section>

            <section className="about_carousal_section">
        <MarqueeCarousal />
      
      </section>


      <section className="wrapper_section">
        <div className="voice_of_praise_container">
          <div className="voice_of_praise_header">
            <h1>Voices of Praise:</h1>
            <p>Feedback from Noted Personalities</p>
          </div>

          <div className="voice_card">
            <p className="voice_text">
              Our locality, Jammu and Kashmir is a challenging hilly region,
              where reaching to remote communities is difficult. Economically
              and educationally, these areas remain underdeveloped. So, here
              comes the importance of organizations which can satisfy the needs
              of people. YES India Foundation is one of such organizations which
              proved very successful in our region. I have seen for the last 15
              years, they have made successful interventions in the system here
              as I have been invited in many programs as guest in the title, the
              principal and professor of Degree College Poonch. So, their main
              focus is to remain on the dimension of creating scientific
              temperament among younger generation and contribute towards the
              promotion of different culture and civilizations here. My opinion
              about this organization is that it has done a wonderful job in
              this challenging area.
            </p>

            <div className="voice_profile">
              <div className="profile_img"></div>
              <div className="profile_info">
                <h5>Prof. Seyd Musarath Hussain Shah</h5>
                <p>Principal Govt. Degree College Mandi</p>
              </div>
            </div>
          </div>

          <div className="voice_see_more">
            <div className="avatars">
              <Image
                src="/feedback/avatar_1.jpg"
                alt="avatar"
                width={35}
                height={35}
                className="avatar"
              />
              <Image
              src="/feedback/avatar_2.jpg"
                alt="avatar"
                width={35}
                height={35}
                className="avatar"
              />
              <Image
       src="/feedback/avatar_3.jpg"
                alt="avatar"
                width={35}
                height={35}
                className="avatar"
              />
              <span className="more_count">5+</span>
            </div>
           <Link href={"/feedback"}>
            <button className="see_more_btn">See more</button>
           </Link>
          </div>
        </div>
        </section>

      {/* States of Operation Section */}
      <section className="wrapper_section">
        <div className="state_operation_section">
          <div>
            <h1>
              YES INDIA States <br /> of Operations:
            </h1>
            <p>Expanding Horizons</p>
          </div>

          <div className="india_map_container">
            <div className="map_wrapper" style={{ width: "100%" }}>
              <IndiaMap />
            </div>
          </div>
        </div>
      </section>

      <section className="administrative_section wrapper_section">
        <div className="administrative_container">
          <div className="left_column">
            <div>
              <h2>
                The Administrative <br /> Hierarchy
              </h2>
              <p>
                An effective and cohesive administrative hierarchy forms the
                backbone of YES India Foundation. From top-level directors to
                on-site staff, every member of the administrative team
                contributes to the smooth functioning of the Foundation&#39;s
                educational services. This clear chain of command ensures that
                strategic decisions are effectively implemented, fostering an
                environment of accountability and excellence.
              </p>
            </div>
          </div>

          <div className="right_column ">
            <div className="position level1">Managing Director</div>

            <div className="group">
              <div className="group-title green">Directorate</div>
              <div className="sub-item">Administration</div>
              <div className="sub-item">Finance</div>
              <div className="sub-item">Academic</div>
              <div className="sub-item">Human Resource</div>
              <div className="sub-item">Public Relation</div>
            </div>

            <div className="position yellow">Regional Manager</div>
            <div className="position orange">Zonal Manager</div>

            <div className="group">
              <div className="sub-item">Zonal CO Human Resource</div>
              <div className="sub-item">Zonal CO ADMIN</div>
              <div className="sub-item">Zonal CO Finance</div>
              <div className="sub-item">Zonal CO Academic</div>
              <div className="sub-item">Zonal CO Public Relation</div>
            </div>

            <div className="position green">Principal</div>
            <div className="position orange-light">Academic Coordinator</div>
            <div className="position peach">Teachers</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
