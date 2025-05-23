import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";

export default function Offer() {
  return (
    <Grid sx={{ backgroundColor: color.white, color: color.black, py: 5 }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.black,
          py: 5,
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "JosefinSans",
        }}
      >
        What I Offer
      </Typography>

      <Container>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {/* Card 1 */}
          <Grid item xs={12} md={5.8}>
            <Grid
              sx={{
                backgroundColor: color.black,
                p: 3,
                height: "100%",
                borderRadius: "20px",
              }}
            >
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={mission}
                  alt="Instant Loan Eligibility"
                  style={{
                    filter: "invert(100%)",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Grid>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.7rem" },
                  color: color.white,
                  pt: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "MiriamLibre-Regular",
                }}
              >
                Instant Loan Eligibility Checks
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: color.white,
                  pt: 2,
                  textAlign: { xs: "center", md: "justify" },
                  fontFamily: "Palanquin",
                }}
              >
                Get real-time loan eligibility results in less than 2 minutes
                without any manual intervention.
              </Typography>
            </Grid>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={5.8}>
            <Grid
              sx={{
                backgroundColor: color.black,
                p: 3,
                height: "100%",
                borderRadius: "20px",
              }}
            >
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={mission}
                  alt="Automated Document Management"
                  style={{
                    filter: "invert(100%)",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Grid>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.7rem" },
                  color: color.white,
                  pt: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "MiriamLibre-Regular",
                }}
              >
                Automated Document Management
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: color.white,
                  pt: 2,
                  textAlign: { xs: "center", md: "justify" },
                  fontFamily: "Palanquin",
                }}
              >
                AI-powered document validation, smart uploads, and seamless
                tracking—no paperwork, no bottlenecks.
              </Typography>
            </Grid>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={5.8}>
            <Grid
              sx={{
                backgroundColor: color.black,
                p: 3,
                height: "100%",
                borderRadius: "20px",
              }}
            >
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={mission}
                  alt="Multi-Bank Loan Options"
                  style={{
                    filter: "invert(100%)",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Grid>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.7rem" },
                  color: color.white,
                  pt: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "MiriamLibre-Regular",
                }}
              >
                Multi-Bank Loan Options
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: color.white,
                  pt: 2,
                  textAlign: { xs: "center", md: "justify" },
                  fontFamily: "Palanquin",
                }}
              >
                Explore, compare, and apply to multiple banks from a single
                platform—giving borrowers and partners the ultimate flexibility.
              </Typography>
            </Grid>
          </Grid>

          {/* Card 4 */}
          <Grid item xs={12} md={5.8}>
            <Grid
              sx={{
                backgroundColor: color.black,
                p: 3,
                height: "100%",
                borderRadius: "20px",
              }}
            >
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={mission}
                  alt="Self-Service"
                  style={{
                    filter: "invert(100%)",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </Grid>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.7rem" },
                  color: color.white,
                  pt: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "MiriamLibre-Regular",
                }}
              >
                Self-Service, No Sales Reps Needed
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: color.white,
                  pt: 2,
                  textAlign: { xs: "center", md: "justify" },
                  fontFamily: "Palanquin",
                }}
              >
                The complete loan journey, from eligibility to approval, is
                managed independently by users with intuitive dashboards and
                real-time updates.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
