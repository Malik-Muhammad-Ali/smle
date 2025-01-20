import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";

const Aboutus = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        mr: { xs: 2, sm: 4, md: 8 },
        ml: { xs: 2, sm: 4, md: 8 },
        mt: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: "30px",
        }}
      >
        {/* left section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: { xs: "100%", md: "40%" },
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
              About Us
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "32px", sm: "40px", lg: "48px" },
                fontFamily: "Roboto",
                color: "#191919",
              }}
            >
              Grow Your SMLE With <br /> Scalable SMLE Guide <br /> Services
              Goals!!
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              color: "#777777",
              // marginBottom: 4,
            }}
          >
            Proactively revolutionize granular customer service after pandemic
            internal or "organic" sources istinctively impact proactive human
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/public/about-checked.png"
                  alt="checked"
                  srcset=""
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto",
                    color: "#777777",
                    // marginBottom: 4,
                  }}
                >
                  Interactive Classes
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/public/about-checked.png"
                  alt="checked"
                  srcset=""
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto",
                    color: "#777777",
                    // marginBottom: 4,
                  }}
                >
                  Regular Mock Test
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/public/about-checked.png"
                  alt="checked"
                  srcset=""
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto",
                    color: "#777777",
                    // marginBottom: 4,
                  }}
                >
                  Detailed Study Guides
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/public/about-checked.png"
                  alt="checked"
                  srcset=""
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto",
                    color: "#777777",
                    // marginBottom: 4,
                  }}
                >
                  100% Success Rate
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50px",
              mt: "30px",
            }}
          >
            <Button
              variant="contained"
              endIcon={<EastIcon />}
              sx={{
                bgcolor: "#116EFA",
                borderRadius: "10px",
                width: "150px",
                p: "16px 16px",
                // height:"100%"
              }}
            >
              Know More
            </Button>
          </Box>
        </Box>
        {/* right section */}
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
            src="/about-img.png"
            alt="About Image"
            sx={{
              width: "100%",
              height: { lg: "450px", md: "330px", sm: "400px", xs: "250px" },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutus;
