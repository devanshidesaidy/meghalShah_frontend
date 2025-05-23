import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";

export default function WhyChoose() {
  // Color scheme
  const colors = {
    primary: "#4C85EB",       // Main blue
    secondary: "#EB184E",     // Accent red
    background: "#F5F7FA",    // Light background
    textDark: "#2D3748",      // Dark text
    textLight: "#FFFFFF",     // White text
    accent: "#FFD700"         // Gold accent
  };

  return (
    <Grid sx={{ backgroundColor: color.black, py: 8 }}>
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 3,
            background: `linear-gradient(90deg, ${color.greenFont} 0%, ${color.greenFont} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "JosefinSans, sans-serif"
          }}
        >
          Why Choose MSACA Bizzsolve LLP?
        </Typography>

        {/* Subheading */}
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            color: color.white,
            maxWidth: 800,
            mx: "auto",
            mb: 6,
            fontFamily: "MiriamLibre-Regular, sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.6
          }}
        >
          ❝ At MSACA Bizzsolve LLP, we don't just offer financial services — we build long-lasting partnerships focused on growth, innovation, and success. ❞
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "Seasoned Expertise",
              description: "A team of finance professionals with rich, hands-on experience across industries."
            },
            {
              title: "Custom-Built Solutions",
              description: "Financial strategies designed to align perfectly with your business objectives and market realities."
            },
            {
              title: "Powerful Network",
              description: "Direct access to top banks, financial institutions, and private investors."
            },
            {
              title: "360° Support",
              description: "From the first consultation to the final execution, we walk with you at every step of your financial journey."
            }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Grid
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 2,
                  backgroundColor: colors.textLight,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  borderLeft: `4px solid ${color.greenFont}`,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 10px 20px rgba(76, 133, 235, 0.2)`,
                    borderLeft: `4px solid ${color.greenFont}`
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: color.greenFont,
                    mb: 2,
                    fontWeight: "bold",
                    fontFamily: "JosefinSans, sans-serif"
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: colors.textDark,
                    fontFamily: "Palanquin, sans-serif",
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}