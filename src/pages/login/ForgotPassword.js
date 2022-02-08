import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleSendResetPasswordRequest } from '../../redux/actions/auth'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isObjEmpty } from '../../utils/utils'

import LockScreen from '../../assets/images/LockScreen.svg'
import FormGroup from '../../components/form-group/FormGroup'

import { CircularProgress } from '@material-ui/core'
import { Box, Grid, Button, Container, Typography, Stack } from '@mui/material'

import loginPageStyles from '../../css/pages/login/login'

function ForgotPassword() {
  useEffect(() => {
    document.title = 'Forgot Password | FriendsVPN'
  }, [])

  const classes = loginPageStyles()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { user, isAuthenticated, sendResetPassReqInProcess, resetPasswordRequestSuccess, error } = useSelector(
    state => state.auth
  )

  if (user && isAuthenticated) {
    navigate('/dashboard-portal')
  }

  const initialErrorState = {
    resetPasswordTokenError: '',
  }

  const [errorState, setErrorState] = useState(initialErrorState)

  const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().trim().email('Please enter a valid email address').required('Email is required!'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values, { resetForm }) => {
      if (isObjEmpty(formik.errors)) {
        const { email } = values
        const data = {
          email: email.trim(),
        }
        setErrorState({})
        dispatch(handleSendResetPasswordRequest(data))
      }
      resetForm()
    },
  })

  return (
    <Box className={classes.loginWrapper}>
      <Container maxWidth='lg'>
        <Grid container alignItems='flex-start' rowSpacing={10} columnSpacing={{ xs: 3 }}>
          <Grid item xs={12} md={6} className={classes.loginLeftGridItemPassword}>
            <Stack direction='column' justifyContent='center' alignItems='center' className={classes}>
              <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
                <Typography variant='h4' className={classes.loginPageGreetingsText} mb={3}>
                  <span className={classes.colorSecondary}>Did,</span> <br />
                  you forgot your password?
                </Typography>

                <FormGroup
                  label='Email'
                  inputBackground='white'
                  boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                  formik={formik}
                  name='email'
                  id='email'
                  type='email'
                  placeholder='Enter your Email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                  onBlur={formik.handleBlur}
                />

                <Button
                  type='submit'
                  color='primary'
                  className={`${classes.loginButton} ${classes.ResetPassword}`}
                  variant='contained'
                >
                  Send Reset Link
                </Button>

                {sendResetPassReqInProcess ? (
                  <CircularProgress className={classes.circularProgress} />
                ) : resetPasswordRequestSuccess ? (
                  <Typography color='#368f38' className={classes.successPasswordResetMsg} variant='p' component='p'>
                    <span>{resetPasswordRequestSuccess.msg}</span>
                  </Typography>
                ) : error ? (
                  <Typography color='#8f3646' className={classes.successPasswordResetMsg} variant='p' component='p'>
                    <span>{error.msg}</span>
                  </Typography>
                ) : (
                  ''
                )}

                {errorState && errorState.resetPasswordTokenError && formik.errors.email ? (
                  <Typography color='#8f3646' className={classes.successPasswordResetMsg} variant='p' component='p'>
                    {errorState.resetPasswordTokenError} Request for rest password token!
                  </Typography>
                ) : (
                  ''
                )}
              </form>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} className={classes.loginRightGridItem}>
            <Stack direction='column' justifyContent='center' alignItems='center' className={classes}>
              <Stack direction='column' alignItems='center' justifyContent='center'>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                  <Typography
                    style={{ textAlign: 'center' }}
                    variant='subtitle'
                    component='p'
                    className={classes.secondaryHeadingLoginPage}
                  >
                    Forgot Password?
                  </Typography>
                  <Typography
                    style={{ textAlign: 'center' }}
                    variant='subtitle'
                    component='p'
                    className={classes.paragraphTextLoginPage}
                  >
                    We can help you reset your password.
                  </Typography>
                </Stack>

                <Box className={classes.loginPageIllustrationWrapper}>
                  <img className={classes.loginPageIllustration} src={LockScreen} alt='LoginImage' />
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ForgotPassword
