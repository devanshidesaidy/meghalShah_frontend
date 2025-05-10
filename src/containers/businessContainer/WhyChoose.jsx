import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";

export default function WhyChoose() {
  return (
    <Grid sx={{ backgroundColor: color.bgblack }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.greenFont,
          pt: "5%",
          pb: "3%",
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "JosefinSans",
        }}
      >
        Why Choose MSACA Bizzsolve LLP?
      </Grid>
      <Grid
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          color: color.white,
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          fontFamily:"MiriamLibre-Regular"
        }}
      >
        ❝ At MSACA Bizzsolve LLP, we don't just offer financial services — we
        build long-lasting <br /> partnerships focused on growth, innovation,
        and success. ❞
      </Grid>
      <Container sx={{ py: "5%" }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid
            size={{ xs: 12, md: 2.8 }}
            sx={{
              py: 3,
              transition: "transform 0.4s ease",
              boxShadow: "rgba(63, 63, 63, 63) 1.95px 1.95px 2.6px",
              "&:hover": {
                backgroundColor: color.mateblack,
                transform: "translateY(-10px)",
              },
              //   height: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: color.greenFont,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily:"JosefinSans"
              }}
            >
              Seasoned Expertise
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
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
            size={{ xs: 12, md: 2.8 }}
            sx={{
              py: 3,
              transition: "transform 0.5s ease",
              boxShadow: "rgba(63, 63, 63, 63) 1.95px 1.95px 2.6px",
              "&:hover": {
                backgroundColor: color.mateblack,
                transform: "translateY(-8px)",
              },
              //   height: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: color.greenFont,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily:"JosefinSans"
              }}
            >
              Custom-Built Solutions
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
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
            size={{ xs: 12, md: 2.8 }}
            sx={{
              py: 3,
              transition: "transform 0.5s ease",
              boxShadow: "rgba(63, 63, 63, 63) 1.95px 1.95px 2.6px",
              "&:hover": {
                backgroundColor: color.mateblack,
                transform: "translateY(-8px)",
              },
              //   height: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: color.greenFont,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily:"JosefinSans"
              }}
            >
              Powerful Network
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
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
            size={{ xs: 12, md: 2.8 }}
            sx={{
              py: 3,
              transition: "transform 0.5s ease",
              boxShadow: "rgba(63, 63, 63, 63) 1.95px 1.95px 2.6px",
              "&:hover": {
                backgroundColor: color.mateblack,
                transform: "translateY(-8px)",
              },
              //   height: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.4rem" },
                color: color.greenFont,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily:"JosefinSans"
              }}
            >
              360° Support
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
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
