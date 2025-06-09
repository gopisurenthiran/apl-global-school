// components/CreativeTabs.jsx
import { useState } from 'react';
 
const tabs = ['Meraki', 'Art', 'Music', 'Expressions'];
 
const content = {
  Meraki: {
    images: [
      { src: '/images/meraki1.jpg', bg: 'bg-purple-200', rounded: 'rounded-tl-[80px]' },
      { src: '/images/meraki2.jpg', bg: 'bg-lime-200', rounded: 'rounded-none' },
    ],
    title: 'Meraki',
    subtitle: 'Creative Expressions/Artworks. Music. Purpose.',
    description:
      'Beyond Classroom is an ecosystem where children explore all that is the voice of the child. The tab includes sports, games, arts, performances, and other experiences.',
    list: [
      'Sports (Inter-school, State level)',
      'Art, Dance, Music, Gardening',
      'Specialized Citizenship Projects',
      'Publishing',
    ],
  },
  Art: {
    images: [
      { src: '/images/art1.jpg', bg: 'bg-pink-200', rounded: 'rounded-tl-[80px]' },
      { src: '/images/art2.jpg', bg: 'bg-yellow-200', rounded: 'rounded-none' },
    ],
    title: 'Art',
    subtitle: 'Exploring creativity through visual expression.',
    description:
      'Art helps students communicate ideas and feelings, promoting creativity.',
    list: ['Drawing & Painting', 'Craft & Sculpture', 'Visual Storytelling'],
  },
  Music: {
    images: [
      { src: '/images/music1.jpg', bg: 'bg-blue-200', rounded: 'rounded-tl-[80px]' },
      { src: '/images/music2.jpg', bg: 'bg-indigo-200', rounded: 'rounded-none' },
    ],
    title: 'Music',
    subtitle: 'Rhythms and melodies that inspire expression.',
    description:
      'Music sessions develop rhythm, vocal expression, and team spirit.',
    list: ['Singing', 'Instrumental Practice', 'Performances'],
  },
  Expressions: {
    images: [
      { src: '/images/expressions1.jpg', bg: 'bg-orange-200', rounded: 'rounded-tl-[80px]' },
      { src: '/images/expressions2.jpg', bg: 'bg-teal-200', rounded: 'rounded-none' },
    ],
    title: 'Expressions',
    subtitle: 'Drama, debate, and public speaking forums.',
    description:
      'Through drama and dialogue, students build confidence and communication.',
    list: ['Theatre', 'Speech & Debate', 'Roleplay'],
  },
};
 
export default function CreativeTabs() {
  const [activeTab, setActiveTab] = useState('Meraki');
  const current = content[activeTab];
 
  return (
<div className="p-6 max-w-6xl mx-auto">
      {/* Tabs */}
<div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
<button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 border border-purple-500 rounded-t-xl transition-all ${
              activeTab === tab
                ? 'bg-purple-700 text-white font-semibold'
                : 'text-purple-700 bg-white'
            }`}
>
            {tab}
</button>
        ))}
</div>
 
      {/* Content */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Images */}
<div className="flex gap-4 col-span-1">
          {current.images.map((img, idx) => (
<div
              key={idx}
              className={`w-1/2 h-48 ${img.bg} overflow-hidden ${img.rounded}`}
>
<img src={img.src} alt="" className="w-full h-full object-cover" />
</div>
          ))}
</div>
 
        {/* Text Content */}
<div className="col-span-2 space-y-3">
<h2 className="text-xl font-bold">{current.title}</h2>
<h3 className="text-md italic text-gray-600">{current.subtitle}</h3>
<p className="text-gray-700">{current.description}</p>
<ul className="space-y-2">
            {current.list.map((item, idx) => (
<li key={idx} className="flex items-start gap-2 text-green-800 font-medium">
<span className="text-lg font-bold">+</span>
<span>{item}</span>
</li>
            ))}
</ul>
</div>
</div>
</div>
  );
}