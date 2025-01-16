import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
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
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography
            sx={{ fontWeight: "700", fontSize: "28px", color: "#222" }}
          >
            4.5
            <StarIcon
              sx={{ color: "#FFC107", fontSize: "28px", marginLeft: "5px" }}
            />
          </Typography>
          <Typography sx={{ color: "#555", fontSize: "14px" }}>
            653 reviews
          </Typography>
        </Box>

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
            xs: "1fr", // Single column for small screens
            sm: "repeat(2, 1fr)", // Two columns for medium screens
            md: "repeat(3, 1fr)", // Three columns for large screens
          },
          gap: "20px",
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "20px",
              minWidth: { lg: "400px", sm: "400px", md: "400px", xs: "300px" },
              maxWidth: "auto",
              maxHeight: "auto",
              minHeight: "400px",
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
                // padding: "10px 20px", // Reduce padding to minimize space
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
    </Box>
  );
};

export default Testimonials;
