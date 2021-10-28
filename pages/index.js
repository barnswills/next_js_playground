import Link from "next/link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import React from "react";

export default function IndexPage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Texting</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
