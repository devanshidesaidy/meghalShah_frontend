// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";

// import { color } from "../../constant";

// export default function CoreValues() {
//   const res = [
//     {
//       name: "Integrity",
//       desc: "I prioritize honesty, transparency, and ethical practices in all my dealings, ensuring that clients can trust me to always act in their best interest.",
//     },
//     {
//       name: "Excellence",
//       desc: "I believe in delivering the highest standard of financial advice, ensuring that each client receives expert guidance that produces the best possible outcomes.",
//     },
//     {
//       name: "Personalization",
//       desc: "Each business is unique, and my solutions are tailored to address individual needs, challenges, and opportunities for growth.",
//     },
//     {
//       name: "Commitment",
//       desc: "I am dedicated to providing ongoing support to my clients, ensuring they continue to thrive and meet their financial goals.",
//     },
//     {
//       name: "Innovation",
//       desc: "I continually seek innovative approaches to solving complex financial problems, ensuring my clients stay ahead of the competition.",
//     },
//   ];
//   return (
//     <Grid
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         backgroundColor: color.bgblack,
//         px: { xs: 5, md: 0 },
//         pb: { xs: "5%", md: "7%" },
//       }}
//     >
//       <Container>
//         <Grid
//           sx={{
//             fontSize: { xs: "2.5rem", md: "3.5rem" },
//             color: color.greenFont,
//             pt: "4%",
//             fontFamily: "JosefinSans",
//             textAlign: "center",
//             fontWeight: "bold",
//           }}
//         >
//           Core Values
//         </Grid>
//         <Grid
//           container
//           sx={{ gap: "1rem" }}
//           my={{ xs: 3, md: 10 }}
//           justifyContent={"center"}
//         >
//           {res?.map((item, index) => (
//             <Grid
//               item
//               key={index}
//               size={{ xs: 12, sm: 5.5, md: 3, lg: 2.2 }}
//               sx={{
//                 transform: {
//                   xs: "none",
//                   lg: `translateY(${(index % 2) * 60}px)`,
//                 },
//               }}
//             >
//               <Card
//                 sx={{
//                   background: color.mateblack,
//                   position: "relative",
//                   overflow: "hidden",
//                   height: "300px",
//                   //   width: { xs: "250px", md: "170px", lg: "200px" },
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   padding: "1rem",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     color: color.greenFont,
//                     fontWeight: "bold",
//                     textAlign: "center",
//                     fontSize: "1.5rem",
//                     fontFamily: "MiriamLibre-Regular",
//                     pt: 1,
//                   }}
//                 >
//                   {item.name}
//                 </Typography>
//                 <Typography
//                   sx={{
//                     color: color.white,
//                     textAlign: "center",
//                     marginTop: "0.5rem",
//                     fontSize: "1.2rem",
//                     fontFamily: "Palanquin",
//                   }}
//                 >
//                   {item.desc}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Grid>
//   );
// }

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Lightbulb } from "lucide-react";
import { colors } from "../../components/Theme";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";

const MotionGridItem = motion(Paper);

const CoreValues = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component="section"
      id="core-values"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontFamily: "Playfair Display",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: colors.black,
            }}
          >
            Core Values
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#FFD700",
              mx: "auto",
              mb: 3,
              borderRadius: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            color="rgba(255, 255, 255, 0.8)"
            maxWidth="md"
            mx="auto"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            The principles that guide every aspect of my professional practice
            and client relationships.
          </Typography>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {[
              {
                name: "Integrity",
                description:
                  "I prioritize honesty, transparency, and ethical practices in all my dealings, ensuring that clients can trust me to always act in their best interest.",
                icon: <Shield size={40} color="#FFD700" />,
              },
              {
                name: "Excellence",
                description:
                  "I believe in delivering the highest standard of financial advice, ensuring that each client receives expert guidance that produces the best possible outcomes.",
                icon: <Award size={40} color="#FFD700" />,
              },
              {
                name: "Personalization",
                description:
                  "Each business is unique, and my solutions are tailored to address individual needs, challenges, and opportunities for growth.",
                icon: <Users size={40} color="#FFD700" />,
              },
              {
                name: "Commitment",
                description:
                  "I am dedicated to providing ongoing support to my clients, ensuring they continue to thrive and meet their financial goals.",
                icon: <Clock size={40} color="#FFD700" />,
              },
              {
                name: "Innovation",
                description:
                  "I continually seek innovative approaches to solving complex financial problems, ensuring my clients stay ahead of the competition.",
                icon: <Lightbulb size={40} color="#FFD700" />,
              },
            ].map((value, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MotionGridItem
                  elevation={0}
                  variants={itemVariants}
                  sx={{
                    backgroundColor: colors.background.dark,
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    width: "100%",
                    maxWidth: 400,
                    minHeight: 280,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#FFD700",
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(255, 215, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(255, 215, 0, 0.1)",
                      p: 2,
                      borderRadius: "50%",
                      mb: 3,
                      border: "1px solid rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#FFD700"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: 2 }}
                  >
                    {value.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="rgba(255, 255, 255, 0.8)"
                    textAlign="center"
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    {value.description}
                  </Typography>
                </MotionGridItem>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CoreValues;
