import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
const Introduction = () => {
  return (
    <Container>
      <Grid container>
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            my: 5,
          }}
        >
          <Typography sx={{ fontSize: "2rem" }}>
            Your Trusted Financial Strategist
          </Typography>
        </Grid>
        <Brightness1RoundedIcon
          sx={{
            marginLeft: "-18px",
            marginTop: { xs: "5px", sm: "0px" },
            fontSize: "2.3rem",
            display: { xs: "block", sm: "none" },
          }}
        />
        <Grid
          size={{ xs: 12, sm: 5.7 }}
          sx={{
            marginTop: {
              xs: "0%",
              sm: "25%",
              md: "15%",
              //   borderRight: "2px solid black",
            },
            borderLeft: {
              xs: "4px solid black",
              sm: "none",
            },
            borderBottom: {
              xs: "4px solid black",
              sm: "none",
            },
            paddingBottom: { xs: "5%", sm: "none" },
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              my: 1,
              p: 1.5,
              borderBottom: { xs: "none", sm: "4px solid black" },
              marginLeft: { xs: "0%", sm: "5%" },
              lineHeight: "2.2rem",
            }}
          >
            Expert Financial Advisory
          </Typography>
          <Brightness1RoundedIcon
            sx={{
              fontSize: "2.5rem",
              marginTop: "-5%",
              marginLeft: "-1%",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Typography
            sx={{ fontSize: "1rem", textAlign: "justify", padding: 1 }}
          >
            With over 20 years of experience, CA Meghal Shah brings a wealth of
            knowledge in guiding businesses to achieve their financial goals.
            From startups to large corporations, his services span across
            critical financial areas like funding, restructuring, and
            compliance.
          </Typography>
        </Grid>

        <Grid size={{ xs: 10, sm: 5.7 }} sx={{ borderLeft: "4px solid black" }}>
          <Brightness1RoundedIcon
            sx={{
              marginLeft: "-15px",
              marginTop: "-3px",
              fontSize: "2.3rem",
              display: { xs: "none", sm: "block" },
              //   marginTop: { xs: "-20%" },
            }}
          />
          <Typography
            sx={{
              fontSize: "2rem",
              my: 1,
              p: 1,
              marginTop: "10%",
              borderBottom: {
                xs: "none",
                sm: "4px solid black",
              },
              lineHeight: "2.2rem",
            }}
          >
            Customized Growth Strategies
          </Typography>
          <Brightness1RoundedIcon
            sx={{
              fontSize: "2.5rem",
              marginTop: "-6%",
              marginLeft: "95%",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "justify",
              padding: 1,
            }}
          >
            We understand that every business is unique. Whether it’s an MSME
            looking for loans or a startup preparing for angel funding, our
            tailored solutions ensure your financial strategies align with your
            business goals.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Introduction;
