import React, { useState, useEffect } from 'react'

import { Container, Grid, Button } from '@mui/material'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

import ColorPrimary from '../../assets/images/ColorPrimary.svg'
import spiral from '../../assets/images/spiral.svg'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { submitContactForm } from '../../redux/actions/contactForm/index'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isObjEmpty } from '../../utils/utils'
import contactPageStyles from '../../css/pages/contact/contactform'

function Contact() {
  useEffect(() => {
    document.title = 'Contact Us to Get Your Queries Answered | FriendsVPN'
  }, [])
  const clasess = contactPageStyles()

  const dispatch = useDispatch()
  const { error, successResponse, formData } = useSelector(state => state.contact)

  const initialErrorState = {
    nameError: '',
    emailError: '',
    messageError: '',
  }

  const [errorState, setErrorState] = useState(initialErrorState)

  const contactFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Please enter a valid email address').required('Email is a required field!'),
    message: Yup.string().required('Message is required'),
  })

  // ** USE FORMIK HOOK **
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, { resetForm }) => {
      if (isObjEmpty(formik.errors)) {
        const { name, email, message } = values
        const data = {
          name,
          email,
          message,
        }
        dispatch(submitContactForm(data))
        setErrorState(initialErrorState)
      }
      resetForm()
    },
  })

  return (
    <div className={clasess.contactBackground}>
      <img style={{ position: 'absolute', right: '0%', top: '2%' }} alt='image1' src={spiral} />
      <Container maxWidth='lg'>
        <div className={clasess.contentDiv}>
          <h1>Get In Touch</h1>
        </div>

        <Grid className={clasess.mainGridContainer} container>
          <img className={clasess.positionPrimaryBox} src={ColorPrimary} alt='image2' />

          <Grid
            style={{ background: '#24275D', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
            item
            xs={12}
            md={5}
          >
            <div className={clasess.leftContent}>
              <h1>
                We are ready to <span style={{ color: '#ffc10b' }}>help you</span>
              </h1>
              <p>Feel free to reach us using the above contact form. Our average response time is a few hours.</p>
            </div>

            <div className={clasess.iconsDiv}>
              <a target='_blank' href='https://www.facebook.com/FriendsVPN'>
                <FacebookIcon className={clasess.footerSocialIconContact} />
              </a>
              <a target='_blank' href='https://twitter.com/Friends_VPN'>
                <TwitterIcon className={clasess.footerSocialIconContact} />
              </a>
              <a target='_blank' href='https://www.instagram.com/friendsvpn/'>
                <InstagramIcon className={clasess.footerSocialIconContact} />
              </a>
              <a target='_blank' href='#'>
                <LinkedInIcon className={clasess.footerSocialIconContact} />
              </a>
            </div>
          </Grid>

          <Grid style={{ padding: '2.6rem 0', background: '#fff' }} item xs={12} md={7}>
            <div className={clasess.form__container}>
              <form method='POST' onSubmit={formik.handleSubmit} className={clasess.form}>
                <Box
                  sx={{
                    maxWidth: '100%',
                    mt: 9,
                  }}
                >
                  <TextField
                    style={{ padding: '1.5rem 0', fontSize: '18px ', fontWeight: '600' }}
                    fullWidth
                    placeholder='Your Full Name'
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name && formik.touched.name}
                    helperText={formik.errors.name && formik.touched.name && formik.errors.name}
                  />

                  <TextField
                    style={{ padding: '1.5rem 0' }}
                    fullWidth
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email && formik.touched.email}
                    helperText={formik.errors.email && formik.touched.email && formik.errors.email}
                    placeholder='Your Email'
                  />

                  <TextField
                    className={clasess.Textarea}
                    placeholder='Drop us a message here...'
                    style={{ padding: '1.5rem 0' }}
                    fullWidth
                    multiline
                    rows={9}
                    id='message'
                    name='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.message && formik.touched.message}
                    helperText={formik.errors.message && formik.touched.message && formik.errors.message}
                  />
                </Box>

                <div className={clasess.validation__div}>
                  {error && (
                    <p className={clasess.validation__error}>
                      {error.errors && error.errors.length ? error.errors[0].msg : error.msg}
                    </p>
                  )}
                  {successResponse && <p className={clasess.validation__success}>{formData.msg}</p>}
                </div>
              </form>
            </div>

            <div className={clasess.btnDiv}>
              <Button variant='contained' type='submit' onClick={formik.handleSubmit}>
                Send Message
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Contact
