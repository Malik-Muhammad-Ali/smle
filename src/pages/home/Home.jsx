import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../../components/homescreen/HeroSection";
import Aboutus from "../../components/homescreen/Aboutus";
import ChoseUs from "../../components/homescreen/ChoseUs";
import LandingServices from "../../components/homescreen/LandingServices";
import OurTeam from "../../components/homescreen/OurTeam";
import Testimonials from "../../components/homescreen/Testimonials";

const Home = () => {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      gap:"60px"
    }}>
      <Box id="hero-section">
        <HeroSection />
      </Box>
      <Box id="about-us">
        <Aboutus/>
      </Box>
      <Box>
        <ChoseUs/>
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
