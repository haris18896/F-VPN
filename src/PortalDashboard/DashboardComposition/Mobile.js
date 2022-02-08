import React from 'react'
import { Box, Grid } from '@mui/material'
import { DesktopMobile } from '../../css/Dashboard/DashboardStyles.js/DesktopMobile'

import AndroidIcon from '@mui/icons-material/Android'
import AppleIcon from '@mui/icons-material/Apple'
function Mobile() {
  const classes = DesktopMobile()

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} className={classes.grid__item}>
          <div className={classes.ContentMobile}>
            <div className={classes.icon__content}>
              <AndroidIcon className={classes.icons__mobile} />
              <div className={classes.icon__content__text}>
                <h3>Android</h3>
                <p>Google Play Store</p>
              </div>
            </div>
            <p className={classes.middle__text}>Download FriendsVPN for your devices</p>
            <div className={classes.items__select}>
              <ul className={classes.list__items}>
                <li>
                  <a href='https://play.google.com/store/apps/details?id=com.friendsvpn.vpn' className='anchor__Link'>
                    FriendsVPN for Android
                  </a>
                </li>
                <li>
                  <a href='https://play.google.com/store/apps/details?id=com.wireguard.android'>
                    WireGuard for Android (3rd Party)
                  </a>
                </li>

                <li>
                  <a href='https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en'>
                    OpenVPN Connect for Android (3rd Party)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid__item}>
          <div className={classes.ContentMobile}>
            <div className={classes.icon__content}>
              <AppleIcon className={classes.icons__mobile} />
              <div className={classes.icon__content__text}>
                <h3>iOS</h3>
                <p>Apple App Store</p>
              </div>
            </div>
            <p className={classes.middle__text}>Download FriendsVPN for your devices</p>
            <div className={classes.items__select}>
              <ul className={classes.list__items}>
                <li>
                  <a href='https://apps.apple.com/us/app/friendsvpn/id1592295384'>FriendsVPN for iOS</a>
                </li>
                <li>
                  <a href='https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8'>WireGuard for iOS (3rd party)</a>
                </li>
                <li>
                  <a href='https://itunes.apple.com/us/app/openvpn-connect/id590379981?mt=8'>
                    OpenVPN Connect for iOS (3rd Party)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Mobile
