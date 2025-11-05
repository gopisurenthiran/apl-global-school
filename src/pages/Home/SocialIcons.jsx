import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa";
import chatIcon from "/assets/chat-icon.webp";

/** Update these links to your real social URLs */
const socials = [
  { icon: FaFacebookF, href: "https://facebook.com/aplglobalschool/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/aplglobalchennai/", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://in.linkedin.com/school/apl-global-school/", label: "LinkedIn" },
  { icon: FaWhatsapp , href: "https://wa.me/917338744475", label: "Whatsapp" },
];

export default function SocialIcon() {
  /** Re‑usable strip of social links */
  const SocialStrip = () => (
    <div className="bg-white flex gap-3 rounded p-2 shadow-md">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-third text-white p-2 rounded hover:scale-110 transition-transform"
        >
          <Icon />
        </a>
      ))}
    </div>
  );

  /** Re‑usable enquiry button */
  const EnquiryBtn = () => (
    <div className="flex items-center">
      <img
        src={chatIcon}
        alt="Chat icon"
        className="h-10 w-10 object-contain -ml-4"
      />
      <button
        onClick={() =>
          (window.location.href =
            "https://sch.edulip.in/UI/Website/APL/RegistrationForm.php")
        }
        type="button"
        className="h-12 px-2 text-xl font-secondary font-semibold text-white rounded-lg bg-gradient-to-r from-purple-700 to-pink-500 shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"
      >
        Register your child
      </button>
    </div>
  );

  return (
    <>
      {/* ── Desktop (parent should be relative for absolute positioning) ── */}
      <div className="hidden md:flex absolute bottom-6 left-2 items-center gap-6 z-10">
        <SocialStrip />
        <EnquiryBtn />
      </div>

      {/* ── Mobile ── */}
      <div className="flex flex-col items-center md:hidden mt-6 gap-4">
        <SocialStrip />
        <EnquiryBtn />
      </div>
    </>
  );
}
