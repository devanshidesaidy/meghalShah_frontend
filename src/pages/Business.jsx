import { Grid } from '@mui/material'
import React from 'react'
import BusinessBanner from '../containers/businessContainer/BusinessBanner'
import MsaCa from '../containers/businessContainer/msaCa'
import CoreService from '../containers/businessContainer/CoreService'
import WhyChoose from '../containers/businessContainer/WhyChoose'
import Tagline from '../containers/businessContainer/Tagline'

export default function Business() {
  return (
   <Grid>
    <BusinessBanner/>
    <MsaCa/>
    <CoreService/>
    <WhyChoose/>
    <Tagline/>
   </Grid>
  )
}
