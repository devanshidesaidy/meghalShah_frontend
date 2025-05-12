import { Grid } from "@mui/material";
import React from "react";
import AboutBanner from "../containers/aboutContainer/AboutBanner";
import Introduction from "../containers/aboutContainer/introduction";
import Mission from "../containers/aboutContainer/Mission";
import CoreValues from "../containers/aboutContainer/CoreValues";
import Awards from "../containers/aboutContainer/Awards";
import Client from "../containers/aboutContainer/Client";
import Approach from "../containers/aboutContainer/Approach";

export default function About() {
  return (
    <Grid>
      <AboutBanner />
      <Introduction />
      <Mission />
      <CoreValues />
      <Awards />
      <Approach />
      <Client />
    </Grid>
  );
}
