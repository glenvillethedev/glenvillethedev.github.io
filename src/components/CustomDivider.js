import React from "react";
import { Typography, Divider } from "@mui/material";

function CustomDivider(props) {
  return (
    <div>
      <Divider sx={{ my: "15px" }}>
        <Typography variant="h6" sx={{ fontWeight: "400", fontStyle: "italic" }}>
            {props.label}
        </Typography>
      </Divider>
    </div>
  );
}

export default CustomDivider;
