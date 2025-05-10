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
import approach from "../../assets/svg/approach.png";
import philosophy from "../../assets/svg/thought.png";

export default function Approach() {
  return (
    <Grid sx={{ backgroundColor: color.pureblack, color: "white", pt: "6rem" }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.greenFont,
          py: "4%",
          fontFamily: "JosefinSans",
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
                    height:"95px",
                    width:"95px"
                }}
                src={approach}
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
                fontFamily: "JosefinSans",
              }}
            >
              Approach
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "justify",
                fontFamily:"Palanquin",
                // letterSpacing:"0.1rem"
              }}
            >
              I adopt a{" "}
              <span style={{ color: color.greenFont, fontWeight: "bold" }}>
                holistic approach
              </span>{" "}
              to financial advisory, which means I look at every aspect of a
              business's financial health—from day-to-day operations to
              long-term growth plans. My goal is to provide practical,
              sustainable solutions that drive efficiency, reduce costs, and
              ensure financial stability. Through regular assessments and
              strategic planning, I work closely with clients to ensure their
              financial strategies align with their overall business objectives.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5.8 }} sx={{ mt: { xs: 5, md: 0 } }}>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter:
                    "invert(65%) sepia(91%) saturate(502%) hue-rotate(90deg)",
                    height:"95px",
                    width:"95px"
                }}
                src={philosophy}
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
                fontFamily: "JosefinSans",
              }}
            >
              Philosophy
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "justify",
               fontFamily:"Palanquin",
              //  letterSpacing:"0.1rem"
              }}
            >
              At the heart of my work is a deep commitment to{" "}
              <span style={{ color: color.greenFont, fontWeight: "bold" }}>
                {" "}
                personalized service.
              </span>{" "}
              I believe in building strong, long-term relationships with my
              clients based on trust and mutual respect. My philosophy revolves
              around{" "}
              <span style={{ color: color.greenFont, fontWeight: "bold" }}>
                {" "}
                making finance simple and accessible
              </span>{" "}
              for businesses, regardless of size or complexity. I take pride in
              providing clear, actionable insights that empower my clients to
              make informed decisions for sustained success. Above all, my focus
              is always on{" "}
              <span style={{ color: color.greenFont, fontWeight: "bold" }}>
                {" "}
                delivering value{" "}
              </span>
              —ensuring that every financial strategy contributes directly to
              the growth and success of the business.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
