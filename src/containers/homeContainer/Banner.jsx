import { Grid } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import img from "../../assets/images/dummy.png";

export default function Banner() {
  return (
    <Grid
      container
      className="bannerImg"
      sx={{
        alignItems: "center",
        justifyContent: { xs: "center", lg: "normal" },
        height: { xs: "auto", lg: "100vh" },
        marginTop:-8
      }}
    >
      <Grid
        size={{ xs: 11, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 8, md: "none" },
        }}
      >
        <Grid sx={{ ml: { xs: "none", md: "5rem", lg: "12rem" } }}>
          <Grid
            className="font"
            sx={{
              fontSize: { xs: "3.5rem", md: "3rem", lg: "6rem" },
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Meghal Shah
          </Grid>
          <Grid
            sx={{
              color: color.white,
              fontSize: "2rem",
              textAlign: { xs: "center", md: "left" },
              mt: 4,
            }}
          >
            Strategic Financial Solutions for Sustainable Business Growth
          </Grid>
          {/* <Grid
            sx={{
              color: color.white,
              mt: 3,
              lineHeight: "1.5rem",
              fontSize: "1.2rem",
            }}
          >
            CA Meghal Shah offers comprehensive financial consulting to
            businesses across sectors, specializing in Corporate Finance, MSME
            Loans, Debt Restructuring, and Angel Investments. We create
            tailor-made financial solutions that enhance growth and
            sustainability.
          </Grid> */}
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          height: { xs: "auto", sm: "auto", md: "35rem", lg: "47rem" },
          backgroundColor: { xs: "black", md: "transparent" },
          mt: 5,
        }}
      >
        <img
          src={img}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
}
