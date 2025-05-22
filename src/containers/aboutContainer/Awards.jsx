import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";

// Generate random dummy images
const generateRandomImages = (count) =>
  Array.from(
    { length: count },
    (_, i) =>
      `https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&fit=crop&w=1220&h=680&q=90&sig=${i}`
  );

// Colors
const yellow = "#FFD700";
const black = "#000000";

export default function Awards() {
  const swiperRef = useRef(null);
  const images = generateRandomImages(10);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <Box
      sx={{
        backgroundColor: black,
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: yellow,
            fontFamily: "JosefinSans",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          A Legacy of Recognition
        </Typography>

        <Box position="relative">
          {/* Left Button */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "40%",
              left: -20,
              zIndex: 2,
              backgroundColor: yellow,
              color: black,
              "&:hover": { backgroundColor: "#e6c200" },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          {/* Right Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "40%",
              right: -20,
              zIndex: 2,
              backgroundColor: yellow,
              color: black,
              "&:hover": { backgroundColor: "#e6c200" },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Swiper Carousel */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              600: { slidesPerView: 2.2 },
              960: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4.2 },
            }}
            spaceBetween={24}
            grabCursor
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    height: { xs: 180, sm: 220, md: 250 },
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={src}
                    alt={`Award ${index + 1}`}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
