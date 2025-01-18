import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const StatsSection = () => {
    const [dishes, setDishes] = useState(0);
  const [categories, setCategories] = useState(0);
  const [users, setUsers] = useState(0);

  const animateCount = (setCount, maxValue) => {
    let currentCount = 0;
    const increment = Math.ceil(maxValue / 30);

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= maxValue) {
        setCount(maxValue);
        clearInterval(interval);
      } else {
        setCount(currentCount);
      }
    }, 30);
  };

  useEffect(() => {
    animateCount(setDishes, 500);
    animateCount(setCategories, 10);
    animateCount(setUsers, 500);
  }, []);
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          color: "#116EFA",
          padding: { xs: 1, sm: 2, md: 3, lg: 4 },
          mr: { xs: 2, sm: 4, md: 8 },
          ml: { xs: 2, sm: 4, md: 8 },
          borderRadius: "16px",
          boxShadow:2
        }}
      >
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: { lg: 600, md: 500, sm: 500, xs: 500 },
              fontSize: { lg: "40px", md: "40px", sm: "30px", xs: "18px" },
            }}
          >
            {dishes}+
          </Typography>
          <Typography
            sx={{
              fontsize: { lg: "20px", md: "16px", sm: "14px", xs: "8px" },
              fontWeight: { lg: 500, md: 500, sm: 500, xs: 300 },
            }}
          >
            Students Enrolled
          </Typography>
        </Box>
        <Divider
          sx={{
            height: { lg: "80px", md: "70px", sm: "60px", xs: "50px" },
            borderWidth: "2px",
            bgcolor: "#116EFA",
          }}
        />
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: { lg: 600, md: 500, sm: 500, xs: 500 },
              fontSize: { lg: "40px", md: "40px", sm: "30px", xs: "18px" },
            }}
          >
            {categories}+
          </Typography>
          <Typography
            sx={{
              fontsize: { lg: "20px", md: "16px", sm: "14px", xs: "8px" },
              fontWeight: { lg: 500, md: 500, sm: 500, xs: 300 },
            }}
          >
            Batch Completed
          </Typography>
        </Box>
        <Divider
          sx={{
            height: { lg: "80px", md: "70px", sm: "60px", xs: "50px" },
            borderWidth: "2px",
            bgcolor: "#116EFA",
          }}
        />
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: { lg: 600, md: 500, sm: 500, xs: 500 },
              fontSize: { lg: "40px", md: "40px", sm: "30px", xs: "18px" },
            }}
          >
            {users.toLocaleString()}+
          </Typography>
          <Typography
            sx={{
              fontsize: { lg: "20px", md: "16px", sm: "14px", xs: "8px" },
              fontWeight: { lg: 500, md: 500, sm: 500, xs: 300 },
            }}
          >
            Success Stories
          </Typography>
        </Box>
      </Box>
  )
}

export default StatsSection
