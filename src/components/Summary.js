import React from 'react'
import { Box, Grid, Typography, Stack, IconButton, Tooltip, Fade, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Summary() {
  return (
    <Grid container sx={{ my: "10px", pt: "10px" }}>
        <Grid size={{ xs: 12, sm: 7, md: 7 }}>
            <Box sx={{ }}>
                <Typography variant="h3" sx={{mb:"5px", fontWeight: "500"}} color='primary'>Glenville Maturan</Typography>
                <Typography variant="h5" sx={{mb:"5px"}}>Full-Stack Web Developer</Typography>
            </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, md: 5 }} sx={{ textAlign: { xs: "center", sm: "right" } }}>
            <Typography sx={{ typography: { sm: 'body1', xs: 'body2' }, mt: {xs : "0", sm: "10px"}, mb: "5px"}} >Email:&nbsp;
                <Link href="mailto:glenville.work@gmail.com" underline="none" variant="inherit" color="inherit" sx={{ fontWeight: '800'}}>
                    glenville.work@gmail.com
                </Link>
            </Typography>
            <Stack direction="row" spacing={1}  sx={{ alignItems: "center", justifyContent: { xs: "center", sm: "right" }}}>
                <Tooltip title="GitHub Profile" slots={{transition: Fade}} slotProps={{transition: { timeout: 300 }}}>
                    <IconButton aria-label="github-profile" size="small" href="https://github.com/glenvillethedev" target="_blank" color='primary'>
                        <GitHubIcon sx={{ fontSize: { xs: 25, sm: 35 } }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn Profile" slots={{transition: Fade}} slotProps={{transition: { timeout: 300 }}}>
                    <IconButton aria-label="linkedin-profile" size="small" href="https://www.linkedin.com/in/glenville-maturan/" target="_blank" color='primary'>
                    <LinkedInIcon sx={{ fontSize: { xs: 25, sm: 35 } }}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Download My Resume" slots={{transition: Fade}} slotProps={{transition: { timeout: 300 }}}>
                    <IconButton aria-label="resume-download" size="small" href="./docs/Glenville_Maturan_Resume_FullStackDeveloper.pdf" target="_blank" color='primary'>
                    <FileDownloadIcon sx={{ fontSize: { xs: 25, sm: 35 } }}/>
                    </IconButton>
                </Tooltip>
            </Stack>
        </Grid>
  </Grid>
  )
}

export default Summary
