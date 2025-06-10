// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import TabsSectionNew from "./pages/Home/TabsSectionNew";


function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/meraki" element={<TabsSectionNew />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
