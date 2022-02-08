import React, { useEffect } from 'react'
import AOS from 'aos'

import { Box } from '@mui/system'
import { Container, Grid, Stack, Typography } from '@mui/material'

import blob from '../../assets/images/about/Group 1.svg'
import ourMissionIcon from '../../assets/images/about/Group 1400.svg'
import aboutPageOurMissionStyles from '../../css/pages/about/ourMission'

const OurMission = () => {
  const classes = aboutPageOurMissionStyles()
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <Box className={classes.ourMissionAbout}>
      <img className={classes.blobOurMission} src={blob} alt='Blob Icon' />
      <Container maxWidth='xl' className={classes.ourMissionAboutContainer}>
        <Stack direction='row' justifyContent='center' alignItems='center' className={classes.aboutOurMissionIconWrapper}>
          <img src={ourMissionIcon} alt='our mission' className={classes.ourMissionIcon} />
        </Stack>
        <h1 data-aos='fade-zoom-in' className={classes.aboutHeadingSecondary}>
          Our Mission
        </h1>
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={10} md={7} lg={5} align='center'>
            <Typography variant='p' className={classes.aboutParagraph}>
              Our mission is to provide a secure and cost-effective means for everyone to browse securely on the internet while
              keeping them safe and anonymous. We aim to expand our global network of servers and enhance the VPN speed and
              server's performance while not compromising on privacy.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OurMission
