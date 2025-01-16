import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, FormControl, InputLabel, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
// import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Drawer from "@mui/material/Drawer";
import Logo from "../../../public/nav-logo.svg";
// import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import EastIcon from "@mui/icons-material/East";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const src = "";

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Component
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "white",
        maxWidth: "100vw",
        minHeight: "100px",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-between",
                md: "space-between",
                lg: "start",
                sm: "space-between",
              },
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src={Logo} alt="logo" />
          </Box>

          {/* Display elements on large screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", sm: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: "10px", sm: "10px", md: "30px", lg: "30px" },
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap:"20px",
                width: "70%",
              }}
            >
              {/* Pages */}
              <Link to="/">
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  Home
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  About
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  Services
                  {/* {language === 'en' ? 'Subscriptions' : 'الاشتراكات'} */}
                </Button>
              </Link>
              <Link to="/reviews">
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "black",
                  }}
                >
                  Reviews
                  {/* {language === 'en' ? 'Subscriptions' : 'الاشتراكات'} */}
                </Button>
              </Link>
            </Box>
            <Box sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:"100%",
              height:"50px"
            }}>
            <Button
              variant="contained"
              endIcon={<EastIcon />}
              sx={{
                bgcolor: "#116EFA",
                borderRadius: "10px",
                width:"150px",
                // height:"100%"
              }}
            >
              Enroll Now
            </Button>
            </Box>
          </Box>

          {/* Menu Icon for Small Screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              color="inherit"
              sx={{
                backgroundColor: "black",
                borderRadius: "20%",
                padding: "8px",
                border: "2px solid white",
                ml: "10px",
              }}
            >
              <MenuIcon sx={{ color: "white" }} />{" "}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{
            minWidth: 250,
            maxWidth: 280,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            // direction: language === "ar" ? "rtl" : "ltr", // Adjust direction based on language
            gap: 2,
            height: "100%",
          }}
        >
          <Link to="/">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: location.pathname === "/" ? "#CE2729" : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              Home
              {/* {language === "en" ? "Home" : "الرئيسية"} */}
            </Button>
          </Link>
          <Link to="/">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: location.pathname === "/" ? "#CE2729" : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              About
              {/* {language === "en" ? "Features" : "الميزات"} */}
            </Button>
          </Link>
          <Link to="/">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: location.pathname === "/" ? "#CE2729" : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              Our Services
              {/* {language === "en" ? "Subscriptions" : "الاشتراكات"} */}
            </Button>
          </Link>
          <Link to="/">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: location.pathname === "/" ? "#CE2729" : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              Reviews
              {/* {language === "en" ? "Subscriptions" : "الاشتراكات"} */}
            </Button>
          </Link>
          <Button
            variant="contained"
            endIcon={<EastIcon />}
            sx={{
              bgcolor: "#116EFA",
              borderRadius: "10px",
            }}
          >
            Enroll Now
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
