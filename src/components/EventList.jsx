import React, { useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import EventImage from '../assets/Img-3.jpg';

const Events = [
  {
    id: 1,
    time: '9am - 12pm',
    date: '23rd October, 2025',
    title: 'Lorem •sum dolor sit arnet. consectetur adipiscing elit, sed do eiusmod',
    attendees: [
      'https://i.pravatar.cc/32?img=1',
      'https://i.pravatar.cc/32?img=2',
      'https://i.pravatar.cc/32?img=3',
    ],
    moreCount: 50,
    image: EventImage,
  },
  {
    id: 2,
    time: '10am - 1pm',
    date: '25th October, 2025',
    title: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
    attendees: [
      'https://i.pravatar.cc/32?img=4',
      'https://i.pravatar.cc/32?img=5',
      'https://i.pravatar.cc/32?img=6',
    ],
    moreCount: 34,
    image: EventImage,
  },
  {
    id: 3,
    time: '2pm - 4pm',
    date: '30th October, 2025',
    title: 'Vivamus vestibulum nulla nec ante. Praesent placerat risus.',
    attendees: [
      'https://i.pravatar.cc/32?img=7',
      'https://i.pravatar.cc/32?img=8',
      'https://i.pravatar.cc/32?img=9',
    ],
    moreCount: 60,
    image: EventImage,
  },
   {
    id: 4,
    time: '2pm - 4pm',
    date: '30th October, 2025',
    title: 'Vivamus vestibulum nulla nec ante. Praesent placerat risus.',
    attendees: [
      'https://i.pravatar.cc/32?img=7',
      'https://i.pravatar.cc/32?img=8',
      'https://i.pravatar.cc/32?img=9',
    ],
    moreCount: 60,
    image: EventImage,
  },
   {
    id: 5,
    time: '2pm - 4pm',
    date: '30th October, 2025',
    title: 'Vivamus vestibulum nulla nec ante. Praesent placerat risus.',
    attendees: [
      'https://i.pravatar.cc/32?img=7',
      'https://i.pravatar.cc/32?img=8',
      'https://i.pravatar.cc/32?img=9',
    ],
    moreCount: 60,
    image: EventImage,
  },
   {
    id: 6,
    time: '2pm - 4pm',
    date: '30th October, 2025',
    title: 'Vivamus vestibulum nulla nec ante. Praesent placerat risus.',
    attendees: [
      'https://i.pravatar.cc/32?img=7',
      'https://i.pravatar.cc/32?img=8',
      'https://i.pravatar.cc/32?img=9',
    ],
    moreCount: 60,
    image: EventImage,
  },
];

const pageSize = 2;

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
            className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Event Image */}
            <div className="w-full sm:w-32 h-48 sm:h-28 flex-shrink-0">
              <img
                src={event.image}
                alt="Event"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Event Details */}
            <div className="flex-1 w-full sm:px-4">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
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
              <p className="text-base sm:text-lg font-medium text-gray-800 leading-snug">
                {event.title}
              </p>
            </div>

            {/* Ticket & Attendees */}
            <div className="flex flex-col sm:items-end w-full sm:w-auto gap-3 mt-3 sm:mt-0">
              <button className="border border-gray-400 text-blue-500 px-4 py-1 rounded-full text-sm hover:bg-gray-50">
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
