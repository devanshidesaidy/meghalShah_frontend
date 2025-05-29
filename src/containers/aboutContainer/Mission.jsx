import { Box, Container, Grid, Typography } from "@mui/material";
import { color } from "../../constant";

export default function Mission() {
  return (
    <Box sx={{backgroundColor:color.black, p:5}}>

    <Container maxWidth="lg"   sx={{ color: "black", }} >
  <Typography
             variant="h2"
             fontWeight="bold"
             sx={{
               fontFamily: "'Playfair Display', serif",
               mb: 2,
               fontSize: { xs: "2rem", md: "2.75rem" },
               color: "#FFD700",
               textAlign:"center"
             }}
           >
            Mission & Vision 
           </Typography>
      <Grid size={{ xs: 12, ms: 12 }} sx={{bgcolor:color.black}}>
        <Grid
          bgcolor={"gray"}
          sx={{
            display: {
              md: "flex",
              sm: "block",
              xs:"black"
            },
            
          }}
          gap={10}
          p={7}
            mt={2}
            borderRadius={7}
            >
          <Typography
            fontSize={25}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
            >
            Mission
          </Typography>

          <Typography fontSize={25} color="white" sx={{ textAlign: "justify" }}>
            My mission is to empower businesses with strategic financial advice
            that drives sustainable growth, enhances performance, and ensures
            long-term financial stability. I am committed to delivering
            effective, personalized solutions that adapt to evolving financial
            landscapes and support lasting success.
          </Typography>
        </Grid>
        <Grid
          bgcolor={"gray"}
          sx={{
            display: {
              md: "flex",
              sm: "block",
              xs:"black"
            },
            
          }}
          gap={10}
          p={7}
          borderRadius={7}
          mt={2}
          mb={2}
          >
          <Typography
            fontSize={25}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
            >
            Vision
          </Typography>

          <Typography fontSize={25} color="white" sx={{ textAlign: "justify" }}>
            To be a trusted financial partner for businesses across industries,
            empowering them to achieve financial independence, unlock their full
            potential, and reach lasting success. I aim to deliver high-quality,
            customized financial solutions that exceed expectations and drive
            real, measurable results.
          </Typography>
        </Grid>
      </Grid>
    </Container>
            </Box>
  );
}
