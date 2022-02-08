import React, { useEffect } from 'react'

import AOS from 'aos'
import { Box } from '@mui/system'
import { Container, Grid, Stack, Typography } from '@mui/material'

import ourVisionIcon from '../../assets/images/about/Group 1401.svg'
import aboutPageOurVisionStyles from '../../css/pages/about/ourVision'

const OurVision = () => {
  const classes = aboutPageOurVisionStyles()
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])
  return (
    <Box className={classes.ourVisionAbout}>
      <Container maxWidth='xl' className={classes.ourVisionAboutContainer}>
        <Stack direction='row' justifyContent='center' alignItems='center' className={classes.aboutOurVisionIconWrapper}>
          <img src={ourVisionIcon} alt='our Vision' className={classes.ourVisionIcon} />
        </Stack>
        <h1 data-aos='fade-zoom-in' className={classes.aboutHeadingSecondary}>
          Our Vision
        </h1>

        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={10} md={7} lg={5} align='center'>
            <Typography variant='p' className={classes.aboutParagraph}>
              Our Vision is to provide a secure and cost-effective means for everyone to browse securely on the internet while
              keeping them safe and anonymous. We aim to expand our global network of servers and enhance the VPN speed and
              server's performance while not compromising on privacy.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OurVision
