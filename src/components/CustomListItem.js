import React from "react";
import {
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

function CustomListItem({ cAlt, cSrc, cText }) {
  return (
    <ListItem>
      <ListItemAvatar sx={{ display: "flex", justifyContent: "center", width : "40%" }}>
        <Avatar 
          alt={cAlt}
          src={cSrc}
          sx={{ width: 24, height: 24 }}
          variant="square"
        />
      </ListItemAvatar>
      <ListItemText primary={<Typography variant="body2">{cText}</Typography>} sx={{ width:"60%"}} />
    </ListItem>
  );
}

export default CustomListItem;
