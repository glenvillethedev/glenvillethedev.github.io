import React from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function Projects() {
  return (
    <Stack direction={"column"} spacing={2} alignItems={"center"}>
      {/* PROJECT1 */}
      <Paper elevation={3} sx={{ p: 2 , width: '80%'}}>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 5 }}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ my: "5px", fontWeight: "400" }}>
              Workout Tracker
            </Typography>
            <Box
              component="img"
              sx={{ 
                width: { xs: 100, sm: 150 },
                height: "auto",
                objectFit: "cover",
                margin: "5px",
                borderRadius: "50%",
              }}
              src="./img/logo-workout-tracker.png"
              alt="workout-tracker-logo"
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 7 }}
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Chip label="reactjs" color="primary" size="small" />
              <Chip label="nodejs" color="primary" size="small" />
              <Chip label="expressjs" color="primary" size="small" />
              <Chip label="mui" color="primary" size="small" />
              <Chip label="mongodb" color="primary" size="small" />
            </Stack>
            <Typography sx={{ typography: { xs: "body2", sm: "body1" }, textAlign: "justify" }}>
              This app helps users track and manage their workout routines. 
              I built this app with the goal of diving deeper into the MERN stack. 
              I created reusable React components and used React Router for smooth navigation. 
              For security, I implemented JWT authentication for API access. The UI is sleek and mobile-friendly, thanks to MUI.💪
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<GitHubIcon />}
                href="https://github.com/glenvillethedev/mern-app"
                target="_blank"
              >
                Source Code
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<LanguageIcon />}
                href="https://mern-app-frontend-six.vercel.app/login"
                target="_blank"
              >
                Visit Site
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* PROJECT2 */}
      <Paper elevation={3} sx={{ p: 2 , width: '80%'}}>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 5 }}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ my: "5px", fontWeight: "400" }}>
              Expenses Tracker
            </Typography>
            <Box
              component="img"
              sx={{
                width: { xs: 70, sm: 120 },
                height: "auto",
                objectFit: "cover",
                margin: "5px",
                borderRadius: "50%",
              }}
              src="./img/logo-expenses-tracker.png"
              alt="expenses-tracker-logo"
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 7 }}
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Chip label="c#" color="primary" size="small" />
              <Chip label="aspdotnetcore" color="primary" size="small" />
              <Chip label="bootstrap" color="primary" size="small" />
              <Chip label="sqlserver" color="primary" size="small" />
            </Stack>
            <Typography sx={{ typography: { xs: "body2", sm: "body1" }, textAlign: "justify"}}>
              This app helps users manage their personal expenses and export reports as PDF or CSV file. 
              I developed this app to strengthen my skills in C# and ASP.NET Core. 
              I used ASP.NET Core MVC with Entity Framework Core for database management and integrated Identity for authentication. 
              For logging, I used Serilog, and for report generation, I utilized Rotativa and CSVHelper. 
              The UI is modern, responsive, and built with Bootstrap. 💰📊
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<GitHubIcon />}
                href="https://github.com/glenvillethedev/asp-net-core-app"
                target="_blank"
              >
                Source Code
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* PROJECT3 */}
      <Paper elevation={3} sx={{ p: 2 , width: '80%'}}>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 5 }}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ my: "5px", fontWeight: "400" }}>
              Expenses Tracker - Admin
            </Typography>
            <Box
              component="img"
              sx={{
                width: { xs: 70, sm: 120 },
                height: "auto",
                objectFit: "cover",
                margin: "5px",
                borderRadius: "50%",
              }}
              src="./img/logo-expenses-tracker-admin.png"
              alt="expenses-tracker-admin-logo"
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 7 }}
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Chip label="reactjs" color="primary" size="small" />
              <Chip label="c#" color="primary" size="small" />
              <Chip label="aspdotnetcore" color="primary" size="small" />
              <Chip label="bootstrap" color="primary" size="small" />
              <Chip label="sqlserver" color="primary" size="small" />
            </Stack>
            <Typography sx={{ typography: { xs: "body2", sm: "body1" }, textAlign: "justify" }}>
              It's an admin dashboard for managing users in the Expenses Tracker app. 
              I built this app to showcase my skills in creating SPAs and integrating it with Web APIs. 
              I developed reusable React components, implemented React Router for routing, and used Axios with JWT for secure API access. 
              The backend is built with ASP.NET Core WebAPI, utilizing Identity for authentication, EF Core for database management, and Serilog for logging. 🚀📊
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<GitHubIcon />}
                href="https://github.com/glenvillethedev/net-react-app"
                target="_blank"
              >
                Source Code
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

    </Stack>
  );
}

export default Projects;
