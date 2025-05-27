import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIcon() {
  return (    

    <div className="absolute bottom-6 left-6 pt-10 flex flex-cols-2 items-left">
      <div className="bg-white flex justify-left space-x-3 rounded p-2">
        <a href="#" className="bg-third text-white p-2 rounded shadow hover:scale-110 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-third text-white p-2 rounded shadow hover:scale-110 transition">
          <FaInstagram />
        </a>
        <a href="#" className="bg-third text-white p-2 rounded shadow hover:scale-110 transition">
          <FaLinkedinIn />
        </a>
       
      </div>
      <div className='px-10'>
      <button className="text-white font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90">
        Admissions Enquiry
      </button>
      </div>
     
</div>
);
}