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
          " Together, We Transform Financial Visions into Reality. "
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "2rem" },
            color: color.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          Visit :
          <a
            style={{
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            href="https://www.msaca.co.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon /> www.msaca.co.in
          </a>
        </Typography>
      </Container>
    </Grid>
  );
}
