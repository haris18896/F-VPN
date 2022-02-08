import React, { useState, useEffect } from 'react'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isObjEmpty } from '../../utils/utils'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/system'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '../../assets/images/VisibilityOffLightDark.svg'
import {
  Stack,
  Grid,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@mui/material'

import loginImage from '../../assets/images/Login Image.png'
import yellowCircle from '../../assets/images/Yellow Circle.png'

import FormGroup from '../../components/form-group/FormGroup'
import FallbackLoader from '../../components/loader/FallbackLoader'

import { handleCustomerLogin } from '../../redux/actions/customer/index'
import { CLEAR_LOGIN_STATE } from '../../redux/actions/actionTypes/customer/index'

import loginPageStyles from '../../css/pages/login/login'

const Login = () => {
  useEffect(() => {
    document.title = 'Sign in to your account | FriendsVPN'
  }, [])
  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(true)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const { error, inProcess, message } = useSelector(state => state.login)
  const { user, isAuthenticated } = useSelector(state => state.auth)

  const classes = loginPageStyles()
  const navigate = useNavigate()

  const loginFormSchema = Yup.object().shape({
    email: Yup.string().trim().email('Please enter a valid email address').required('Email is required!'),
    password: Yup.string().trim().required('Password is required!'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: (values, { resetForm }) => {
      if (isObjEmpty(formik.errors)) {
        const { email, password } = values
        const data = {
          email: email.trim(),
          password: password.trim(),
        }
        dispatch(handleCustomerLogin(data))
      }
      resetForm()
    },
  })

  useEffect(() => {
    if (user && isAuthenticated) {
      navigate('/dashboard-portal')
    } else if (!user && !isAuthenticated) {
      navigate('/login')
    }
  }, [user, isAuthenticated])

  const cleanUp = () => {
    formik.resetForm()
    dispatch({ type: CLEAR_LOGIN_STATE })
  }

  useEffect(() => {
    return () => {
      cleanUp()
    }
  }, [])

  return (
    <Box className={classes.loginWrapper}>
      <img className={classes.yellowCircle} src={yellowCircle} alt='Yellow Circle' />
      <Container maxWidth='lg'>
        <Grid container alignItems='flex-end' rowSpacing={10} columnSpacing={{ xs: 3 }}>
          <Grid item xs={12} md={6} className={classes.loginLeftGridItem}>
            <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
              <Typography variant='h4' className={classes.loginPageGreetingsText} mb={3}>
                <span className={classes.colorSecondary}>Hi,</span> <br /> Welcome Back!
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

              <FormGroup
                label='Password'
                inputBackground='white'
                boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
                formik={formik}
                name='password'
                id='password'
                type={showPassword ? 'password' : 'text'}
                placeholder='Enter your Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      className={classes.icon__BTNs}
                      aria-label='toggle password visibility'
                      onClick={handleShowPassword}
                      onMouseDown={handleShowPassword}
                    >
                      {showPassword ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />

              {error?.statusCode === 401 && error?.msg ? (
                <Typography color='error' variant='p' component='p'>
                  <span>{error.msg}</span>
                </Typography>
              ) : (
                ''
              )}

              {inProcess ? <CircularProgress /> : ''}

              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                mb={2}
                className={classes.forgotAndChecked}
              >
                <FormControlLabel
                  control={<Checkbox color='primary' className={classes.Checkbox} name='rememberme' />}
                  label={<Typography className={classes.formControlLabel}>Remember me</Typography>}
                />

                <Link to='/forgot-password' className={classes.forgotPassword}>
                  Forgot password?
                </Link>
              </Stack>

              <Button type='submit' color='primary' className={classes.loginButton} variant='contained'>
                Login
              </Button>
              <Typography
                style={{ textAlign: 'center' }}
                variant='subtitle'
                component='p'
                className={classes.registerFreeWrapperLoginPage}
              >
                Don't have an account?&nbsp;
                <span onClick={() => navigate('/pricing')} className={classes.registerLinkLoginPage}>
                  Register free!
                </span>
              </Typography>
            </form>
          </Grid>

          <Grid item xs={12} md={6} className={classes.loginRightGridItem}>
            <Stack direction='column' justifyContent='center' alignItems={{ xs: 'center', md: 'flex-end' }} className={classes}>
              <Stack direction='column' alignItems='center' justifyContent='center'>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                  <Typography
                    style={{ textAlign: 'center' }}
                    variant='subtitle'
                    component='p'
                    className={classes.secondaryHeadingLoginPage}
                  >
                    Do you know?
                  </Typography>
                  <Typography
                    style={{ textAlign: 'center' }}
                    variant='subtitle'
                    component='p'
                    className={classes.paragraphTextLoginPage}
                  >
                    We work tirelessly just to provide you with the best possible experience.
                  </Typography>
                </Stack>

                <Box className={classes.loginPageIllustrationWrapper}>
                  <img className={classes.loginPageIllustration} src={loginImage} alt='LoginImage' />
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Login
