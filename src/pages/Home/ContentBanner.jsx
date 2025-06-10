import Fream from '@/assets/FrameBanner.png';

import RightBanner from '@/assets/mobile.jpg';

export default function ContentBanner() {
  return (
    <div className="w-full py-10 mx-auto ">
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
    </div>
  );
}
