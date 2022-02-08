// import React, { useCallback, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import registerPageStyles from '../../css/pages/register/register'
// import { Container, Grid, Box, InputLabel, Button, Stack } from '@mui/material'
// import IllustrationRegister from '../../assets/images/IllustrationRegister.png'
// import { Typography } from '@material-ui/core'
// import circleLogin from '../../assets/images/circleLogin.png'
// import FormGroup from '../../components/form-group/FormGroup'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import { isObjEmpty } from '../../utils/utils'
// import FallbackLoader from '../../components/loader/FallbackLoader'
// import { useDispatch, useSelector } from 'react-redux'
// import { handleCustomerRegistration } from '../../redux/actions/customer/index'

// function Register() {
//   // STATE FOR GRABBING ERRORS FOR SHOWING VALIDATION ERRORS
//   const initialErrorState = {
//     nameError: '',
//     emailError: '',
//     passwordError: '',
//     confirmPasswordError: '',
//   }

//   //   ** Initiatlizing Error State
//   const [errorState, setErrorState] = useState(initialErrorState)

//   const dispatch = useDispatch()

//   const { errs, inProcess, status } = useSelector(state => state.register)

//   const classes = registerPageStyles()
//   const navigate = useNavigate()

//   // ** SCHEMA TO VALIDATE LOGIN FORM INFO **

//   const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/
//   const registerFormSchema = Yup.object().shape({
//     name: Yup.string().required('Name is a required field!'),
//     email: Yup.string().email('Please enter a valid email address').required('Email is a required field!'),
//     password: Yup.string()
//       .required('Password is a required field!')
//       .matches(passwordPattern, 'Password must contain at least 8 characters, one number and one lowercase letter'),
//     confirmPassword: Yup.string()
//       .required('Confirm password is a required field!')
//       .oneOf([Yup.ref('password'), null], 'Passwords do not match!'),
//   })

//   // ** USE FORMIK HOOK **
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema: registerFormSchema,
//     onSubmit: values => {
//       // ** DISPATCH LOGIN ACTION
//       if (isObjEmpty(formik.errors)) {
//         const { name, email, password, confirmPassword } = values
//         const data = {
//           name,
//           email,
//           password,
//           confirmPassword,
//         }
//         dispatch(handleCustomerRegistration(data))
//       }
//     },
//   })

//   const populateErrors = useCallback(() => {
//     setErrorState({ nameError: '', emailError: '', passwordError: '', confirmPasswordError: '' })

//     if (errs && errs.length) {
//       const nameError = errs.find(err => err.param === 'name')
//       const emailError = errs.find(err => err.param === 'email')
//       const passwordError = errs.find(err => err.param === 'password')
//       const confirmPasswordError = errs.find(err => err.param === 'confirmPassword')

//       if (nameError) {
//         setErrorState(prevState => ({ ...prevState, nameError: nameError.msg }))
//       }
//       if (emailError) {
//         setErrorState(prevState => ({ ...prevState, emailError: emailError.msg }))
//       }
//       if (passwordError) {
//         setErrorState(prevState => ({ ...prevState, passwordError: passwordError.msg }))
//       }
//       if (confirmPasswordError) {
//         setErrorState(prevState => ({ ...prevState, confirmPasswordError: confirmPasswordError.msg }))
//       }
//     }
//   }, [errs])

//   // ** HANDLING BACKEND ERRORS
//   useEffect(() => {
//     if (errs && errs.length) {
//       populateErrors()
//     }
//   }, [populateErrors, errs])

//   useEffect(() => {
//     if (status === 'SUCCESS') {
//       setErrorState(initialErrorState)
//       navigate('/pricing')
//     }
//   }, [status])

//   return inProcess ? (
//     <FallbackLoader />
//   ) : (
//     <div className={classes.registerBackMain}>
//       <img style={{ position: 'absolute', left: '96%', top: '15%', zIndex: '1' }} src={circleLogin} />
//       <Container maxWidth='lg'>
//         <Grid container justifyContent='space-between' alignItems='center' rowSpacing={10} columnSpacing={5} px={{ md: 0 }}>
//           <Grid item xs={12} md={6} className={classes.registerLeftGridItem} order={{ xs: 2, md: 1 }}>
//             <Stack
//               className={classes.registerLeftContentStack}
//               direction='column'
//               alignItems={{ xs: 'center', md: 'flex-start' }}
//               justifyContent='center'
//             >
//               <Box className={classes.topContentLeftRegister}>
//                 <Typography variant='h1' component='h1'>
//                   Do you know?
//                 </Typography>

//                 <Typography variant='subtitle' component='p'>
//                   We respect your online privacy and information <br /> with FriendsVPN both are kept secret.
//                 </Typography>
//               </Box>

//               <Box className={classes.registerPageIllustrationWrapper}>
//                 <img className={classes.registerPageIllustration} src={IllustrationRegister} />
//               </Box>
//             </Stack>
//           </Grid>
//           <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
//             <Stack direction='column' alignItems={{ xs: 'center', md: 'flex-end' }} justifyContent='center'>
//               <Box className={classes.headingAndRegisterFormWrapper}>
//                 <div className={classes.rightContentDiv}>
//                   <Typography variant='h4'>Register & get ultimate internet freedom</Typography>
//                 </div>

//                 <form onSubmit={formik.handleSubmit} className={classes.registerForm}>
//                   <FormGroup
//                     label='Name'
//                     inputBackground='white'
//                     boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
//                     formik={formik}
//                     name='name'
//                     id='name'
//                   />
//                   {errorState && errorState.nameError && formik.values.name && !formik.errors.name ? (
//                     <Box mb={2}>
//                       <Typography color='error' variant='p'>
//                         {errorState.nameError}
//                       </Typography>
//                     </Box>
//                   ) : (
//                     ''
//                   )}

//                   <FormGroup
//                     label='Email'
//                     inputBackground='white'
//                     boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
//                     formik={formik}
//                     name='email'
//                     id='email'
//                   />

//                   {errorState && errorState.emailError && formik.values.email && !formik.errors.email ? (
//                     <Box mb={2}>
//                       <Typography color='error' variant='p'>
//                         {errorState.emailError}
//                       </Typography>
//                     </Box>
//                   ) : (
//                     ''
//                   )}

//                   <FormGroup
//                     label='Password'
//                     inputBackground='white'
//                     boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
//                     formik={formik}
//                     name='password'
//                     id='password'
//                   />

//                   {errorState && errorState.passwordError && formik.values.password && !formik.errors.password ? (
//                     <Box mb={2}>
//                       <Typography color='error' variant='p'>
//                         {errorState.passwordError}
//                       </Typography>
//                     </Box>
//                   ) : (
//                     ''
//                   )}

//                   <FormGroup
//                     label='Confirm Password'
//                     inputBackground='white'
//                     boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
//                     formik={formik}
//                     name='confirmPassword'
//                     id='confirmPassword'
//                   />

//                   {errorState &&
//                   errorState.confirmPasswordError &&
//                   formik.values.confirmPassword &&
//                   !formik.errors.confirmPassword ? (
//                     <Box mb={2}>
//                       <Typography color='error' variant='p'>
//                         {errorState.confirmPasswordError}
//                       </Typography>
//                     </Box>
//                   ) : (
//                     ''
//                   )}

//                   <div className={classes.btnDiv}>
//                     <Button type='submit' style={{ width: '100%' }} variant='contained'>
//                       Sign Up
//                     </Button>
//                   </div>
//                 </form>
//                 <div className={classes.alreadyAccText}>
//                   <p>
//                     Already have an account?&nbsp;
//                     <span onClick={() => navigate('/login')} style={{ color: '#ffc10b', cursor: 'pointer' }}>
//                       Login
//                     </span>
//                   </p>
//                 </div>
//               </Box>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   )
// }

// export default Register
