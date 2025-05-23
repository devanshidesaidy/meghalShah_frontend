// import { Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import img from "../../assets/images/bannerSelf.png";
// import { color } from "../../constant";
// export default function Introduction() {
//   return (
//     <Grid
//       sx={{ backgroundColor: color.pureblack, py: { xs: "10%", md: 10 } }}
//     >
//       <Container>
//         <Grid container sx={{ gap: { xs: "none", md: "3rem", lg: "4rem" } }}>
//           <Grid
//             size={{
//               xs: 12,
//               md: 5.5,
//             }}
//             sx={{
//               boxShadow:
//                 "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
//               borderRadius: "20px",
//             }}
//           >
//             <img src={img} />
//           </Grid>
//           <Grid
//             size={{ xs: 12, md: 5.8 }}
//             container
//             sx={{ alignItems: "center" }}
//           >
//             <Grid sx={{ mt: { xs: 5, md: 0 } }}>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   color: color.white,
//                   textAlign: "justify",
//                   textTransform: "capitalize",
//                   fontFamily: "Palanquin",
//                 }}
//               >
//                 I am CA Meghal Shah, a seasoned Chartered Accountant with over
//                 two decades of experience in the world of finance. Throughout my
//                 career, I have been committed to providing businesses with
//                 strategic financial solutions that faster growth, optimize
//                 operations, and ensure long-term financial success. My
//                 experience spans across diverse industries, enabling me to
//                 deliver tailor-made solutions that cater to the unique needs of
//                 each client.
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   mt: 5,
//                   color: color.white,
//                   textAlign: "justify",
//                   textTransform: "capitalize",
//                   fontFamily: "Palanquin",
//                 }}
//               >
//                 Having worked with startups, small-medium enterprises (SMEs),
//                 and large corporations, I understand the intricacies of
//                 financial challenges that businesses face at different stages of
//                 growth. Whether it's corporate finance, tax planning, or
//                 restructuring debt, my approach combines in-depth analysis with
//                 practical strategies that yield real results.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>

//         <Grid
//           container
//           sx={{ gap: { xs: "none", md: "3rem", lg: "4rem" }, mt: 10 }}
//         >
//           <Grid
//             size={{ xs: 12, md: 5.8 }}
//             container
//             sx={{ alignItems: "center" }}
//           >
//             <Grid>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   color: color.white,
//                   textAlign: "justify",
//                   textTransform: "capitalize",
//                   fontFamily: "Palanquin",
//                 }}
//               >
//                 My philosophy is rooted in personalized service—I believe that
//                 every business is unique and deserves a solution that is crafted
//                 specifically for its needs. Over the years, I've built strong
//                 relationships with my clients, earning their trust by
//                 consistently delivering effective financial strategies and
//                 solutions.
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   mt: 5,
//                   color: color.white,
//                   textAlign: "justify",
//                   textTransform: "capitalize",
//                   fontFamily: "Palanquin",
//                 }}
//               >
//                 As I continue to help businesses navigate the complexities of
//                 the financial world, my goal remains clear: to empower
//                 businesses to achieve financial independence, stability, and
//                 growth that lasts.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Grid
//             size={{
//               xs: 12,
//               md: 5.5,
//             }}
//             sx={{
//               boxShadow: "rgb(255, 255, 255) 0px 7px 29px 0px",
//               borderRadius: "20px",
//               my: { xs: 5, md: 0 },
//             }}
//           >
//             <img src={img} />
//           </Grid>
//         </Grid>
//       </Container>
//     </Grid>
//   );
// }

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Award, Users, TrendingUp, GraduationCap } from "lucide-react";
import { colors } from "../../components/Theme";

const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const aboutInfo = {
    experience: "20+ years",
    clientsServed: "250+",
    successRate: "98%",
    certifications: "CA, CFA, MBA Finance",
  };
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.default,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ gap: 5 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", md: "500px" },
                mb: { xs: 4, md: 0 },
              }}
              className="fade-in"
            >
              <Box
                component="img"
                src="\src\assets\images\bannerSelf.png"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 3,
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  right: isMobile ? "auto" : -30,
                  left: isMobile ? "50%" : "auto",
                  transform: isMobile ? "translateX(-50%)" : "none",
                  backgroundColor: colors.primary.main,
                  borderRadius: 2,
                  p: 3,
                  width: { xs: "90%", md: "220px" },
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.text.light,
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  {aboutInfo.experience}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.text.light,
                  }}
                >
                  Years of Excellence in Financial Advisory
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="slide-up">
              <Typography
                variant="h6"
                sx={{
                  color: colors.primary.main,
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                ABOUT ME
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: colors.text.primary,
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: "2.2rem", md: "2.8rem" },
                }}
              >
                Your Trusted Financial Strategist
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                }}
              >
                With over two decades of experience, I specialize in creating
                tailored financial strategies that drive business growth and
                sustainability. My expertise spans across corporate finance, tax
                advisory, and investment planning, helping businesses navigate
                complex financial landscapes with confidence.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                }}
              >
                My approach combines technical expertise with a deep
                understanding of business challenges across various sectors.
                Whether you're a startup seeking funding or an established
                business looking to optimize financial performance, I provide
                actionable solutions that deliver measurable results.
              </Typography>

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                       height:"125px",
                      backgroundColor: 'transparent',
                      border:` 1px solid ${colors.primary.light}`,
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.07)",
                        borderColor: colors.primary.main,
                      },
                    }}
                  >
                    <Award
                      size={32}
                      color={colors.primary.main}
                      style={{ marginBottom: "8px" }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {aboutInfo.experience}
                    </Typography>
                    <Typography variant="body2">Experience</Typography>
                  </Paper>
                </Grid>

                <Grid item size={{ xs: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      height:"125px",
                      backgroundColor: 'transparent',
                      border:` 1px solid ${colors.primary.light}`,
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.07)",
                        borderColor: colors.primary.main,
                      },
                    }}
                  >
                    <Users
                      size={32}
                      color={colors.primary.main}
                      style={{ marginBottom: "8px" }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {aboutInfo.clientsServed}
                    </Typography>
                    <Typography variant="body2">Clients</Typography>
                  </Paper>
                </Grid>

                <Grid item size={{ xs: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                       height:"125px",
                      backgroundColor: 'transparent',
                      border:` 1px solid ${colors.primary.light}`,
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.07)",
                        borderColor: colors.primary.main,
                      },
                    }}
                  >
                    <TrendingUp
                      size={32}
                      color={colors.primary.main}
                      style={{ marginBottom: "8px" }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {aboutInfo.successRate}
                    </Typography>
                    <Typography variant="body2">Success Rate</Typography>
                  </Paper>
                </Grid>

                <Grid item size={{ xs: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: 'center',
                       height:"125px",
                      backgroundColor: 'transparent',
                      border: `1px solid ${colors.primary.light}`,
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.07)",
                        borderColor: colors.primary.main,
                      },
                    }}
                  >
                    <GraduationCap
                      size={32}
                      color={colors.primary.main}
                      style={{ marginBottom: "8px" }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, fontSize: "1rem" }}
                    >
                      {aboutInfo.certifications}
                    </Typography>
                    <Typography variant="body2">Certifications</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;
