import { Grid } from '@mui/material'
import React from 'react'
import AboutBanner from '../containers/aboutContainer/aboutBanner'
import Introduction from '../containers/aboutContainer/introduction'
import Mission from '../containers/aboutContainer/Mission'

export default function About() {
  return (
    <Grid>
        <AboutBanner/>
        <Introduction/>
        <Mission/>
    </Grid>
  )
}
