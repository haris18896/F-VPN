import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { handleFetchPlans } from '../../redux/actions/plan'
import { PLAN_SELECTED } from '../../redux/actions/actionTypes/plan'

import Step from '../step/Step'
import { Typography } from '@material-ui/core'
import { Container, Grid, Skeleton, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Box } from '@mui/material'

import L from '../../assets/images/L.svg'
import AA from '../../assets/images/AA.svg'
import CheckIcon from '@mui/icons-material/Check'
import Apple from '../../assets/images/Apple.svg'
import Android from '../../assets/images/Android.svg'
import cardOne from '../../assets/images/cardOne.png'
import Windows from '../../assets/images/Woindows.svg'
import cardHeroPic from '../../assets/images/cardHeroPic.png'
import savingPrice from '../../assets/images/savingPrice.png'
import rightGridPic from '../../assets/images/rightGridPic.png'
import priceIllustration from '../../assets/images/about/about_header_BG.svg'

import pricingPageFirstSectionStyles from '../../css/pages/pricing/firstSection'
import { useInfoStore } from '../../context/Context'

const FirstSection = () => {
  const clasess = pricingPageFirstSectionStyles()

  const dispatch = useDispatch()
  const { plans, fetchPlansInProcess, selectedPlan } = useSelector(state => state.plan)
  const [paymentInfoState, paymentInfoDispatch] = useInfoStore()

  const handleClick = async plan => {
    dispatch({ type: PLAN_SELECTED, payload: plan })

    paymentInfoDispatch({ type: 'SCROLL_TO_CREATE_ACCOUNT', payload: true })
    localStorage.setItem('selectedPlan', JSON.stringify(plan))
  }

  useEffect(() => {
    dispatch(handleFetchPlans())
  }, [dispatch])

  useEffect(() => {
    if (plans?.length) {
      dispatch({ type: PLAN_SELECTED, payload: plans.find(plan => plan._id === '1-year') })
    }
  }, [plans])

  useEffect(() => {
    if (selectedPlan) {
      paymentInfoDispatch({ type: 'CLEAR_ALL_SCROLLS' })
    }
  }, [selectedPlan])

  // ** CHECKING PURPOSES
  useEffect(() => {
    if (paymentInfoState) {
    }
  }, [paymentInfoState])

  return (
    <div className={clasess.PricingFirstSectionBackground}>
      <Box className={clasess.pricingPageIllustration}>
        <img src={priceIllustration} alt='About Illustration' />
      </Box>
      <Container maxWidth='lg'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={clasess.PricingContentIst}>
            <h1 onClick={() => paymentInfoDispatch({ type: 'hello' })} className={clasess.PricingHeading}>
              {paymentInfoState?.name || ' '} Buy FriendsVPN to get an&nbsp;
              <span className={clasess.secondaryColorSpan}>Ultra-Fast</span> &&nbsp;
              <span className={clasess.secondaryColorSpan}> Secure</span> Internet Experience&nbsp;
            </h1>
            <p>Access 500+Servers worldwide with ultra-fast speed and best security</p>
          </div>
        </div>
        <Step mb={9} no={1} label='Choose a Plan' />

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {fetchPlansInProcess ? (
              <Grid container columnSpacing={7}>
                <Grid className={clasess.CardGrid} item xs={12} lg={6}>
                  <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular' width='100%' height={350} />
                </Grid>
                <Grid className={clasess.CardGrid} item xs={12} lg={6}>
                  <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular' width='100%' height={350} />
                </Grid>
                <Grid className={clasess.CardGrid} item xs={12} lg={6}>
                  <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular' width='100%' height={350} />
                </Grid>
                <Grid className={clasess.CardGrid} item xs={12} lg={6}>
                  <Skeleton sx={{ borderRadius: '10px' }} animation='wave' variant='rectangular' width='100%' height={350} />
                </Grid>
              </Grid>
            ) : (
              <Grid container columnSpacing={7}>
                {plans?.map((plan, idx) =>
                  plan._id !== '1-year' ? (
                    <Grid
                      onClick={() => handleClick(plan)}
                      className={clasess.CardGrid}
                      item
                      xs={12}
                      lg={6}
                      style={{ position: 'relative' }}
                    >
                      {plan?._id !== '1-month' ? (
                        <Box className={selectedPlan?._id === plan?._id ? clasess.discountTagSelected : clasess.discountTag}>
                          <img src={savingPrice} alt='savingPrice' />
                          <p
                            style={{
                              marginTop: '-67px',
                              marginLeft: '25px',
                              color: 'white',
                              fontWeight: '600',
                            }}
                          >
                            SAVE
                            <br /> {plan?.discount}%
                          </p>
                        </Box>
                      ) : (
                        ''
                      )}

                      <Card className={selectedPlan?._id === plan?._id ? clasess.pricingCardSelected : clasess.pricingCard}>
                        <CardContent>
                          <Typography color='primary' variant='h3' gutterBottom>
                            {plan?.name}
                          </Typography>
                          <Typography
                            color='primary'
                            variant='h4'
                            component='h4'
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            USD {plan?.monthlyFee} <span style={{ fontSize: '14px', fontWeight: '400' }}>/ Month</span>
                          </Typography>
                          <Typography className={clasess.discountedPriceText}>USD {plan?.totalFeeExcludingDiscount}</Typography>
                          <Typography className={clasess.everyYearPrice} variant='body' fontWeight='bold'>
                            USD {plan?.totalFee} every {plan?.interval}
                          </Typography>
                        </CardContent>

                        {selectedPlan?._id === plan?._id ? (
                          <div className={clasess.CheckIcon}>
                            <CheckIcon style={{ color: '#ffc10b', fontSize: '40px' }} />
                          </div>
                        ) : (
                          ''
                        )}
                      </Card>
                    </Grid>
                  ) : (
                    <Grid
                      onClick={() => handleClick(plan)}
                      className={clasess.CardGrid}
                      item
                      xs={12}
                      lg={6}
                      style={{ position: 'relative' }}
                    >
                      <img
                        src={cardHeroPic}
                        style={{ position: 'absolute', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1 }}
                        alt='img1'
                      />

                      <Box className={selectedPlan?._id === plan?._id ? clasess.discountTagSelected : clasess.discountTag}>
                        <img src={savingPrice} alt='img2' />
                        <p
                          style={{
                            marginTop: '-67px',
                            marginLeft: '25px',
                            color: 'white',
                            fontWeight: '600',
                          }}
                        >
                          SAVE
                          <br /> 40%
                        </p>
                      </Box>
                      <Card
                        className={selectedPlan?._id === '1-year' ? clasess.pricingCardSelected1 : clasess.pricingCard1}
                        sx={{
                          backgroundImage: `url(${cardOne})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          color: 'white',
                        }}
                      >
                        <CardContent>
                          <Typography color='primary' variant='h3' gutterBottom>
                            {plan?.name}
                          </Typography>
                          <Typography
                            color='primary'
                            variant='h4'
                            component='div'
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            USD {plan?.monthlyFee} <span style={{ fontSize: '14px', fontWeight: '400' }}>/ Month</span>
                          </Typography>
                          <Typography className={clasess.discountedPriceText}>USD {plan?.totalFeeExcludingDiscount}</Typography>
                          <Typography style={{ fontWeight: '500' }} variant='body'>
                            USD {plan?.totalFee} every {plan?.interval}
                          </Typography>
                        </CardContent>

                        {selectedPlan?._id === plan?._id ? (
                          <div
                            className={clasess.CheckIcon}
                            // style={{ marginTop: '1rem' }}
                          >
                            <CheckIcon style={{ color: '#ffffff', fontSize: '40px' }} />
                          </div>
                        ) : (
                          ''
                        )}
                      </Card>
                    </Grid>
                  )
                )}
              </Grid>
            )}
          </Grid>

          <Grid className={clasess.leftGridPricing} item xs={12} md={4}>
            <img className={clasess.leftGridPic} src={rightGridPic} alt='leftGridPic' />
            <div>
              <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '0' }}>FreindsVPN Plan Includes:</p>

              <List>
                <ListItem disablePadding>
                  <ListItemIcon style={{ marginRight: '-20px', color: '#ffc10b' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary='Access 500+ servers' primaryTypographyProps={{ fontSize: 21 }} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon style={{ marginRight: '-20px', color: '#ffc10b' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary='Top-Notch Security' primaryTypographyProps={{ fontSize: 21 }} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon style={{ marginRight: '-20px', color: '#ffc10b' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary='Multiple VPN Protocols' primaryTypographyProps={{ fontSize: 21 }} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon style={{ marginRight: '-20px', color: '#ffc10b' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary='5 Concurrent Connections' primaryTypographyProps={{ fontSize: 21 }} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon style={{ marginRight: '-20px', color: '#ffc10b' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary='No Activity Logs' primaryTypographyProps={{ fontSize: 21 }} />
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon style={{ marginRight: '-20px', color: '#ffc10b' }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary='24/7 Customer Support' primaryTypographyProps={{ fontSize: 21 }} />
                </ListItem>
              </List>
            </div>

            <div className={clasess.PricingIcons}>
              <h3>Get FriendsVPN for all of your devices</h3>
              <img src={Apple} alt='apple' />
              <img src={Windows} alt='Windows' />
              <img src={Android} alt='Android' />
              <img src={AA} alt='AA' />
              <img src={L} alt='L' />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default FirstSection
