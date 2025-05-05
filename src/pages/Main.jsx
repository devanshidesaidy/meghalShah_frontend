import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Footer from "../components/Footer";

export default function Main({ screen }) {
  return (
    <Grid>
      <Navbar />                                                                                                      
      <Grid>{screen ? screen : <Home />}</Grid>
      <Footer/>
    </Grid>
  );
}
