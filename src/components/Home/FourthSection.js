import React, { useEffect } from 'react'
import AOS from 'aos'

import { Container, Grid, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import FourthSectionImage from '../../assets/images/rocket.svg'
import homePageForthSectionStyles from '../../css/pages/home/forthSection'

function FourthSection() {
  const clasess = homePageForthSectionStyles()
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <div className={clasess.fourthSectionBackground}>
      <Container maxWidth='lg' style={{ overflow: 'hidden' }}>
        <Grid className={clasess.fourthSectionGrid} container spacing={6}>
          <Grid className={clasess.fourthSectionContent} item xs={12} md={6}>
            <hr className={clasess.fourthSectionHr} />
            <h1 className={clasess.FourthSectionHeading}>Enjoy High Speed & Unlimited bandwidth</h1>
            <p className={clasess.FourthSectionPara}>
              FriendsVPN offers a fast and reliable connection. Your browsing, downloading, streaming and gaming will always be
              ultra-fast with unlimited bandwidth.
            </p>
          </Grid>

          <Grid item xs={12} md={6} className={clasess.image_for_small_screen}>
            <LazyLoadImage
              data-aos='zoom-in-left'
              src={FourthSectionImage}
              alt='fourthSectionImage'
              delayMethod='debounce'
              delayTime='1000'
              placeholder={
                <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular'>
                  <img src={FourthSectionImage} alt='fourthSectionImage' />
                </Skeleton>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default FourthSection
