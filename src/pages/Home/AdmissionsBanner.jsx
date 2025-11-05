import BannerDesktop from "/assets/2026-27-mob.png";
import BannerMobile from "/assets/2026-27-web.png"; // Add your mobile version image

export default function AdmissionsBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto overflow-hidden">
      <a href="https://sch.edulip.in/UI/Website/APL/RegistrationForm.php">
        {/* Desktop Banner */}
        <img
          src={BannerDesktop}
          alt="Admissions Banner Desktop"
          className="hidden md:block w-full h-auto object-contain"
          loading="lazy"
        />

        {/* Mobile Banner */}
        <img
          src={BannerMobile}
          alt="Admissions Banner Mobile"
          className="block md:hidden w-full h-auto object-contain p-4"
          loading="lazy"
        />
      </a>
    </div>
  );
}
