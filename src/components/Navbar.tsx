import React from "react";
import { Typography, AppBar, Button } from "@mui/material";
import Link from "next/link";
export function Navbar(props: any) {
  return (
    <AppBar position="static" className="p-6" elevation={0}>
      <Typography variant="h6">
        <Link href="/">Script.AB</Link>
      </Typography>
      <Typography variant="h4" className="">
        {props.title}
      </Typography>
    </AppBar>
  );
}
