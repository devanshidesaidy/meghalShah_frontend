// import { Button, Container, Divider, Grid, Stack } from "@mui/material";
// import React from "react";
// import { color, path } from "../../constant";
// import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
// import { useNavigate } from "react-router-dom";
// export default function CallSection() {
//   const navigate = useNavigate();
//   return (
//     <Grid
//       sx={{
//         backgroundColor: color.pureblack,
//         color: color.white,
//         pt: "10%",
//         pb: "5%",
//       }}
//     >
//       <Container>
//         <Grid
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//           }}
//         >
//           <Grid
//             sx={{
//               fontSize: { xs: "0.9rem", md: "1.5rem", lg: "1.7rem" },
//               fontWeight: "bold",
//               fontFamily: "JosefinSans",
//               my: { xs: 3, md: 0 },
//               textAlign: { xs: "center", md: "left" },
//               letterSpacing: "0.1rem",
//             }}
//           >
//             " Get Started with Expert Financial Advisory "
//           </Grid>
//           <Divider
//             sx={{
//               bgcolor: color.greenFont,
//               borderWidth: "2px",
//               borderRadius: "10px",
//               mx: "2%",
//             }}
//           />
//           <Grid
//             sx={{
//               fontSize: { xs: "1rem", md: "1.2rem", lg: "1.4rem" },
//               my: { xs: 3, md: 0 },
//               textAlign: "center",
//               fontFamily: "MiriamLibre-Regular",
//             }}
//           >
//             Schedule a consultation with{" "}
//             <Stack
//               sx={{
//                 color: color.greenFont,
//                 fontWeight: "bold",
//                 display: "inline",
//               }}
//             >
//               CA Meghal Shah{" "}
//             </Stack>{" "}
//             today and take your business to the next level.
//           </Grid>
//           <Grid sx={{ display: "flex", justifyContent: "center" }}>
//             <Button
//               onClick={() => navigate(path.contact)}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: { xs: "none", md: "50%" },
//                 backgroundColor: color.greenFont,
//                 color: color.white,
//                 fontWeight: "bold",
//                 width: { xs: "30%", md: "auto" },
//                 transition: "0.7s",
//                 "&:hover": {
//                   backgroundColor: "transparent",
//                   border: "1px solid #ffffff",
//                 },
//                 ml: { xs: 0, md: 3 },
//               }}
//             >
//               <PermPhoneMsgIcon sx={{ fontSize: 40 }} />
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </Grid>
//   );
// }



import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { PhoneCall } from 'lucide-react';
import { colors } from '../../components/Theme';


const CallSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: colors.background.dark,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(${colors.secondary.main} 2px, transparent 2px)`,
          backgroundSize: '30px 30px',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid 
          container 
          spacing={4} 
          alignItems="center" 
          justifyContent="space-between"
          className="fade-in"
        >
          <Grid item size={{xs:12, md:7 }}>
            <Typography
              variant="h3"
              sx={{
                color: colors.text.light,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Get Started with Expert Financial Advisory
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: colors.text.light,
                opacity: 0.9,
                fontSize: '1.1rem',
                mb: 3,
              }}
            >
              Schedule a consultation with <Box component="span" sx={{ color: colors.secondary.main, fontWeight: 600 }}>CA Meghal Shah</Box> today and take your business to the next level.
            </Typography>
          </Grid>
          
          <Grid item size={{xs:12, md:5 }} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="#contact"
              startIcon={<PhoneCall size={20} />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(212, 175, 55, 0.4)',
                },
              }}
            >
              Book Your Consultation
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallSection;