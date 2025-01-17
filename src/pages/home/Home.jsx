import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Box } from "@mui/material";
import HeroSection from "../../components/homescreen/HeroSection";
import LandingServices from "./services/LandingServices";
import OurTeam from "./Team/OurTeam";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <Box>
      <Box>
        <HeroSection />
      </Box>
      <Box id="services-section">
        <LandingServices />
      </Box>
      <Box id="team-section">
        <OurTeam />
      </Box>
      <Box id="testimonials-section">
        <Testimonials />
      </Box>
    </Box>
  );
};

export default Home;
