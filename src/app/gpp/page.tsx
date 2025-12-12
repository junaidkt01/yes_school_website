import MarqueeCarousal from "@/components/ui/MarqueeCarousal";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="wrapper_section">
        <div className="gpp_banner_container">
          <div className="feedback_image_wrapper">
            <Image
              src={"/feedback/feedback_banner_bg.png"}
              alt="gpp_bg"
        fill
                  className="feedback_image"
              priority
            />

 <div className="feedback_overlay"></div>
          </div>

          {/* Content overlay */}
          <div className="feedback_content">
            <h1>
              Genius Production <br /> Process (GPP)
            </h1>
          </div>
        </div>
      </section>

      <section className="wrapper_section">
        <div className="gpp_contents">
          <p className="intro_text">
            It&apos;s a framework thoughtfully crafted to align with
            students&apos; developmental stages, fostering an enriching
            environment for them to explore their ideas both within and beyond
            the syllabus.&nbsp;Students are offered ample opportunities by
            identifying their unique strengths and integrating them into
            communities at the grade, campus, zone, state and national levels.
          </p>
        </div>

        <div className="buds_bloom_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/buds_blooms_img.png"}
                alt="buds_blooms"
                width={300}
                height={180}
                priority
              />
            </div>
            <p>
              This stage emphasizes play-based and activity-based learning to
              build a strong foundation in cognitive, social, emotional and
              physical development.
            </p>
          </div>

          <div className="right_column">
            <div className="frequency_card">
              <h3>Daily</h3>
              <h4 className="title">Classroom Bulletin</h4>
              <p className="content">
                The work prepared by the students and the teachers, which
                creatively showcases curriculum topics, is attractively
                displayed in the classroom.
              </p>
            </div>

            <div className="frequency_card">
              <h3 className="frequency">Weekly</h3>
              <h4 className="title">Growth Games</h4>
              <p className="content">
                Creative games are planned to make learning fun and to assess
                the students&apos;s competencies.
              </p>
            </div>

            <div className="frequency_card">
              <h3 className="frequency">Monthly</h3>
              <h4 className="title">Thematic Celebration</h4>
              <p className="content">
                A celebration of learning is held, centred around the topics
                taught throughout the month.
              </p>
            </div>
          </div>
        </div>

        <div className="rainbow_classroom_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/rainbow_img.png"}
                alt="rainbow_logo"
                width={300}
                height={180}
                priority
              />
            </div>

            <p>
              Based on the school curriculum, gifted students in various
              subjects are identified and provided leadership opportunities in
              the classroom, where they are trained to excel competitively.
            </p>
          </div>
          <div className="right_column">
            <div className="table_wrapper">
              <table className="rainbow_table">
                <thead>
                  <tr>
                    <th colSpan={2} className="table_header">
                      CLASSROOM RAINBOW
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={2} className="table_subheader">
                      Class Monitor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="code_cell">V</td>
                    <td>English</td>
                  </tr>
                  <tr>
                    <td className="code_cell">I</td>
                    <td>Maths</td>
                  </tr>
                  <tr>
                    <td className="code_cell">B</td>
                    <td>Science</td>
                  </tr>
                  <tr>
                    <td className="code_cell">G</td>
                    <td>SS</td>
                  </tr>
                  <tr>
                    <td className="code_cell">Y</td>
                    <td>Mother Tongue</td>
                  </tr>
                  <tr>
                    <td className="code_cell">O</td>
                    <td>Moral</td>
                  </tr>
                  <tr>
                    <td className="code_cell">R</td>
                    <td>Arts and Sports</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="planets_school_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/planets_img.png"}
                alt="planets_logo"
                width={300}
                height={180}
                priority
              />
            </div>
            <p>
              Proficient students in various subjects are enrolled in
              appropriate clubs. Each club observes a 15-day Season focused on
              specific themes, which include academic acceleration, research
              projects, competitions, discussions and debates, flash mobs and
              more. The Annual School Parliament is a platform where plans are
              presented and reviewed.
            </p>
          </div>

          <div className="right_column">
            <div className="parliament_section">
              <div className="numbers_display">
                <h2>8</h2>
                <span>
                  Planets <br /> Clubs <br /> Boards <br /> Leaders
                </span>
              </div>

              <div className="parliament_info">
                <h3>SCHOOL PLANETS PARLIAMENT</h3>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div className="election_info">
                    <span></span>
                    <p>YES Boy</p>
                  </div>
                  <div className="election_info">
                    <span></span>
                    <p>YES Girl</p>
                  </div>
                </div>
                <p className="description">
                  School Parliament Election picks YES BOY and YES GIRL. They
                  act as school leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <MarqueeCarousal />
        </div>

        <div className="skill_bench_container">
          <div className="left_column">
            <h3>SKILL BENCH</h3>
            <p>
              Students possess diverse abilities. Each student is assessed to
              identify their skills and those with similar talents are grouped
              into national-level skill communities, where they receive further
              training and are guided towards career opportunities. With these
              they are given opportunities to accelerate their moral depth.
            </p>
          </div>
          <div className="right_column">
            <div className="frequency_card">
              <h3>PHASE 01</h3>
              <h4 className="title">Basic Skill Training</h4>
              <p className="content">
                Basic training on specific topic is given to every student.
                There are different plans for Rainbow and Planets.
              </p>
            </div>

            <div className="frequency_card">
              <h3>PHASE 02</h3>
              <h4 className="title">Skill Contest</h4>
              <p className="content">
                Following the basic training, a competition will be held on
                campus, tailored for all trained students.
              </p>
            </div>

            <div className="frequency_card">
              <h3>PHASE 03</h3>
              <h4 className="title">National Level Training and Elimination</h4>
              <p className="content">
                Campus-level top performers receive first phase training at the
                national level. And the elimination is done through the test
                that follows.
              </p>
            </div>

            <div className="frequency_card">
              <h3>PHASE 04</h3>
              <h4 className="title">Skill Bench Formation</h4>
              <p className="content">
                Students who have excelled in both campus and national-level
                competitions are designated as the Skill Bench for their
                respective topics. Each Bench will be headed by an expert
                rector, with mentors responsible for coordination.
              </p>
            </div>
          </div>
        </div>

        <div className="yes_genius_container">
          <div className="left_column">
            <div className="logo_wrapper">
              <Image
                src={"/yes_genius_img.png"}
                alt="buds_blooms"
                width={300}
                height={180}
                priority
              />
            </div>
            <p>
              A series of specialized training in general knowledge, logic and
              current affairs.
            </p>
            <div className="frequency_card">
              <h3>Board Update</h3>

              <p className="content">
                Various posters offering insights into diverse topics are
                distributed under different clubs by the Academia. The students
                understand and note it down and teachers ensure it.
              </p>
            </div>
          </div>

          <div className="right_column">
            <div className="frequency_card">
              <h3>Brain Drill</h3>

              <p className="content">
                Every Wednesday, reasoning questions prepared by Academia will
                be displayed on the board.&nbsp;The student with the best
                response will be awarded the title of &quot;Brain Master.&quot;
              </p>
            </div>

            <div className="frequency_card">
              <h3>Monthly Talent Test</h3>

              <p className="content">
{`                A talent test will be held on every campus based on the
                displayed posters, Brain Drill questions and current
                affairs. Winners will be honored with a title 'Little Genius'.`}
              </p>
            </div>

            <div className="frequency_card">
              <h3>YES Genius</h3>

              <p className="content">
                {`A talent test will be held on every campus based on the displayed posters, Brain Drill questions and current affairs. Winners will be honored with a title 'Little Genius'.`}
              </p>
            </div>
          </div>
        </div>

        <div className="awards_container">
          <div className="left_column">
            <h3>AWARDS & HONORS</h3>
            <p>
              An annual nationwide competition based on the displayed club
              posters, logic questions and current affairs. Winners will be
              honored at the prestigious YES Genius Jam.
            </p>
          </div>
          <div className="right_column">
            <div className="frequency_card">
              <h3>TOP TUTEE </h3>

              <p className="content">Best student of Month</p>
            </div>

            <div className="frequency_card">
              <h3>LITTLE GENIUS</h3>

              <p className="content">Winner of Talent test</p>
            </div>

            <div className="frequency_card">
              <h3>BRAIN MASTER</h3>

              <p className="content">Winner of Brain drill</p>
            </div>
            <div className="frequency_card">
              <h3>YES GENIUS</h3>

              <p className="content">Winner of national talent test</p>
            </div>

            <div className="frequency_card">
              <h3>Winner of national talent test</h3>

              <p className="content">
                For the Rank holders in Annual board examinations
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
