import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";

export default function WhyChoose() {
  return (
    <Grid sx={{ backgroundColor: "#000000" }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: "#FFD700", // Gold/Yellow
          pt: "5%",
          pb: "3%",
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "JosefinSans",
          textShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
        }}
      >
        Why Choose MSACA Bizzsolve LLP?
      </Grid>
      <Grid
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          color: "#FFFFFF",
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          fontFamily: "MiriamLibre-Regular",
          mb: 4,
        }}
      >
        ❝ At MSACA Bizzsolve LLP, we don't just offer financial services — we
        build long-lasting <br /> partnerships focused on growth, innovation,
        and success. ❞
      </Grid>
      <Container sx={{ py: "5%" }}>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={2.8}
            sx={{
              py: 3,
              transition: "all 0.4s ease",
              border: "1px solid #FFD700",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1A1A1A",
                transform: "translateY(-10px)",
                boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: "#FFD700",
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "JosefinSans",
              }}
            >
              Seasoned Expertise
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#FFFFFF",
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontFamily: "Palanquin",
              }}
            >
              A team of finance professionals with rich, hands-on experience
              across industries.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2.8}
            sx={{
              py: 3,
              transition: "all 0.4s ease",
              border: "1px solid #FFD700",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1A1A1A",
                transform: "translateY(-10px)",
                boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: "#FFD700",
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "JosefinSans",
              }}
            >
              Custom-Built Solutions
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#FFFFFF",
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontFamily: "Palanquin",
              }}
            >
              Financial strategies designed to align perfectly with your
              business objectives and market realities.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2.8}
            sx={{
              py: 3,
              transition: "all 0.4s ease",
              border: "1px solid #FFD700",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1A1A1A",
                transform: "translateY(-10px)",
                boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: "#FFD700",
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "JosefinSans",
              }}
            >
              Powerful Network
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#FFFFFF",
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontFamily: "Palanquin",
              }}
            >
              Direct access to top banks, financial institutions, and private
              investors.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2.8}
            sx={{
              py: 3,
              transition: "all 0.4s ease",
              border: "1px solid #FFD700",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#1A1A1A",
                transform: "translateY(-10px)",
                boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: "#FFD700",
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "JosefinSans",
              }}
            >
              360° Support
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#FFFFFF",
                pt: "2%",
                px: 3,
                textAlign: "center",
                fontFamily: "Palanquin",
              }}
            >
              From the first consultation to the final execution, we walk with
              you at every step of your financial journey.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
