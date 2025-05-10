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

export default function Client() {
  return (
    <Grid sx={{ backgroundColor: color.pureblack, color: "white", pt: "6rem" }}>
      <Container sx={{ backgroundColor: color.mateblack, pb: "2%" }}>
        <Typography
          sx={{
            fontSize: "4rem",
            textAlign: "center",
            fontWeight: "bold",
            color: color.greenFont,
            pt: "3rem",
            fontFamily: "JosefinSans",
          }}
        >
          Testimonials
        </Typography>

        <Swiper
          style={{ height: "250px" }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper custom-swiper"
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  gap: "1rem",
                  mt: { xs: 3, md: 7 },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  // src="/static/images/avatar/1.jpg"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack
                  sx={{ fontSize: "2rem", fontFamily: "MiriamLibre-Regular" }}
                >
                  Client 1
                </Stack>
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  mt: 4,
                  textAlign: "center",
                  fontFamily: "Palanquin",
                }}
              >
                “ CA Meghal Shah’s advisory was pivotal in helping us
                restructure our debt and improve profitability.”
              </Typography>
            </Grid>
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  gap: "1rem",
                  mt: { xs: 3, md: 7 },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  // src="/static/images/avatar/1.jpg"
                  sx={{ width: 50, height: 50 }}
                />
                <Stack
                  sx={{ fontSize: "2rem", fontFamily: "MiriamLibre-Regular" }}
                >
                  Client 2
                </Stack>
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  mt: 4,
                  textAlign: "center",
                  fontFamily: "Palanquin",
                }}
              >
                “ Thanks to Meghal's guidance, we raised the capital we needed
                to scale our startup rapidly.”
              </Typography>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Grid>
  );
}
