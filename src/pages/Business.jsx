import { Grid } from '@mui/material'
import React from 'react'
import BusinessBanner from '../containers/businessContainer/BusinessBanner'
import MsaCa from '../containers/businessContainer/MsaCa'
import CoreService from '../containers/businessContainer/CoreService'
import WhyChoose from '../containers/businessContainer/WhyChoose'
import Tagline from '../containers/businessContainer/Tagline'

export default function Business() {
  return (
   <Grid>
    <MsaCa/>
    <CoreService/>
    <BusinessBanner/>
    <WhyChoose/>
    <Tagline/>
   </Grid>
  )
}
