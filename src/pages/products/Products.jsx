import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Switch,
  useTheme,
  useMediaQuery,
  Checkbox,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Apps as AppsIcon,
  Menu as DrawerIcon,
  ArrowDownward as DownwardIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const Products = () => {
  const [checkedState, setCheckedState] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckedState((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        {/* picture Box*/}
        <Box
          sx={{
            position: "relative",
            height: "70vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(smleproducts.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: isSmallScreen ? 3 : 6,
            borderRadius: "20px", // Apply rounded corners
            border: "5px solid white", // Add border
            overflow: "hidden", // Ensures background doesn't overflow border radius
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h2"}
            sx={{
              position: "relative",
              color: "white",
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Products
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              position: "relative",
              zIndex: 1,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            0 Products
          </Button>
        </Box>

        {/* after picture box */}
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            width: "100%",
            // height: { lg: "100px", md: "100px", sm: "auto", xs: "auto" },
            padding: isSmallScreen ? 2 : 3,
            display: "flex",
            alignItems: "center",
            borderRadius: "15px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              flexDirection: { lg: "row", md: "column" },
              width: "100%",
              gap: 2,
              paddingX: 3,
            }}
          >
            <AppsIcon />
            <DrawerIcon />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flex: 1,
                  justifyContent: "space-evenly",
                  gap: 3,
                }}
              >
                {[...Array(3)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Typography variant="h6">Upcoming</Typography>
                    <Switch color="primary" />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{ width: { lg: "auto", md: "100%", sm: "100%", xs: "100%" } }}
            >
              {" "}
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: "16px",
                  width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  border: "1px solid black",
                }}
              >
                <DownwardIcon />
                <Typography variant="h6">Sort by</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      {/* paper with textfield Box*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row-reverse", xs: "column" },
          alignItems: "start",
          width: "100%",
          justifyContent: "space-between",
          padding: isSmallScreen ? 3 : 6,
          gap: 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            flex: 1,
            width: { lg: "850px", md: "800px", xs: "100%", sm: "100%" },
          }}
          InputProps={{
            sx: {
              borderRadius: "20px",
              backgroundColor: "white",
              border: "1px solid grey",
              "& fieldset": { border: "none" },
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    backgroundColor: "#116EFA",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "18px",
                    padding: "8px 20px",
                    "&:hover": { backgroundColor: "darkblue" },
                  }}
                >
                  Find
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Paper
          sx={{
            width: { lg: "30%", xs: "100%", sm: "100%" },
            padding: 3,
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              display: "flex",
              fontWeight: "bold",
              justifySelf: "center",
              mb: 2,
              pb: 1,
              //   display: "inline-block", // Restricts underline to text width
              borderBottom: "2px solid blue", // Adds underline
            }}
          >
            Type
          </Typography>

          {Array.from({ length: 2 }, (_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6">Course Bundle</Typography>
              <Checkbox
                checked={checkedState[`checkbox${i + 1}`] || false}
                onChange={() => handleCheckboxChange(`checkbox${i + 1}`)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          ))}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "primary.main",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Filter Items
          </Button>
        </Paper>
      </Box>
      {/*  2nd paper Box*/}

      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row-reverse", xs: "row-reverse" },
          alignItems: "start",
          width: "100%",
          justifyContent: "start",
          padding: isSmallScreen ? 3 : 6,
          pt: "10px",
          pb: "20px",
          gap: 3,
        }}
      >
        <Paper
          sx={{
            width: { md: "30%", xs: "100%" },
            padding: 3,
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              display: "flex",
              justifySelf: "center",
              fontWeight: "bold",
              mb: 2,
              pb: 1,
              //   display: "inline-block", // Restricts underline to text width
              borderBottom: "2px solid blue", // Adds underline
            }}
          >
            Options
          </Typography>

          {Array.from({ length: 2 }, (_, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6">Course Bundle</Typography>
              <Checkbox
                checked={checkedState[`checkbox${i + 1}`] || false}
                onChange={() => handleCheckboxChange(`checkbox${i + 1}`)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          ))}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "primary.main",
              borderRadius: "10px",
              textTransform: "none",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Filter Items
          </Button>
        </Paper>
      </Box>
      {/* typo and textfield box */}

      <Box
        sx={{
          width: { lg: "35%", md: "35%", sm: "100%", xs: "100%" },
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          padding: isSmallScreen ? 3 : 6,
        }}
      >
        <Typography
          variant="h6"
          color="initial"
          sx={{ color: "#116EFA", fontWeight: "bold", fontSize: "30px" }}
        >
          JOIN US TODAY
        </Typography>
        <Typography sx={{ color: "#121212" }}>
          We will send the best deals and offers to your email{" "}
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter Your Email Here"
          InputProps={{
            sx: {
              borderRadius: "20px",
              width: "100%",
              backgroundColor: "white",
              border: "1px solid grey",
              "& fieldset": { border: "none" },
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    backgroundColor: "#116EFA",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "20px",
                    padding: "8px 20px",
                    "&:hover": { backgroundColor: "#116EFA" },
                  }}
                >
                  Join
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Products;
