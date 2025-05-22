// import { Grid } from "@mui/material";
// import React from "react";
// import { color } from "../../constant";
// import banner from "../../assets/images/servicebg.png";
// import img from "../../assets/images/04.png";
// export default function Banner() {
//   return (
//     <Grid
//       container
//       // className="bannerImg"
//       sx={{
//         alignItems: "center",
//         justifyContent: { xs: "center", lg: "normal" },
//         height: { xs: "auto", lg: "100vh" },
//         background: {
//           xs: color.bgblack,
//           md: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${banner})`,
//         },
//         backgroundRepeat: {
//           xs: "initial", // or "no-repeat" if you still want that behavior
//           md: "no-repeat",
//         },
//         backgroundSize: {
//           xs: "initial",
//           md: "cover",
//         },
//         backgroundPosition: {
//           xs: "initial",
//           md: "center",
//         },
//         zIndex: -1,
//       }}
//     >
//       <Grid
//         size={{ xs: 11, md: 6 }}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           mt: { xs: 8, md: "none" },
//         }}
//       >
//         <Grid
//           sx={{
//             ml: { xs: "none", md: "5rem", lg: "12rem" },
//             background:
//               "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))",
//             p: 5,
//             borderRadius: "20px",
//           }}
//         >
//           <Grid
//             className="font"
//             sx={{
//               fontSize: { xs: "3.5rem", md: "3rem", lg: "6rem" },
//               fontWeight: "bold",
//               textAlign: { xs: "center", md: "left" },
//               fontFamily: "JosefinSans",
//             }}
//           >
//             Meghal Shah
//           </Grid>
//           <Grid
//             sx={{
//               color: color.white,
//               fontSize: "1.2rem",
//               textAlign: { xs: "center", md: "left" },
//               mt: 4,
//               fontFamily: "MiriamLibre-Regular",
//               letterSpacing: "0.1rem",
//             }}
//           >
//             Strategic Financial Solutions
//           </Grid>
//           <Grid
//             sx={{
//               color: color.white,
//               fontSize: "1.2rem",
//               textAlign: { xs: "center", md: "left" },
//               mt: 1,
//               fontFamily: "MiriamLibre-Regular",
//               letterSpacing: "0.1rem",
//             }}
//           >
//             Sustainable Business
//           </Grid>
//           <Grid
//             sx={{
//               color: color.white,
//               fontSize: "1.2rem",
//               textAlign: { xs: "center", md: "left" },
//               mt: 1,
//               fontFamily: "MiriamLibre-Regular",
//               letterSpacing: "0.1rem",
//             }}
//           >
//             Business Growth
//           </Grid>
//           {/* <Grid
//             sx={{
//               color: color.white,
//               mt: 3,
//               lineHeight: "1.5rem",
//               fontSize: "1.2rem",
//             }}
//           >
//             CA Meghal Shah offers comprehensive financial consulting to
//             businesses across sectors, specializing in Corporate Finance, MSME
//             Loans, Debt Restructuring, and Angel Investments. We create
//             tailor-made financial solutions that enhance growth and
//             sustainability.
//           </Grid> */}
//         </Grid>
//       </Grid>
//       <Grid
//         size={{ xs: 12, md: 6 }}
//         sx={{
//           height: { xs: "auto", sm: "auto", md: "35rem", lg: "55rem" },
          
//           // backgroundColor: { xs: "black", md: "transparent" },
//           // mt: 5,
//         }}
//       >
//         <Grid sx={{display: { xs: "block", md: "none" },}}>

//         <img
//           src={img}
//           style={{ height: "100%", width: "100%", objectFit: "contain" }}
//         />
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }


import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { colors } from '../../components/Theme';
import backgroundphoto from "../../assets/images/servicebg.png"

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
       background: `linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.5)),url(${backgroundphoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 10, md: 0 },
      }}
      className="hero-background"
    >
      <Container maxWidth="xl" className="hero-content">
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{xs:12, md:7 }} className="slide-up">
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: "1px solid rgba(255, 255, 255, 0.1)",
                animation: 'fadeIn 1s ease-in',
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: colors.text.light,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Meghal Shah
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: colors.secondary.main,
                  fontWeight: 600,
                  mb: 3,
                  lineHeight: 1.4,
                }}
              >
                Expert Financial Strategist
              </Typography>

              <Box sx={{ mb: 4 }}>
                {[
                  'Strategic Financial Solutions',
                  'Sustainable Business Growth',
                  'Tax Advisory & Financial Planning',
                ].map((text, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      color: colors.text.light,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: colors.secondary.main,
                        mr: 2,
                      }}
                    />
                    {text}
                  </Typography>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#services"
                  endIcon={<ArrowRight size={20} />}
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  Explore Services
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#contact"
                  sx={{
                    borderColor: colors.secondary.main,
                    color: colors.secondary.main,
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: colors.secondary.light,
                      color: colors.secondary.light,
                      transform: 'translateY(-3px)',
                      backgroundColor: 'rgba(212, 175, 55, 0.05)',
                    },
                  }}
                  startIcon={<PhoneCall size={20} />}
                >
                  Book Consultation
                </Button>
              </Box>
            </Box>
          </Grid>

          {!isMobile && (
            <Grid item size={{xs:12, md:5 }}>
              {/* Empty intentionally - background image covers visual */}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
