import Fream from '../assets/Fream-Left.svg';
import RightBanner from '../assets/RightBanner.svg';

export default function ContentBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {/* Left Side with Text Overlay */}
        <div className="relative w-full">
          {/* Text Overlay */}
          <div className="absolute top-1/2 left-20 transform -translate-y-1/2 text-third max-w-md z-10">
            <h4 className="text-lg md:text-2xl font-semibold leading-relaxed">
              We believe that every child is a unique learner who deserves a flexible, customised,
              and personalized educational environment. We work with children to ensure that we meet
              their individual needs and feed their interests through our teaching and assessment strategies.
            </h4>
          </div>

          {/* Left Banner Image */}
          <img
            src={Fream}
            alt="Left Banner"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={RightBanner}
            alt="Right Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
