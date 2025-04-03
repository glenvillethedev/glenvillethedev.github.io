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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import BusinessIcon from "@mui/icons-material/Business";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

function Experience() {
  return (
    <Grid container>
      <Timeline
        sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.4 } }}
      >
        <TimelineItem>
          <TimelineOppositeContent sx={{ pt: "3px" }}>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={{ xs: 0, md: 1 }}
              justifyContent={"flex-end"}
            >
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                JAN 2019
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                {" "}
                -{" "}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                DEC 2021
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
                <WorkOutlineOutlinedIcon
                  sx={{ fontSize: "18px", pt: "6px" }}
                  color="primary"
                />
                <Typography variant="h6" color="primary">
                  Associate Technical Specialist
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <BusinessIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  Alliance Software Inc.
                </Typography>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Designed and implemented multiple web apps using ReactJS,
                    TypeScript, ASP.NET Core, and SQL Server.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Optimized Entity Framework Core queries, improving app
                    processing time by up to 50%.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Managed development and production deployments on AWS
                    servers for client applications.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Refactored and migrated legacy client applications to keep
                    up with the latest technologies.
                  </Typography>
                </Stack>
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
                MAY 2017
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                {" "}
                -{" "}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                DEC 2018
              </Typography>
            </Stack>
          </TimelineOppositeContent>
          <TimelineSeparator color="blue">
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "3px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack direction={"row"} spacing={1}>
                <WorkOutlineOutlinedIcon
                  sx={{ fontSize: "18px", pt: "6px" }}
                  color="primary"
                />
                <Typography variant="h6" color="primary">
                  Technical Specialist
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <BusinessIcon sx={{ fontSize: "18px", pt: "2px" }} />
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  Alliance Software Inc.
                </Typography>
              </Stack>
              <Stack direction={"column"} spacing={1}>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Contributed to the development of an internal company tool
                    using ReactJS.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Built multiple web applications leveraging ASP.NET Core,
                    ReactJS, and SQL Server.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Maintained and updated multiple external projects, including
                    legacy client applications.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                  <ArrowRightIcon sx={{ fontSize: "20px" }} />
                  <Typography variant="body2">
                    Collaborated closely with the team leader and members to
                    ensure smooth project execution.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
}

export default Experience;
