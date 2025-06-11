import Banner from '@/assets/AdmissionBanner.png';

export default function AdmissionsBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 overflow-hidden">
    <img
        src={Banner}
        alt="Admissions Banner"
        className="w-full h-auto object-contain"
    />
    </div>
  );
}
