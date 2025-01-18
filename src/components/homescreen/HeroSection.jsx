import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React from "react";
// import CustomerRating from './CustomerRating';
import { useNavigate } from "react-router-dom";
import StatsSection from "./StatsSection";

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "visible",
          height: "80vh",
          backgroundImage: `
      <Box
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "visible",
          height: "80vh",
          backgroundImage: `
        linear-gradient(
        to left,
        rgba(255, 255, 255, 0.6) 30%, 
        rgba(4, 32, 72, 0.4) 70%
      ),
        url("/public/hero-bg.svg")`,
          backgroundSize: "cover", // Adjust how the image is sized
          backgroundRepeat: "no-repeat", // Prevent tiling
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: "center",
            flexWrap: "wrap",
            mb: { xs: 2, sm: 4, md: 6 },
            mr: { xs: 2, sm: 4, md: 8 },
            ml: { xs: 2, sm: 4, md: 8 },
            gap: { xs: "50px", sm: "50px", md: "0px", lg: "0px" },
            height: "75%",
          }}
        >
          {/* left section */}
          <Box
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: {
                md: "flex-start",
                lg: "flex-start",
                sm: "center",
                xs: "center",
              },
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              gap: { lg: "20px", md: "15px", sm: "40px", xs: "32px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "26px", md: "26px", lg: "28px" },
                  fontWeight: { xs: 600, sm: 600, md: 700, lg: 700 },
                  color: "#FFFFFF",
                }}
              >
                QONQUER SMILE WITH
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  //   fontSize:{xs:"18px", sm:"26px",md:"26px",lg:"50px"},
                  fontWeight: { xs: 600, sm: 600, md: 700, lg: 700 },
                  color: "#FFFFFF",
                }}
              >
                SMLEGUIDE!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                // alignItems:"center",
                width: { xs: "100%", sm: "70%", md: "100%", lg: "100%" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  // marginBottom: 4,
                }}
              >
                Get expert mentorship from Dr. Salman Rasheed and real
                exam-focused strategies to ensure your success. Join our live
                classes, take mock tests, and turn your SMLE preparation into a
                winning experience!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  // marginBottom: 4,
                }}
              >
                SMLE | HAAD | DHA | NHRA | QCHP | OMSB | KMLE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "8px", sm: "12px", md: "14px", lg: "14px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#116EFA",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "10px",
                  width: { xs: "140px", sm: "200px", md: "140px" },
                  height: { xs: "48px", sm: "48px", lg: "48px" },
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                  p: "20px 10px",
                  flexGrow: 1,
                }}
                //   onClick={() => navigate("/downloadapp")}
              >
                Join Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#FFFFFF",
                  borderColor: "#1CFFDC",
                  textTransform: "none",
                  borderRadius: "10px",
                  width: { xs: "140px", sm: "200px", md: "200px" },
                  height: { xs: "48px", sm: "48px", lg: "48px" },
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                  p: "20px 10px",
                }}
                //   onClick={() => navigate("/videoModal")}
              >
                Chat With Us
              </Button>
            </Box>
          </Box>
          backgroundSize: "cover", // Adjust how the image is sized
          backgroundRepeat: "no-repeat", // Prevent tiling
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            alignItems: "center",
            flexWrap: "wrap",
            mb: { xs: 2, sm: 4, md: 6 },
            mr: { xs: 2, sm: 4, md: 8 },
            ml: { xs: 2, sm: 4, md: 8 },
            gap: { xs: "50px", sm: "50px", md: "0px", lg: "0px" },
            height: "75%",
          }}
        >
          {/* left section */}
          <Box
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: {
                md: "flex-start",
                lg: "flex-start",
                sm: "center",
                xs: "center",
              },
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              gap: { lg: "20px", md: "15px", sm: "40px", xs: "32px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "26px", md: "26px", lg: "28px" },
                  fontWeight: { xs: 600, sm: 600, md: 700, lg: 700 },
                  color: "#FFFFFF",
                }}
              >
                QONQUER SMILE WITH
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  //   fontSize:{xs:"18px", sm:"26px",md:"26px",lg:"50px"},
                  fontWeight: { xs: 600, sm: 600, md: 700, lg: 700 },
                  color: "#FFFFFF",
                }}
              >
                SMLEGUIDE!
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                // alignItems:"center",
                width: { xs: "100%", sm: "70%", md: "100%", lg: "100%" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  // marginBottom: 4,
                }}
              >
                Get expert mentorship from Dr. Salman Rasheed and real
                exam-focused strategies to ensure your success. Join our live
                classes, take mock tests, and turn your SMLE preparation into a
                winning experience!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  // marginBottom: 4,
                }}
              >
                SMLE | HAAD | DHA | NHRA | QCHP | OMSB | KMLE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "8px", sm: "12px", md: "14px", lg: "14px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#116EFA",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "10px",
                  width: { xs: "140px", sm: "200px", md: "140px" },
                  height: { xs: "48px", sm: "48px", lg: "48px" },
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                  p: "20px 10px",
                  flexGrow: 1,
                }}
                //   onClick={() => navigate("/downloadapp")}
              >
                Join Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#FFFFFF",
                  borderColor: "#1CFFDC",
                  textTransform: "none",
                  borderRadius: "10px",
                  width: { xs: "140px", sm: "200px", md: "200px" },
                  height: { xs: "48px", sm: "48px", lg: "48px" },
                  fontSize: { xs: "16px", sm: "18px", md: "24px" },
                  p: "20px 10px",
                }}
                //   onClick={() => navigate("/videoModal")}
              >
                Chat With Us
              </Button>
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            item
            xs={12}
            md={6}
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box
              component="img"
              src="/hero-img.png"
              alt="Hero Image"
              sx={{
                width: "100%",
                height: { lg: "450px", md: "330px", sm: "400px", xs: "250px" },
              }}
            />
          </Box>
        </Box>
        <StatsSection />
      </Box>
    </>
  );
};

export default HeroSection;
