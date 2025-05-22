// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // import required modules
// import { Navigation } from "swiper/modules";
// import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
// import { color } from "../../constant";

// export default function Client() {
//   return (
//     <Grid sx={{ backgroundColor: color.pureblack, color: "white", pt: "6rem" }}>
//       <Container sx={{ backgroundColor: color.mateblack, pb: "2%" }}>
//         <Typography
//           sx={{
//             fontSize: "4rem",
//             textAlign: "center",
//             fontWeight: "bold",
//             color: color.greenFont,
//             pt: "3rem",
//             fontFamily: "JosefinSans",
//           }}
//         >
//           Testimonials
//         </Typography>

//         <Swiper
//           style={{ height: "250px" }}
//           navigation={true}
//           modules={[Navigation]}
//           className="mySwiper custom-swiper"
//         >
//           <SwiperSlide
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Grid>
//               <Typography
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",

//                   gap: "1rem",
//                   mt: { xs: 3, md: 7 },
//                 }}
//               >
//                 <Avatar
//                   alt="Remy Sharp"
//                   // src="/static/images/avatar/1.jpg"
//                   sx={{ width: 50, height: 50 }}
//                 />
//                 <Stack
//                   sx={{ fontSize: "2rem", fontFamily: "MiriamLibre-Regular" }}
//                 >
//                   Client 1
//                 </Stack>
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   mt: 4,
//                   textAlign: "center",
//                   fontFamily: "Palanquin",
//                 }}
//               >
//                 “ CA Meghal Shah’s advisory was pivotal in helping us
//                 restructure our debt and improve profitability.”
//               </Typography>
//             </Grid>
//           </SwiperSlide>
//           <SwiperSlide
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Grid>
//               <Typography
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",

//                   gap: "1rem",
//                   mt: { xs: 3, md: 7 },
//                 }}
//               >
//                 <Avatar
//                   alt="Remy Sharp"
//                   // src="/static/images/avatar/1.jpg"
//                   sx={{ width: 50, height: 50 }}
//                 />
//                 <Stack
//                   sx={{ fontSize: "2rem", fontFamily: "MiriamLibre-Regular" }}
//                 >
//                   Client 2
//                 </Stack>
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   mt: 4,
//                   textAlign: "center",
//                   fontFamily: "Palanquin",
//                 }}
//               >
//                 “ Thanks to Meghal's guidance, we raised the capital we needed
//                 to scale our startup rapidly.”
//               </Typography>
//             </Grid>
//           </SwiperSlide>
//         </Swiper>
//       </Container>
//     </Grid>
//   );
// }



import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { colors } from '../../components/Theme';
import { testimonials } from '../../constant';


const Client = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.paper,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="fade-in">
          <Typography
            variant="h6"
            sx={{
              color: colors.primary.main,
              fontWeight: 600,
              mb: 2,
            }}
          >
            CLIENT TESTIMONIALS
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: colors.text.primary,
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.2rem', md: '3rem' },
            }}
          >
            What Clients Say
          </Typography>

          <Box
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: colors.primary.main,
              margin: '0 auto',
              mb: 3,
            }}
          />
        </Box>

        <Box
          sx={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
          className="slide-up"
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: '50%', md: -30 },
              top: { xs: 'auto', md: '50%' },
              bottom: { xs: -80, md: 'auto' },
              transform: {
                xs: 'translateX(-60px)',
                md: 'translateY(-50%)',
              },
              backgroundColor: colors.background.default,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: colors.primary.main,
                color: colors.text.light,
              },
              zIndex: 2,
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: '50%', md: -30 },
              top: { xs: 'auto', md: '50%' },
              bottom: { xs: -80, md: 'auto' },
              transform: {
                xs: 'translateX(60px)',
                md: 'translateY(-50%)',
              },
              backgroundColor: colors.background.default,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: colors.primary.main,
                color: colors.text.light,
              },
              zIndex: 2,
            }}
          >
            <ChevronRight size={24} />
          </IconButton>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 30,
                right: 30,
                opacity: 0.1,
              }}
            >
              <Quote size={64} color={colors.primary.main} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 4,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  sx={{
                    width: 100,
                    height: 100,
                    border: `3px solid ${colors.primary.main}`,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mt: 2,
                    textAlign: 'center',
                  }}
                >
                  {testimonials[activeIndex].name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: colors.text.secondary,
                    textAlign: 'center',
                  }}
                >
                  {testimonials[activeIndex].company}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.text.secondary,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    position: 'relative',
                  }}
                >
                  {testimonials[activeIndex].quote}
                </Typography>
              </Box>
            </Box>
          </Paper>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor:
                    index === activeIndex
                      ? colors.primary.main
                      : colors.primary.light,
                  opacity: index === activeIndex ? 1 : 0.4,
                  mx: 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Client;