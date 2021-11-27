import React from "react";
import { Typography, AppBar } from "@mui/material";
import Link from "next/link";

export function Navbar() {
  return (
    <AppBar position="static" className="p-6" elevation={0}>
      <Typography variant="h6">
        <Link href="/">Script.AB</Link>
      </Typography>
    </AppBar>
  );
}
