import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import img from "../../assets/images/bannerSelf.png";
export default function MsaCa() {
  return (
    <Grid
      sx={{
        pt: 10,
        backgroundColor: color.pureblack,
      }}
    >
      <Container>
        <Grid container justifyContent={"space-between"}>
          <Grid
            size={{ xs: 12, md: 5.8}}
            container
            // sx={{ alignItems: "center" }}
          >
            <Grid mt={"5rem"}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Grid
                  sx={{
                    fontSize: { xs: "1.6rem", md: "1.5rem", lg: "1.7rem" },
                    fontWeight: "bold",
                    my: { xs: 3, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                    color: color.greenFont,
                  }}
                >
                  MSACA Bizzsolve LLP
                </Grid>
                <Divider
                  sx={{
                    bgcolor: color.greenFont,
                    borderWidth: "2px",
                    borderRadius: "10px",
                  }}
                />
                <Grid
                  sx={{
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    my: { xs: 3, md: 0 },
                    textAlign: "center",
                    color: color.white,
                  }}
                >
                  Driving {""}
                  <Stack
                    sx={{
                      color: color.greenFont,
                      fontWeight: "bold",
                      display: "inline",
                    }}
                  >
                    Financial Growth
                  </Stack>{" "}
                  with Strategic Solutions
                </Grid>
              </Grid>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  mt: 5,
                  color: color.white,
                 textAlign: {xs:"left",md:"justify"},
                  textTransform: "capitalize",
                }}
              >
                At MSACA Bizzsolve LLP, we are committed to empowering
                businesses with strategic financial solutions that drive growth,
                stability, and long-term success.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  mt: 5,
                  color: color.white,
                 textAlign: {xs:"left",md:"justify"},
                  textTransform: "capitalize",
                }}
              >
                Based in Ahmedabad, we specialize in helping companies secure
                funding, obtain business loans, manage debt restructuring, and
                optimize financial performance with a sharp, results-driven
                approach. Whether you are a startup, an SME, or a large
                enterprise, we craft tailor-made financial strategies to help
                you navigate challenges and capitalize on opportunities.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 5.3,
            }}
            sx={{
              boxShadow: "rgb(255, 255, 255) 0px 7px 29px 0px",
              borderRadius: "20px",
              my: { xs: 5, md: 0 },
            }}
          >
            <img src={img} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
