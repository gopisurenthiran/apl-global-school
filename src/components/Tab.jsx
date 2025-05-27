import { useState } from "react";
import paper from "../assets/section-2-banner.png";
import boy from "../assets/tab-1.png";
import child from "../assets/tab-2.png";

const tabData = {
  Meraki: {
    images: [boy, child],
    content: {
      heading: "Meraki",
      subtitle: "Creative ExpressionsPassion Meets Purpose",
      title: "BEYOND CLASSROOM",
      description: `Any education is not complete without taking cognisance of what is the need of the hour. Designed to complement the academic curriculum, beyond classroom widens horizons, maximises learner’s participation and potential, thus leading to increased learning and enhanced cognitive development. Recognising the need for this, the following domains provide that and more: social opportunities and opening a child’s mind to new interests.`,

      subheading: [
        {
          title: "Meraki (Creative Expressions)",
          description: `The Meraki (Creative Expressions) program helps students to explore creation and expression through Art, Music, Movement and Photography. The department nurtures an inclusive environment for students, allowing for a fluid engagement with the art forms from Grade 3 onwards. Through an immersive experience in art making, creative process and reflections, Meraki aims to go beyond the product, to promote artistic process. We strongly believe that it is the process of art-making that gives a child the creative confidence, not merely the final product. Folk toy making and play, junk instruments and music making, puppetry and theatre- are some of the projects planned for junior school. <br /> <br />
The department also stands apart in its consistent efforts to integrate visual arts with other art forms and disciplines—the environment, culture, mental health, and the body. <br /> <br />

For the senior school, Meraki is offered for the students of the NIOS stream. The 11th and 12th Grade students may opt to take up an area in greater depth to create a body of work or a portfolio in art, music or photography. While this course is geared to nurture creation and free expression, some students have gone on to pursue art and music on recognising their core abilities.  <br /> <br />

Alumni of the program now find themselves in institutions such as Srishti School of Design and KM College of Music and Technology. <br /> <br />

Award winning projects <br />
<a href='https://artroomhero.com/amruthaanand/' >https://artroomhero.com/amruthaanand/ </a>  `,
        },
        {
          title: "Eat Your School Garden",
          description: `This is a movement that was started in 2017, by working with APL students to create a garden campus that is edible. We follow regenerative agricultural practices where there is minimal cost and external inputs and maximum benefits such as harvests, a permanent ecosystem with bio diverse flora and fauna, and a closed loop system. As a part of the APL garden, our students across grades have created two Miyawaki Forests that are now self sustaining with over 20 varieties of trees, shrubs, and other vegetation. Over the years, our practices have attracted fauna such as earthworms that are indicative of a healthy soil, garden lizards that keep our insects in control, birds, butterflies, bees, and even tree frogs and toads. We have also started what we call a sky garden, where we have vines, both ornamental and edible growing on the topmost floor edges of our building that also double up as natural cool curtains for our classrooms there. The main aim of the Eat Your School Garden movement is to impart Education for Sustainability (EfS) and share our best practices with other schools to encourage more schools to create such learning gardens. We are also active on social media with Eat Your School Garden pages on Facebook and Instagram, along with a blog page with student contributions on medium.com. <br/> <br/> 
        <a href='https://www.facebook.com/eatyourschoolgarden'>Facebook: https://www.facebook.com/eatyourschoolgarden</a> <br/>  
        <a href='https://www.instagram.com/eatyourschoolgarden/'>Instagram: https://www.instagram.com/eatyourschoolgarden/</a> <br/>  
        <a href='https://medium.com/eat-your-school-garden'>Blog: https://medium.com/eat-your-school-garden</a>
        `,
        },
        {
          title: "Responsible Citizenship Program",
          description: `The Responsible Citizenship Program in APL has been initiated to help students practice the various aspects that an individual needs to possess in order to lead a sustainable and responsible life while being an informed, law-abiding citizen, recognising their civic responsibility. The student members have taken good practises to their communities where they speak about recycling; spreading awareness about signs and symptoms of infectious disease to name a few. <br/> <br/>
            Real Time issues within the school community were studied and members of the RCP sensitised the student body on mindful use of water, tissues, and segregation of waste. Their campaign on reducing wastage of food within the school community delivered a phenomenal response. <br/> <br/>
            Sustainable Development Goals (SDGs), or Global Goals, an initiative by United Nations Member States (2015) was a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by 2030. Members of the RCP have bestowed upon themselves this goal to discuss prevalent issues and discuss possible solutions.`,
        },

        {
          title: "Publishing",
          description: `SnapShot, APL’s e-magazine is created by the students, for the students. It is a platform that gives them an opportunity to voice their opinions, showcase the events of the school and the world around them. Contributions cut across students, teachers and even parents making it a diverse magazine. This yet another student-centered program provides the opportunity to students to try and experience different tasks and roles such as writing, proofing, art directing, designing etc. Snapshot is an exemplar of the synthesis between academic learning, experiential learning and the print industry. <br/> <br/>
             <p>
  Below is the list of Snapshots available sorted by the year & month. 
</p> <br/> <br/>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
  <a href="https://www.aplglobalschool.com/wp-content/uploads/2016/03/Issue-No1-SnapShot-Jan12.pdf">January 2012</a>
  <a href="#april-2012">April 2012</a>
  <a href="#august-2012">August 2012</a>
  <a href="#november-2012">November 2012</a>
  <a href="#february-2013">February 2013</a>
  <a href="#april-2013">April 2013</a>
  <a href="#september-2013">September 2013</a>
  <a href="#jan-2014">Jan 2014</a>
  <a href="#july-2014">July 2014</a>
  <a href="#september-2014">September 2014</a>
  <a href="#dec-2014">Dec 2014</a>
  <a href="#may-2015">May 2015</a>
  <a href="#july-2015">July 2015</a>
  <a href="#october-2015">October 2015</a>
  <a href="#january-2016">January 2016</a>
  <a href="#april-2016">April 2016</a>
  <a href="#july-2016">July 2016</a>
  <a href="#october-2016">October 2016</a>
  <a href="#january-2017">January 2017</a>
  <a href="#july-2017">July 2017</a>
  <a href="#december-2017">December 2017</a>
  <a href="#april-2018">April 2018</a>
  <a href="#august-2018">August 2018</a>
  <a href="#january-2019">January 2019</a>
  <a href="#october-2019">October 2019</a>
  <a href="#february-2020">February 2020</a>
  <a href="#november-2020">November 2020</a>
  <a href="#february-2021">February 2021</a>
  <a href="#june-2021">June 2021</a>
  <a href="#january-2022">January 2022</a>
  <a href="#june-2022">June 2022</a>
  <a href="#november-2022">November 2022</a>
  <a href="#august-2023">August 2023</a>
  <a href="#october-2024">October 2024</a>
</div> <br/> <br/>
 <div className="text-center">
  <span>Copy of the latest APL SnapShot </span>
  <a
    href="https://example.com/download-link"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline mx-2"
  >
    Download
  </a>
  <span className="mx-6">Please give us your feedback!</span>
  <a
    href="https://example.com/feedback-form"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline mx-6"
  >
    Click Here
  </a>
</div>


`,
        },
      ],
    },
  },
  Art: {
    images: [boy, child],
    content: {
      heading: "Art",
      subtitle: "Co-Curricular Programs ",
      description: `Co-curricular programmes are disciplines that align with and mirror our academic programme. These structured disciplines are CAIE approved and bear credits.`,
      subheading: [
        {
          title: " Art",
          description: `The Art Program at APL Global School is designed to stimulate young minds to reflect and express themselves creatively. The program exposes children to artistically respond and understand their environment. Children will be exploring the evolution of art by understanding local and world art history. They will be encouraged to identify the significance of art history in their present lives. <br/> <br/>
            We live among a rich cultural art tradition. Children will get an opportunity to see and learn about local, traditional and contemporary art practices. They will explore different areas of study like painting, sculpture, printmaking, digital art, textiles…etc. They will also have hands-on experience with all the different art mediums. <br/> <br/>
            The Art Program aims to provide a child with a holistic experience. For children who want to pursue and grow into practicing a creative career, the experience and learning they get from school will be valuable. The attempt is to provide a space for personal artistic growth. This will allow the child to grow into an individual that artistically responds to its environment. <br/> 
            By grade 8, the students are well equipped to take on IGCSE Art & Design curriculum. By extension, Art & Design is provided as a subject at A & AS level as well.`,
        },
        {
          title: "Music",
          description: `Even before recorded history, people created music, whether through drumming, singing or chanting. Some of our strongest emotions may be brought on by listening to a piece of music. <br/>
            To enable our students to understand and learn this method of expression, we introduced Music as a subject from Grade 1 to 8. At APL Global, using various Western Classical Music teaching techniques (like Alfred’s, John Thomson, Suzuki and Trinity based) we equip our students to play and analyse all levels of music. <br/>
            Since we believe each child is unique, we ensure that equal importance is given to both World Music and Indian Classical Music in the curriculum, so that students are exposed to alternative forms of music. In addition, we ensure that students are exposed to top-notch music and sound engineering software so that they are in touch with aspects of music production as well.  <br/>
            By grade 8, the students are well equipped to take on IGCSE Music curriculum. By extension, Music is provided as a subject at A & AS level as well. <br/> 
            Our students have composed and created background scores for the yearly annual day event and other programmes. they have worked in collaboration with leading musicians in the industry; composing music pieces for school fundraisers and awareness programmes. This has led to a profound sense of individuality and on a broader social level, the ability of music to foster community while creating art.
            `,
        },
        {
          title: "Sports",
          description: `Sports have always been an integral part of the APL curriculum. The path shown by
Dr. Kannan Pugazhendi— a renowned sports physician and fitness consultant — is being carried forward ably by the sports faculty. With a firm belief that the physical state impacts mental energies, APL ensures that its students are exposed to regular fitness checks, exercises and sports. <br/>
The sports program is aimed at developing physical fitness and sporting ability in a variety of indoor and outdoor games, at individual and team levels. Attention is given to individual needs in areas like posture, strength, endurance, flexibility, stamina and skill development for sporting events. Sports and movement activities are used effectively to work on psychological factors like self-confidence, attention, motivation, managing emotions and so on. With access to excellent sports facilities, students benefit from enhanced and age-appropriate coaching & learning. <br/>
The programme is more than just a co-curricular activity. It is being addressed as a CAIE curriculum with syllabus aims and assessment objectives in place. Students are exposed to a sound understanding of the principles & practices of sports as a discipline and good health in general. <br/>
The games played at APL include basketball, football, cricket, badminton, table tennis, throw ball, volleyball and a range of athletic sports.`,
        },
        {
          title: " DMAC (drama, music, art, and creative movements)",
          description: `Students in the Lower Secondary school have the option of choosing any one of the four Creative forms of Expression: Drama, Music, Art, and Creative Movements (DMAC). They will be assessed on their progress at the end of each term. <br/> <br/>
           
           <p>
  <strong>Drama</strong><br />
  The course in Drama promotes active learning, stimulates creativity and widens perceptions. A series of theatre games and improvisational exercises conducted under the supervision of a professional theatre person will focus on helping them develop their imagination, spontaneity, and reflexes.
</p><br/>
The specific aims of the course include:

<ul class="list-disc list-inside mt-2">
  <li>Enabling students to understand the role of rhythm, space, character, and plot in creating a piece of theatre</li>
  <li>Helping students discover and enhance their storytelling skills</li>
  <li>Developing their acting skills, both individually and in groups</li>
  <li>Enabling students to develop their skills in devising original stories for the stage</li>
</ul><br/><br/>
<p>
  <strong>Music</strong><br />
  Music is introduced as a subject from Grade 1 to 8 at APL Global. Using various Western Classical Music teaching techniques (like Alfred’s, John Thomson, Suzuki, and Trinity based) we equip our students to play and analyze all levels of music. Since we believe each child is unique, we ensure that equal importance is given to World Music and Indian Classical Music as well in the curriculum. We ensure that students are exposed to top-notch music and sound engineering software so that they are in touch with aspects of music production as well. The students have a choice of instruments between Vocal, Guitar, Keyboard and Drums.
</p><br/>
By grade 8, the students are well equipped to take on the IGCSE Music curriculum. By extension, Music is provided as a subject at A & AS level as well.<br/><br/>
<p>
  <strong>Art</strong><br />
  The Art program is designed to stimulate young minds to reflect and express themselves creatively. Children will be exploring the evolution of art by understanding local and world art history. Children will get an opportunity to see and learn about local, traditional and contemporary art practices. They will explore different areas of study and also have hands-on experience with all the different art mediums.
</p><br/>
For children who want to pursue and grow into practising a creative career, the experience and learning they get in school will be valuable.<br/><br/>
By grade 8, the students are well equipped to take on the IGCSE Art & Design curriculum. By extension, Art & Design is provided as a subject at A & AS level as well.<br/><br/>
<p>
  <strong>Creative Movements</strong><br />
  Creative movement sessions offer a safe space where one is able to creatively solve problems, collaborate with others, express feelings, accept and value individual differences while being respectful and responsible individuals.
</p><br/>
It focuses on self-expression through various artistic disciplines to discover the aesthetic in life experiences and self-discovery in the long run. The classes aim at increasing awareness of the body and the space that surrounds it. This, in turn, makes the individual sensitive to their own bodies and to other bodies that they relate to.<br/><br/>
The subject is further divided into three components: Creative movement and Performance, Rhythm & Fitness, and Dance studies.`,
        },
      ],
    },
  },
  Music: {
    images: [boy, child],
    content: {
      heading: "Music",
      subheading: [
        {
          title: " Rhythm, Harmony & Joy",
          description:
            "Explore sound and emotion through vocal and instrumental music.",
        },
        {
          title: "Vocal",
          description:
            "This empowers learners to express themselves creatively, guided by peers...",
        },
        {
          title: "Instrumental",
          description:
            "Focuses on stress-free evaluations that promote learning without fear of failure...",
        },
        {
          title: "Composition ",
          description:
            "Encourages students to engage with social causes and community leadership...",
        },
      ],
    },
  },
  Expressions: {
    images: ["https://via.placeholder.com/250x250?text=Drama"],
    content: {
      heading: "Expressions",
      subheading: [
        {
          title: " Theatrical & Verbal Expression",
          description:
            "Public speaking, storytelling, drama and more to build confidence.",
        },
        {
          title: "Drama",
          description:
            "This empowers learners to express themselves creatively, guided by peers...",
        },
        {
          title: "Storytelling",
          description:
            "Focuses on stress-free evaluations that promote learning without fear of failure...",
        },
        {
          title: "Debate ",
          description:
            "Encourages students to engage with social causes and community leadership...",
        },
      ],
    },
  },
};

export default function TabsAccordionSection() {
  const tabs = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  const { images, content } = tabData[activeTab];

  return (
    <section
      className="bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${paper})` }}
    >
      <div className="max-w-6xl mx-auto font-primary px-4 py-12 space-y-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveSubIndex(0);
              }}
              className={`px-20 py-4 space-y-8 mx-auto rounded-md font-semibold text-sm md:text-base transition ${
                activeTab === tab
                  ? "bg-third text-secondary"
                  : "border border-third text-secondary hover:bg-third"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Layered Images */}
          <div className="flex gap-6 relative">
            {/* First image (big) */}
            <div className=" p-2  w-2/3">
              <img
                src={images[0]}
                alt="Main"
                className=" w-full h-auto object-cover "
              />
            </div>
            {/* Second image (small, slightly lower) */}
            <div className=" w-1/3 mt-12 pt-12">
              <img
                src={images[1]}
                alt="Secondary"
                className=" w-full h-auto object-cover "
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-2 font-primary">
            <h4 className="text-3xl font-semi-bold text-#000000">
              {content.sub1}
            </h4>
            <h2 className="text-3xl font-bold text-#000000">
              {content.heading}
            </h2>

            {content.subtitle && (
              <p className="text-xl text-#000000 ">{content.subtitle}</p>
            )}
            <h2 className="text-3xl font-bold text-#000000">{content.title}</h2>
            <p>{content.description}</p>

            {/* Accordion Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
              {content.subheading.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSubIndex(index)}
                  className={`flex items-center justify-start text-left p-2  font-semibold transition ${
                    activeSubIndex === index
                      ? " text-black"
                      : " text-purple-800 hover:text-secondary"
                  }`}
                >
                  <span className="text-xl font-bold">
                    {activeSubIndex === index ? "−" : "+"}
                  </span>
                  <span className="ml-2">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="space-y-4 w-full">
            {/* Active Subheading on Top */}
            <div className="p-4 rounded shadow text-gray-700 w-full">
              <h4 className="text-xl font-semibold mb-2 text-purple-700">
                {content.subheading[activeSubIndex].title}
              </h4>

              <p
                className="text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: content.subheading[activeSubIndex].description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
