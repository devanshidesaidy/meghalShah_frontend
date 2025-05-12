import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { color } from "../../constant";

export default function CoreValues() {
  const res = [
    {
      name: "Integrity",
      desc: "I prioritize honesty, transparency, and ethical practices in all my dealings, ensuring that clients can trust me to always act in their best interest.",
    },
    {
      name: "Excellence",
      desc: "I believe in delivering the highest standard of financial advice, ensuring that each client receives expert guidance that produces the best possible outcomes.",
    },
    {
      name: "Personalization",
      desc: "Each business is unique, and my solutions are tailored to address individual needs, challenges, and opportunities for growth.",
    },
    {
      name: "Commitment",
      desc: "I am dedicated to providing ongoing support to my clients, ensuring they continue to thrive and meet their financial goals.",
    },
    {
      name: "Innovation",
      desc: "I continually seek innovative approaches to solving complex financial problems, ensuring my clients stay ahead of the competition.",
    },
  ];
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: color.bgblack,
        px: { xs: 5, md: 0 },
        pb: { xs: "5%", md: "7%" },
      }}
    >
      <Container>
        <Grid
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: color.greenFont,
            pt: "4%",
            fontFamily: "JosefinSans",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Core Values
        </Grid>
        <Grid
          container
          sx={{ gap: "1rem" }}
          my={{ xs: 3, md: 10 }}
          justifyContent={"center"}
        >
          {res?.map((item, index) => (
            <Grid
              item
              key={index}
              size={{ xs: 12, sm: 5.5, md: 3, lg: 2.2 }}
              sx={{
                transform: {
                  xs: "none",
                  lg: `translateY(${(index % 2) * 60}px)`,
                },
              }}
            >
              <Card
                sx={{
                  background: color.mateblack,
                  position: "relative",
                  overflow: "hidden",
                  height: "300px",
                  //   width: { xs: "250px", md: "170px", lg: "200px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Typography
                  sx={{
                    color: color.greenFont,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontFamily: "MiriamLibre-Regular",
                    pt: 1,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    color: color.white,
                    textAlign: "center",
                    marginTop: "0.5rem",
                    fontSize: "1.2rem",
                    fontFamily: "Palanquin",
                  }}
                >
                  {item.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
