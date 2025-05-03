import { Button, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import { color } from "../../constant";
export default function CallSection() {
  return (
    <Grid
      sx={{
        backgroundColor: color.pureblack,
        color: color.white,
        pt: "10%",
        pb: "5%",
      }}
    >
      <Container>
        <Grid
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid
            sx={{ fontSize: { xs: "1rem", md: "2rem" }, fontWeight: "bold",my:{xs:3,md:0} }}
          >
            " Get Started with Expert Financial Advisory "
          </Grid>
          <Divider
            sx={{
              bgcolor: color.greenFont,
              borderWidth: "2px",
              borderRadius: "10px",
              mx: "2%",
            }}
          />
          <Grid
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              my: { xs: 5, md: 0 },
            }}
          >
            Schedule a consultation with{" "}
            <Stack
              sx={{
                color: color.greenFont,
                fontWeight: "bold",
                display: "inline",
              }}
            >
              CA Meghal Shah{" "}
            </Stack>{" "}
            today and take your business to the next level.
          </Grid>
          <Button sx={{  }} variant="contained">
            Call Me
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
