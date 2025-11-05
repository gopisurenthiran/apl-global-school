// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

// About APL
import OurEducational from "./pages/About/OurEducational";
import OurPromoters from "./pages/About/OurPromoters";
import OurCampus from "./pages/About/OurCampus";
import OurManagement from "./pages/About/OurManagement";
import OurFaculty from "./pages/About/OurFaculty";
import OurAlumini from "./pages/About/OurAlumni";
import OurFramework from "./pages/About/OurFramework";

// Academics
import OurProgrammes from "./pages/Academic/OurProgrammes";
import OurCurriculum from "./pages/Academic/OurCurriculum";
import OurPedagogy from "./pages/Academic/OurPedagogy";
import EssentialSupport from "./pages/Academic/EssentialSupport";
import Department from "./pages/Academic/Department";
import KamalamProgram from "./pages/Academic/KamalamProgram";

// Child-Centered
import CoCurricularPrograms from "./pages/Child Centered/CoCurricularPrograms";
import BeyondClassRoom from "./pages/Child Centered/BeyondClassroom";
import APLEvents from "./pages/Child Centered/APLEvents";

// Admission
import FeesAndStreams from "./pages/Admission/FeesandStreams";
import Registration from "./pages/Admission/Registration";

// Gallery & Others
import CareersPages from "./pages/Careers/CareersPage";
import PhotoGalerySection from "./pages/Gallery/GallerySection";
import VideoGallery from "./pages/Gallery/VideoGallery";
import APLPODCAST from "./pages/Gallery/APLPodcast";
import ContactUsPage from "./pages/ContactUs";

// Home Feature Sections
import MerakiSection from "./pages/Home/Meraki";
import ArtSection from "./pages/Home/Art";

// Scroll to top behavior
import ScrollToTop from "./components/ScrollToTop";
import ExpressionClub from "./pages/Child Centered/ExpressionsClubs";
import StuderntDrivenClub from "./pages/Child Centered/StudentDrivenClubs";
import YouthAwards from "./pages/Child Centered/YouthAwards";
import AboutAPL from "./pages/AboutApl";
import News from "./pages/News";
import ChildCentred from "./pages/ChildCentred";
import MusicSection from "./pages/Home/Music";
import ExpressionSection from "./pages/Home/Expressions";
import AcademicForm from "./pages/Careers/Academic";
import TeacherMentor from "./pages/Careers/TeacherMentor";
import CIDTL from "./pages/Careers/Cidtl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComingSoon404 from "./components/NotFound";
import MySchoolGallery from "./pages/Gallery/MySchoolGallery";
import LearnersAwards from "./pages/Gallery/LearnersAwards";
import TestimonialTabs from "./pages/Gallery/TestimonialTabs";
import ADayAtAPL from "./pages/Admission/ADayAtAPL";
import VatsaPage from "./pages/Admission/VatsaPage";
import AplAssociatesPage from "./pages/About/AplAssociatesPage";
import AplAwardsPage from "./pages/About/AplAwardsPage";
import OurAssociates from "./pages/About/AplAssociatesPage";
import CambridgeDiplomaSection from "./pages/Home/CambridgeDiplomaSection";
import CambridgeAwards from "./pages/others/CambridgeAwards";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-apl" element={<AboutAPL />} />
          <Route path="/news" element={<News />} />
          <Route path="/child-centered" element={<ChildCentred />} />

          {/* About APL */}
          <Route path="/apl-framework" element={<OurFramework />} />
          <Route path="/apl-educational" element={<OurEducational />} />
          <Route path="/apl-promoters" element={<OurPromoters />} />
          <Route path="/apl-campus" element={<OurCampus />} />
          <Route path="/apl-management" element={<OurManagement />} />
          <Route path="/apl-faculty" element={<OurFaculty />} />
          <Route path="/apl-alumni" element={<OurAlumini />} />
          <Route path="/apl-associates" element={<OurAssociates />} />
          <Route path="/apl-awards" element={<AplAwardsPage />} />

          {/* Academics */}
          <Route path="/apl-programmes" element={<OurProgrammes />} />
          <Route path="/apl-curriculum" element={<OurCurriculum />} />
          <Route path="/apl-pedagogy" element={<OurPedagogy />} />
          <Route path="/essential-support" element={<EssentialSupport />} />
          <Route path="/apl-department" element={<Department />} />
          <Route path="/apl-kamalam-program" element={<KamalamProgram />} />

          {/* Child-Centered */}
          <Route
            path="/co-curricular-programs"
            element={<CoCurricularPrograms />}
          />
          <Route path="/beyond-classrooms" element={<BeyondClassRoom />} />
          <Route path="/apl-events" element={<APLEvents />} />
          <Route path="/expressions-clubs" element={<ExpressionClub />} />
          <Route
            path="/student-driven-clubs"
            element={<StuderntDrivenClub />}
          />
          <Route path="/youth-awards" element={<YouthAwards />} />

          {/* Home Extras */}
          <Route path="/meraki" element={<MerakiSection />} />
          <Route path="/art" element={<ArtSection />} />
          <Route path="/music" element={<MusicSection />} />
          <Route path="/expressions" element={<ExpressionSection />} />

          {/* Admission */}
          <Route path="/apl-fees-and-streams" element={<FeesAndStreams />} />
          <Route path="/apl-registration" element={<Registration />} />
          <Route path="/day-at-school" element={<ADayAtAPL />} />
          <Route path="/vatsa" element={<VatsaPage />} />

          {/* Gallery & Others */}
          <Route path="/careers" element={<AcademicForm />} />
          <Route path="/teacher" element={<TeacherMentor />} />
          <Route path="/cidtl" element={<CIDTL />} />
          <Route path="/gallery" element={<MySchoolGallery />} />
          <Route path="/learner-awards" element={<CambridgeAwards />} />
          <Route path="/testimonials" element={<TestimonialTabs />} />
          <Route path="/photo-gallery" element={<PhotoGalerySection />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/apl-podcast" element={<APLPODCAST />} />
          <Route path="/contact-us" element={<ContactUsPage />} />

          {/* others pages */}

          <Route path="/cambridge" element={<CambridgeAwards />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="*" element={<ComingSoon404/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
