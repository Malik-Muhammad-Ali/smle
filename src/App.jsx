import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reviews from "./pages/reviews/Reviews";
import Services from "./pages/services/Services";
import Layout from "./components/layout/Layout";
import OurTeam from "./pages/home/Team/OurTeam";
import Testimonials from "./pages/home/testimonials/Testimonials";
import LandingServices from "./pages/home/services/LandingServices";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services" element={<Services />} />
          <Route path="/landingservices" element={<LandingServices />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
