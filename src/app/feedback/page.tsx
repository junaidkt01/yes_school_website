import Image from "next/image";
import React from "react";

const page = () => {
  //   const feedbackData = [
  //   {
  //     text: `Our locality, Jammu and Kashmir is a challenging hilly region... wonderful job in this challenging area.`,
  //     name: "Prof. Seyd Musarath Hussain Shah",
  //     title: "Principal Govt. Degree College Mandi",
  //   },
  //   {
  //     text: `Our locality, Jammu and Kashmir is a challenging hilly region... wonderful job in this challenging area.`,
  //     name: "Prof. Seyd Musarath",
  //     title: "Principal Govt. Degree College Mandi",
  //   },
  //   {
  //     text: `Our locality, Jammu and Kashmir is a challenging hilly region... wonderful job in this challenging area.`,
  //     name: "Prof. Seyd Musarath Hussain Shah",
  //     title: "Principal Govt. Degree College Mandi",
  //   },
  //   {
  //     text: `Our locality, Jammu and Kashmir is a challenging hilly region... wonderful job in this challenging area.`,
  //     name: "Prof. Seyd Musarath",
  //     title: "Principal Govt. Degree College Mandi",
  //   },
  // ];
  return (
    <>
      <section className="wrapper_section">
        <div className="feedback_banner_container">
          <div className="feedback_image_wrapper">
            <Image
              src={"/feedback/feedback_banner_bg.png"}
              alt="feedback_bg"
              width={1100}
              height={600}
              priority
            />
          </div>

          {/* Content overlay */}
          <div className="feedback_content">
            <div className="quote_icon">
              <svg
                width="100"
                height="100"
                viewBox="0 0 217 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M217 96.875C217 128.989 190.989 155 158.875 155H155C146.427 155 139.5 148.073 139.5 139.5C139.5 130.927 146.427 124 155 124H158.875C173.842 124 186 111.842 186 96.875V93H155C137.902 93 124 79.0984 124 62V31C124 13.9016 137.902 0 155 0H186C203.098 0 217 13.9016 217 31V96.875ZM93 96.875C93 128.989 66.9891 155 34.875 155H31C22.4266 155 15.5 148.073 15.5 139.5C15.5 130.927 22.4266 124 31 124H34.875C49.8422 124 62 111.842 62 96.875V93H31C13.9016 93 0 79.0984 0 62V31C0 13.9016 13.9016 0 31 0H62C79.0984 0 93 13.9016 93 31V96.875Z"
                  fill="#2A1B63"
                />
              </svg>
            </div>
            <h1>Voices of Praise:</h1>
            <p>Feedback from Noted Personalities</p>
          </div>
        </div>
      </section>

      {/* <section className="wrapper_section feedback_section">
  <div className="feedback_list_container">
    <div className="feedback_card">
      <p>
        Our locality, Jammu and Kashmir is a challenging hilly region, where
        reaching to remote communities is difficult. Economically and
        educationally, these areas remain underdeveloped. So, here comes the
        importance of organizations which can satisfy the needs of people. YES
        India Foundation is one of such organizations which proved very
        successful in our region. I have seen for the last 15 years, they have
        made successful interventions in the system here as I have been invited
        in many programs as guest in the title, the principal and professor of
        Degree College Poonch. So, their main focus is to remain on the
        dimension of creating scientific temperament among younger generation
        and contribute towards the promotion of different culture and
        civilizations here. My opinion about this organization is that it has
        done a wonderful job in this challenging area.
      </p>
      <div className="feedback_author">
        <h4>Prof. Seyd Musarath Hussain Shah</h4>
        <span>Principal Govt. Degree College Mandi</span>
      </div>
    </div>

    <div className="feedback_card">
      <p>
        Our locality, Jammu and Kashmir is a challenging hilly region, where
        reaching to remote communities is difficult. Economically and
        educationally, these areas remain underdeveloped. So, here comes the
        importance of organizations which can satisfy the needs of people. YES
        India Foundation is one of such organizations which proved very
        successful in our region. I have seen for the last 15 years, they have
        made successful interventions in the system here as I have been invited
        in many programs as guest in the title, the principal and professor of
        Degree College Poonch. So, their main focus is to remain on the
        dimension of creating scientific temperament among younger generation
        and contribute towards the promotion of different culture and
        civilizations here. My opinion about this organization is that it has
        done a wonderful job in this challenging area.
      </p>
      <div className="feedback_author">
        <h4>Prof. Seyd Musarath</h4>
        <span>Principal Govt. Degree College Mandi</span>
      </div>
    </div>

    <div className="feedback_card">
      <p>
        Our locality, Jammu and Kashmir is a challenging hilly region, where
        reaching to remote communities is difficult. Economically and
        educationally, these areas remain underdeveloped. So, here comes the
        importance of organizations which can satisfy the needs of people. YES
        India Foundation is one of such organizations which proved very
        successful in our region. I have seen for the last 15 years, they have
        made successful interventions in the system here as I have been invited
        in many programs as guest in the title, the principal and professor of
        Degree College Poonch. So, their main focus is to remain on the
        dimension of creating scientific temperament among younger generation
        and contribute towards the promotion of different culture and
        civilizations here. My opinion about this organization is that it has
        done a wonderful job in this challenging area.
      </p>
      <div className="feedback_author">
        <h4>Prof. Seyd Musarath Hussain Shah</h4>
        <span>Principal Govt. Degree College Mandi</span>
      </div>
    </div>

    <div className="feedback_card">
      <p>
        Our locality, Jammu and Kashmir is a challenging hilly region, where
        reaching to remote communities is difficult. Economically and
        educationally, these areas remain underdeveloped. So, here comes the
        importance of organizations which can satisfy the needs of people. YES
        India Foundation is one of such organizations which proved very
        successful in our region. I have seen for the last 15 years, they have
        made successful interventions in the system here as I have been invited
        in many programs as guest in the title, the principal and professor of
        Degree College Poonch. So, their main focus is to remain on the
        dimension of creating scientific temperament among younger generation
        and contribute towards the promotion of different culture and
        civilizations here. My opinion about this organization is that it has
        done a wonderful job in this challenging area.
      </p>
      <div className="feedback_author">
        <h4>Prof. Seyd Musarath</h4>
        <span>Principal Govt. Degree College Mandi</span>
      </div>
    </div>
  </div>
</section> */}

      <section className="wrapper_section">
        <div className="feedback_list_container">
          {/* Row 1 */}
          <div className="feedback_group">
            <div className="feedback_card tall left">
              <p className="feedback_text">
                Our locality, Jammu and Kashmir is a challenging hilly region,
                where reaching to remote communities is difficult. Economically
                and educationally, these areas remain underdeveloped. So, here
                comes the importance of organizations which can satisfy the
                needs of people. YES India Foundation is one of such
                organizations which proved very successful in our region. I have
                seen for the last 15 years, they have made successful
                interventions in the system here as I have been invited in many
                programs as guest in the title, the principal and professor of
                Degree College Poonch. So, their main focus is to remain on the
                dimension of creating scientific temperament among younger
                generation and contribute towards the promotion of different
                culture and civilizations here. My opinion about this
                organization is that it has done a wonderful job in this
                challenging area.
              </p>
              <div className="voice_profile">
                <div className="profile_img"></div>
                <div className="profile_info">
                  <h5>Prof. Seyd Musarath Hussain Shah</h5>
                  <p>Principal Govt. Degree College Mandi</p>
                </div>
              </div>
            </div>

            <div className="stacked_right">
              <div className="feedback_card small">
                <p className="feedback_text">
                  Our locality, Jammu and Kashmir is a challenging hilly region,
                  where reaching to remote communities is
                  difficult. Economically and educationally, these areas remain
                  underdeveloped. So, here comes the importance of organizations
                  which can satisfy the needs of people. YES India Foundation is
                  one of such organizations which proved very successful in our
                  region. I have seen for the last 15 years, they have made
                  successful interventions in the system here as I have been
                  invited in many programs as guest in the title, the principal
                  and professor of
                </p>
                <div className="voice_profile">
                  <div className="profile_img"></div>
                  <div className="profile_info">
                    <h5>Prof. Seyd Musarath Hussain Shah</h5>
                    <p>Principal Govt. Degree College Mandi</p>
                  </div>
                </div>
              </div>
              <div className="feedback_card small">
                <p className="feedback_text">
                  Our locality, Jammu and Kashmir is a challenging hilly region,
                  where reaching to remote communities is
                  difficult. Economically and educationally, these areas remain
                  underdeveloped. So, here comes the importance of organizations
                  which can satisfy the needs of people. YES India Foundation is
                  one of such organizations which proved very successful in our
                  region. I have seen for the last 15 years, they have made
                  successful interventions in the system here as I have been
                  invited in many programs as guest in the title, the principal
                  and professor of
                </p>
                <div className="voice_profile">
                  <div className="profile_img"></div>
                  <div className="profile_info">
                    <h5>Prof. Seyd Musarath Hussain Shah</h5>
                    <p>Principal Govt. Degree College Mandi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="feedback_group reverse">
            <div className="stacked_left">
              <div className="feedback_card small">
                <p className="feedback_text">
                  Our locality, Jammu and Kashmir is a challenging hilly region,
                  where reaching to remote communities is
                  difficult. Economically and educationally, these areas remain
                  underdeveloped. So, here comes the importance of organizations
                  which can satisfy the needs of people. YES India Foundation is
                  one of such organizations which proved very successful in our
                  region. I have seen for the last 15 years, they have made
                  successful interventions in the system here as I have been
                  invited in many programs as guest in the title, the principal
                  and professor of
                </p>
                <div className="voice_profile">
                  <div className="profile_img"></div>
                  <div className="profile_info">
                    <h5>Prof. Seyd Musarath Hussain Shah</h5>
                    <p>Principal Govt. Degree College Mandi</p>
                  </div>
                </div>
              </div>
              <div className="feedback_card small">
                <p className="feedback_text">
                  Our locality, Jammu and Kashmir is a challenging hilly region,
                  where reaching to remote communities is
                  difficult. Economically and educationally, these areas remain
                  underdeveloped. So, here comes the importance of organizations
                  which can satisfy the needs of people. YES India Foundation is
                  one of such organizations which proved very successful in our
                  region. I have seen for the last 15 years, they have made
                  successful interventions in the system here as I have been
                  invited in many programs as guest in the title, the principal
                  and professor of Degree College Poonch. So, their main focus
                  is to remain on the dimension of creating scientific
                  temperament among younger generation and contribute towards
                  the promotion of different culture and civilizations here. My
                  opinion about this organization is that it has done a
                  wonderful job in this challenging area.
                </p>
                <div className="voice_profile">
                  <div className="profile_img"></div>
                  <div className="profile_info">
                    <h5>Prof. Seyd Musarath Hussain Shah</h5>
                    <p>Principal Govt. Degree College Mandi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="feedback_card tall right">
              <p className="feedback_text">
                They have done a wonderful job in this challenging area.
              </p>
              <div className="voice_profile">
                <div className="profile_img"></div>
                <div className="profile_info">
                  <h5>Prof. Seyd Musarath Hussain Shah</h5>
                  <p>Principal Govt. Degree College Mandi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
