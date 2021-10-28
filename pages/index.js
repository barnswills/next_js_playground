import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import React from "react";

export default function IndexPage() {
  const links = ["about", "contact"];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {links.map((link) => (
            <div style={{ marginRight: "10px" }}>
              <Typography variant="h6">{link}</Typography>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
}
