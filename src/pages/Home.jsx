import { Grid } from "@mui/material";
import React from "react";
import Banner from "../containers/homeContainer/Banner";
import Service from "../containers/homeContainer/Service";
import Introduction from "../containers/homeContainer/Introduction";

export default function Home() {
  return (
    <Grid>
      <Banner />
      <Introduction />
      <Service />
    </Grid>
  );
}
