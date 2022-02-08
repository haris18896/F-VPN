import React from 'react'

import { Container, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import L from '../../assets/images/L.svg'
import AA from '../../assets/images/AA.svg'
import Apple from '../../assets/images/Apple.svg'
import Windows from '../../assets/images/Woindows.svg'
import Android from '../../assets/images/Android.svg'
import left from '../../assets/images/line and fri/left.svg'
import right from '../../assets/images//line and fri/right.svg'

import homePageSeventhSectionStyles from '../../css/pages/home/seventhSection'

function SevenSection() {
  const clasess = homePageSeventhSectionStyles()
  return (
    <div className={clasess.SevenSectionBackground}>
      <Container style={{ textAlign: 'center', padding: '0' }} maxWidth={true}>
        <div className={clasess.backgroundContainer}>
          <div className={clasess.imagesContent}>
            <img className={clasess.left} src={left} alt='left' />
            <img className={clasess.right} src={right} alt='right' />
            <h1 className={clasess.HeadingSeventhSection}>We've got all your devices covered:</h1>
            <div className={clasess.devices__list}>
              <LazyLoadImage
                alt='apple'
                className={clasess.icon_img}
                src={Apple}
                delayMethod='debounce'
                delayTime={1000}
                placeholder={
                  <Skeleton variant='rectangular'>
                    <img src={Apple} alt='apple' className={clasess.icon_img} />
                  </Skeleton>
                }
              />
              <LazyLoadImage
                alt='Windows'
                className={clasess.icon_img}
                src={Windows}
                delayMethod='debounce'
                delayTime={1000}
                placeholder={
                  <Skeleton variant='rectangular'>
                    <img src={Windows} alt='Windows' className={clasess.icon_img} />
                  </Skeleton>
                }
              />
              <LazyLoadImage
                alt='Android'
                className={clasess.icon_img}
                src={Android}
                delayMethod='debounce'
                delayTime={1000}
                placeholder={
                  <Skeleton variant='rectangular'>
                    <img src={Android} alt='Android' className={clasess.icon_img} />
                  </Skeleton>
                }
              />
              <LazyLoadImage
                alt='AA'
                className={clasess.icon_img}
                src={AA}
                delayMethod='debounce'
                delayTime={1000}
                placeholder={
                  <Skeleton variant='rectangular'>
                    <img src={AA} alt='AA' className={clasess.icon_img} />
                  </Skeleton>
                }
              />
              <LazyLoadImage
                alt='L'
                className={clasess.icon_img}
                src={L}
                delayMethod='debounce'
                delayTime={1000}
                placeholder={
                  <Skeleton variant='rectangular'>
                    <img src={L} alt='L' className={clasess.icon_img} />
                  </Skeleton>
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SevenSection
