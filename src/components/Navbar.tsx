import React from "react";
import { Typography, AppBar } from "@mui/material";
import Link from "next/link";

export function Navbar() {
  return (
    <AppBar position="static" style={{ padding: 16 }}>
      <Typography variant="h6">
        <Link href="/">Script.ab</Link>
      </Typography>
    </AppBar>
  );
}
