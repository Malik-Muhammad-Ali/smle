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
} from "@mui/material";
import {
  Apps as AppsIcon,
  Menu as DrawerIcon,
  ArrowDownward as DownwardIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

const CourseComponent = () => {
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
            Courses
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
            0 Courses
          </Button>
        </Box>

        <Paper
          elevation={3}
          sx={{
            mt: 4,
            width: "100%",
            height: { lg: "100px", md: "100px", sm: "auto", xs: "auto" },
            padding: isSmallScreen ? 2 : 3,
            display: "flex",
            alignItems: "center",
            // gap: "20px",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              padding: 2,
            }}
          >
            <AppsIcon />
            <DrawerIcon />

            {[...Array(4)].map((_, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6">Upcoming</Typography>
                <Switch color="primary" />
              </Box>
            ))}

            <Box
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "16px",
                padding: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid black",
              }}
            >
              <DownwardIcon />
              <Typography variant="h6">Newest</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "start",
          justifyContent: "start",
          padding: isSmallScreen ? 3 : 6,
          gap: 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search Courses"
          sx={{ width: "250px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" color="primary" size="small">
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />

        <Paper sx={{ width: "30%", padding: 3, borderRadius: "10px" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", width: "100%", mb: 2 }}
          >
            Type
          </Typography>

          {Array.from({ length: 4 }, (_, i) => (
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
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "row-reverse",
          alignItems: "start",
          justifyContent: "start",
          paddingLeft: isSmallScreen ? 3 : 6,
          paddingBottom: isSmallScreen ? 3 : 6,
          gap: 3,
        }}
      >
        <Paper sx={{ width: "30%", padding: 3, borderRadius: "10px" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", width: "100%", mb: 2 }}
          >
            Type
          </Typography>

          {Array.from({ length: 4 }, (_, i) => (
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
    </>
  );
};

export default CourseComponent;
