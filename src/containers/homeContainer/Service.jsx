// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardActionArea,
//   Divider,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   LineChart,
//   Building,
//   Rocket,
//   FileText,
//   ChevronRight,
// } from "lucide-react";
// import { colors } from "../../components/Theme";
// import { services } from "../../constant";

// const ServicesIcons = {
//   LineChart: LineChart,
//   Building: Building,
//   Rocket: Rocket,
//   FileText: FileText,
// };

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [activeService, setActiveService] = useState(1);

//   const handleServiceHover = (id) => {
//     setActiveService(id);
//   };

//   return (
//     <Box
//       id="services"
//       sx={{
//         py: { xs: 8, md: 12 },
//         backgroundColor: colors.background.dark,
//         color: colors.text.light,
//       }}
//       className="section-padding"
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: "center", mb: 8 }} className="fade-in">
//           <Typography
//             variant="h6"
//             sx={{
//               color: colors.secondary.main,
//               fontWeight: 600,
//               mb: 2,
//             }}
//           >
//             WHAT I OFFER
//           </Typography>

//           <Typography
//             variant="h2"
//             sx={{
//               color: colors.text.light,
//               fontWeight: 700,
//               mb: 3,
//               fontSize: { xs: "2.2rem", md: "3rem" },
//             }}
//           >
//             Services I Offer
//           </Typography>

//           <Divider
//             sx={{
//               width: "80px",
//               margin: "0 auto",
//               borderColor: colors.secondary.main,
//               borderWidth: 2,
//               my: 3,
//             }}
//           />

//           <Typography
//             variant="body1"
//             sx={{
//               color: colors.text.light,
//               maxWidth: "800px",
//               margin: "0 auto",
//               fontSize: "1.1rem",
//               opacity: 0.9,
//             }}
//           >
//             Comprehensive financial solutions tailored to help businesses thrive
//             in today's competitive landscape.
//           </Typography>
//         </Box>

//         <Grid container spacing={4}>
//           {services.map((service) => {
//             const IconComponent = ServicesIcons[service.icon];

//             return (
//               <Grid
//                 item
//                 size={{ xs: 12, sm: 6, md: 3 }}
//                 key={service.id}
//                 className="scale-in"
//               >
//                 <Card
//                   className="service-card"
//                   elevation={3}
//                   sx={{
//                     height: "100%",
//                     backgroundColor:
//                       service.id === activeService
//                         ? colors.primary.main
//                         : colors.background.darkPaper,
//                     borderRadius: 3,
//                     transition: "all 0.3s ease",
//                     border: `1px solid ${
//                       service.id === activeService
//                         ? colors.primary.light
//                         : "rgba(255, 255, 255, 0.1)"
//                     }`,
//                     "&:hover": {
//                       backgroundColor: colors.primary.main,
//                       transform: "translateY(-10px)",
//                     },
//                   }}
//                   onMouseEnter={() => handleServiceHover(service.id)}
//                 >
//                   <CardActionArea
//                     sx={{
//                       height: "100%",
//                       p: 3,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         backgroundColor: colors.secondary.main,
//                         borderRadius: "50%",
//                         p: 1.5,
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         mb: 3,
//                         transition: "all 0.3s ease",
//                         transform:
//                           service.id === activeService
//                             ? "scale(1.1)"
//                             : "scale(1)",
//                       }}
//                     >
//                       <IconComponent size={28} color={colors.background.dark} />
//                     </Box>

//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 600,
//                         mb: 2,
//                         color: colors.text.light,
//                       }}
//                     >
//                       {service.title}
//                     </Typography>

//                     <Typography
//                       variant="body2"
//                       sx={{
//                         mb: 3,
//                         color: colors.text.light,
//                         opacity: 0.9,
//                         fontSize: "0.95rem",
//                       }}
//                     >
//                       {service.description}
//                     </Typography>

//                     <Box
//                       sx={{
//                         mt: "auto",
//                         display: "flex",
//                         alignItems: "center",
//                         color: colors.secondary.main,
//                         fontSize: "0.9rem",
//                         fontWeight: 600,
//                       }}
//                     >
//                       Learn More{" "}
//                       <ChevronRight size={16} style={{ marginLeft: "4px" }} />
//                     </Box>
//                   </CardActionArea>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Services;

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Phone, Smile, Navigation } from "lucide-react";
// import { colors } from "../../components/Theme"; // Adjust if path differs
import { color } from "../../constant";
import { colors } from "../../components/Theme";

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const steps = [
    {
      id: 1,
      icon: <Phone size={32} color={color.secondary} />,
      title: "Corporate Finance & Advisory",
    },
    {
      id: 2,
      icon: <Smile size={32} color={color.secondary} />,
      title: "MSME Loans",
    },
    {
      id: 3,
      icon: <Navigation size={32} color={color.secondary} />,
      title: "Startup Funding & Angel Investment",
    },
    {
      id: 4,
      icon: <Navigation size={32} color={color.secondary} />,
      title: "Tax Advisory & Financial Structuring",
    },
  ];

  return (
    <Box
      id="workflow"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: color.black,
        color: color.white,
        textAlign: "center",
        height: "50vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            color: color.secondary,
            fontWeight: 600,
            mb: 2,
            letterSpacing: "1px",
            color: colors.secondary.main,
            fontFamily: "JosefinSans",
          }}
        >
          WHAT I OFFER
        </Typography>

        {/* Section Heading */}

        <Typography
          variant="h6"
          sx={{
            color: color.white,
            fontWeight: 500,
            fontSize: { xs: "2.2rem", md: "1rem" },
            mb: 1,
            lineHeight: 1.2,
            fontFamily: "MiriamLibre-Regular",
          }}
        >
          Comprehensive financial solutions tailored to help businesses thrive
          in today's competitive landscape.
        </Typography>

        <Divider
          sx={{
            width: "80px",
            margin: "20px auto",
            borderColor: colors.secondary.main,
            borderWidth: 2,
          }}
        />

        {/* Steps */}
        <Grid
          container
          spacing={6}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 7 }}
        >
          {steps.map((step) => (
            <Grid item size={{ xs: 12, md: 3 }} key={step.id}>
              <Box
                sx={{
                  p: 4,
                  paddingBottom: "5px",
                  borderBottom: `2px solid ${colors.secondary.main}`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ mb: 2 }}>{step.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: color.white,
                    fontSize: "1.2rem",
                    fontFamily: "MiriamLibre-Regular",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Call-to-Action Button */}
        {/* <Box sx={{ textAlign: "center", mt: 6 }}>
          <Box
            component="button"
            sx={{
              backgroundColor: color.black,
              color: color.black,
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: color.white,
              },
            }}
          >
            Schedule Free Call +
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Services;
