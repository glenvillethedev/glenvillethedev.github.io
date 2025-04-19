import React from "react";
import { Grid, Stack, Typography, Button } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';

function Certificates() {
  return (
    <Grid container>
      <Timeline sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.4 } }}>
        <TimelineItem>
          <TimelineOppositeContent sx={{ pt: "3px" }}>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={{ xs: 0, md: 1 }}
              justifyContent={"flex-end"}
            >
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                APRIL 2025
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "3px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} spacing={1}>
                <BookIcon
                  sx={{ fontSize: "18px", pt: "6px" }}
                  color="primary"
                />
                <Typography variant="h6" color="primary">
                  Asp.Net Core 9 (.NET 9) | True Ultimate Guide - (Udemy)
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <PersonIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1">
                  Instructor: Harsha Vardhan
                </Typography>
              </Stack>

              <Stack direction={"row"} spacing={1} sx={{ pb: "20px"}}>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.udemy.com/certificate/UC-d01d087e-ceb0-40a8-a3eb-4dbe2d972bf7/"
                  target="_blank"
                  color="inherit"
                >
                  View Certificate
                </Button>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent sx={{ pt: "3px" }}>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={{ xs: 0, md: 1 }}
              justifyContent={"flex-end"}
            >
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                JULY 2024
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "3px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} spacing={1}>
                <BookIcon
                  sx={{ fontSize: "18px", pt: "6px" }}
                  color="primary"
                />
                <Typography variant="h6" color="primary">
                  Web Development | HTML | CSS | JavaScript | jQuery | NodeJS - (Udemy)
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <PersonIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1">
                  Instructor: Harsha Vardhan
                </Typography>
              </Stack>

              <Stack direction={"row"} spacing={1} sx={{ pb: "20px"}}>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.udemy.com/certificate/UC-80f11bfe-43c9-4c0a-adc7-3061cb23d4a2/"
                  target="_blank"
                  color="inherit"
                >
                  View Certificate
                </Button>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent sx={{ pt: "3px" }}>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={{ xs: 0, md: 1 }}
              justifyContent={"flex-end"}
            >
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                MAY 2024
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "3px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} spacing={1}>
                <BookIcon
                  sx={{ fontSize: "18px", pt: "6px" }}
                  color="primary"
                />
                <Typography variant="h6" color="primary">
                  C# 10 | Ultimate Guide - Beginner to Advanced | Master Class - (Udemy)
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <PersonIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1">
                  Instructor: Harsha Vardhan
                </Typography>
              </Stack>

              <Stack direction={"row"} spacing={1} sx={{ pb: "20px"}}>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.udemy.com/certificate/UC-c63f0c49-a9e3-470f-a9d7-8821becb74e6/"
                  target="_blank"
                  color="inherit"
                >
                  View Certificate
                </Button>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineOppositeContent sx={{ pt: "3px" }}>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={{ xs: 0, md: 1 }}
              justifyContent={"flex-end"}
            >
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                JULY 2021
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "3px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} spacing={1}>
                <BookIcon
                  sx={{ fontSize: "18px", pt: "6px" }}
                  color="primary"
                />
                <Typography variant="h6" color="primary">
                  The Complete 2021 Web Development Bootcamp - (Udemy)
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <PersonIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1">
                  Instructor: Dr. Angela Yu
                </Typography>
              </Stack>

              <Stack direction={"row"} spacing={1} sx={{ pb: "20px"}}>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.udemy.com/certificate/UC-68124206-6b92-41cd-a666-d4220d7c9d01/"
                  target="_blank"
                  color="inherit"
                >
                  View Certificate
                </Button>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
}

export default Certificates;
