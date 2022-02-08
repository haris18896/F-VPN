import React, { useState, useEffect } from 'react'

import validator from 'validator'
import { useFormik } from 'formik'

import queryString from 'query-string'
import { AlertTriangle } from 'react-feather'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import LogoLottieLoader from '../../components/loader/LogoLottieLoader'

import FormGroup from '../../components/form-group/FormGroup'

import { CircularProgress } from '@material-ui/core'
import { IconButton, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '../../assets/images/VisibilityOffLightDark.svg'
import { Box, Grid, Button, Container, Typography, Stack } from '@mui/material'

import loginPageStyles from '../../css/pages/login/login'
import { handleResetPassword, handleVerifyResetPassToken } from '../../redux/actions/auth'

function ConfirmPassword() {
  useEffect(() => {
    document.title = 'Confirm Password | FriendsVPN'
  }, [])

  const classes = loginPageStyles()
  const navigate = useNavigate()

  const initialErrorState = {
    passwordError: '',
    confirmPasswordError: '',
  }

  const [resetPassToken, setResetPassToken] = useState('')

  const [errorState, setErrorState] = useState(initialErrorState)
  const [newPassword, setNewPassword] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState(true)

  const handleShowNewPassword = () => setNewPassword(!newPassword)
  const handleShowConfirmPassword = () => setConfirmPassword(!confirmPassword)

  const dispatch = useDispatch()
  const { verifyResetPassTokenError, verifyResetTokenInProcess, status, customer, error } = useSelector(state => state.auth)

  const location = useLocation()
  const parsed = queryString.parse(location.search)
  const { token } = parsed

  if (!token) {
    navigate('/login')
  }

  const onSubmit = values => {
    values.resetPasswordToken = resetPassToken
    dispatch(handleResetPassword(values))
    setErrorState(initialErrorState)
  }

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    onSubmit,
    validateOnBlur: true,
    // PasswordValidation,
    validate: values => {
      const errors = {}

      if (!values.newPassword) {
        errors.newPassword = 'Password is required'
      } else if (!validator.isStrongPassword(values.newPassword, { minLength: 8, minLowercase: 1, minNumbers: 1 })) {
        errors.newPassword = 'Must Contain 8 Characters, One Lowercase, One Number'
      }

      if (!values.confirmNewPassword) {
        errors.confirmNewPassword = 'Password is required'
      } else if (values.confirmNewPassword !== values.newPassword) {
        errors.confirmNewPassword = 'Passwords must be same!'
      }

      return errors
    },
  })

  useEffect(() => {
    if (token) setResetPassToken(token)
  }, [token])

  useEffect(() => {
    if (resetPassToken) {
      dispatch(handleVerifyResetPassToken({ resetPasswordToken: resetPassToken }))
    }
  }, [resetPassToken, dispatch])

  useEffect(() => {
    if (status === 'SUCCESS') navigate('/login')
  })

  return (
    <Box className={classes.loginWrapper}>
      <Container maxWidth='lg'>
        <Grid
          container
          alignItems='flex-end'
          rowSpacing={10}
          columnSpacing={{ xs: 3 }}
          className={classes.confirmPasswordMainGrid}
        >
          <Grid item xs={12} justifyContent='center' className={classes.loginLeftGridItemConfirmPassword}>
            <Stack direction='column' justifyContent='center' alignItems='center' className={classes}>
              {verifyResetTokenInProcess ? (
                <CircularProgress />
              ) : verifyResetPassTokenError ? (
                <Stack direction='column' justifyContent='center' alignItems='center'>
                  <AlertTriangle style={{ color: '#ee2200' }} size={120} />
                  <p className={classes.Text_danger}>{verifyResetPassTokenError.msg}</p>
                </Stack>
              ) : customer ? (
                <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
                  <Stack direction='row' justifyContent='center' alignItems='center'>
                    <LogoLottieLoader />
                  </Stack>
                  <Typography variant='h4' className={classes.confirmResetPasswordHeading} mb={3}>
                    Reset Password
                  </Typography>

                  <FormGroup
                    label='Email'
                    inputBackground='white'
                    boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                    formik={formik}
                    name='email'
                    id='email'
                    type='email'
                    placeholder={customer?.email}
                    disable={true}
                  />

                  <FormGroup
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    onBlur={formik.handleBlur}
                    error={formik.touched.newPassword && formik.errors.newPassword}
                    label='New Password'
                    placeholder='New Password...'
                    inputBackground='white'
                    boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                    formik={formik}
                    name='newPassword'
                    id='newPassword'
                    type={newPassword ? 'password' : 'text'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          className={classes.icon__BTNs}
                          aria-label='toggle password visibility'
                          onClick={handleShowNewPassword}
                          onMouseDown={handleShowNewPassword}
                        >
                          {newPassword ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                  <FormGroup
                    onChange={formik.handleChange}
                    value={formik.values.confirmNewPassword}
                    onBlur={formik.handleBlur}
                    error={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
                    label='Confirm New Password'
                    placeholder='Confirm New Password...'
                    inputBackground='white'
                    boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                    formik={formik}
                    name='confirmNewPassword'
                    id='confirmNewPassword'
                    type={confirmPassword ? 'password' : 'text'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          className={classes.icon__BTNs}
                          aria-label='toggle password visibility'
                          onClick={handleShowConfirmPassword}
                          onMouseDown={handleShowConfirmPassword}
                        >
                          {confirmPassword ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                  <Button
                    type='submit'
                    color='primary'
                    className={`${classes.loginButton} ${classes.ResetPassword}`}
                    variant='contained'
                  >
                    Reset Password
                  </Button>

                  {error && error.length ? (
                    <Typography variant='h5' className={classes.Text_danger}>
                      {error[0].msg}
                    </Typography>
                  ) : null}
                </form>
              ) : (
                ''
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ConfirmPassword
