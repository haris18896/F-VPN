import React, { useEffect, useState } from 'react'

import AOS from 'aos'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import { Container, Grid, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import map from '../../assets/images/map.png'
import Phone from '../../assets/images/Phone.png'
import global from '../../assets/images/global.png'
import placeholder from '../../assets/images/placeholder.png'
import homePageNinthSectionStyles from '../../css/pages/home/ninthSection'

function NinthSection() {
  const clasess = homePageNinthSectionStyles()
  // eslint-disable-next-line no-unused-vars
  const [scrollStatus, setScrollStatus] = useState(true)
  const onvisibilitychange = isVisible => {
    if (isVisible) {
      setScrollStatus(true)
    } else {
      setScrollStatus(false)
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <div className={clasess.sectionNinthBackground}>
      <Container maxWidth='lg'>
        <div className={clasess.contentWrapperNinth}>
          <hr className={clasess.ninthSectionHR} />

          <h1 data-aos='fade-zoom-in' className={clasess.headingSectionNine}>
            Our Global network of <br /> Ultra-Fast VPN servers
          </h1>

          <Grid className={clasess.NineSectionGrid} container spacing={0}>
            <div className={clasess.content__wrapper}>
              <LazyLoadImage
                alt='map'
                src={map}
                className={clasess.count_img}
                placeholder={
                  <Skeleton animation='wave' variant='rectangular'>
                    <img src={map} alt='img1' className={clasess.count_img} />
                  </Skeleton>
                }
              />
              <div className={clasess.counting}>
                <p>
                  <CountUp end={25} redraw={true} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  + <br />
                </p>
                <span style={{ fontWeight: '500', fontSize: '17px', color: 'black' }}>Countries</span>&nbsp;
              </div>
            </div>
            <div className={clasess.content__wrapper}>
              <LazyLoadImage
                alt='placeholder'
                src={placeholder}
                className={clasess.count_img}
                placeholder={
                  <Skeleton animation='wave' variant='rectangular'>
                    <img src={placeholder} alt='placeholder' className={clasess.count_img} />
                  </Skeleton>
                }
              />
              <div className={clasess.counting}>
                <p>
                  <CountUp end={60} redraw={true} duration={2.5}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  + <br />
                </p>
                <span style={{ fontWeight: '500', fontSize: '17px', color: 'black' }}>Locations</span>&nbsp;
              </div>
            </div>
            <div className={clasess.content__wrapper}>
              <LazyLoadImage
                alt='Phone'
                src={Phone}
                className={clasess.count_img}
                placeholder={
                  <Skeleton animation='wave' variant='rectangular'>
                    <img src={Phone} alt='Phone' className={clasess.count_img_3} />
                  </Skeleton>
                }
              />
              <div className={clasess.counting}>
                <p>
                  <CountUp end={500} redraw={true} duration={3}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  + <br />
                </p>
                <span style={{ fontWeight: '500', fontSize: '17px', color: 'black' }}>Servers</span>&nbsp;
              </div>
            </div>
          </Grid>
        </div>

        <LazyLoadImage
          alt='global'
          src={global}
          style={{ width: '100%', marginTop: '3rem' }}
          placeholder={
            <Skeleton animation='wave' variant='rectangular'>
              <img style={{ width: '100%', marginTop: '3rem' }} alt='global' src={global} />
            </Skeleton>
          }
        />
      </Container>
    </div>
  )
}

export default NinthSection
