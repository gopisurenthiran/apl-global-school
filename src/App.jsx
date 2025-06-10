// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
