import CardGrid from "@/components/ui/CardGrid";
import Carousal from "@/components/ui/Carousal";

const about = () => {
  return (
    <>
      <section className="about_banner_container">
        <div className="about_banner_wrapper">
          <h1>
            About <br /> YES India Foundation
          </h1>
        </div>
      </section>

      <section className="wrapper_section">
    <div className="about_contents_wrapper">
            <p>
          <span>YES India Foundation</span> is an educational and humanitarian
          initiative, aiming the educational and social uplift of the backward
          communities in India. Shaping the better culture, YES India Foundation
          could become successful, within a short span of time, in providing the
          value-based education through its academic institutions. <br /> Currently, it
          has a huge network of educational institutes across India - spread
          over 8 states of India; namely Kerala, Karnataka, Andhra Pradesh,
          Maharashtra, Rajasthan, Bihar, West Bengal and Jammu Kashmir.
          Recently, around 16000 students are beneficiaries of 53 institutes
          including 8 residential institutes under YES India Foundation. As its
          inception was there, the state of Jammu and Kashmir is hosting most of
          its educational institutions. <br /> For this purpose, YES India Foundation
          focuses on holistic & all-round educational plans - ensuring the
          quality education to the marginalized people, fostering the social
          leaders through residential institutes up to Post Graduate level. <br /> YES
          India Foundation guides them until they can withstand in the current
          of modern world, by offering them the quality-based education,
          scholarships and facilities. <br /> It specially brings up the selective
          talented students by providing all of their needs, to shape the
          leaders too for the society to mould the best of next generation.
        </p>
    </div>
      </section>


      <section className="about_carousal_section">

        <div className="carousal_container">

        </div>
        <Carousal/>
        <CardGrid/>
      </section>
    </>
  );
};

export default about;
