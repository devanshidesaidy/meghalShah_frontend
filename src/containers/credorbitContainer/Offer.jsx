import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";
export default function Offer() {
  return (
    <Grid sx={{ backgroundColor: color.bgblack }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.greenFont,
          pt: "5%",
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
      What I Offer
      </Grid>
      <Container sx={{ py: "5%" }}>
        <Grid container sx={{ justifyContent: "space-between", gap: "2rem" }}>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            sx={{
              border: `1px solid ${color.greenFont}`,
              py: 3,
              borderRadius: "20px",
              transition: "1s",
              "&:hover": {
                backgroundColor: color.greenFont,
              },
            }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter: "invert(100%) brightness(200%)",
                }}
                src={mission}
              />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                color: color.white,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
             Instant Loan Eligibility Checks
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                // fontWeight: "bold",
              }}
            >
              Get real-time loan eligibility results in less than 2 minutes without any manual intervention.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            sx={{
              border: `1px solid ${color.greenFont}`,
              py: 3,
              borderRadius: "20px",
              transition: "1s",
              "&:hover": {
                backgroundColor: color.greenFont,
              },
            }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter: "invert(100%) brightness(200%)",
                }}
                src={mission}
              />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                color: color.white,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Automated Document Management
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                // fontWeight: "bold",
              }}
            >
       AI-powered document validation, smart uploads, and seamless tracking—no paperwork, no bottlenecks.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            sx={{
              border: `1px solid ${color.greenFont}`,
              py: 3,
              borderRadius: "20px",
              transition: "1s",
              "&:hover": {
                backgroundColor: color.greenFont,
              },
            }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter: "invert(100%) brightness(200%)",
                }}
                src={mission}
              />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                color: color.white,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Multi-Bank Loan Options
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                // fontWeight: "bold",
              }}
            >
              Explore, compare, and apply to multiple banks from a single platform—giving borrowers and partners the ultimate flexibility.
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            sx={{
              border: `1px solid ${color.greenFont}`,
              py: 3,
              borderRadius: "20px",
              transition: "1s",
              "&:hover": {
                backgroundColor: color.greenFont,
              },
            }}
          >
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  filter: "invert(100%) brightness(200%)",
                }}
                src={mission}
              />
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.7rem" },
                color: color.white,
                pt: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Self-Service, No Sales Reps Needed
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                // fontWeight: "bold",
              }}
            >
              The complete loan journey, from eligibility to approval, is managed independently by users with intuitive dashboards and real-time updates.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
