import EventBanner from '../assets/EventBanner.svg';

export default function UpcommingEvents() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white py-16 px-4 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold font-primary text-primary mb-5 ">
        Upcoming Events and News Stay  <br /> updated with our latest events
      </h2>
      {/* <p className="text-center text-2xl font-semibold font-primary text-purple-700 mb-12">
        Capturing joy, Learning and Achievement
      </p> */}

    <img
        src={EventBanner}
        alt="Admissions Banner"
        className="w-full h-auto object-contain"
    />
    </div>
  );
}
