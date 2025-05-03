import { Grid } from "@mui/material";
import React from "react";
import Banner from "../containers/homeContainer/Banner";
import Service from "../containers/homeContainer/Service";
import Client from "../containers/homeContainer/Client";
import CallSection from "../containers/homeContainer/CallSection";

export default function Home() {
  return (
    <Grid>
      <Banner />
      <Service />
      <Client />
      <CallSection />
    </Grid>
  );
}
