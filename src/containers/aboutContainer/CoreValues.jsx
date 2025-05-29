import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Lightbulb } from "lucide-react";
import { colors } from "../../components/Theme";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { color } from "../../constant";

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const values = [
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
        "I am dedicated to providing ongoing support to my clients, ensuring they continue to thrive and meet their financial goals..",
      icon: <Clock size={40} color="#FFD700" />,
    },
    {
      name: "Innovation",
      description:
        "I continually seek innovative approaches to solving complex financial problems, ensuring my clients stay ahead of the competition.",
      icon: <Lightbulb size={40} color="#FFD700" />,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: color.gray,
      }}
    >
      <Container maxWidth="xl">
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#FFD700",
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
        </Box>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid
            container
            // Increas

            justifyContent="center"
            sx={{ px: { xs: 2, md: 4 } }} // Add padding to sides
          >
            {values.map((value, index) => (
              <Grid
                item
                size={{ xs: 12, sm: 6, md: 2 }}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  minWidth: { md: "280px" },

                  // Increased minimum width
                }}
              >
                <MotionGridItem
                  variants={itemVariants}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    bgcolor: color.black,
                    maxWidth: "180px", // Increased maximum width
                    minHeight: "320px", // Increased height
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#FFD700",
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 24px rgba(255, 215, 0, 0.15)",
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
