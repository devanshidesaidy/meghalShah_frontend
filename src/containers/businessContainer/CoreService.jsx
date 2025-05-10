import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import mission from "../../assets/svg/mission.png";
export default function CoreService() {
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
          fontFamily:"JosefinSans"
        }}
      >
        My Core Services
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
                fontFamily:"MiriamLibre-Regular"
              }}
            >
              Business Loans & Project Funding
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                fontFamily:"Palanquin"
              }}
            >
              Customized financing solutions including working capital loans,
              machinery loans, project funding, and expansion capital.
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
                 fontFamily:"MiriamLibre-Regular"
              }}
            >
              Debt Restructuring & Consolidation
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                fontFamily:"Palanquin"
              }}
            >
              Strengthen your financial foundation with expert debt management
              strategies that lower costs, improve cash flow, and enhance
              creditworthiness.
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
                 fontFamily:"MiriamLibre-Regular"
              }}
            >
              Project Finance & Financial Analysis
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                fontFamily:"Palanquin"
              }}
            >
              Deep insights into the financial viability of projects, cost
              optimization strategies, and structuring investments for
              sustainable growth.
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
                 fontFamily:"MiriamLibre-Regular"
              }}
            >
              Financial Advisory & Taxation Services
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: color.white,
                pt: "2%",
                px: 3,
                 textAlign: {xs:"center",md:"justify"},
                fontFamily:"Palanquin"
              }}
            >
              Comprehensive financial planning, tax advisory, compliance, and
              audit services to ensure operational efficiency and regulatory
              alignment
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
