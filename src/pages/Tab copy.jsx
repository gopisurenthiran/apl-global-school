import { useState } from 'react';
import paper from '../assets/section-2-banner.png';
import boy from '../assets/tab-1.png';
import child from '../assets/tab-2.png';

const tabData = {
  Meraki: {
    images: [boy, child],
    content: {
      heading: 'Meraki',
      sub: 'Creative ExpressionsPassion Meets Purpose',
      subheading: [
        {
          title: ' Passion Meets Purpose',
          description:
            'Any education is not complete without taking cognizance  of what is the need of the hour...',
        },
        {
          title: 'Peer-led Creative Expression',
          description:
            'This empowers learners to express themselves creatively, guided by peers...',
        },
        {
          title: 'No Fear School Grade',
          description:
            'Focuses on stress-free evaluations that promote learning without fear of failure...',
        },
        {
          title: 'Responsible Citizenship Program',
          description:
            'Encourages students to engage with social causes and community leadership...',
        },
        {
          title: 'Fellowships',
          description:
            'Specialized mentorship and learning tracks for advanced personal growth...',
        },
      ],
    },
  },
  Art: {
    images: ['https://via.placeholder.com/250x250?text=Art+1'],
    content: {
      heading: 'Art',
      subheading: [
        {
          title: ' Express through Creativity',
          description:
            'Art allows learners to explore imagination through forms and color.',
        },
        {
          title: 'Painting',
          description:
            'This empowers learners to express themselves creatively, guided by peers...',
        },
        {
          title: 'Sculpture',
          description:
            'Focuses on stress-free evaluations that promote learning without fear of failure...',
        },
        {
          title: 'Mixed Media',
          description:
            'Encourages students to engage with social causes and community leadership...',
        },
       
      ],
      
    },
  },
  Music: {
    images: ['https://via.placeholder.com/250x250?text=Music'],
    content: {
      heading: 'Music',
      subheading: [
        {
          title: ' Rhythm, Harmony & Joy',
          description:
            'Explore sound and emotion through vocal and instrumental music.',
        },
        {
          title: 'Vocal',
          description:
            'This empowers learners to express themselves creatively, guided by peers...',
        },
        {
          title: 'Instrumental',
          description:
            'Focuses on stress-free evaluations that promote learning without fear of failure...',
        },
        {
          title: 'Composition ',
          description:
            'Encourages students to engage with social causes and community leadership...',
        },
       
      ],
    },
  },
  Expressions: {
    images: ['https://via.placeholder.com/250x250?text=Drama'],
    content: {
      heading: 'Expressions',
      subheading: [
        {
          title: ' Theatrical & Verbal Expression',
          description:
            'Public speaking, storytelling, drama and more to build confidence.',
        },
        {
          title: 'Drama',
          description:
            'This empowers learners to express themselves creatively, guided by peers...',
        },
        {
          title: 'Storytelling',
          description:
            'Focuses on stress-free evaluations that promote learning without fear of failure...',
        },
        {
          title: 'Debate ',
          description:
            'Encourages students to engage with social causes and community leadership...',
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
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveSubIndex(0);
              }}
              className={`px-6 py-2 rounded-md font-semibold text-sm md:text-base transition ${
                activeTab === tab
                  ? 'bg-purple-700 text-lime-300'
                  : 'border border-purple-400 text-purple-700 hover:bg-purple-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Layered Images with Torn Paper */}
          <div className="relative w-full flex flex-col items-center md:items-start">
            {/* Torn paper top effect */}
            <div className="absolute -top-10 left-0 w-44 h-10 bg-[url('/torn-paper-top.svg')] bg-no-repeat bg-contain bg-top z-0"></div>

            {/* Main image */}
            <div className="z-10 relative">
              <img
                src={images[0]}
                alt="Main"
                className="rounded-full bg-purple-300 p-2 w-40 h-40 object-cover"
              />
            </div>

            {/* Overlapping image */}
            <div className="relative z-20 -mt-4 ml-[-40px]">
              <img
                src={images[1]}
                alt="Secondary"
                className="rounded-md bg-lime-200 p-2 w-32 h-32 object-cover"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-700">{content.heading}</h2>
            <h4 className="text-xl">{content.sub}</h4>

            {activeTab === 'Meraki' ? (
              <div className="space-y-4">
                {/* Active Subheading on Top */}
                <div className="bg-white p-4 rounded shadow text-gray-700">
                  <h4 className="text-xl font-semibold mb-2 text-purple-700">
                    {content.subheading[activeSubIndex].title}
                  </h4>
                  <p>{content.subheading[activeSubIndex].description}</p>
                </div>

                {/* Accordion Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.subheading.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSubIndex(index)}
                      className={`flex items-center justify-between w-full text-left p-3 rounded-md font-semibold transition ${
                        activeSubIndex === index
                          ? 'bg-purple-700 text-white'
                          : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
                      }`}
                    >
                      <span className="text-xl font-bold">
                        {activeSubIndex === index ? '−' : '+'}
                      </span>
                      <span>{item.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-medium text-purple-500">{content.subheading}</h3>
                <p className="text-gray-700">{content.description}</p>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {content.bullets?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
