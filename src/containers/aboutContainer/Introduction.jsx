import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/bannerSelf.png";
import { color } from "../../constant";
export default function Introduction() {
  return (
    <Grid
      sx={{ backgroundColor: color.mateblack, pt: { xs: "10%", md: "none" } }}
    >
      <Container>
        <Grid container sx={{gap:{xs:"none",md:"3rem",lg:"4rem"}}}>
          <Grid
            size={{
              xs: 12,
              md: 5.5,
            }}
            sx={{
              boxShadow: "rgb(255, 255, 255) 0px 7px 29px 0px",
              borderRadius:"20px",
            }}
          >
            <img src={img} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5.8 }}
            container
            sx={{ alignItems: "center" }}
          >
            <Grid sx={{mt:{xs:5,md:0}}}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: color.white,
                  textAlign: "justify",
                  textTransform: "capitalize",
                }}
              >
                I am CA Meghal Shah, a seasoned Chartered Accountant with over
                two decades of experience in the world of finance. Throughout my
                career, I have been committed to providing businesses with
                strategic financial solutions that faster growth, optimize
                operations, and ensure long-term financial success. My
                experience spans across diverse industries, enabling me to
                deliver tailor-made solutions that cater to the unique needs of
                each client.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  mt: 5,
                  color: color.white,
                  textAlign: "justify",
                  textTransform: "capitalize",
                }}
              >
                Having worked with startups, small-medium enterprises (SMEs),
                and large corporations, I understand the intricacies of
                financial challenges that businesses face at different stages of
                growth. Whether it's corporate finance, tax planning, or
                restructuring debt, my approach combines in-depth analysis with
                practical strategies that yield real results.
              </Typography>
            </Grid>
          </Grid>
        </Grid>


        <Grid container sx={{gap:{xs:"none",md:"3rem",lg:"4rem"},mt:10}}>
          
          <Grid
            size={{ xs: 12, md: 5.8 }}
            container
            sx={{ alignItems: "center" }}
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: color.white,
                  textAlign: "justify",
                  textTransform: "capitalize",
                }}
              >
               My philosophy is rooted in personalized service—I believe that every business is unique and deserves a solution that is crafted specifically for its needs. Over the years, I've built strong relationships with my clients, earning their trust by consistently delivering effective financial strategies and solutions.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  mt: 5,
                  color: color.white,
                  textAlign: "justify",
                  textTransform: "capitalize",
                }}
              >
                As I continue to help businesses navigate the complexities of the financial world, my goal remains clear: to empower businesses to achieve financial independence, stability, and growth that lasts.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 5.5,
            }}
            sx={{
              boxShadow: "rgb(255, 255, 255) 0px 7px 29px 0px",
              borderRadius:"20px",
              my:{xs:5,md:0}
            }}
          >
            <img src={img} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
