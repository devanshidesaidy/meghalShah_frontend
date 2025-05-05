import { Grid } from '@mui/material'
import React from 'react'
import CredBanner from '../containers/credorbitContainer/CredBanner'
import Intro from '../containers/credorbitContainer/Intro'
import Offer from '../containers/credorbitContainer/Offer'
import WhyCred from '../containers/credorbitContainer/WhyCred'
import Tagline from '../containers/credorbitContainer/Tagline'


export default function () {
  return (
   <Grid>
    <CredBanner/>
    <Intro/>
    <Offer/>
    <WhyCred/>
    <Tagline/>
   </Grid>
  )
}
