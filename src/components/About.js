import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Grid container>
      <Grid size={{ xs: 12, sm: 5 }} sx={{ textAlign: "center" }}>
        <Box
          component="img"
          sx={{
            width: { xs: 150, sm: 200, md: 250, lg: 280 },
            height: "auto",
            objectFit: "cover",
            margin: "5px",
          }}
          src="./img/profile-pic-min.png"
          alt="profile-picture"
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 7 }} sx={{ padding: "10px", display: "flex", alignItems: "center" }}>
        <Stack direction={"column"} spacing={1} sx={{ textAlign: { sm: "justify", xs: "center" }}}>
          <Typography sx={{ typography: { sm: "h3", xs: "h4" }}}>
            Hi, I'm <Box component="span" sx={{ fontWeight: "bold", color: "primary.main", ml: 0.5 }}>Glenville</Box>👋
          </Typography>

          <Typography sx={{ typography: { sm: "h5", xs: "h6" }, }} >
            {/* - a <Box component="span" sx={{ fontWeight: "bold", color: "primary.main", ml: 0.5 }}>Full-Stack Web Developer 💻</Box> and a <Box component="span" sx={{ fontWeight: "400", color: "primary.main", ml: 0.5 }}>gamer 🎮</Box>. */}
            —a<Box component="span" sx={{ fontWeight: "500", ml: 0.5 }}>web developer 💻</Box> and a<Box component="span" sx={{ fontWeight: "400", fontStyle: "italic", ml: 0.5 }}>gamer 🎮</Box>.
          </Typography>

          <Typography sx={{ typography: { sm: "body1", xs: "body2" }}} >
            I use modern web technologies to build high-quality, scalable, and
            efficient web applications, ensuring great performance and user
            experience. Let’s create something awesome—or just chat about your
            favorite video games!
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default About;
