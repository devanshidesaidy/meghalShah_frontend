import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import LanguageIcon from "@mui/icons-material/Language";

export default function Tagline() {
  return (
    <Grid sx={{ backgroundColor: color.white }}>
      <Container sx={{ py: "5%" }}>
        <Typography
          sx={{
            color: color.black,
            fontSize: { xs: "1.4rem", md: "2.7rem" },
            // fontWeight: "bold",
            fontFamily: "MiriamLibre-Regular",
            letterSpacing: "0.1rem",
            textAlign:{xs:"center",md:"left"}
          }}
        >
          " Credorbit – Powering Instant Business Growth. "
        </Typography>
      </Container>
    </Grid>
  );
}
