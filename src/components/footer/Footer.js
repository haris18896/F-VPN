import React, { useState } from 'react'

import Select from 'react-select'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Grid, Stack } from '@mui/material'
import footerLogo from '../../assets/images/Footer_logo.svg'
import playStore from '../../assets/images/PlayStore.svg'
import appStore from '../../assets/images/AppStore.svg'
import world from '../../assets/images/world.svg'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import footerStyles from '../../css/components/footer/footer'

const CountryOptions = [{ value: 'English', label: 'English' }]

const colourStyles = {
  container: styles => ({ ...styles, width: '100%', color: '#24275D', textDecoration: 'none' }),
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    borderColor: 'transparent !important',
    fontSize: '16px',
    boxShadow: 'none',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: '#24275D',
    fontSize: '20px',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? '#cccccc' : isSelected ? '#24275d' : isFocused ? '#fafafa' : '#fafafa',
      color: isDisabled ? '#24275D' : isSelected ? '#FFC10B' : '#24275D',
      cursor: 'pointer',
      fontSize: '16px',
      '&:active': {
        backgroundColor: '#24275d',
        color: '#fafafa',
      },
      '&:hover': {
        backgroundColor: isSelected ? '#24275d' : '#c6c6c6 !important',
      },
    }
  },
  menu: styles => ({ ...styles, backgroundColor: 'white', color: '#24275D' }),
  singleValue: (styles, { data }) => {
    return {
      ...styles,
      color: '#24275D',
      fontSize: '16px',
    }
  },
}
export default function Footer() {
  const classes = footerStyles()
  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState(CountryOptions[0])

  const onLanguageChange = option => {
    setSelectedOption(option)
  }

  return (
    <Box component='footer' className={classes.footer}>
      <Container maxWidth='xl'>
        <Grid container rowSpacing={{ xs: 7 }}>
          <Grid item xs={12} lg={4}>
            <Box mb={4}>
              <Box mb={2}>
                <img className={classes.footerLogo} onClick={() => navigate('/')} src={footerLogo} alt='footer_logo' />
              </Box>
              <Typography variant='subtitle1' component='p' className={classes.footerParagraph}>
                FriendsVPN is a free VPN Service offered by us. We prioritize your online privacy, security and freedom above all
                else.
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' component='h6' mb={2} className={classes.footerLinksHeading}>
                Language
              </Typography>

              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='center'
                spacing={1}
                className={classes.languageSelectorContainer}
              >
                <Box className={classes.footerGlobeIcon}>
                  <img src={world} alt='Globe' />
                </Box>

                <Select
                  options={CountryOptions}
                  defaultValue={CountryOptions[0]}
                  value={selectedOption}
                  onChange={onLanguageChange}
                  styles={colourStyles}
                />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack>
              <Typography variant='h6' component='h6' mb={2} className={classes.footerLinksHeading}>
                Services
              </Typography>
              <Stack spacing={{ xs: 1, sm: 2 }} component='ul' className={classes.footerLinks}>
                <Typography component='li' className={classes.footerLink} onClick={() => navigate('/pricing')}>
                  <Link className={classes.footerLinkAnchor} to='/pricing'>
                    Plans & Pricing
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack>
              <Typography variant='h6' component='h6' mb={2} className={classes.footerLinksHeading}>
                About FriendsVPN
              </Typography>
              <Stack spacing={{ xs: 1, sm: 2 }} component='ul' className={classes.footerLinks}>
                <Typography component='li' className={classes.footerLink} onClick={() => navigate('/about')}>
                  <Link className={classes.footerLinkAnchor} to='/about'>
                    About Us
                  </Link>
                </Typography>
                <Typography component='li' className={classes.footerLink} onClick={() => navigate('/privacy-policy')}>
                  <Link className={classes.footerLinkAnchor} to='/privacy-policy'>
                    Privacy Policy
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack>
              <Typography variant='h6' component='h6' mb={2} className={classes.footerLinksHeading}>
                Help
              </Typography>
              <Stack spacing={{ xs: 1, sm: 2 }} component='ul' className={classes.footerLinks}>
                <Typography component='li' className={classes.footerLink} onClick={() => navigate('/faqs')}>
                  <Link className={classes.footerLinkAnchor} to='/faqs'>
                    FAQs
                  </Link>
                </Typography>
                <Typography component='li' className={classes.footerLink} onClick={() => navigate('/terms-of-service')}>
                  <Link className={classes.footerLinkAnchor} to='/terms-of-service'>
                    Terms of Service
                  </Link>
                </Typography>
                <Typography component='li' className={classes.footerLink} onClick={() => navigate('/contact')}>
                  <Link className={classes.footerLinkAnchor} to='/contact'>
                    Contact Us
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2} className={classes.downloadAppItems}>
            <Stack>
              <Typography variant='h6' component='h6' mb={2} className={classes.footerLinksHeading}>
                Download App
              </Typography>
              <Stack spacing={{ xs: 1, sm: 2 }} component='ul' className={classes.footerLinks} mb={3}>
                <Box component='li' className={classes.footerStoreIcon}>
                  <a target='_blank' rel='noreferrer' href='https://play.google.com/store/apps/details?id=com.friendsvpn.vpn'>
                    <img height='40px' src={playStore} alt='Play Store Icon' />
                  </a>
                </Box>
                <Box component='li' className={classes.footerStoreIcon}>
                  <a target='_blank' rel='noreferrer' href='https://apps.apple.com/us/app/friendsvpn/id1592295384'>
                    <img height='40px' src={appStore} alt='App Store Icon' />
                  </a>
                </Box>
              </Stack>

              <Stack direction='row' justifyContent='flex-start' spacing={1}>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/FriendsVPN'>
                  <FacebookIcon className={classes.footerSocialIcon} />
                </a>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/Friends_VPN'>
                  <TwitterIcon className={classes.footerSocialIcon} />
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/friendsvpn/'>
                  <InstagramIcon className={classes.footerSocialIcon} />
                </a>
                <a target='_blank' rel='noreferrer' href='#'>
                  <LinkedInIcon className={classes.footerSocialIcon} />
                </a>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <hr className={classes.footerHorizontalRule} />
      </Container>

      <Stack direction='row' justifyContent='center' spacing={1}>
        <p className={classes.footerCopyrightText}>&copy; 2021 FriendsVPN, All rights reserved.</p>
      </Stack>
    </Box>
  )
}
