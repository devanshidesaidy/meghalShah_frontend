// import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
// import React from "react";
// import { color } from "../../constant";
// import img from "../../assets/images/bannerSelf.png";
// export default function MsaCa() {
//   return (
//     <Grid
//       sx={{
//         pt: 10,
//         backgroundColor: color.pureblack,
//       }}
//     >
//       <Container>
//         <Grid container justifyContent={"space-between"}>
//           <Grid
//             size={{ xs: 12, md: 5.8}}
//             container
//             // sx={{ alignItems: "center" }}
//           >
//             <Grid mt={"5rem"}>
//               <Grid
//                 sx={{
//                   display: "flex",
//                   flexDirection: { xs: "column", md: "row" },
//                 }}
//               >
//                 <Grid
//                   sx={{
//                     fontSize: { xs: "1.6rem", md: "1.5rem", lg: "1.7rem" },
//                     fontWeight: "bold",
//                     my: { xs: 3, md: 0 },
//                     textAlign: { xs: "center", md: "left" },
//                     color: color.greenFont,
//                     fontFamily:"JosefinSans",
//                     letterSpacing:"0.1rem",
//                     mr:0.5  
//                   }}
//                 >
//                   MSACA Bizzsolve LLP
//                 </Grid>
//                 <Divider
//                   sx={{
//                     bgcolor: color.greenFont,
//                     borderWidth: "2px",
//                     borderRadius: "10px",
//                   }}
//                 />
//                 <Grid
//                   sx={{
//                     fontSize: { xs: "1rem", md: "1.2rem" },
//                     my: { xs: 3, md: 0 },
//                     textAlign: "center",
//                     color: color.white,
//                    fontFamily:"MiriamLibre-Regular"

//                   }}
//                 >
//                   Driving {""}
//                   <Stack
//                     sx={{
//                       color: color.greenFont,
//                       fontWeight: "bold",
//                       display: "inline",
//                     }}
//                   >
//                     Financial Growth
//                   </Stack>{" "}
//                   with Strategic Solutions
//                 </Grid>
//               </Grid>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   mt: 5,
//                   color: color.white,
//                  textAlign: {xs:"left",md:"justify"},
//                   textTransform: "capitalize",
//                   fontFamily:"Palanquin"
//                 }}
//               >
//                 At MSACA Bizzsolve LLP, we are committed to empowering
//                 businesses with strategic financial solutions that drive growth,
//                 stability, and long-term success.
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "1.2rem",
//                   mt: 5,
//                   color: color.white,
//                  textAlign: {xs:"left",md:"justify"},
//                   textTransform: "capitalize",
//                   fontFamily:"Palanquin"
//                 }}
//               >
//                 Based in Ahmedabad, we specialize in helping companies secure
//                 funding, obtain business loans, manage debt restructuring, and
//                 optimize financial performance with a sharp, results-driven
//                 approach. Whether you are a startup, an SME, or a large
//                 enterprise, we craft tailor-made financial strategies to help
//                 you navigate challenges and capitalize on opportunities.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Grid
//             size={{
//               xs: 12,
//               md: 5.3,
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
import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const MsaCa = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 10 },
        background: `linear-gradient(to bottom, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`,
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Image and Card */}
          <Grid item  size={{xs:12,md:5, lg:6}} sx={{ position: 'relative' }}>
            <Paper
              elevation={6}
              sx={{
                overflow: 'hidden',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'primary.dark',
                transform: { md: 'rotate(2deg)' },
                transition: 'transform 0.5s',
                '&:hover': {
                  transform: 'rotate(0deg)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: '4 / 3',
                  background: `linear-gradient(to bottom right, ${theme.palette.primary.dark}, ${theme.palette.grey[700]})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 96, color: 'primary.light', opacity: 0.5 }} />
              </Box>
            </Paper>

            {/* Floating Stats Card */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -24,
                right: -24,
                backgroundColor: theme.palette.grey[800],
                p: 2,
                borderRadius: 2,
                boxShadow: 10,
                border: '1px solid',
                borderColor: 'primary.dark',
                maxWidth: 220,
              }}
            >
              <Typography variant="h6" color="primary.light" gutterBottom>
                Trusted Partner
              </Typography>
              <Typography variant="body2" color="grey.300">
                For businesses seeking financial excellence and sustainable growth
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Text Content */}
          <Grid item  size={{xs:12,md:7, lg:6}}>
            <Box mb={4}>
              <Typography variant="h4" color="common.white" gutterBottom>
                MSACA Bizzsolve LLP
              </Typography>
              <Box
                sx={{
                  width: 96,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: 'primary.main',
                }}
              />
            </Box>

            <Typography variant="body1" color="grey.300" paragraph sx={{ lineHeight: 1.7 }}>
              At MSACA Bizzsolve LLP, we are committed to empowering businesses with strategic financial solutions that drive growth, stability, and long-term success.
            </Typography>

            <Typography variant="body1" color="grey.300" paragraph sx={{ lineHeight: 1.7 }}>
              Based in Ahmedabad, we specialize in helping companies secure funding, obtain business loans, manage debt restructuring, and optimize financial performance with a sharp, results-driven approach.
            </Typography>

            <Grid container spacing={4} mt={2}>
              <Grid item  size={{xs:12,sm:6}}>
                <Box display="flex" alignItems="flex-start">
                  <SecurityIcon sx={{ fontSize: 48, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6" color="common.white" gutterBottom>
                      Secure Strategies
                    </Typography>
                    <Typography variant="body2" color="grey.400">
                      Financial plans that protect and grow your business assets
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item size={{xs:12,sm:6}}>
                <Box display="flex" alignItems="flex-start">
                  <EmojiEventsIcon sx={{ fontSize: 48, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6" color="common.white" gutterBottom>
                      Expert Guidance
                    </Typography>
                    <Typography variant="body2" color="grey.400">
                      Industry professionals with deep financial experience
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MsaCa;
