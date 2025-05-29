import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import aboutbg from "../../assets/images/IntroductionBackground.jpg";
import { Link } from "react-router-dom";


export default function AboutBanner() {
  return (
    <Grid
      sx={{
        backgroundImage: `url(${aboutbg})`,
        height: { xs: "20vh", md: "30vh" },
        marginTop: -8,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mt: 8,
      }}
    >
      <Grid sx={{display:"flex"  }}>

      <Grid sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="white">
          About Me
        </Typography>
        <Typography sx={{ color: "white", mt: 2, fontSize: 20 }}>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }} // force white color and remove underline
          >
            Home
          </Link>
          &nbsp;&nbsp;/&nbsp; About
        </Typography>
      </Grid>
     <Grid>
      
     </Grid>
      </Grid>
    </Grid>
  );
}
