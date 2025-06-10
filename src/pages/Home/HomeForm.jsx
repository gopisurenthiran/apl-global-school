import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function EnquiryForm() {
  return (
    <div className="relative w-full font-secondary flex items-center justify-end">
      {/* Form Card */}
      <div className="bg-third text-lime-200  p-6 rounded-2xl shadow-xl max-w-md w-xl space-y-4">
        <h2 className="text-lg text-secondary font-semibold">Welcome to APL Global School</h2>
       <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Parent Name"
              className="bg-[#6f3d86] placeholder-white text-white p-2 font-secondary  rounded border-none outline-none w-full"
            />
            <input
              type="text"
              placeholder="Student Name"
              className="bg-[#6f3d86] placeholder-white text-white p-2 font-secondary  rounded border-none focus:outline-none w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select className="bg-[#6f3d86] text-white p-2 rounded w-full font-secondary  border-none focus:outline-none">
              <option>Applying For</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              className="bg-[#6f3d86] placeholder-white text-white p-2 rounded font-secondary  border-none focus:outline-none w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone No"
            className="bg-[#6f3d86] placeholder-white text-white p-2 rounded font-secondary  border-none w-full focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="City"
              className="bg-[#6f3d86] placeholder-white text-white p-2 rounded font-secondary  border-none focus:outline-none w-full"
            />
            <select className="bg-[#6f3d86] text-white p-2 rounded w-full font-secondary  border-none focus:outline-none">
              <option>Gender</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select className="bg-[#6f3d86] text-white p-2 rounded border-none font-secondary  w-full focus:outline-none">
              <option>Preferred Location</option>
            </select>
            <button
              type="submit"
              className="bg-[#C3D452] text-white font-secondary  font-semibold p-2 rounded hover:bg-third  transition hover:border hover:border-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
}
