import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import LanguageIcon from "@mui/icons-material/Language";

export default function Tagline() {
  return (
    <Grid sx={{ backgroundColor: color.greenFont }}>
      <Container sx={{ py: "5%" }}>
        <Typography
          sx={{
            color: color.white,
            fontSize: { xs: "1.4rem", md: "2.85rem" },
            // fontWeight: "bold",
            fontFamily: "fantasy",
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
