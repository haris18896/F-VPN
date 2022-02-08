import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { IconButton, InputAdornment } from '@mui/material'
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'

import Step from '../step/Step'
import FormGroup from '../form-group/FormGroup'
import Master from '../../assets/images/masterCard.svg'
import Visa from '../../assets/images/VisaCard.svg'
import AgreeTermsAndPolicy from '../agree-to-terms-policy/AgreeTermsAndPolicy'
import { handleFetchClientSecret } from '../../redux/actions/auth'
import {
  CONFIRM_CARD_SETUP,
  CONFIRM_CARD_SETUP_DONE,
  RESET_SUBSCRIPTION_STATE,
} from '../../redux/actions/actionTypes/subscription'

import { FORM_SUBMISSION, SET_LOGGED_IN_USER } from '../../redux/actions/actionTypes/customer'

import jwt_decode from 'jwt-decode'
import useJwt from '../../jwt/jwtService'
import StripeInput from '../stripe-input/StripeInput'
import { useInfoStore } from '../../context/Context'
import { handleAddSubscription } from '../../redux/actions/subscription'
import { Container, Grid, Box, Typography, Stack, Button, CircularProgress } from '@mui/material'
import pricingPageThirdSectionStyles from '../../css/pages/pricing/thirdSection'

function ThirdSection() {
  const classes = pricingPageThirdSectionStyles()

  const [paymentInfoState, paymentInfoDispatch] = useInfoStore()

  const paymentInfoSectionRef = useRef(null)
  const createAccountSectionRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const dispatch = useDispatch()
  const elements = useElements()
  const stripe = useStripe()
  const navigate = useNavigate()

  const { clientSecret, user, isAuthenticated } = useSelector(state => state.auth)

  const { selectedPlan } = useSelector(state => state.plan)
  const { isRegistered, isPaymentDone } = useSelector(state => state.appFlow)
  const { status, inProcess, emailExist } = useSelector(state => state.register)

  const { addSubInProcess, confirmCardSetupInProcess, error } = useSelector(state => state.subscription)

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }
    if (!isRegistered) {
      dispatch({ type: FORM_SUBMISSION })
    }
  }

  const getDiscountedAmount = (discount, total) => {
    return total * (discount / 100)
  }

  useEffect(() => {
    if (status === 'SUCCESS') {
      dispatch(handleFetchClientSecret())
    }
  }, [status, dispatch])

  async function fetchClientSecret() {
    const card = elements.getElement(CardNumberElement)

    if (card == null || clientSecret == null) {
      return
    }

    dispatch({ type: CONFIRM_CARD_SETUP })
    setErrorMessage(null)
    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card,
      },
    })

    
    if (result.error) {
      dispatch({ type: CONFIRM_CARD_SETUP_DONE })
      setErrorMessage(result.error.message)
    } else {
      setErrorMessage(null)
      dispatch({ type: CONFIRM_CARD_SETUP_DONE })

      const data = {
        planId: selectedPlan._id,
        paymentMethodId: result.setupIntent.payment_method,
      }
      dispatch(handleAddSubscription(data))
      if (useJwt.getToken()) {
        const token = useJwt.getToken()
        const decoded = jwt_decode(token)
        dispatch({ type: SET_LOGGED_IN_USER, payload: decoded })
      }
    }
  }

  useEffect(() => {
    if (clientSecret) {
      fetchClientSecret()
    }
  }, [clientSecret])

  useEffect(() => {
    if (user && isAuthenticated && isPaymentDone) {
      navigate('/dashboard-portal')
    }
  }, [user, isAuthenticated])

  useEffect(() => {
    if (paymentInfoState?.scrollToPaymentInfo && paymentInfoSectionRef?.current) {
      const yOffset = -120
      const y = paymentInfoSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [paymentInfoState?.scrollToPaymentInfo])

  useEffect(() => {
    dispatch({ type: RESET_SUBSCRIPTION_STATE })
  }, [dispatch])

  useEffect(() => {
    if (emailExist) {
      paymentInfoDispatch({ type: 'SCROLL_TO_CREATE_ACCOUNT', payload: true })
      if (paymentInfoState?.scrollToCreateAccount && createAccountSectionRef?.current) {
        const yOffset = -120
        const y = createAccountSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [emailExist, paymentInfoState?.scrollToCreateAccount, paymentInfoDispatch])

  useEffect(() => {
    if ((error && error?.statusCode === 409) || (error && error?.statusCode === 402)) {
      paymentInfoDispatch({ type: 'SCROLL_TO_PAYMENT_INFO', payload: true })
    }
  }, [])

  return (
    <Container ref={paymentInfoSectionRef} maxWidth='lg' className={classes.thirdSectionMainContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Step mb={4} no={3} label='Payment Method' />
        </Grid>
      </Grid>
      <Grid container>
        {true ? (
          <>
            <Grid item xs={12} md={8} className={classes.formWrapper}>
              <Box py={2} className={classes.creditCardHeader}>
                <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                  <Typography className={classes.creditCardHeaderText} variant='h5' component='h2' mr={2}>
                    Credit Card
                  </Typography>

                  <Box mr={2} mt={1}>
                    <img src={Visa} alt='Visa Logo' />
                  </Box>

                  <Box mt={1}>
                    <img src={Master} alt='Master Card' />
                  </Box>
                </Stack>
              </Box>
              <Box py={8} className={classes.creditCardBody}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' mb={4}>
                  <Typography className={classes.creditCardFormText} variant='h5' component='h2'>
                    {selectedPlan?.name} Plan
                  </Typography>
                  <Typography className={classes.creditCardFormTextCost} variant='h5' component='h2'>
                    USD {selectedPlan?.totalFeeExcludingDiscount}
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb={4}>
                  <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                    <Typography className={classes.creditCardFormText} variant='h5' component='h2' mr={2}>
                      Discount
                    </Typography>
                    <Typography className={classes.creditCardFormDiscount} variant='h5' component='h2'>
                      Save <span>{selectedPlan?.discount}%</span>
                    </Typography>
                  </Stack>
                  <Typography className={classes.creditCardFormTextCostDiscounted} variant='h5' component='h2'>
                    <span> - USD {getDiscountedAmount(selectedPlan?.discount, selectedPlan?.totalFeeExcludingDiscount)}</span>
                  </Typography>
                </Stack>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb={4}>
                  <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                    <Typography className={classes.creditCardFormTotalPaymentText} variant='h5' component='h2' mr={2}>
                      Total
                    </Typography>
                  </Stack>
                  <Typography className={classes.creditCardFormTextCostTotalCost} variant='h5' component='h2'>
                    <span> USD {selectedPlan?.totalFee}</span>
                  </Typography>
                </Stack>

                <Box mb={4}>
                  <hr />
                </Box>

                <form id='payment_form' onSubmit={handleSubmit}>
                  <FormGroup
                    name='ccnumber'
                    label='Card Number'
                    stripeInput={StripeInput}
                    stripeElement={CardNumberElement}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton aria-label='toggle password visibility'>
                          <img src={Master} alt='Master Card' style={{ marginRight: '10px' }} />
                          <img src={Visa} alt='Visa Logo' />
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                  <Grid container spacing={3} mb={0}>
                    <Grid item xs={12} md={6}>
                      <FormGroup name='expiry' label='Expiry Date' stripeInput={StripeInput} stripeElement={CardExpiryElement} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup name='cvc' label='CVC' stripeInput={StripeInput} stripeElement={CardCvcElement} />
                    </Grid>
                  </Grid>

                  {errorMessage && <p style={{ color: '#ee2200' }}>{errorMessage}</p>}
                  {(error && error?.statusCode === 409) || (error && error?.statusCode === 402) ? (
                    <p style={{ color: '#ee2200' }}>{error?.msg}</p>
                  ) : (
                    ''
                  )}

                  {addSubInProcess || confirmCardSetupInProcess || inProcess ? (
                    <div>
                      <CircularProgress className='mb-4' />
                    </div>
                  ) : (
                    ''
                  )}
                </form>
              </Box>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={8}>
                <AgreeTermsAndPolicy />
              </Grid>
            </Grid>

            <Grid container mb={9}>
              <Grid item xs={12} md={8} px={1} className={classes.orderTotalGrid}>
                <Stack className={classes.orderTotalWrapper} justifyContent='space-between' alignItems='flex-start'>
                  <Typography
                    className={classes.creditCardFormTotalPaymentText}
                    variant='h5'
                    component='h2'
                    mb={{ xs: 3, lg: 0 }}
                  >
                    Order Total:
                    <span className={classes.creditCardFormTotalPayment}>USD {selectedPlan?.totalFee}</span>
                  </Typography>
                  <Button
                    className={classes.creditCardFormSubscribeButtonDisabled}
                    variant='contained'
                    type='submit'
                    onClick={isRegistered ? fetchClientSecret : handleSubmit}
                    form='payment_form'
                  >
                    Subscribe Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={8} mb={4} className={classes.formWrapper}>
            <Box py={2} className={classes.creditCardHeader}>
              <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                <Typography className={classes.creditCardHeaderText} variant='h5' component='h2' mr={2}>
                  Complete Previous Steps
                </Typography>
              </Stack>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default ThirdSection
