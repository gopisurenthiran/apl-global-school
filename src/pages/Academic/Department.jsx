import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutBanner_1 from "@/assets/AboutBanner-1.png";
import AboutBanner_2 from "@/assets/AboutBanner-2.png";
import AboutGraph from "@/assets/about-graph.svg";
import Essential from "@/assets/EssentialSupport.png";
import { MdDoubleArrow } from "react-icons/md";
import TestimonialCarousel from "@/pages/Home/TestimonialCarousel";

const images = [AboutBanner_1, AboutBanner_2, AboutBanner_1];
const curriculumData = [
  {
    title: "Forms of Knowledge",
    ages: "5–11 years",
    grades: "I to V",
    content: [
      "English",
      "Math",
      "Combined Science (Physics, Chemistry, and Biology)",
      "Global Perspectives",
      "Second Language - Tamil / French / Hindi (starting in Grade II)",
      "Art",
      "Music",
      "Computer Science (starting in Grade II)",
    ],
  },
  {
    title: "Co-curricular Activities",
    content: [
      "Games & Sports",
      "Music (till Grade 2)",
      "Creative Movement",
      "Theatre",
      "Expressions",
      "Library",
      "Meraki",
    ],
  },
];
const careerGuidancePoints = [
  "Conducting career talks with APL Alumni and parents as guest speakers",
  "Conducting information sessions for different grade levels on vital information such as entry requirements, entrance exams, timelines, and country-specific requirements.",
  "Helping them to explore different career options and possibilities.",
  "Guiding them in the subject-selection process before stepping into Grade 9 and Grade 11.",
  "Facilitating the Psychometric assessments.",
  "Encouraging them to explore various learning opportunities during summer breaks and vacations like internships, summer schools and volunteering activities.",
  "Arranging university representative visits and university fairs.",
  "Sharing fortnightly / monthly newsletters with information on various webinars, university updates and summer programs.",
  "Coordinating yearly parent-interaction and subject-selection orientation sessions.",
  "Helping Grade 12 students with transcript uploads on application portals.",
  "Coordinating and procuring teacher reference letters and predicted grades for Grade 12 students.",
  "Providing letters of recommendation from counsellors.",
];

function Department() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Slide"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        {/* Add an overlay to improve text readability if needed */}
        <div className="py-12 px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrbold text-primary font-primary inline-block border-b-2 border-secondary mb-6">
                Department of Special Education
              </h2>
              <p className="text-black font-secondary text-base leading-relaxed">
                APL believes that it is crucial to understand that all children
                learn and grow differently. The school aims to provide learning
                environments that are both self-paced and process-oriented.
              </p>
              <p className="text-black font-secondary text-base leading-relaxed">
                The school creates an environment that allows for personalised
                learning experiences that extends to all members of the school
                irrespective of age, abilities and backgrounds. The idea behind
                personalized education is to keep in mind every individual’s
                capabilities while nurturing the same within a larger community,
                providing life-enriching skills. With the help of an
                access-friendly campus, the school aims at participation of the
                whole school citizenry in various school activities, to foster a
                sense of oneness.
              </p>

              <p className="text-black font-secondary text-base leading-relaxed">
                Special educators, teachers, occupational therapists and
                counselors provide a support system that compliments each
                other’s skill sets and help in translating ideas into an action
                plan. Individual sessions, small group sessions, shadow
                teaching, and advanced studies in specific subjects are some
                ways in which services are extended. All staff members work
                towards a process whereby students become self-motivated,
                process- oriented individuals who are getting ready to face the
                challenges of work, life and citizenship in a global society.
              </p>
              <p className="text-black font-secondary font-bold text-base leading-relaxed">
                In the pipeline and still in its nascent stages, the Gifted and
                Talented program would allow students to take up projects or
                work on a higher grade level curriculum depending on their areas
                of interest and their long term goals.
              </p>
            </div>

            {/* Right - Image */}
            <div>
              <img
                src={Essential}
                alt="APL Vision"
                className="ml-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat w-full p-10"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        {/* Special Education Team */}
        <div className="p-6 space-y-4">
          <h3 className="text-primary font-primary text-2xl leading-relaxed">
            Special Education Team at APL
          </h3>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">Special Educators:</span> The role of
            special educators is to use tools to differentiate the learning
            environment, goals and/or instruction. They may work with any child
            at any given point in time and identify goals that could be either
            short or long term in nature.
          </p>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">Special Education Coordinators:</span>{" "}
            Each student, following an individualized support plan, will be
            assigned to a special education coordinator. They help in planning
            and coordinating between stakeholders to arrive at an individualized
            plan.
          </p>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">Occupational Therapists:</span> Their
            primary role is to assist and engage students in meaningful
            activities to promote health, safety, and quality of life. This
            includes daily living activities, education, pre-vocational tasks,
            play, leisure, and social participation.
          </p>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">Support Staff:</span> Assigned to
            students with physical, sensory, or behavioral needs. They help with
            daily living skills, transitions between classes, and mobility
            within the campus.
          </p>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">
              Meraki – Centre for Creative Expressions:
            </span>{" "}
            Offers programs for every child — not just the artistically
            exceptional — integrating visual arts, music, and movement as
            essential forms of language and expression.
          </p>
        </div>

        {/* Special Needs Support Program */}
        <div className="p-6 space-y-4">
          <h3 className="text-primary font-primary text-2xl leading-relaxed">
            Special Needs Support Program
          </h3>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">Kindergarten level:</span> At this
            level, the special educator works as a co-mentor, collaborating on
            lesson plans to enable differentiation. Focus groups target specific
            developmental areas. Occupational Therapists and Coordinators help
            design individualised plans.
          </p>

          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">
              Primary and lower secondary level:
            </span>{" "}
            Grades 1–8 students with specific support needs follow development
            paths and individualised plans for areas like occupational therapy,
            creative expression, and more. These are planned collaboratively
            with educators and parents.
          </p>
        </div>

        {/* Skill Enrichment */}
        <div className="px-6 space-y-4">
          <h3 className="text-primary font-primary text-2xl leading-relaxed">
            Skill Enrichment
          </h3>
          <p className="text-black font-secondary text-base leading-relaxed">
            Students follow their grade curriculum but receive short-term
            support in specific skills like spelling, sentence expansion, and
            perception. Sessions occur once or twice a week with a skill
            enrichment teacher.
          </p>
        </div>

        {/* Mainstream Easy */}
        <div className="px-6 space-y-4">
          <h3 className="text-primary font-primary text-2xl leading-relaxed">
            Mainstream Easy
          </h3>
          <p className="text-black font-secondary text-base leading-relaxed">
            Students attend mainstream classes with added support in small
            groups led by special educators. Content is paced to suit group
            learning needs with extended hand-holding.
          </p>
        </div>

        {/* Customized Curriculum */}
        <div className="px-6 space-y-4">
          <h3 className="text-primary font-primary text-2xl leading-relaxed">
            Customized Curriculum
          </h3>
          <p className="text-black font-secondary text-base leading-relaxed">
            The curriculum is adjusted based on student readiness and may be
            below grade level in one or more subjects. These sessions are
            conducted in small groups with special educators.
          </p>
        </div>

        {/* Kamalam Program */}
        <div className="px-6 space-y-4">
          <h3 className="text-primary font-primary text-2xl leading-relaxed">
            Kamalam Program
          </h3>
          <p className="text-black font-secondary text-base leading-relaxed font-bold">
            The ‘Kamalam Program’ is designed for students following a
            functional curriculum based on readiness. It focuses on functional
            academics and independent living skills. Students also join
            co-curricular activities based on strengths and interests. Classes
            are conducted in small groups by special educators.
          </p>
        </div>
      </section>

      <section className="">
        <div className="p-2 bg-secondary">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <h4 className="text-white font-primary font-bold text-xl text-center">
              Click here to know more about the
            </h4>
            <button className="px-3 py-3 uppercase rounded-lg bg-primary text-secondary hover:bg-primary/90 hover:text-white font-primary font-semibold">
              Kamalam program
            </button>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat w-full p-10"
        style={{ backgroundImage: `url(${AboutGraph})` }}
      >
        <div className="p-6 space-y-4">
          <p className="text-black font-secondary text-base leading-relaxed">
            <span className="font-bold">Senior level: </span>
            At the Senior School level, the two curriculums – IGCSE and NIOS
            prepare students to take on further challenges as adolescents and
            young adults. The support offered at this level ranges from remedial
            interventions, study skills, and assessments to understand the
            personalisation required in exam arrangements, for the student to be
            able to receive recognition for their attainment.  Exam arrangements
            include the use of a scribe, Word Processor or extra time. The
            purpose is to remove any barriers to the standard assessment,
            without compromising the standards being tested.
          </p>
        </div>
      </section>
    </>
  );
}

export default Department;
