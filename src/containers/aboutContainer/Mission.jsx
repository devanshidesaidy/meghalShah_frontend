import { Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";

export default function Mission() {
  return (
    <Grid sx={{ backgroundColor: color.greenFont }}>
      <Grid
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          color: color.mateblack,
          pt: "5%",
          px: 3,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Mission, Vision & Core Values
      </Grid>

      <Grid container>
        <Grid size={{xs:2}}>sdsd</Grid>
        <Grid>sdfs</Grid>
      </Grid>
    </Grid>
  );
}
