import React, { useState, useEffect } from 'react'
import AOS from 'aos'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import Vector from '../../assets/images/Key.svg'
import { Container, Grid, Avatar, Typography, Stack, Skeleton } from '@mui/material'
import homePageEightSectionStyles from '../../css/pages/home/eightSection'

function EightSection() {
  const clasess = homePageEightSectionStyles()

  const [isFreeUsersActive, setIsFreeUsersActive] = useState(false)
  const [isPremiumUsersActive, setIsPremiumUsersActive] = useState(true)

  const handleFreeUsers = () => {
    setIsFreeUsersActive(true)
    setIsPremiumUsersActive(false)
  }

  const handlePremiumUsers = () => {
    setIsFreeUsersActive(false)
    setIsPremiumUsersActive(true)
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  return (
    <div className={clasess.EightSectionBackground}>
      <Container maxWidth='lg'>
        <div className={clasess.eightSectionContent}>
          <hr className={clasess.eightSectionHR} />
          <h1 data-aos='fade-zoom-in' className={clasess.headingEightSection}>
            How it works
          </h1>

          <p className={clasess.paragraphEightSection}>
            Download FriendsVPN from Play Store <br /> or App store for Android and IOS respectively.
          </p>
        </div>

        <Grid className={clasess.imageAndContentWrapper} container spacing={2}>
          <Grid item xs={12} md={6} sm={6} className={clasess.contentContainer}>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              className={clasess.tabsWrapperForFreeAndPremiumUsers}
            >
              <div
                className={
                  isFreeUsersActive ? `${clasess.activeTabFreeAndPremiumUsers}` : `${clasess.notActiveTabFreeAndPremiumUsers}`
                }
              >
                <Stack justifyContent='center' alignItems='center' className={clasess.stack_small} onClick={handleFreeUsers}>
                  For Free Users
                </Stack>
              </div>
              <div
                className={
                  !isFreeUsersActive ? `${clasess.activeTabFreeAndPremiumUsers}` : `${clasess.notActiveTabFreeAndPremiumUsers}`
                }
              >
                <Stack justifyContent='center' alignItems='center' className={clasess.stack_small} onClick={handlePremiumUsers}>
                  For Premium Users
                </Stack>
              </div>
            </Stack>

            <div className={clasess.LeftContainerItems}>
              {!isFreeUsersActive && isPremiumUsersActive ? (
                <>
                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        1
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Chose Subscription Plan
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        2
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Sign Up
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        3
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Add Payment Method
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        4
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Select Country
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        5
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Click connect to use VPN
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        1
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Select Country
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container wrap='nowrap' spacing={2} className={clasess.listContentItems}>
                    <Grid item>
                      <Avatar
                        sx={{
                          outline: 'none',
                          border: 'none',
                          width: '26px',
                          height: '26px',
                          background: '#ffc10b',
                          color: 'black',
                          fontSize: '16px',
                        }}
                      >
                        2
                      </Avatar>
                    </Grid>
                    <Grid item xs>
                      <Typography style={{ fontFamily: 'Open Sans' }} fontSize='16px' fontWeight='600'>
                        Click connect to use VPN
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              )}
            </div>
          </Grid>

          <Grid item xs={12} md={6} sm={6} className={clasess.center__image}>
            <LazyLoadImage
              data-aos='zoom-in-left'
              alt='vector'
              src={Vector}
              style={{ width: '85%' }}
              placeholder={
                <Skeleton variant='rectangular'>
                  <img data-aos='zoom-in-left' style={{ width: '85%' }} src={Vector} alt='vector' />
                </Skeleton>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default EightSection
