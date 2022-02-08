import React, { useEffect } from 'react'

import AOS from 'aos'
import { Container, Grid, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import cash from '../../assets/images/cash.png'
import internet from '../../assets/images/internet.png'
import server from '../../assets/images/server.png'
import encrypt from '../../assets/images/encrypt.png'
import connection from '../../assets/images/connections.png'
import error from '../../assets/images/error.png'
import split from '../../assets/images/split.png'
import kill from '../../assets/images/Group_1404.png'

import homePageSixthSectionStyles from '../../css/pages/home/sixthSection'

function SixthSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  const clasess = homePageSixthSectionStyles()
  return (
    <div className={clasess.maskBackground}>
      <div className={clasess.sixthSectionBackground}>
        <Container style={{ textAlign: 'center' }} maxWidth='lg'>
          <hr className={clasess.horizontalLineTop} />
          <h1 data-aos='fade-zoom-in' className={clasess.HeadingSixthSection}>
            We are providing amazing features
          </h1>

          <Grid className={clasess.GridSixthSection} container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='icon1'
                src={cash}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={cash} alt='icon1' />
                  </Skeleton>
                }
              />
              <h3>Free and paid Services</h3>
              <p>We offer both free and paid VPN services. Our paid services add more features and capabilities</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='icon2'
                src={internet}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={internet} alt='icon2' />
                  </Skeleton>
                }
              />
              <h3>Multiple VPN Protocols</h3>
              <p>
                We support multiple VPN Protocols which are not only popular but industry-proven. We support OpenVPN UDP/TCP and
                WireGuard
              </p>
              
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='icon3'
                src={server}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={server} alt='icon3' />
                  </Skeleton>
                }
              />
              <h3>Multiple Server Locations</h3>
              <p>Our global network of 500+ servers provides multiple locations to avail the service</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='icon4'
                src={encrypt}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={encrypt} alt='icon4' />
                  </Skeleton>
                }
              />
              <h3>AES Encryption</h3>
              <p>Your data is protected with highest-grade AES encryption</p>
            </Grid>
          </Grid>

          <Grid style={{ marginTop: '2rem' }} className={clasess.GridSixthSection} container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='img1'
                src={connection}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={connection} alt='img1' />
                  </Skeleton>
                }
              />
              <h3>5 Concurrent Connections</h3>
              <p>We support up to 5 simultaneous connections to make sure your entire family remains protected</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='error'
                src={error}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={error} alt='error' />
                  </Skeleton>
                }
              />
              <h3>No-Log VPN</h3>
              <p>FriendsVPN does not keep logs. Your online activity remains hidden and secure</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='split'
                src={split}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={split} alt='split' />
                  </Skeleton>
                }
              />
              <h3>Split Tunneling</h3>
              <p>
                We offer a choice to use VPN on a per-app basis. It enables you to route internet traffic between FriendsVPN and
                ISP
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <LazyLoadImage
                alt='kill'
                src={kill}
                placeholder={
                  <Skeleton variant='circular' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <img src={kill} alt='kill' />
                  </Skeleton>
                }
              />
              <h3>Internet Kill switch</h3>
              <p>Ensure your privacy remains intact when the VPN connection drops</p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default SixthSection
