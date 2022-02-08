// import React, { useState } from 'react'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleLogout } from '../../redux/actions/customer'

import PersonIconSVG from '../../assets/images/userImage1.svg'

import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { Typography, Divider, MenuItem, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { DashboardStyles, StyledMenu } from '../../css/Dashboard/Header/DashboardHeader'
import { useInfoStore } from '../../context/Context'

function ProfileDropDown() {
  const classes = DashboardStyles()

  const dispatch = useDispatch()
  const { profile } = useSelector(state => state.profile)
  const [pathToggleState, pathToggleDispatch] = useInfoStore()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const logoutHandler = () => {
    dispatch(handleLogout())
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <div>
      <Button
        id='demo-customized-button'
        aria-controls='demo-customized-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        className={classes.profileButton}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon className={classes.ArrowDropDownIcon} />}
      >
        {/* <PersonIcon className={classes.profileIcon} /> */}
        <img src={PersonIconSVG} alt='profile' className={classes.profileIcon} />
        <span className={classes.profileName}>{profile?.name}</span>
      </Button>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <SettingsIcon />
          <Typography className={classes.logoutText} onClick={() => pathToggleDispatch({ type: 'Profile', path: '5' })}>
            Account Settings
          </Typography>
        </MenuItem>
        <Divider style={{ margin: 0 }} sx={{ my: 0.5 }} />
        <MenuItem onClick={() => logoutHandler()} disableRipple style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <LogoutIcon />
          <Typography className={classes.logoutText}>Logout</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  )
}

export default ProfileDropDown
