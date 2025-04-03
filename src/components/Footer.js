import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        textAlign: "center",
        color: "grey",
        mt: "50px",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Glenville Maturan
      </Typography>
    </Box>
  );
}

export default Footer;
