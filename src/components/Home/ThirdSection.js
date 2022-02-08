import React, { useEffect } from 'react'

import AOS from 'aos'
import { Container, Grid, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import thirdSection from '../../assets/images/new_images/Group_1364.svg'
import homePageThirdSectionStyles from '../../css/pages/home/thirdSection'

function ThirdSection() {
  const clasess = homePageThirdSectionStyles()

  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <div className={clasess.thirdSectionBackground}>
      <Container maxWidth='lg'>
        <Grid className={clasess.imagesGridThirdSection} container spacing={6}>
          <Grid item xs={12} sm={12} md={6} className={clasess.image_for_small_screen}>
            <LazyLoadImage
              data-aos='zoom-in-right'
              src={thirdSection}
              alt='thirdSectionImg'
              delayMethod='debounce'
              delayTime='1000'
              placeholder={
                <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular'>
                  <img src={thirdSection} alt='thirdSectionImage' />
                </Skeleton>
              }
            />
          </Grid>
          <Grid className={clasess.thirdSectionContent} item xs={12} md={6}>
            <hr className={clasess.thirdSectionHr} />
            <h1 className={clasess.headingThirdSection}>
              <span>Stay secure,</span> private <br />& anonymous online
            </h1>
            <p className={clasess.headingThirdSectionPara}>
              FriendsVPN provides complete privacy, security and anonymity every time you go online. Our Network of secure servers
              keeps you in control&nbsp;
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ThirdSection
