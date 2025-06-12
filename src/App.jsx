// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import TabsSectionNew from "./pages/Home/TabsSectionNew";
import AboutPages from "./pages/AboutPage";
import OurEducational from "./pages/OurEducational";
import OurPromoters from "./pages/OurPromoters";
import OurCampus from "./pages/OurCampus";
import OurManagement from "./pages/OurManagement";
import OurFaculty from "./pages/OurFaculty";
import OurAlumini from "./pages/OurAlumni";
import OurFramework from "./pages/OurFramework";


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
          <Route path="/meraki" element={<TabsSectionNew />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
