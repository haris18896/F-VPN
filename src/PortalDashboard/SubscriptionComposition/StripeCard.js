import React, { useState, useEffect } from 'react'
import FormGroup from '../../components/form-group/FormGroup'

import { useDispatch, useSelector } from 'react-redux'
import { handleFetchClientSecret } from '../../redux/actions/auth'
import { CONFIRM_CARD_SETUP, CONFIRM_CARD_SETUP_DONE, UPGRADE_PLAN_SUCCESS } from '../../redux/actions/actionTypes/subscription'

import Master from '../../assets/images/masterCard.svg'
import Visa from '../../assets/images/VisaCard.svg'

import * as Yup from 'yup'
import { useFormik } from 'formik'

import EditIcon from '@mui/icons-material/Edit'
import { CircularProgress, Grid } from '@mui/material'
import { IconButton, InputAdornment } from '@mui/material'
import StripeInput from '../../components/stripe-input/StripeInput'
import { SET_SHOW_PAYMENT_FALSE } from '../../redux/actions/actionTypes/appFlow'
import { useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'
import { handleAddSubscription, handleGetSubscription, handleUpgradePlan } from '../../redux/actions/subscription'

import { PaymentMethodClasses } from '../../css/Dashboard/subscritption/SubscritpionStyles'

function StripeCard() {
  const classes = PaymentMethodClasses()

  const [processing, setProcessing] = useState('')
  const [disableName, setDisableName] = useState(true)
  const handleChangeDisableName = () => setDisableName(false)

  const dispatch = useDispatch()
  const { clientSecret } = useSelector(state => state.auth)
  const { selectedPlan } = useSelector(state => state.plan)
  const { profile } = useSelector(state => state.profile)
  const { subscriptionData } = useSelector(state => state.subscription)
  const {
    addSubInProcess,
    confirmCardSetupInProcess,
    error,
    upgradePlanStatus,
    upgradePlanInProcess,
    upgradePlanSuccessMessage,
  } = useSelector(state => state.subscription)

  const elements = useElements()
  const stripe = useStripe()
  const [errorMessage, setErrorMessage] = useState(null)

  const NameSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
  })

  const formik = useFormik({
    initialValues: {
      name: profile?.name,
    },
    validationSchema: NameSchema,
  })

  const handleSubmit = async event => {
    event.preventDefault()
    setProcessing(true)

    if (!stripe || !elements) {
      // form submission until Stripe.js has loaded.
      return
    }

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
        planId: selectedPlan?._id,
        paymentMethodId: result.setupIntent.payment_method,
      }

      if (subscriptionData?.status === 'expired') {
        dispatch(handleUpgradePlan(data))
      } else {
        dispatch(handleAddSubscription(data))
        dispatch({ type: UPGRADE_PLAN_SUCCESS })
      }
    }
  }

  useEffect(() => {
    dispatch(handleFetchClientSecret())
  }, [dispatch])

  useEffect(() => {
    if (upgradePlanStatus === 'SUCCESS') {
      dispatch(handleGetSubscription())
      dispatch({ type: SET_SHOW_PAYMENT_FALSE })
    }
    return () => {
      if (upgradePlanStatus === 'SUCCESS' && upgradePlanSuccessMessage) {
        dispatch({ type: SET_SHOW_PAYMENT_FALSE })
      }
    }
  }, [upgradePlanStatus, upgradePlanSuccessMessage, dispatch])

  return (
    <>
      <div className={classes.Stripe__form}>
        <form onSubmit={handleSubmit}>
          <FormGroup
            label='Name'
            // placeholder={profile?.name}
            placeholder='Name'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='name'
            id='name'
            type='text'
            disable={disableName ? true : false}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleChangeDisableName} className={classes.icon__BTNs}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            }
          />

          <FormGroup
            label='Card Number'
            stripeInput={StripeInput}
            stripeElement={CardNumberElement}
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            name='card'
            id='card'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton className={classes.stripe__Card__Icons}>
                  <img src={Master} alt='Master Card' style={{ marginRight: '10px' }} />
                  <img src={Visa} alt='Visa Logo' />
                </IconButton>
              </InputAdornment>
            }
          />

          <Grid container spacing={3} mb={3}>
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
          {upgradePlanStatus === 'SUCCESS' && upgradePlanSuccessMessage ? (
            <p style={{ color: '#22ee00' }}>{upgradePlanSuccessMessage}</p>
          ) : (
            ''
          )}
          {addSubInProcess || confirmCardSetupInProcess || upgradePlanInProcess ? (
            <div>
              <CircularProgress className='mb-4' />
            </div>
          ) : (
            ''
          )}
          <button type='submit' className={classes.submit__button} disabled={!stripe}>
            {processing ? 'Processing...' : 'Pay with Credit Card'}
          </button>
        </form>
      </div>
    </>
  )
}

export default StripeCard
