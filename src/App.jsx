import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reviews from "./pages/reviews/Reviews";
import Services from "./pages/services/Services";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
