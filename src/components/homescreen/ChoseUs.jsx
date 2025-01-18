import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { styled } from "@mui/material/styles";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent", // Transparent background
  color: "#FAFAFA", // White text
  boxShadow: "none", // No shadow
  "&:before": {
    display: "none", // Remove the divider line
  },
  "&.Mui-expanded": {
    margin: 0, // Prevent spacing on expand
  },
  "& .MuiAccordionSummary-root": {
    "&.Mui-expanded": {
      minHeight: "unset", // Adjust to fit content
    },
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background:
    "linear-gradient(to right, rgba(173, 216, 230, 0.6), rgba(255, 255, 255, 0.6))", // Gradient background
  borderRadius: "8px", // Rounded corners
  minHeight: "40px",
  maxHeight: "40px",
  // padding: "8px", // Padding for header
  "& .MuiTypography-root": {
    fontSize: "18px", // Adjust heading font size
    fontWeight: 600, // Bold heading text
  },
  "&.Mui-expanded": {
    borderRadius: "8px 8px 0 0", // Top corners rounded when expanded
    maxHeight: "40px",
    minHeight: "40px",
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: "rgba(173, 216, 230, 0.2)", // Slightly tinted background for details
  padding: "4px 8px", // Padding for details with a small gap
  borderRadius: "0 0 8px 8px", // Rounded bottom corners
  // marginTop: "4px", // Gap between header and details
  "& .MuiTypography-root": {
    fontSize: "16px", // Adjust description font size
    lineHeight: 1.5, // Improve readability
  },
}));

const ChoseUs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mr: { xs: 2, sm: 4, md: 8 },
        ml: { xs: 2, sm: 4, md: 8 },
        height: "650px",
        // border: "2px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-between",
          // alignItems: "center",
          gap: "30px",
          bgcolor: "#116EFA",
          height: "75%",
          borderRadius: "20px",
          // border: "2px solid black",
          flexGrow: 1,
          // mb:"40px"
        }}
      >
      {/* left section */}
        <Box
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", sm: "column", md: "" },
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "10px",
            // border: "2px solid red",
            width: "50%",
            p: "10px",

            // alignItems: { xs: "flex-start", md: "center" },
            // gap: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              // marginBottom: "30px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                "&::before": {
                  content: '""',
                  display: "block",
                  height: "2px",
                  width: "50px",
                  backgroundColor: "#FFFFFF",
                  marginRight: "8px",
                },
              }}
            >
              Why Chose Us
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "32px", sm: "40px", lg: "40px" },
                fontFamily: "Roboto",
                color: "#FFFFFF",
              }}
            >
              Why You Choose SMLE <br /> Guide Services?
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto",
              color: "#FFFFFF",
              // marginBottom: 4,
            }}
          >
            Unlock your full potential with SMLE GUIDE – your ultimate companion
            for SMLE success! Here’s why we are the top choice for aspiring
            medical professionals
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1, // Space between accordions
            }}
          >
            <CustomAccordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <CustomAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>01. Comprehensive Subject Notes</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <Typography>
                  We handle the Dataflow verification process to ensure your
                  credentials are validated correctly.
                </Typography>
              </CustomAccordionDetails>
            </CustomAccordion>

            <CustomAccordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <CustomAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>02. Header</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </CustomAccordionDetails>
            </CustomAccordion>

            <CustomAccordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <CustomAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>03. Header</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </CustomAccordionDetails>
            </CustomAccordion>
            <CustomAccordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <CustomAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography>04. Header</Typography>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </CustomAccordionDetails>
            </CustomAccordion>
          </Box>
        </Box>
        {/* right section */}
        <Box
          item
          xs={12}
          md={6}
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            // border: "2px solid black",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              marginTop: "42px",
            }}
            src="card1.png"
            alt="image"
            srcset=""
          />
          {/* <Box
            component="img"
            src="/card1.png"
            alt="About Image"
            sx={{
              width: "100%",
            //   height: { lg: "450px", md: "330px", sm: "400px", xs: "250px" },
            height:"auto"
            }}
          /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ChoseUs;
