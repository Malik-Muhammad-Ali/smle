import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

const OurTeam = () => {
  const teamData = [
    {
      image: "sirsalman.png",
      name: "Dr. Salman Rasheed",
      designation: "educational Consultant",
      workplace: "Founder of SMLEGuide",
    },
    {
      image: "Draleesha.png",
      name: "Dr. Aleesha",
      designation: "Resident in Cardiology",
      workplace: "Pediatric Teacher at SMLEGuide",
    },
    {
      image: "drmuhammadali.png",
      name: "Dr. Muhammad Ali",
      designation: "General Physician",
      workplace: "Surgery Teacher at SMLEGuide",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { md: "30px", sm: "30px", lg: "40px", xs: "25px" },
        margin: "20px",
        borderRadius: "20px",
        // backgroundColor: "white",
      }}
    >
      {/* Our Team Heading Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          textAlign: "start",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            color: "#191919",
            fontFamily: "Roboto",
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            "&::before": {
              content: '""',
              display: "block",
              height: "2px",
              width: "50px",
              backgroundColor: "#191919",
              marginRight: "8px",
            },
          }}
        >
          OUR TEAM
        </Typography>
      </Box>

      {/* Title Section */}
      <Box
        sx={{
          textAlign: "start",
          marginBottom: "20px",
        }}
      >
        <Typography
          sx={{ color: "#116EFA", fontWeight: "700", fontSize: "40px" }}
        >
          SMLEGuide Dedicated Team
        </Typography>
      </Box>

      {/* Description Section */}
      <Box
        sx={{
          textAlign: "start",
          //   maxWidth: "800px",
          margin: "0 auto 40px",
        }}
      >
        <Typography
          sx={{
            color: "#777777",
            fontSize: "22px",
            textAlign: "start",
            fontWeight: "500",
          }}
        >
          Collaboratively administrate empowered markets via plug-and-play
          networks.
          <br /> Dynamically procrastinate B2C users after installed base
          benefits.
        </Typography>
      </Box>

      {/* Cards Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          //   padding: "20px",
          justifyContent: "center",
        }}
      >
        {teamData.map((member, index) => (
          <Card
            key={index}
            sx={{
              //   border: "1px solid grey",
              borderRadius: "20px",
              backgroundColor: "#D6E6FF",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              padding: "20px",
              transition: "transform 0.3s",
              //   "&:hover": {
              //     transform: "scale(1.05)",
              //   },
            }}
          >
            <CardMedia
              component="img"
              image={member.image}
              alt={member.name}
              sx={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                margin: "0 auto 20px",
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {member.designation}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#777", marginBottom: "10px" }}
              >
                {member.workplace}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#116EFA",
                  borderColor: "#116EFA",
                  backgroundColor: "white",
                  fontWeight: "500",
                  borderRadius: "50px",
                  padding: "5px 20px",
                  //   "&:hover": {
                  //     backgroundColor: "rgba(17, 110, 250, 0.1)",
                  //     borderColor: "#116EFA",
                  //   },
                }}
              >
                Educational Consultant
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  );
};

export default OurTeam;
