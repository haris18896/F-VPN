import React from 'react'

import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Box } from '@mui/system'
import { Container, Grid, Button, Skeleton } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import Illustration from '../../assets/images/Illustration.svg'
import Abstract_1 from '../../assets/images/Abstract_1.svg'

import homePageFirstSectionStyles from '../../css/pages/home/firstSection'

function FirstSection() {
  const navigate = useNavigate()

  const clasess = homePageFirstSectionStyles()
  return (
    <Box className={clasess.firstSectionWrapper}>
      <Container maxWidth={'lg'} className={clasess.firstSectionContainer}>
        <Grid container className={clasess.firstSectionGrid} rowSpacing={10}>
          <Grid className={clasess.LeftGrid} item xs={12} sm={12} md={6}>
            <div className={clasess.leftGridText}>
              <h1 className={clasess.leftGridTextHeading}>Ultra-Fast, Secure & Private Internet access with FriendsVPN</h1>

              <p className={clasess.leftGridTextPara}>
                FriendsVPN protects your privacy above all and keeps your internet traffic safe and secure.
              </p>
              <Button
                onClick={() => navigate('/pricing')}
                className={clasess.button}
                variant='contained'
                endIcon={<ArrowRightIcon style={{ fontSize: '30px' }} />}
              >
                Get FriendsVPN
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <LazyLoadImage
              alt='rightImage'
              src={Illustration}
              className={clasess.rightImage}
              placeholder={
                <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular'>
                  <img src={Illustration} alt='rightImage' className={clasess.rightImage} />
                </Skeleton>
              }
            />
          </Grid>
        </Grid>
      </Container>
      <img className={clasess.abstractImage} src={Abstract_1} alt='abstractImage' />
    </Box>
  )
}

export default FirstSection
