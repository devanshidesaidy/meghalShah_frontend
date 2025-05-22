// import { Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import { color } from "../../constant";
// import advisor from "../../assets/svg/advisor.svg";
// import funding from "../../assets/svg/funding.svg";
// import loan from "../../assets/svg/loan.svg";
// import tax from "../../assets/svg/tax.svg";
// import servicebg from "../../assets/images/service.jpg";
// import serviceself from "../../assets/images/serviceself.png";

// export default function Service() {
//   return (
//     <Grid container justifyContent={"center"}>
//       <Grid
//         container
//         justifyContent={"space-between"}
//         sx={{
//           background: {
//             xs: color.pureblack,
//             lg: ` url(${servicebg})`,
//           },
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           zIndex: -1,
//           // width: "100%",
//         }}
//       >
//         <Grid
//           container
//           justifyContent={"space-between"}
//           alignItems={"center"}
//           size={{ xs: 12, md: 5.5 }}
//         >
//           <Typography
//             sx={{
//               fontSize: { xs: "2.5rem", md: "3rem", lg: "4rem" },
//               color: color.greenFont,
//               px: 3,
//               textAlign: "center",
//               fontWeight: "bold",
//               fontFamily: "JosefinSans",
//               // ml: { xs: 0, md: "15%", lg: "25%" },
//             }}
//           >
//             Services I Offer
//           </Typography>
//           <Grid size={{ xs: 12, md: 5.5 }}>

//             <Grid
//               sx={{
//                 display: "flex",
//                 gap: "1rem",
//               }}
//             >
//               <Grid
//                 sx={{
//                   height: "100px",
//                   width: { xs: "120px", sm: "80px", md: "90px", lg: "150px" },
//                 }}
//               >
//                 <img src={advisor} style={{ height: "100%", width: "100%" }} />
//               </Grid>
//               <Grid>
//                 <Typography
//                   sx={{
//                     color: color.white,
//                     fontWeight: 600,
//                     fontSize: { xs: "1.3rem", md: "1.6rem" },
//                     fontFamily: "MiriamLibre-Regular",
//                   }}
//                 >
//                   Corporate Finance & Advisory
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: color.white,
//                     fontSize: "1.2rem",
//                     mt: 1,
//                     fontFamily: "Palanquin",
//                   }}
//                 >
//                   Strategic finance planning and project financing to ensure
//                   sustainable growth.
//                 </Typography>
//               </Grid>
//             </Grid>

//             <Grid
//               sx={{
//                 display: "flex",
//                 gap: "1rem",
//                 mt: { xs: "1rem", md: "2rem", lg: "5rem" },
//               }}
//             >
//               <Grid
//                 sx={{
//                   height: "80px",
//                   width: { xs: "100px", sm: "80px", md: "90px", lg: "120px" },
//                 }}
//               >
//                 <img src={loan} style={{ height: "100%", width: "100%" }} />
//               </Grid>
//               <Grid>
//                 <Typography
//                   sx={{
//                     color: color.white,
//                     fontWeight: 600,
//                     fontSize: { xs: "1.3rem", md: "1.6rem" },
//                     fontFamily: "MiriamLibre-Regular",
//                   }}
//                 >
//                   MSME Loans
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: color.white,
//                     fontSize: "1.2rem",
//                     mt: 1,
//                     fontFamily: "Palanquin",
//                   }}
//                 >
//                   Access to loans with minimal hassle, tailored to your needs.
//                 </Typography>
//               </Grid>
//             </Grid>

//           </Grid>

//           <Grid size={{ xs: 12, md: 5.5 }}>

//   <Grid
//                 sx={{
//                   display: "flex",
//                   gap: "1rem",
//                   mt: { xs: "1rem", lg: 0 },
//                 }}
//               >
//                 <Grid
//                   sx={{
//                     height: "100px",
//                     width: { xs: "100px", sm: "80px", md: "90px", lg: "120px" },
//                   }}
//                 >
//                   <img
//                     src={funding}
//                     style={{ height: "100%", width: "100%" }}
//                   />
//                 </Grid>
//                 <Grid>
//                   <Typography
//                     sx={{
//                       color: color.white,
//                       fontWeight: 600,
//                       fontSize: { xs: "1.3rem", md: "1.6rem" },
//                       lineHeight: "1.7rem",
//                       fontFamily: "MiriamLibre-Regular",
//                     }}
//                   >
//                     Startup Funding & Angel Investment
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: color.white,
//                       fontSize: "1.2rem",
//                       mt: 2,
//                       fontFamily: "Palanquin",
//                     }}
//                   >
//                     Helping startups secure funding and scale effectively.
//                   </Typography>
//                 </Grid>
//               </Grid>

//               <Grid
//                 sx={{
//                   display: "flex",
//                   mt: { xs: "1rem", md: "2rem", lg: "5rem" },
//                   gap: "1rem",
//                   // alignItems: "center",
//                 }}
//               >
//                 <Grid
//                   sx={{
//                     height: "100px",
//                     width: { xs: "100px", sm: "80px", md: "90px", lg: "120px" },
//                   }}
//                 >
//                   <img src={tax} style={{ height: "100%", width: "100%" }} />
//                 </Grid>
//                 <Grid>
//                   <Typography
//                     sx={{
//                       color: color.white,
//                       fontWeight: 600,
//                       fontSize: { xs: "1.3rem", md: "1.6rem" },
//                       lineHeight: "1.8rem",
//                       fontFamily: "MiriamLibre-Regular",
//                     }}
//                   >
//                     Tax Advisory & Financial Structuring
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: color.white,
//                       fontSize: "1.2rem",
//                       mt: 2,
//                       fontFamily: "Palanquin",
//                     }}
//                   >
//                     Optimize your taxes and financial setup for efficiency.
//                   </Typography>
//                 </Grid>
//               </Grid>

//           </Grid>

//         </Grid>

//         {/* image section  */}
//         <Grid size={{ xs: 12, md: 5.5 }} sx={{border:"1px solid red"}}>sdfsd</Grid>
//       </Grid>
//     </Grid>
//   );
// }

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LineChart,
  Building,
  Rocket,
  FileText,
  ChevronRight,
} from "lucide-react";
import { colors } from "../../components/Theme";
import { services } from "../../constant";

const ServicesIcons = {
  LineChart: LineChart,
  Building: Building,
  Rocket: Rocket,
  FileText: FileText,
};

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeService, setActiveService] = useState(1);

  const handleServiceHover = (id) => {
    setActiveService(id);
  };

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.dark,
        color: colors.text.light,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }} className="fade-in">
          <Typography
            variant="h6"
            sx={{
              color: colors.secondary.main,
              fontWeight: 600,
              mb: 2,
            }}
          >
            WHAT I OFFER
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: colors.text.light,
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}
          >
            Services I Offer
          </Typography>

          <Divider
            sx={{
              width: "80px",
              margin: "0 auto",
              borderColor: colors.secondary.main,
              borderWidth: 2,
              my: 3,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: colors.text.light,
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              opacity: 0.9,
            }}
          >
            Comprehensive financial solutions tailored to help businesses thrive
            in today's competitive landscape.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => {
            const IconComponent = ServicesIcons[service.icon];

            return (
              <Grid
                item
                size={{ xs: 12, sm: 6, md: 3 }}
                key={service.id}
                className="scale-in"
              >
                <Card
                  className="service-card"
                  elevation={3}
                  sx={{
                    height: "100%",
                    backgroundColor:
                      service.id === activeService
                        ? colors.primary.main
                        : colors.background.darkPaper,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    border: `1px solid ${
                      service.id === activeService
                        ? colors.primary.light
                        : "rgba(255, 255, 255, 0.1)"
                    }`,
                    "&:hover": {
                      backgroundColor: colors.primary.main,
                      transform: "translateY(-10px)",
                    },
                  }}
                  onMouseEnter={() => handleServiceHover(service.id)}
                >
                  <CardActionArea
                    sx={{
                      height: "100%",
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: colors.secondary.main,
                        borderRadius: "50%",
                        p: 1.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 3,
                        transition: "all 0.3s ease",
                        transform:
                          service.id === activeService
                            ? "scale(1.1)"
                            : "scale(1)",
                      }}
                    >
                      <IconComponent size={28} color={colors.background.dark} />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: colors.text.light,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: colors.text.light,
                        opacity: 0.9,
                        fontSize: "0.95rem",
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Box
                      sx={{
                        mt: "auto",
                        display: "flex",
                        alignItems: "center",
                        color: colors.secondary.main,
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      Learn More{" "}
                      <ChevronRight size={16} style={{ marginLeft: "4px" }} />
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
