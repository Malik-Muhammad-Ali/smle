import React from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  IconButton,
  Grid2,
} from "@mui/material";
import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";

const Login = () => {
  return (
    <Grid2
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: {
          xs: "40px", // Padding for mobile screens
          sm: "20px", // Padding for tablets (small screens)
          md: "20px", // Padding for larger screens
        },
      }}
    >
      <Box
        maxWidth="sm"
        sx={{
          border: "1px solid #E0E0E0",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          p: {
            xs: "40px", // Padding for mobile screens
            sm: "20px", // Padding for tablets (small screens)
            md: "20px", // Padding for larger screens
          },
          mt: 5,
          //   mb: "30px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Login to your account
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            sx={{
              mb: 2,
              backgroundColor: "#f5f5f5", // Light grey background
              borderRadius: "15px", // Rounded corners for a smoother look
              "& .MuiOutlinedInput-root": {
                // Remove all borders
                "& fieldset": {
                  border: "none", // No border
                },
                "&:hover fieldset": {
                  border: "none", // Ensure no border on hover
                },
                "&.Mui-focused fieldset": {
                  border: "none", // No border on focus
                },
              },
              "& .MuiInputBase-input": {
                // Text input color remains default
                color: "#333", // Dark text color
              },
              "& .MuiFormLabel-root": {
                // Label color
                color: "#666", // Light grey label color
              },
              "&:hover .MuiFormLabel-root": {
                color: "#116EFA", // Label color on hover (blue)
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            sx={{
              mb: 3,
              backgroundColor: "#f5f5f5", // Light grey background
              borderRadius: "15px", // Rounded corners
              "& .MuiOutlinedInput-root": {
                // Remove all borders
                "& fieldset": {
                  border: "none", // No border
                },
                "&:hover fieldset": {
                  border: "none", // Ensure no border on hover
                },
                "&.Mui-focused fieldset": {
                  border: "none", // No border on focus
                },
              },
              "& .MuiInputBase-input": {
                // Text input color remains default
                color: "#333", // Dark text color
              },
              "& .MuiFormLabel-root": {
                // Label color
                color: "#666", // Light grey label color
              },
              "&:hover .MuiFormLabel-root": {
                color: "#116EFA", // Label turns blue on hover
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#116EFA",
              width: "300px",
              color: "#FFF",
              textTransform: "none",
              fontSize: "16px",
              borderRadius: "10px",
              py: 1.2,
              mb: 2,
              "&:hover": {
                bgcolor: "#0056b3",
              },
            }}
          >
            Login
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            alignItems: "center", // Center the content vertically
            backgroundColor: "#f5f5f5", // Grey background
            borderRadius: "50%", // Circle shape
            width: "40px", // Circle size
            height: "40px", // Circle size
            textAlign: "center", // Ensure text is centered inside the circle
            mx: "auto", // Center the circle horizontally
            my: 3, // Vertical margin for spacing
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#787878" }}
          >
            OR
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ mb: 1, color: "#116efa" }}>
          <Link href="#" underline="hover">
            Forgot your password?
          </Link>
        </Typography>

        <Typography variant="body2">
          Don’t have an account?{" "}
          <Link href="#" underline="hover" sx={{ color: "#116efa" }}>
            Signup
          </Link>
        </Typography>

        <Box
          sx={{
            // marginTop: "20px",
            display: "flex",
            justifyContent: { xs: "center", md: "center" },
            gap: "10px",
            mt: "30px",
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
  );
};

export default Login;
