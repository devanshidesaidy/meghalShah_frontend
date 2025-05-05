import { Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";

export default function BusinessBanner() {
  return (
    <Grid
      sx={{
        backgroundColor: color.bgblack,
        height: { xs: "50vh", md: "60vh" },
        marginTop: -8,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Grid sx={{display:{xs:"none",md:"block"}}}></Grid> */}
      <Typography
        sx={{
          color: color.greenFont,
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "2px rgb(66, 77, 71)",
          fontSize: { xs: "50px", md: "90px" },
          fontWeight: 900,
          textAlign: "center",
        }}
      >
        MSACA Bizzsolve LLP
      </Typography>
    </Grid>
  );
}
