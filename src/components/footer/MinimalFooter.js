import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Stack, Typography } from '@mui/material'
import playStore from '../../assets/images/PlayStore.svg'
import appStore from '../../assets/images/AppStore.svg'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import minimalFooterStyles from '../../css/components/footer/mnimalFooter'

export default function MinimalFooter() {
  const classes = minimalFooterStyles()

  return (
    <Box component='footer' className={classes.minimalFooter}>
      <Container maxWidth='xl'>
        <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent='space-between' alignItems='center'>
          <Stack direction='row' justifyContent='center' alignItems='center' order={{ xs: 3, lg: 1 }} mt={{ xs: 3, lg: 0 }}>
            <Typography variant='p'>&copy; 2021 FriendsVPN, All rights reserved.</Typography>
          </Stack>

          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            order={{ xs: 2, lg: 2 }}
            mt={{ xs: 3, lg: 0 }}
            spacing={2}
          >
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

          <Stack
            component='ul'
            className={classes.minimalFooterLinks}
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            order={{ xs: 1, lg: 3 }}
            spacing={1}
          >
            <Box component='li'>
              <a target='_blank' rel='noreferrer' href='https://play.google.com/store/apps/details?id=com.friendsvpn.vpn'>
                <img height='40px' src={playStore} alt='Play Store Icon' />
              </a>
            </Box>
            <Box component='li'>
              <a target='_blank' rel='noreferrer' href='https://apps.apple.com/us/app/friendsvpn/id1592295384'>
                <img height='40px' src={appStore} alt='App Store Icon' />
              </a>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
