import React from "react";
import { Grid, Typography, Divider, List, Paper } from "@mui/material";
import CustomListItem from "./CustomListItem";

function Skills() {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Grid
        size={{ xs: 12, sm: 3 }}
        sx={{ minWidth: { sm: "300px", md: "200px" } }}
      >
        <Paper elevation={4} sx={{ margin: "10px", padding: "10px" }}>
          <Typography textAlign="center" variant="h6">
            Frontend
          </Typography>
          <List dense={true} sx={{ width: "100%" }}>
            <CustomListItem
              cAlt={"html-icon"}
              cSrc={"./img/icon-html.png"}
              cText={"HTML"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"css-icon"}
              cSrc={"./img/icon-css.png"}
              cText={"CSS"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"javascript-icon"}
              cSrc={"./img/icon-javascript.png"}
              cText={"JavaScript"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"jquery-icon"}
              cSrc={"./img/icon-jquery.png"}
              cText={"jQuery"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"bootstrap-icon"}
              cSrc={"./img/icon-bootstrap.png"}
              cText={"Bootstrap"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"mui-icon"}
              cSrc={"./img/icon-mui.png"}
              cText={"Material-UI"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"react-icon"}
              cSrc={"./img/icon-react.png"}
              cText={"ReactJS"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"typescript-icon"}
              cSrc={"./img/icon-typescript.png"}
              cText={"TypeScript"}
            />
          </List>
        </Paper>
      </Grid>

      <Grid
        size={{ xs: 12, sm: 3 }}
        sx={{ minWidth: { sm: "300px", md: "200px" } }}
      >
        <Paper elevation={4} sx={{ margin: "10px", padding: "10px" }}>
          <Typography textAlign="center" variant="h6">
            Backend
          </Typography>
          <List dense={true} sx={{ width: "100%" }}>
            <CustomListItem
              cAlt={"csharp-icon"}
              cSrc={"./img/icon-csharp.png"}
              cText={"C#"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"asp-net-core-icon"}
              cSrc={"./img/icon-asp-net-core.png"}
              cText={"ASP.NET Core"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"node-icon"}
              cSrc={"./img/icon-node.png"}
              cText={"nodeJS"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"express-icon"}
              cSrc={"./img/icon-express.png"}
              cText={"Express"}
            />
          </List>
        </Paper>
      </Grid>

      <Grid
        size={{ xs: 12, sm: 3 }}
        sx={{ minWidth: { sm: "300px", md: "200px" } }}
      >
        <Paper elevation={4} sx={{ margin: "10px", padding: "10px" }}>
          <Typography textAlign="center" variant="h6">
            Database
          </Typography>
          <List dense={true} sx={{ width: "100%" }}>
            <CustomListItem
              cAlt={"sql-server-icon"}
              cSrc={"./img/icon-sql-server.png"}
              cText={"SQL Server"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"mysql-icon"}
              cSrc={"./img/icon-mysql.png"}
              cText={"MySQL"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"mongo-db-icon"}
              cSrc={"./img/icon-mongo-db.png"}
              cText={"MongoDB"}
            />
          </List>
        </Paper>
      </Grid>

      <Grid
        size={{ xs: 12, sm: 3 }}
        sx={{ minWidth: { sm: "300px", md: "200px" } }}
      >
        <Paper elevation={4} sx={{ margin: "10px", padding: "10px" }}>
          <Typography textAlign="center" variant="h6">
            Tools
          </Typography>
          <List dense={true} sx={{ width: "100%" }}>
            <CustomListItem
              cAlt={"vscode-icon"}
              cSrc={"./img/icon-vscode.png"}
              cText={"VS Code"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"virtual-studio-icon"}
              cSrc={"./img/icon-virtual-studio.png"}
              cText={"Virtual Studio"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"git-icon"}
              cSrc={"./img/icon-git.png"}
              cText={"git"}
            />
            <Divider variant="middle" component="li" />
            <CustomListItem
              cAlt={"npm-icon"}
              cSrc={"./img/icon-npm.png"}
              cText={"npm"}
            />
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Skills;
