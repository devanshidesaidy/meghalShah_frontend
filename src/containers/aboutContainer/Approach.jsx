import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";
import vission from "../../assets/svg/vision.png";

export default function Approach() {
  return (
    <Grid sx={{ backgroundColor: color.pureblack, color: "white", pt: "6rem" }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.greenFont,
          py: "4%",
          //   px: 3,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Approach & Philosophy
      </Grid>
      <Container sx={{ py: "2%" }}>
        <Grid container justifyContent={"space-between"}>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            // sx={{ backgroundColor: color.mateblack }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter:
                    "invert(65%) sepia(91%) saturate(502%) hue-rotate(90deg)",
                }}
                src={mission}
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
              }}
            >
              Mission
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "justify",
                // fontWeight: "bold",
              }}
            >
              My mission is to empower businesses with strategic financial
              advice that maximizes growth, optimizes performance, and builds
              lasting financial stability. I strive to provide solutions that
              are not only effective but sustainable, ensuring that businesses
              can thrive in an ever-evolving financial landscape.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            sx={{  mt: {xs:5,md:0} }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter:
                    "invert(65%) sepia(91%) saturate(502%) hue-rotate(90deg)",
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
              }}
            >
              Vision
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "justify",
                // fontWeight: "bold",
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
