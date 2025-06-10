import React, { useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import EventImage from '@/assets/Img-3.jpg';

const Events = [
  {
    id: 1,
    time: '8:30am - 11:00am',
    date: '15th July, 2025',
    title: 'Annual Sports Day – Track & Field Events',
    attendees: [
      'https://i.pravatar.cc/32?img=11',
      'https://i.pravatar.cc/32?img=12',
      'https://i.pravatar.cc/32?img=13',
    ],
    moreCount: 120,
    image: EventImage,
  },
  {
    id: 2,
    time: '10:00am - 1:00pm',
    date: '5th August, 2025',
    title: 'Inter-School Debate Competition – Senior Category',
    attendees: [
      'https://i.pravatar.cc/32?img=14',
      'https://i.pravatar.cc/32?img=15',
      'https://i.pravatar.cc/32?img=16',
    ],
    moreCount: 40,
    image: EventImage,
  },
  {
    id: 3,
    time: '9:00am - 12:30pm',
    date: '20th August, 2025',
    title: 'Science Exhibition – Innovations by Students',
    attendees: [
      'https://i.pravatar.cc/32?img=17',
      'https://i.pravatar.cc/32?img=18',
      'https://i.pravatar.cc/32?img=19',
    ],
    moreCount: 75,
    image: EventImage,
  },
  {
    id: 4,
    time: '1:00pm - 3:00pm',
    date: '10th September, 2025',
    title: 'Teacher’s Day Celebration – Cultural Performances',
    attendees: [
      'https://i.pravatar.cc/32?img=20',
      'https://i.pravatar.cc/32?img=21',
      'https://i.pravatar.cc/32?img=22',
    ],
    moreCount: 95,
    image: EventImage,
  },
  {
    id: 5,
    time: '9:30am - 11:30am',
    date: '1st October, 2025',
    title: 'Workshop on Mental Health Awareness for Teens',
    attendees: [
      'https://i.pravatar.cc/32?img=23',
      'https://i.pravatar.cc/32?img=24',
      'https://i.pravatar.cc/32?img=25',
    ],
    moreCount: 65,
    image: EventImage,
  },
  {
    id: 6,
    time: '10:30am - 1:00pm',
    date: '14th November, 2025',
    title: 'Children’s Day – Fancy Dress and Fun Games',
    attendees: [
      'https://i.pravatar.cc/32?img=26',
      'https://i.pravatar.cc/32?img=27',
      'https://i.pravatar.cc/32?img=28',
    ],
    moreCount: 88,
    image: EventImage,
  },
];

const pageSize = 3;

export default function EventList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Events.length / pageSize);

  const paginatedEvents = Events.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="space-y-8">
        {paginatedEvents.map((event) => (
          <div
          key={event.id}
          className="bg-white rounded-xl shadow-md p-4 grid grid-cols-12 gap-4 items-center"
        >
          {/* Image - col-span-2 */}
          <div className="col-span-12 sm:col-span-2 h-48 sm:h-28">
            <img
              src={event.image}
              alt="Event"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Event Details - col-span-5 */}
          <div className="col-span-12 sm:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-red-500" />
                {event.time}
              </span>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                {event.date}
              </span>
            </div>
            <p className="text-base sm:text-lg font-primary text-gray-800 leading-snug">
              {event.title}
            </p>
          </div>

          {/* Divider Line - col-span-1 */}
          <div className="hidden sm:block col-span-1 h-20 border-l border-gray-300 mx-auto" />

          {/* Ticket & Attendees - col-span-4 */}
          <div className="col-span-12 sm:col-span-3 flex flex-col items-start sm:items-end gap-4">
            <button className="border border-gray-400 text-blue-500 px-4 py-1 font-primary rounded-full text-sm hover:bg-lime-300 hover:text-white">
              Buy Tickets
            </button>
            <div className="flex items-center -space-x-2">
              {event.attendees.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user${i}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center font-medium border-2 border-white z-10">
                {event.moreCount}+
              </span>
              <span className="text-blue-500 text-xs pl-2 z-10">More</span>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="text-xl text-secondary hover:text-secondary disabled:opacity-50"
          disabled={currentPage === 1}
        >
          &larr;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-full text-sm font-semibold transition ${
              currentPage === i + 1
                ? 'bg-third text-white'
                : 'text-gray-700 hover:text-third hover:ring-2 hover:ring-third'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="text-xl text-secondary hover:text-secondary disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
