import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
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
  ];

  return (
    <Box
      sx={{
        padding: { lg: "50px", md: "50px", sm: "30px", xs: "25px" }, // Equal padding from all sides
        borderRadius: "20px",
        backgroundColor: "white",
        // display: "flex",
        // alignItems: "center",
        // justifyCOtent: "center",
        // flexDirection: "column",
        maxWidth: "auto",
        // margin: "0 auto",
      }}
    >
      {/* Section Heading */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            color: "#116EFA",
            fontFamily: "Roboto",
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            "&::before": {
              content: '""',
              display: "block",
              height: "2px",
              width: "50px",
              backgroundColor: "#116EFA",
              marginRight: "8px",
            },
          }}
        >
          Testimonials
        </Typography>
      </Box>

      {/* Title Section */}
      <Typography
        sx={{ color: "#191919", fontWeight: "700", fontSize: "32px", mb: 2 }}
      >
        Our Super Heroes (Doctors) Feedback After Passing SMLE
      </Typography>

      {/* Description Section */}
      <Typography
        sx={{
          color: "#777777",
          fontSize: "18px",
          fontWeight: "500",
          mb: 4,
        }}
      >
        Proactively revolutionize granular customer service after pandemic
        internal or "organic" sources instinctively impact proactive human
      </Typography>

      {/* Rating Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            lg: "space-between",
            md: "space-around",
            xs: "start",
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
          See All
        </Button>
      </Box>

      {/* Testimonial Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
          gap: "20px",
        }}
      >
        {testimonialsData.map((testimonial, index) => (
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "30px",
        }}
      >
        <Button
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
          See All
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials;
