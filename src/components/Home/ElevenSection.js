import React, { useEffect } from 'react'
import AOS from 'aos'

import { Container, Grid } from '@mui/material'
import cardIcon from '../../assets/images/cardIcon.svg'
import homePageEleventhSectionStyles from '../../css/pages/home/eleventhSection'

function ElevenSection() {
  const clasess = homePageEleventhSectionStyles()
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <div className={clasess.ElevenSectionBackground}>
      <div className={clasess.ElevenSectionWrapperContainer}>
        <Container maxWidth='lg'>
          <div className={clasess.ContentWrapperEleven}>
            <hr className={clasess.ninthSectionHR} />

            <h1 data-aos='fade-zoom-in' className={clasess.elevenHeading}>
              Reviews
            </h1>
          </div>

          <Grid className={clasess.GridContainerEleven} container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <div className={clasess.cardOne}>
                <p className={clasess.cardTextOne}>
                  FriendsVPN has a world-class server infrastructure, It provides exceptional speed with fast connectivity time.
                  It keeps improving over time
                </p>
                <h3 className={clasess.headingOneSecEleven}>Lucas Berry</h3>
              </div>
            </Grid>

            <Grid style={{ position: 'relative', zIndex: '2' }} item xs={12} sm={12} md={6}>
              <img className={clasess.eleventhSectionImage} src={cardIcon} alt='eleventhSectionImage' />

              <div className={clasess.CardTwo}>
                <p className={clasess.cardTextTwo}>
                  FriendsVPN works amazingly well. It is very easy to use. There is no need to buy a subscription to use it. I
                  highly recommend it to users who want to use free VPN with no compromise on quality
                </p>
                <h3 className={clasess.headingTwoSecEleven}>Peter Slavoka</h3>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default ElevenSection
