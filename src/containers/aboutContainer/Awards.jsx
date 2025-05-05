import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Grid } from "@mui/material";
import { color } from "../../constant";

export default function Awards() {
  return (
    <Grid sx={{ backgroundColor: color.bgblack,py:{xs:"5%",md:"none"} }} >
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.greenFont,
          pb: "4%",
          //   px: 3,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        A Legacy of Recognition
      </Grid>
      <Swiper
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "250px", width: "200px" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src="https://img.freepik.com/free-vector/award-medal-with-red-ribbon_1284-42828.jpg?semt=ais_hybrid&w=740"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
}
