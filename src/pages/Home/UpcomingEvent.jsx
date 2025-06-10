import EventBanner from '@/assets/EventBanner.svg';

export default function UpcommingEvents() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-primary text-third mb-4 sm:mb-6">
        Upcoming Events and News  <br/>Stay updated with our latest events<br className="hidden sm:block" /> 
        {/* <span className="text-base sm:text-lg font-normal">
          Stay updated with our latest events
        </span> */}
      </h2>

      {/* Image section */}
      <div className="w-full">
        <img
          src={EventBanner}
          alt="Upcoming Events Banner"
          className="w-full h-auto object-contain rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
}
