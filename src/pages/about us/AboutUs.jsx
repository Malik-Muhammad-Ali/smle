import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useState } from "react";

const AboutUs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const ratingsData = [
    { digit: 5, value: 80 }, // 80% for 5 stars
    { digit: 4, value: 60 }, // 60% for 4 stars
    { digit: 3, value: 40 }, // 40% for 3 stars
    { digit: 2, value: 20 }, // 20% for 2 stars
    { digit: 1, value: 10 }, // 10% for 1 star
  ];

  const testimonialsData = [
    {
      image: "sirsalman.png",
      name: "Jan Stiedemann",
      role: "Global Applications Representative",
      feedback:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "sirsalman.png",
      name: "Jane Doe",
      role: "Global Applications Representative",
      feedback:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "sirsalman.png",
      name: "John Smith",
      role: "Global Applications Representative",
      feedback:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "sirsalman.png",
      name: "John Smith",
      role: "Global Applications Representative",
      feedback:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "sirsalman.png",
      name: "John Smith",
      role: "Global Applications Representative",
      feedback:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      image: "sirsalman.png",
      name: "John Smith",
      role: "Global Applications Representative",
      feedback:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ];

  const teamMembers = [
    {
      image: "m1.png",
      name: "Sir Salman",
      designation: "Founder of SMLEGuide Academy & Educational Consultant",
      qualifications: [
        "M.B.B.S (CN) MRCP 1 (UK)",
        "ER Resident (FY2) (KSA)",
        "Licensed by PMDC, SMLE, DHA",
      ],
      details:
        "With a deep passion for medical education and a track record of student success, Dr. Salman Rasheed combines his expertise and experience to help students excel in their medical licensing exams. His personalized teaching approach ensures that complex topics are made simple and understandable",
    },
    {
      image: "m2.png",
      name: "Dr.Saeed Amjad",
      designation: "Founder of SMLEGuide Academy & Educational Consultant",
      qualifications: ["Software Engineer", "Karachi rider", "Chapri Pro"],
      details:
        "With a deep passion for medical education and a track record of student success, Dr. Salman Rasheed combines his expertise and experience to help students excel in their medical licensing exams. His personalized teaching approach ensures that complex topics are made simple and understandable",
    },
    {
      image: "m3.png",
      name: "Dr.Fatima Khalid",
      designation: "React Intern",
      qualifications: [
        "D.A.E Electrical",
        "Software Engineer",
        "Part Time Engineer",
      ],
      details:
        "With a deep passion for medical education and a track record of student success, Dr. Salman Rasheed combines his expertise and experience to help students excel in their medical licensing exams. His personalized teaching approach ensures that complex topics are made simple and understandable",
    },
    {
      image: "m4.png",
      name: "Dr.Muhammad Ali",
      designation: "Founder of SMLEGuide Academy & Educational Consultant",
      qualifications: [
        "M.B.B.S (CN) MRCP 1 (UK)",
        "ER Resident (FY2) (KSA)",
        "Licensed by PMDC, SMLE, DHA",
      ],
      details:
        "With a deep passion for medical education and a track record of student success, Dr. Salman Rasheed combines his expertise and experience to help students excel in their medical licensing exams. His personalized teaching approach ensures that complex topics are made simple and understandable",
    },
    {
      image: "m5.png",
      name: "Dr.Aleesha",
      designation: "Founder of SMLEGuide Academy & Educational Consultant",
      qualifications: [
        "M.B.B.S (CN) MRCP 1 (UK)",
        "ER Resident (FY2) (KSA)",
        "Licensed by PMDC, SMLE, DHA",
      ],
      details:
        "With a deep passion for medical education and a track record of student success, Dr. Salman Rasheed combines his expertise and experience to help students excel in their medical licensing exams. His personalized teaching approach ensures that complex topics are made simple and understandable",
    },
  ];

  const selectedMember = teamMembers[selectedIndex];

  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonialsData
    : testimonialsData.slice(0, 3);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isSmallScreen ? 3 : 6,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "70vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(smlecourses.png)",
            backgroundSize: "cover",
            borderRadius: "20px",
            backgroundPosition: "center",
            padding: isSmallScreen ? 3 : 6,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "20px",
            },
          }}
        >
          <Typography
            variant={isSmallScreen ? "h5" : "h2"}
            sx={{
              position: "relative",
              color: "white",
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            SMLE Guide Dedicated
          </Typography>
          <Typography
            variant={isSmallScreen ? "h5" : "h2"}
            sx={{
              position: "relative",
              color: "white",
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Team
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          mr: { xs: 1, sm: 4, md: 8 },
          ml: { xs: 1, sm: 4, md: 8 },
        }}
      >
        {/* our team */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            gap: { xs: "20px", md: "40px" },
            // width:300,
            height: "auto",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="#116EFA">
            OUR TEAM
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-around",
              overflowX: "scroll",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              gap: { xs: "30px", md: "unset" },
              width: "100%",
              height: "100%",
            }}
          >
            {teamMembers.map((member, index) => (
              <Stack
                key={index}
                onClick={() => setSelectedIndex(index)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 100, // Adjust as needed
                    height: 100, // Ensure the container is square
                    border:
                      index === selectedIndex ? "3px solid #116EFA" : "none",
                    borderRadius: "50%", // Makes the container circular
                    overflow: "hidden", // Ensures the image doesn't overflow outside the circle
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "", // Ensures the image fills the container proportionally
                      borderRadius: "50%", // Ensures the image is also circular
                    }}
                    src={member.image}
                    alt={member.name}
                  />
                </Box>

                <Typography
                  color={index === selectedIndex ? "#116EFA" : "black"}
                  fontWeight="bold"
                >
                  {member.name}
                </Typography>
              </Stack>
            ))}
          </Box>
          <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {teamMembers.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              display: { lg: "none", md: "none", xs: "flex", sm: "none" },
              backgroundColor:
                index === selectedIndex ? "#116EFA" : "#ddd",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
        </Box>

        {/* Details */}
        <Box
          sx={{
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
              },
              p: 2,
              borderRadius: 2,
              boxShadow: "none",
              //   border:"2px solid black"
            }}
          >
            <Avatar
              src={selectedMember.image}
              alt={selectedMember.name}
              sx={{
                width: { lg: 300, md: 300, sm: 200, xs: 200 },
                height: { lg: 300, md: 300, sm: 200, xs: 200 },
                mr: { lg: 3, md: 3, sm: 2, xs: 1 },
                border: "3px solid #116EFA",
              }}
            />
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#116EFA"
                disableGutters
                sx={{display:"flex",alignSelf:"center",justifySelf:{xs:"center",sm:"flex-start"}}}
              >
                {selectedMember.name}
              </Typography>
              <Typography variant="body1" color="text.primary" gutterBottom>
                {selectedMember.designation}
              </Typography>
              <Typography variant="body1" color="text.primary" disableGutters>
                Qualificatios
              </Typography>
              <List dense sx={{ ml: "20px" }} disablePadding disableGutters>
                {selectedMember.qualifications.map((qualification, index) => (
                  <ListItem key={index} disableGutters disablePadding>
                    <ListItemText primary={`• ${qualification}`} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="body1" color="text.primary" disableGutters>
                Further Details
              </Typography>
              <Typography variant="body2" gutterBottom>
                {selectedMember.details}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Rating Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              lg: "space-between",
              md: "space-around",
              xs: "center",
            },
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: { xs: "300px", sm: "350px", md: "414px" },
              height: { xs: "160px", sm: "180px", md: "135px" },
              p: 2,
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "row", // Main layout direction is row
              gap: 2,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Box 1: Rating and Reviews */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 1000,
                  fontSize: { xs: "24px", md: "45px" },
                  color: "black",
                }}
              >
                4.5
              </Typography>

              <Box
                sx={{
                  backgroundColor: "#000",
                  color: "#FFF",
                  borderRadius: "15px",
                  px: 2,
                  py: 0.5,
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                653 reviews
              </Box>
            </Box>

            {/* Box 2: Big Star */}
            <Box>
              <StarIcon
                sx={{
                  fontSize: { xs: "30px", md: "50px" },
                  color: "#007BFF",
                }}
              />
            </Box>

            {/* Box 3: Digits, Stars, and Lines */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                width: "100%", // Ensures it fits within the parent
              }}
            >
              {ratingsData.map((item) => (
                <Box
                  key={item.digit}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {/* Digit */}
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#6a6a6a",
                      minWidth: "20px", // Keeps digits aligned
                    }}
                  >
                    {item.digit}
                  </Typography>

                  {/* Small Star */}
                  <StarIcon
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      color: "#116efa",
                    }}
                  />

                  {/* Line */}
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      flex: 1,
                      height: "6px",
                      borderRadius: "4px",
                      backgroundColor: "white",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#5D5DFF", // Purple
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>

          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outlined"
            sx={{
              textTransform: "none",
              // textAlign: "start",
              alignSelf: "start",
              color: "white",
              borderColor: "#116EFA",
              borderRadius: "20px",
              background: "#116EFA",
              padding: "5px 20px",
              display: { lg: "flex", md: "flex", xs: "none", sm: "none" },
            }}
          >
            {showAll ? "See Less" : "See More"}
          </Button>
        </Box>

        {/* Testimonial Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // Single column for small screens
              sm: "repeat(2, 1fr)", // Two columns for tablet screens
              md: "repeat(2, 1fr)", // Three columns for large screens
              lg: "repeat(3, 1fr)", // Three columns for large screens
            },
            gap: "20px",
          }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: "20px",
                minWidth: {
                  lg: "400px",
                  md: "400px",
                  sm: "300px", // Adjusted for tablet screens
                  xs: "280px", // Adjusted for small screens
                },
                maxWidth: "auto",
                maxHeight: "auto",
                minHeight: {
                  sm: "380px", // Adjusted for tablet screens
                  xs: "360px", // Adjusted for small screens
                },
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                padding: "40px",
                position: "relative", // For absolute positioning inside the card
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.03)", // Slight hover effect
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: 170,
                    height: 170,
                    border: "4px solid #116EFA", // Blue border
                    borderRadius: "50%", // Circular image
                    objectFit: "cover",
                    margin: "0 auto 20px", // Center align with margin
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#116EFA", // Blue background
                    width: "64px", // Increased size
                    height: "64px", // Increased size
                    borderRadius: "50%", // Circular design
                    color: "white",
                    position: "absolute", // Absolute positioning
                    top: "130px", // Slightly above the image
                    right: "calc(50% - 85px)", // Aligned to the end-right
                    transform: "translateY(-50%)", // Adjust vertical alignment
                    zIndex: 1, // Ensure visibility over other elements
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Add shadow for depth
                  }}
                >
                  <FormatQuoteIcon sx={{ fontSize: "2.5rem" }} />
                </Box>
              </Box>
              <CardContent
                sx={{
                  "&:last-child": { paddingBottom: "10px" }, // Adjust bottom padding
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#777",
                    marginBottom: "10px", // Reduce margin between elements
                    fontSize: "14px", // Slightly smaller text
                    lineHeight: "1.5", // Adjust line spacing for compactness
                  }}
                >
                  {testimonial.feedback}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border:"2px solid black"
                  }}
                >
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      bgcolor: "#116efa",
                      alignSelf: "center",
                      borderRadius: "50%",
                      mt: "10px",
                      mb: "10px",
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "5px", // Minimized space below
                    fontSize: "16px", // Smaller font size for responsiveness
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    fontSize: "12px", // Compact role text size
                  }}
                >
                  {testimonial.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "30px",
            mb: "30px",
          }}
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outlined"
            sx={{
              textTransform: "none",
              textAlign: "center",
              width: "250px",
              height: "40px",
              alignSelf: "center",
              color: "white",
              borderColor: "#116EFA",
              borderRadius: "10px",
              background: "#116EFA",
              padding: "5px 20px",
              display: { lg: "none", md: "none", xs: "flex", sm: "flex" },
            }}
          >
            {showAll ? "See Less" : "See More"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
