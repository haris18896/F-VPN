import React, { useEffect } from 'react'

import AOS from 'aos'
import { Container, Grid, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Icon from '../../assets/images/Icon.png'
import Icon2 from '../../assets/images/Icon2.png'
import icon3 from '../../assets/images/icon3.png'
import Icon4 from '../../assets/images/Icon4.png'
import EllipseOrange from '../../assets/images/EllipseOrange.png'
import backFriendsVpn from '../../assets/images/backFriendsvpn.svg'

import homePageSecondSectionStyles from '../../css/pages/home/secondSection'

function SecondSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  const clasess = homePageSecondSectionStyles()
  return (
    <div className={clasess.SecondSectionBackground}>
      <img className={clasess.secondSectionBackPIC} src={backFriendsVpn} alt='secondSectionBackPic' />
      <img className={clasess.circleImageTop} src={EllipseOrange} alt='circleImageTop' />
      <Container maxWidth='md'>
        <div className={clasess.headingDiv}>
          <hr className={clasess.horizontalLineTop} />
          <h1 data-aos='fade-zoom-in' className={clasess.secondSectionHeading}>
            FriendsVPN is Ideal for
          </h1>
        </div>

        <Grid className={clasess.imagesGridSecondSection} container spacing={0} style={{ justifyContent: 'center' }}>
          <Grid item xs={6} sm={6} md={3} className={clasess.grid__justify}>
            <LazyLoadImage
              alt='icon1'
              src={Icon}
              placeholder={
                <Skeleton
                  sx={{ borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto' }}
                  animation='wave'
                  variant='circular'
                  width={100}
                  height={100}
                />
              }
            />
            <p>Safe Browsing </p>
          </Grid>
          <Grid item xs={6} md={3} className={clasess.grid__justify}>
            <LazyLoadImage
              alt='icon2'
              src={Icon2}
              placeholder={
                <Skeleton
                  sx={{ borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto' }}
                  animation='wave'
                  variant='circular'
                  width={100}
                  height={100}
                />
              }
            />
            <p>Streaming </p>
          </Grid>
          <Grid item xs={6} md={3} className={clasess.grid__justify}>
            <LazyLoadImage
              alt='icon3'
              src={icon3}
              placeholder={
                <Skeleton
                  sx={{ borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto' }}
                  animation='wave'
                  variant='circular'
                  width={100}
                  height={100}
                />
              }
            />
            <p>Downloading </p>
          </Grid>
          <Grid item xs={6} md={3} className={clasess.grid__justify}>
            <LazyLoadImage
              alt='icon4'
              src={Icon4}
              placeholder={
                <Skeleton
                  sx={{ borderRadius: '50%', marginLeft: 'auto', marginRight: 'auto' }}
                  animation='wave'
                  variant='circular'
                  width={100}
                  height={100}
                />
              }
            />
            <p>Gaming </p>
          </Grid>
        </Grid>
      </Container>
      <hr className={clasess.horizontalLineBottom} />
    </div>
  )
}

export default SecondSection
