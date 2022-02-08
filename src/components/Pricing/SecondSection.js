import React, { useCallback, useEffect, useState, useRef } from 'react'

import * as Yup from 'yup'
import validator from 'validator'
import { useFormik } from 'formik'
import { isObjEmpty } from '../../utils/utils'
import FormGroup from '../form-group/FormGroup'

import 'react-dots-loader/index.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { IconButton, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '../../assets/images/VisibilityOffLightDark.svg'
import { Container, Grid, Box, Stack, Typography } from '@mui/material'

import { handleCustomerRegistrationV2 } from '../../redux/actions/customer/index'

import Step from '../step/Step'
import pricingPageSecondSectionStyles from '../../css/pages/pricing/secondSection'
import { CLEAR_REGISTER_STATE } from '../../redux/actions/actionTypes/customer'
import { useInfoStore } from '../../context/Context'

function SecondSection() {
  const classes = pricingPageSecondSectionStyles()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword1, setShowPassword1] = useState(true)
  const handleShowPassword1 = () => setShowPassword1(!showPassword1)

  const [showPassword2, setShowPassword2] = useState(true)
  const handleShowPassword2 = () => setShowPassword2(!showPassword2)

  const createAccountSectionRef = useRef(null)
  const [paymentInfoState, paymentInfoDispatch] = useInfoStore()

  const { error } = useSelector(state => state.subscription)
  const { isRegistered } = useSelector(state => state.appFlow)
  const { errs, status, formSubmitted, emailExist } = useSelector(state => state.register)

  // ** Formik form
  const initialErrorState = {
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  }

  const [errorState, setErrorState] = useState(initialErrorState)

  const registerFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is a required field!'),
    email: Yup.string().email('Please enter a valid email address').required('Email is a required field!'),
    password: Yup.string()
      .required('Password is a required field!')
      .test('strong-password', 'Password must contain at least 8 characters, one number and one lowercase letter', value => {
        if (!value) {
          return true
        }
        return validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minNumbers: 1 })
      }),
    confirmPassword: Yup.string()
      .required('Confirm password is a required field!')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match!'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerFormSchema,
    onSubmit: values => {
      if (isObjEmpty(formik.errors)) {
        setErrorState(initialErrorState)
      }
    },
  })

  const populateErrors = useCallback(() => {
    setErrorState({ nameError: '', emailError: '', passwordError: '', confirmPasswordError: '' })

    if (errs && errs.length) {
      const nameError = errs.find(err => err.param === 'name')
      const emailError = errs.find(err => err.param === 'email')
      const passwordError = errs.find(err => err.param === 'password')
      const confirmPasswordError = errs.find(err => err.param === 'confirmPassword')

      if (nameError) {
        setErrorState(prevState => ({ ...prevState, nameError: nameError.msg }))
      }
      if (emailError) {
        setErrorState(prevState => ({ ...prevState, emailError: emailError.msg }))
      }
      if (passwordError) {
        setErrorState(prevState => ({ ...prevState, passwordError: passwordError.msg }))
      }
      if (confirmPasswordError) {
        setErrorState(prevState => ({ ...prevState, confirmPasswordError: confirmPasswordError.msg }))
      }
    }
  }, [errs])

  useEffect(() => {
    if (errs && errs.length) {
      populateErrors()
      paymentInfoDispatch({ type: 'SCROLL_TO_PAYMENT_INFO', payload: true })
    }
  }, [populateErrors, paymentInfoDispatch, errs])

  useEffect(() => {
    if (status === 'SUCCESS') {
      setErrorState(initialErrorState)
    }
  }, [status])

  useEffect(() => {
    if (paymentInfoState?.scrollToCreateAccount && createAccountSectionRef?.current) {
      const yOffset = -120
      const y = createAccountSectionRef?.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [paymentInfoState?.scrollToCreateAccount])

  useEffect(() => {
    if (
      isObjEmpty(formik.errors) &&
      formik?.values?.name &&
      formik?.values?.email &&
      formik?.values?.password &&
      formik?.values?.confirmPassword
    ) {
      paymentInfoDispatch({ type: 'SCROLL_TO_PAYMENT_INFO', payload: true })
      dispatch({ type: CLEAR_REGISTER_STATE })
    }
  }, [formik?.errors])

  useEffect(() => {
    if (formSubmitted && !error) {
      const data = {
        name: formik?.values?.name,
        email: formik?.values?.email,
        password: formik?.values?.password,
        confirmPassword: formik?.values?.confirmPassword,
      }
      dispatch(handleCustomerRegistrationV2(data))
    } else {
      return {}
    }
  }, [formSubmitted, error])

  return (
    <div ref={createAccountSectionRef} className={classes.PricingSecondSectionBackground}>
      <Container maxWidth='lg'>
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <Stack mb={3} direction='row' className={classes.directionStep2} justifyContent='space-between' alignItems='center'>
              <Step no={2} label='Create your own Account' />

              <p className={classes.rightContentPricingSectionTwo}>
                Have an account? please &nbsp;
                <span onClick={() => navigate('/login')}>
                  <strong>login</strong>
                </span>
              </p>
            </Stack>

            <form onSubmit={formik.handleSubmit} className={classes.formParentDivSectionTwo}>
              <Box
                className={classes.formBoxPricing}
                sx={{
                  width: '100%',
                }}
              >
                <FormGroup
                  label='Name'
                  formik={formik}
                  name='name'
                  id='name'
                  type='text'
                  placeholder='Enter Your Name'
                  disable={
                    isRegistered || (error && error?.statusCode === 409) || (error && error?.statusCode === 402) ? true : false
                  }
                />
                {errorState && errorState.nameError && formik.values.name && !formik.errors.name ? (
                  <Box mb={2}>
                    <Typography color='error' variant='p'>
                      {errorState.nameError}
                    </Typography>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
              <Box
                className={classes.formBoxPricing}
                sx={{
                  width: '100%',
                }}
              >
                <FormGroup
                  label='Email'
                  formik={formik}
                  name='email'
                  id='email'
                  type='email'
                  placeholder='Enter Your Email Address'
                  disable={
                    isRegistered || (error && error?.statusCode === 409) || (error && error?.statusCode === 402) ? true : false
                  }
                />

                {errorState && errorState.emailError && formik.values.email && !formik.errors.email ? (
                  <Box mb={2}>
                    <Typography color='error' variant='p'>
                      {emailExist ? errorState.emailError : ''}
                    </Typography>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
              <Box
                className={classes.formBoxPricing}
                sx={{
                  width: '100%',
                }}
              >
                <FormGroup
                  label='Password'
                  formik={formik}
                  name='password'
                  id='password'
                  type={showPassword1 ? 'password' : 'text'}
                  placeholder='Enter Your Password'
                  disable={
                    isRegistered || (error && error?.statusCode === 409) || (error && error?.statusCode === 402) ? true : false
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        className={classes.icon__BTNs}
                        aria-label='toggle password visibility'
                        onClick={handleShowPassword1}
                        onMouseDown={handleShowPassword1}
                      >
                        {showPassword1 ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                {errorState && errorState.passwordError && formik.values.password && !formik.errors.password ? (
                  <Box mb={2}>
                    <Typography color='error' variant='p'>
                      {errorState.passwordError}
                    </Typography>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
              <Box
                className={classes.formBoxPricing}
                sx={{
                  width: '100%',
                }}
              >
                <FormGroup
                  label='Confirm Password'
                  formik={formik}
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm Password'
                  type={showPassword2 ? 'password' : 'text'}
                  disable={
                    isRegistered || (error && error?.statusCode === 409) || (error && error?.statusCode === 402) ? true : false
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        className={classes.icon__BTNs}
                        aria-label='toggle password visibility'
                        onClick={handleShowPassword2}
                        onMouseDown={handleShowPassword2}
                      >
                        {showPassword2 ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                {errorState &&
                errorState.confirmPasswordError &&
                formik.values.confirmPassword &&
                !formik.errors.confirmPassword ? (
                  <Box mb={2}>
                    <Typography color='error' variant='p'>
                      {errorState.confirmPasswordError}
                    </Typography>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SecondSection
