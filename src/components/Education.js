import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import SchoolIcon from "@mui/icons-material/School";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";

function Education() {
  return (
    <Grid container>
      <Timeline
        sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.4 } }}
      >
        <TimelineItem>
          <TimelineOppositeContent sx={{ pt: "3px" }}>
            <Typography variant="h6" sx={{ fontWeight: "400" }}>
              APRIL 2017
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "3px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"column"} spacing={0}>
                <Stack direction={"row"} spacing={1}>
                  <SchoolIcon
                    sx={{ fontSize: "18px", pt: "6px" }}
                    color="primary"
                  />
                  <Typography variant="h6" color="primary">
                    Bachelor of Science in Computer Engineering
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <SchoolOutlinedIcon
                    sx={{ fontSize: "18px" }}
                    color="primary"
                  />
                  <Typography variant="body1" color="primary">
                    Major in Software Engineering
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <LocationCityIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  University of San Carlos - Talamban Campus
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <LocationOnIcon sx={{ fontSize: "18px" }} />
                <Typography variant="body2">Cebu, Philippines</Typography>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
}

export default Education;
