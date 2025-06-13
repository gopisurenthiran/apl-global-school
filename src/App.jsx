// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import TabsSectionNew from "./pages/Home/TabsSectionNew";

import OurEducational from "./pages/About/OurEducational";
import OurPromoters from "./pages/About/OurPromoters";
import OurCampus from "./pages/About/OurCampus";
import OurManagement from "./pages/About/OurManagement";
import OurFaculty from "./pages/About/OurFaculty";
import OurAlumini from "./pages/About/OurAlumni";
import OurFramework from "./pages/About/OurFramework";
import OurProgrammes from "./pages/Academic/OurProgrammes";
import OurCurriculum from "./pages/Academic/OurCurriculum";
import OurPedagogy from "./pages/Academic/OurPedagogy";
import EssentialSupport from "./pages/Academic/EssentialSupport";
import Department from "./pages/Academic/Department";
import KamalamProgram from "./pages/Academic/KamalamProgram";
import CoCurricularPrograms from "./pages/Child Centered/CoCurricularPrograms";


function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/apl-framework" element={<OurFramework />} />
          <Route path="/apl-educational" element={<OurEducational />} />
          <Route path="/apl-promoters" element={<OurPromoters />} />
          <Route path="/apl-campus" element={<OurCampus />} />
          <Route path="/apl-management" element={<OurManagement />} />
          <Route path="/apl-faculty" element={<OurFaculty />} />
          <Route path="/apl-alumni" element={<OurAlumini />} />
          <Route path="/apl-programmes" element={<OurProgrammes />} />
          <Route path="/apl-curriculum" element={<OurCurriculum />} />
          <Route path="/apl-pedagogy" element={<OurPedagogy />} />
          <Route path="/essential-support" element={<EssentialSupport />} />
          <Route path="/apl-department" element={<Department />} />
          <Route path="/apl-kamalam-program" element={<KamalamProgram />} />
          <Route path="/co-curricular-programs" element={<CoCurricularPrograms />} />
          <Route path="/beyond-classroom" element={<KamalamProgram />} />
          <Route path="/apl-events" element={<KamalamProgram />} />
          <Route path="/expressions-clubs" element={<KamalamProgram />} />
          <Route path="/student-driven-clubs" element={<KamalamProgram />} />
          <Route path="/youth-awards" element={<KamalamProgram />} />
          <Route path="/meraki" element={<TabsSectionNew />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
