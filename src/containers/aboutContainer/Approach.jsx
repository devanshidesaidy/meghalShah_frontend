import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { colors } from "../../components/Theme";
const MotionCard = motion(Card);

const Approach = () => {
  const [approachRef, approachInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [philosophyRef, philosophyInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Box
      component="section"
      id="approach"
      sx={{
        py: 10,

        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/pattern.png)",
          opacity: 0.05,
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            color="#FFD700"
            sx={{
              fontFamily: "Playfair Display",
              fontSize: { xs: "2.5rem", md: "3rem" },
            }}
          >
            Approach & Philosophy
          </Typography>
          <Divider
            sx={{
              width: 80,
              height: 4,
              bgcolor: "#FFD700",
              mx: "auto",
              my: 3,
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
            The methodology and principles that guide my financial advisory
            services.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Approach Card */}
          <Grid item xs={12} md={6}>
            <MotionCard
              ref={approachRef}
              initial={{ opacity: 0, y: 50 }}
              animate={approachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              sx={{
                borderRadius: 2,
                backgroundColor: colors.background.dark,
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 215, 0, 0.2)",
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
                  backgroundColor: colors.background.dark,
                  px: 3,
                  py: 2.5,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255, 215, 0, 0.2)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: colors.background.dark,
                    p: 1.5,
                    borderRadius: "50%",
                    display: "inline-flex",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                    mr: 2,
                  }}
                >
                  <Target size={32} color="#FFD700" />
                </Box>
                <Typography
                  variant="h5"
                  color="#FFD700"
                  fontWeight="bold"
                  sx={{ fontFamily: "Playfair Display" }}
                >
                  Approach
                </Typography>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography color="rgba(255, 255, 255, 0.8)" paragraph>
                  I adopt a{" "}
                  <strong style={{ color: "#FFD700" }}>
                    holistic approach
                  </strong>{" "}
                  to financial advisory, which means I look at every aspect of a
                  business's financial health—from day-to-day operations to
                  long-term growth plans.
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.8)" paragraph>
                  My goal is to provide practical, sustainable solutions that
                  drive efficiency, reduce costs, and ensure financial
                  stability.
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.8)">
                  Through regular assessments and strategic planning, I work
                  closely with clients to ensure their financial strategies
                  align with their overall business objectives.
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>

          {/* Philosophy Card */}
          <Grid item xs={12} md={6}>
            <MotionCard
              ref={philosophyRef}
              initial={{ opacity: 0, y: 50 }}
              animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                borderRadius: 2,
                backgroundColor: colors.background.dark,
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 215, 0, 0.2)",
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
                  backgroundColor: colors.background.dark,
                  px: 3,
                  py: 2.5,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255, 215, 0, 0.2)",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(255, 215, 0, 0.1)",
                    p: 1.5,
                    borderRadius: "50%",
                    display: "inline-flex",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                    mr: 2,
                  }}
                >
                  <Lightbulb size={32} color="#FFD700" />
                </Box>
                <Typography
                  variant="h5"
                  color="#FFD700"
                  fontWeight="bold"
                  sx={{ fontFamily: "Playfair Display" }}
                >
                  Philosophy
                </Typography>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography color="rgba(255, 255, 255, 0.8)" paragraph>
                  At the heart of my work is a deep commitment to{" "}
                  <strong style={{ color: "#FFD700" }}>
                    personalized service
                  </strong>
                  . I believe in building strong, long-term relationships with
                  my clients based on trust and mutual respect.
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.8)" paragraph>
                  My philosophy revolves around{" "}
                  <strong style={{ color: "#FFD700" }}>
                    making finance simple and accessible
                  </strong>{" "}
                  for businesses, regardless of size or complexity.
                </Typography>
                <Typography color="rgba(255, 255, 255, 0.8)">
                  I take pride in providing clear, actionable insights that
                  empower my clients to make informed decisions for sustained
                  success. Above all, my focus is always on{" "}
                  <strong style={{ color: "#FFD700" }}>delivering value</strong>
                  —ensuring that every financial strategy contributes directly
                  to the growth and success of the business.
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Approach;
