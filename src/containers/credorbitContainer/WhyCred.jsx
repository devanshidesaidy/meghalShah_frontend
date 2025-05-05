import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";

export default function WhyCred() {
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
        }}
      >
        ❝ At Credorbit, our mission is simple—make business <br/>financing faster, smarter, and frictionless. ❞
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
              }}
            >
             Speed
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "center",
                // fontWeight: "bold",
              }}
            >
             Instant processing with real-time approvals
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
              }}
            >
              Convenience:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "center",
                // fontWeight: "bold",
              }}
            >
              100% paperless, self-driven process.
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
              }}
            >
             Transparency
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "center",
                // fontWeight: "bold",
              }}
            >
              Clear eligibility, multiple bank options, and real-time tracking.
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
              }}
            >
              Empowerment
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                textAlign: "center",
                // fontWeight: "bold",
              }}
            >
              Whether you're a borrower, a DSA, a CA, or a bank partner, Credorbit gives you the tools to succeed.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
