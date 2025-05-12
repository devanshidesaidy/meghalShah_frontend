import { Grid } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import banner from "../../assets/images/servicebg.png";
import img from "../../assets/images/04.png";
export default function Banner() {
  return (
    <Grid
      container
      // className="bannerImg"
      sx={{
        alignItems: "center",
        justifyContent: { xs: "center", lg: "normal" },
        height: { xs: "auto", lg: "100vh" },
        background: {
          xs: color.bgblack,
          md: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${banner})`,
        },
        backgroundRepeat: {
          xs: "initial", // or "no-repeat" if you still want that behavior
          md: "no-repeat",
        },
        backgroundSize: {
          xs: "initial",
          md: "cover",
        },
        backgroundPosition: {
          xs: "initial",
          md: "center",
        },
        zIndex: -1,
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
        <Grid
          sx={{
            ml: { xs: "none", md: "5rem", lg: "12rem" },
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))",
            p: 5,
            borderRadius: "20px",
          }}
        >
          <Grid
            className="font"
            sx={{
              fontSize: { xs: "3.5rem", md: "3rem", lg: "6rem" },
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
              fontFamily: "JosefinSans",
            }}
          >
            Meghal Shah
          </Grid>
          <Grid
            sx={{
              color: color.white,
              fontSize: "1.2rem",
              textAlign: { xs: "center", md: "left" },
              mt: 4,
              fontFamily: "MiriamLibre-Regular",
              letterSpacing: "0.1rem",
            }}
          >
            Strategic Financial Solutions
          </Grid>
          <Grid
            sx={{
              color: color.white,
              fontSize: "1.2rem",
              textAlign: { xs: "center", md: "left" },
              mt: 1,
              fontFamily: "MiriamLibre-Regular",
              letterSpacing: "0.1rem",
            }}
          >
            Sustainable Business
          </Grid>
          <Grid
            sx={{
              color: color.white,
              fontSize: "1.2rem",
              textAlign: { xs: "center", md: "left" },
              mt: 1,
              fontFamily: "MiriamLibre-Regular",
              letterSpacing: "0.1rem",
            }}
          >
            Business Growth
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
          height: { xs: "auto", sm: "auto", md: "35rem", lg: "55rem" },
          
          // backgroundColor: { xs: "black", md: "transparent" },
          // mt: 5,
        }}
      >
        <Grid sx={{display: { xs: "block", md: "none" },}}>

        <img
          src={img}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
        </Grid>
      </Grid>
    </Grid>
  );
}
