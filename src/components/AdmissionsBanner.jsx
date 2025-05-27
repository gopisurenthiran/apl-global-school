import Banner from '../assets/AdmissionBanner.svg';

export default function AdmissionsBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
    <img
        src={Banner}
        alt="Admissions Banner"
        className="w-full h-auto object-contain"
    />
    </div>
  );
}
