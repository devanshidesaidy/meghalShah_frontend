import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";
import vission from "../../assets/svg/vision.png";
export default function Mission() {
  return (
    <Grid sx={{ backgroundColor: color.bgblack }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.greenFont,
          pt: "5%",
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "JosefinSans",
        }}
      >
        Mission, Vision & Core Values
      </Grid>
      <Container sx={{ py: "5%" }}>
        <Grid container sx={{ backgroundColor: color.greenFont, py: "2%" }}>
          <Grid
            size={{ xs: 12, md: 5.5 }}
            // sx={{ backgroundColor: color.mateblack }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter: "brightness(0) invert(1)",
                }}
                src={mission}
              />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "MiriamLibre-Regular",
              }}
            >
              Mission
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.bgblack,
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontFamily: "Palanquin",
              }}
            >
              My mission is to empower businesses with strategic financial
              advice that maximizes growth, optimizes performance, and builds
              lasting financial stability. I strive to provide solutions that
              are not only effective but sustainable, ensuring that businesses
              can thrive in an ever-evolving financial landscape.
            </Typography>
          </Grid>
          <Divider
            variant="middle"
            sx={{
              bgcolor: color.white,
              borderWidth: "0.1px",
              borderRadius: "10px",
              mx: "2%",
              my: "3%",
              height: "16rem",
              display: { xs: "none", md: "block" },
            }}
          />
          <Grid
            size={{ xs: 12, md: 5.5 }}
            // sx={{ backgroundColor: color.mateblack }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                 filter: "brightness(0) invert(1)"
                }}
                src={vission}
              />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: color.white,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "MiriamLibre-Regular",
              }}
            >
              Vision
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.bgblack,
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontFamily: "Palanquin",
              }}
            >
              To be a trusted advisor and financial partner for businesses
              across industries, helping them unlock their full potential and
              achieve financial independence and success. I aim to deliver
              high-quality, tailor-made financial solutions that exceed
              expectations and drive measurable results.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
