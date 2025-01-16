import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const LandingServices = () => {
  const cardData = [
    {
      image: "card2.png",
      title: "Dataflow Verification for SCFHS (Saudi Arabia)",
      description:
        "We handle the Dataflow verification process to ensure your credentials are validated correctly.",
    },
    {
      image: "card3.png",
      title: "Mumaris+ Application & Eligibility Support",
      description:
        "We handle the Dataflow verification process to ensure your credentials are validated correctly.",
    },
    {
      image: "card4.png",
      title: "Dataflow Verification for SCFHS (Saudi Arabia)",
      description:
        "We handle the Dataflow verification process to ensure your credentials are validated correctly.",
    },
    {
      image: "card5.png",
      title: "Dataflow Verification for SCFHS (Saudi Arabia)",
      description:
        "We handle the Dataflow verification process to ensure your credentials are validated correctly.",
    },
    {
      image: "card6.png",
      title: "Dataflow Verification for SCFHS (Saudi Arabia)",
      description:
        "We handle the Dataflow verification process to ensure your credentials are validated correctly.",
    },
    {
      image: "card7.png",
      title: "Dataflow Verification for SCFHS (Saudi Arabia)",
      description:
        "We handle the Dataflow verification process to ensure your credentials are validated correctly.",
    },
  ];

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: { lg: "14px", xs: "25px", md: "30px", sm: "30px" },
      }}
    >
      <Box
        sx={
          {
            // padding: { xs: "40px", sm: "30px", md: "30px", lg: "30px" },
            //   border: "2px solid blue",
          }
        }
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
          Services
        </Typography>
      </Box>
      <Box
        sx={{
          //   border: "2px solid pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ color: "#116EFA", fontWeight: "700", fontSize: "60px" }}
        >
          SERVICES
        </Typography>
        <Typography
          sx={{
            color: "#777777",
            fontSize: "22px",
            fontWeight: "500",
            textAlign: { md: "center", xs: "start" },
            p: "20px",
          }}
        >
          Proactively revolutionize granular customer service after pandemic
          internal or "organic" sources instinctively impact proactive human.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "40px",
          padding: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: "400px",
              border: "1px solid grey",
              borderRadius: "40px",
              gap: "10px",
              height: "430px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              m: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                background: "#116EFA", // Darker blue on hover
                color: "white", // Change text color to white
              },
              "&:hover .card-title, &:hover .card-description, &:hover .read-more-button":
                {
                  color: "white", // Ensure all text turns white
                },
              "&:hover .read-more-button": {
                borderColor: "white", // Change button border color to white on hover
              },
            }}
          >
            {/* Picture Section */}
            <CardMedia
              component="img"
              //   height="200"
              //   width="200"
              image={card.image}
              alt="Card Image"
              sx={{
                paddingTop: "10px",
                objectFit: "contain",
                width: 400,
                // alignSelf: "center",
                height: "195px",
              }}
            />

            {/* Content Section */}
            <CardContent sx={{ flex: 1, padding: "20px" }}>
              {/* Heading */}
              <Typography
                className="card-title"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#191919",
                  fontFamily: "Roboto",
                  transition: "color 0.3s",
                }}
              >
                {card.title}
              </Typography>

              {/* Description */}
              <Typography
                className="card-description"
                variant="body2"
                sx={{
                  color: "#777777",
                  marginBottom: "20px",
                  fontFamily: "Roboto",
                  transition: "color 0.3s",
                }}
              >
                {card.description}
              </Typography>

              {/* Read More Button */}
              <Box sx={{ textAlign: "center" }}>
                <Button
                  className="read-more-button"
                  variant="outlined"
                  sx={{
                    backgroundColor: "transparent", // Transparent background
                    color: "#116EFA", // Blue text color
                    textTransform: "none", // Disable uppercase transformation
                    border: "1px solid #116EFA", // Explicit blue border
                    borderRadius: "10px", // Rounded corners
                    transition:
                      "background-color 0.3s, color 0.3s, border-color 0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(17, 110, 250, 0.1)", // Slight blue tint on hover
                      borderColor: "#116EFA",
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          className="read-more-button"
          variant="outlined"
          sx={{
            backgroundColor: "#116EFA", // Transparent background
            width: "285px",
            color: "white",
            fontSize: "24px",
            textAlign: "center",
            height: "63px",
            mb: "20px",
            textTransform: "none", // Disable uppercase transformation
            borderRadius: "10px", // Rounded corners
            transition: "background-color 0.3s, color 0.3s",
          }}
          endIcon={<ArrowForwardIcon />}
        >
          View All Services
        </Button>{" "}
      </Box>
    </Box>
  );
};

export default LandingServices;
