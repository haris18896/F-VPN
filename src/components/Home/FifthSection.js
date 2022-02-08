import React, { useEffect } from 'react'

import AOS from 'aos'
import { Container, Grid, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import fifthSection from '../../assets/images/FifthSection.svg'
import leftPic_2x from '../../assets/images/leftPic_2x.svg'
import leftPic_3x from '../../assets/images/leftPic_3x.svg'
import leftPic_4x from '../../assets/images/leftPic_4x.svg'

import homePageFifthSectionStyles from '../../css/pages/home/fifthSection'

function FifthSection() {
  const clasess = homePageFifthSectionStyles()
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <div>
      <div className={clasess.fifthSectionBackground}>
        <Container maxWidth='lg'>
          <Grid className={clasess.fourthSectionGrid} container spacing={6}>
            <picture className={clasess.fourth_Section_img_background}>
              <source media='(min-width: 1500px)' srcset={leftPic_4x} />
              <source media='(min-width: 1300px)' srcset={leftPic_3x} />
              <source media='(min-width: 1200px)' srcset={leftPic_2x} />

              <img src={leftPic_4x} alt='leftPic' />
            </picture>
            <Grid item xs={12} md={6} className={clasess.image_for_small_screen_5}>
              <LazyLoadImage
                data-aos='zoom-in-right'
                src={fifthSection}
                alt='fifthSection'
                delayMethod='debounce'
                delayTime='1000'
                placeholder={
                  <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular'>
                    <img src={fifthSection} alt='fifthSection' />
                  </Skeleton>
                }
              />
            </Grid>
            <Grid className={clasess.fourthSectionContent} item xs={12} md={6}>
              <hr className={clasess.fifthSectionHr} />
              <h1 className={clasess.FifthSectionHeading}>
                Bypass internet <br /> restrictions
              </h1>
              <p className={clasess.FifthSectionPara}>
                FriendsVPN lets you bypass geo-restrictions and censorships. So you have unrestricted access to content, websites,
                videos and more.&nbsp;
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default FifthSection
