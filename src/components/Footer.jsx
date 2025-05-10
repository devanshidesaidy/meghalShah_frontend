import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../constant";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Grid sx={{ backgroundColor: color.mateblack, color: color.white, pb: 3 }}>
      <Grid
        sx={{
          color: color.white,
          height: "150px",
          display: "flex",
          justifyContent: "center",
          pt: { xs: 3, md: 8 },
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
            <Grid sx={{fontFamily:"MiriamLibre-Regular",letterSpacing:"0.1rem"}}>A-5 Fifth Floor, Safal Profitire, Prahladnagar</Grid>
            <Grid sx={{fontFamily:"MiriamLibre-Regular",letterSpacing:"0.1rem"}}>+91 1234567890</Grid>
            <Grid sx={{fontFamily:"MiriamLibre-Regular",letterSpacing:"0.1rem"}}>meghlshah@gmail.com</Grid>
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
      <Typography sx={{ textAlign: "center",fontFamily:"MiriamLibre-Regular",letterSpacing:"0.1rem" }}>
        &#169; 2025 Meghal Shah.
      </Typography>
    </Grid>
  );
}
