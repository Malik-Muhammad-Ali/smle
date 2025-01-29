import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reviews from "./pages/reviews/Reviews";
import Services from "./pages/services/Services";
import Layout from "./components/layout/Layout";
import OurTeam from "./components/homescreen/OurTeam";
import Testimonials from "./components/homescreen/Testimonials";
import LandingServices from "./components/homescreen/LandingServices";
import Login from "./components/auth/Login";
import Courses from "./pages/courses/Courses";
import AboutUs from "./pages/about us/AboutUs";

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
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
