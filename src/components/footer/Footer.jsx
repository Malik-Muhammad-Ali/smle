import {
  Box,
  Typography,
  IconButton,
  Grid2,
  InputAdornment,
  FormControl,
  OutlinedInput,
} from "@mui/material";
// import Grid2 from "@mui/material/Grid2";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  ArrowForward,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "20px 40px",
      }}
    >
      <Grid2
        container
        spacing={2}
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="space-between"
      >
        {/* Left Section */}
        <Grid2
          container
          item
          xs={12}
          md={6}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: { lg: "300px", md: "300px", sm: "300px", xs: "100%" },
          }}
        >
          <Box
            textAlign={{ xs: "center", md: "center" }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              //   gap: "10px", // Reduced gap between elements in the column
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: "110px",
                background: "white",
                height: "110px",
              }}
            >
              <Box
                component="img"
                src="smlelogo1.png"
                alt="Smile Guide Logo"
                sx={{
                  width: "120px",
                  //   marginBottom: "15px",
                }}
              />
            </Box>
            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                // marginBottom: "10px",
              }}
            >
              Get Deals and Discounts
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Subscribe to our newsletter
            </Typography>
            {/* Subscription */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                position: "relative",
              }}
            >
              <FormControl
                sx={{
                  m: 1,
                  width: "35ch", // Increased width for a larger TextField
                  backgroundColor: "white",
                  borderRadius: "40px",
                  boxShadow: "none",
                }}
              >
                <OutlinedInput
                  id="outlined-adornment-email"
                  placeholder="Email" // Only placeholder here
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        sx={{
                          backgroundColor: "black",
                          borderRadius: "40px",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <ArrowForward sx={{ color: "white" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{
                    borderRadius: "40px",
                    border: "1px solid #1976d2", // Outline border color
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove the default outline border
                    },
                    "& .MuiInputBase-input": {
                      padding: "16px", // Larger padding for bigger TextField
                      fontSize: "1.1rem", // Adjust font size for larger TextField
                    },
                  }}
                />
              </FormControl>
            </Box>
            {/* Social Media */}
            <Box
              sx={{
                // marginTop: "20px",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: "10px",
              }}
            >
              {[Instagram, Facebook, Twitter, YouTube].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#007bff",
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "#f8d7da",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid2>

        {/* Right Section */}
        <Grid2
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
              alignItems: { xs: "center", md: "flex-start" }, // Center alignment on mobile
              justifyContent: "space-between",
              //   border: "2px solid black",
              gap: "20px", // Smaller gap for mobile
              padding: "20px",
              width: "100%",
            }}
          >
            {/* Legal Section */}
            <Box
              sx={{
                // border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                padding: "15px",
                width: { xs: "100%", md: "45%" }, // Full width on mobile, 45% on larger screens
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "15px" }}
              >
                Legal
              </Typography>
              <ul
                style={{
                  listStyle: "disc", // Adds bullets to list items
                  paddingLeft: "20px", // Adds left-side gap for bullets
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px", // Adds gap between list items
                  color: "white", // Makes bullets white
                }}
              >
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Privacy Policy</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Refund Policy</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Terms & Conditions</Typography>
                </li>
              </ul>
            </Box>
            {/* Page Navigation */}
            <Box
              sx={{
                // border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                padding: "15px",
                width: { xs: "100%", md: "45%" }, // Full width on mobile, 45% on larger screens
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "15px" }}
              >
                Page Navigations
              </Typography>
              <ul
                style={{
                  listStyle: "disc", // Adds bullets to list items
                  paddingLeft: "20px", // Adds left-side gap for bullets
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px", // Adds gap between list items
                  color: "white", // Makes bullets white
                }}
              >
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Home</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2" onClick={()=>navigate("/Aboutus")}>About Us</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2" onClick={()=>navigate("/courses")}>Our Services</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Our Team</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Reviews</Typography>
                </li>
                <li style={{cursor:"pointer"}}>
                  <Typography variant="body2">Contact Us</Typography>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          display: { md: "flex", xs: "none" },
          marginTop: "20px",
          borderTop: "1px solid #fff",
          paddingTop: "10px",
          width: "100%",
        }}
      >
        <Box sx={{ width: "45%" }}>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            © Copyright Team Inc.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            // border: "2px solid black",
            display: { md: "flex", xs: "none" },
            gap: "70px",
          }}
        >
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Terms
          </Typography>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Legal Notice
          </Typography>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Accessibility
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
