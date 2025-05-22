import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import { Handshake, LineChart, PieChart, FileText } from "lucide-react";

const MotionGridItem = motion(Grid);

const CoreService = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: "Business Loans & Project Funding",
      description:
        "Customized financing solutions including working capital loans, machinery loans, project funding, and expansion capital.",
      icon: <Handshake size={48} color="#FFD700" />,
    },
    {
      title: "Debt Restructuring & Consolidation",
      description:
        "Strengthen your financial foundation with expert debt management strategies that lower costs, improve cash flow, and enhance creditworthiness.",
      icon: <LineChart size={48} color="#FFD700" />,
    },
    {
      title: "Project Finance & Financial Analysis",
      description:
        "Deep insights into the financial viability of projects, cost optimization strategies, and structuring investments for sustainable growth.",
      icon: <PieChart size={48} color="#FFD700" />,
    },
    {
      title: "Financial Advisory & Taxation Services",
      description:
        "Comprehensive financial planning, tax advisory, compliance, and audit services to ensure operational efficiency and regulatory alignment.",
      icon: <FileText size={48} color="#FFD700" />,
    },
  ];

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
      },
    },
  };

  return (
    <Box
      component="section"
      id="core-services"
      sx={{
        py: 10,
        bgcolor: "#121212",
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
            My Core Services
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
        </Box>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <MotionGridItem
                item
                size={{ xs: 12, md: 3 }}
                key={index}
                variants={itemVariants}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    borderRadius: 2,
                    p: 4,
                    width: "100%",
                    maxWidth: 500,
                    minHeight: 300,
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
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#FFD700"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: 2 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="rgba(255, 255, 255, 0.8)"
                    textAlign="center"
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </MotionGridItem>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CoreService;
