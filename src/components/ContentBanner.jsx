import Fream from '../assets/section.jpg';

import RightBanner from '../assets/mobile.jpg';

export default function ContentBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 ">
      <div className="hidden md:flex">
        <img
            src={Fream}
            alt="Left Banner"
            className="w-full h-auto object-contain"
          />
      </div>
      <div className="block md:hidden">
        <img
            src={RightBanner}
            alt="Left Banner"
            className="w-full h-auto object-contain"
          />
      </div>
      {/* <div className="grid md:grid-cols-2 gap-4 items-center">
      
        <div className="relative w-full">
         
          <img
            src={Fream}
            alt="Left Banner"
            className="w-full h-auto object-contain"
          />
        </div>

      
        <div>
          <img
            src={RightBanner}
            alt="Right Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div> */}
    </div>
  );
}
