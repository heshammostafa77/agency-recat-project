import Navbar from "./components/common/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CasePage from "./pages/CasePage.jsx";
import DecodeSpecialistesPage from "./pages/DecodeSpecialistesPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case" element={<CasePage />} />
          <Route path="/decodespecialistes" element={<DecodeSpecialistesPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
