import { Container, Divider, Grid } from "@mui/material";
import React from "react";
import { color } from "../constant";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Grid
      sx={{
        backgroundColor: color.mateblack,
        color: color.white,
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // px: {xs:1,md:"7rem"},
        py: 2,
      }}
    >
      <Grid width={"87%"}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1rem", md: "none" },
          }}
        >
          <Grid>&#169; 2025 Meghal Shah. </Grid>
          <Grid>+91 1234567890</Grid>
          <Grid>meghlshah@gmail.com</Grid>
          <Grid sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <FacebookIcon sx={{ fontSize: 28 }} />
            <InstagramIcon sx={{ fontSize: 28 }} />
            <YouTubeIcon sx={{ fontSize: 28 }} />
            <XIcon sx={{ fontSize: 28 }} />
            <LinkedInIcon sx={{ fontSize: 28 }} />
          </Grid>
        </Grid>
        <Divider
          sx={{
            bgcolor: color.white,
            mt: 3,
            display: { xs: "none", md: "block" },
          }}
        />
      </Grid>
    </Grid>
  );
}
