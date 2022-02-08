import React from 'react'
import windows from '../../assets/images/Windows_icon.svg'
import Mac from '../../assets/images/Mac_icon.svg'
import linux from '../../assets/images/Linux_icon.svg'

import { Box, Grid } from '@mui/material'
import { DesktopMobile } from '../../css/Dashboard/DashboardStyles.js/DesktopMobile'
function Desktop() {
  const classes = DesktopMobile()

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} lg={4} className={classes.grid__item}>
          <div className={classes.ContentDesktop}>
            <div className={classes.icon__content}>
              <img src={windows} alt='windows' />
              <div className={classes.icon__content__text}>
                <h3>Windows</h3>
                <p>For Windows 7/8.1/10</p>
              </div>
            </div>
            <p className={classes.middle__text}>Download FriendsVPN for your devices</p>
            <div className={classes.items__select}>
              <ul className={classes.list__items}>
                <li>
                  <a href='https://download.wireguard.com/windows-client/wireguard-installer.exe'>
                    WireGuard for Windows (3rd Party)
                  </a>
                </li>
                <li>
                  <a href='https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.8-I601-Win10.exe'>
                    OpenVPN for windows 10 (3rd Party)
                  </a>
                </li>
                <li>
                  <a href='https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.8-I601-Win7.exe'>
                    OpenVPN for windows 7/8/8.1 (3rd Party)
                  </a>
                </li>
                <li>
                  <a href='https://build.openvpn.net/downloads/releases/latest/openvpn-install-latest-winxp-i686.exe'>
                    OpenVPN for windows XP (32-bit) (3rd Party)
                  </a>
                </li>
                <li>
                  <a href='https://build.openvpn.net/downloads/releases/latest/openvpn-install-latest-winxp-x86_64.exe'>
                    OpenVPN for windows XP (64-bit) (3rd Party)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.grid__item}>
          <div className={classes.ContentDesktop}>
            <div className={classes.icon__content}>
              <img src={Mac} alt='mac' />
              <div className={classes.icon__content__text}>
                <h3>maciOS</h3>
                <p>IKEv2 for macOS 10.12+</p>
              </div>
            </div>
            <p className={classes.middle__text}>Download FriendsVPN for your devices</p>
            <div className={classes.items__select}>
              <ul className={classes.list__items}>
                <li>
                  <a href='https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&mt=12'>
                    WireGuard for mac iOS (3rd Party)
                  </a>
                </li>
                <li>
                  <a href='https://tunnelblick.net/release/Latest_Tunnelblick_Stable.dmg'>Tunnelblick for mac iOS (3rd Party)</a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.grid__item}>
          <div className={classes.ContentDesktop}>
            <div className={classes.icon__content}>
              <img src={linux} alt='Linux' />
              <div className={classes.icon__content__text}>
                <h3>Linux</h3>
                <p>DEB Package</p>
              </div>
            </div>
            <p className={classes.middle__text}>Download FriendsVPN for your devices</p>
            <div className={classes.items__select}>
              <ul className={classes.list__items}>
                <li>
                  <a href='https://nordvpn.com/download/linux/?_ga=2.40120418.1399929471.1641821652-1786368491.1641821652#install-instructions'>
                    View instruction for Linux
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

export default Desktop
