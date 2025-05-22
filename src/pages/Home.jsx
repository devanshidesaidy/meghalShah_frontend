import { Grid } from "@mui/material";
import React from "react";
import Banner from "../containers/homeContainer/Banner";
import Service from "../containers/homeContainer/Service";
// import Introduction from "../containers/homeContainer/Introduction";
import Client from "../containers/homeContainer/Client";
import CallSection from "../containers/homeContainer/CallSection";
import Introduction from "../containers/aboutContainer/Introduction";

export default function Home() {
  return (
    <Grid>
      <Banner />
      <Introduction/>
      {/* <Introduction /> */}
      <Service />
      <Client />
      <CallSection />
    </Grid>
  );
}
