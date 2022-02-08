// import React, { useState } from 'react'
import * as React from 'react'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Divider from '@mui/material/Divider'
import LanguageIcon from '@mui/icons-material/Language'
import { DashboardStyles, StyledMenuLanguage } from '../../css/Dashboard/Header/DashboardHeader'
import { Typography } from '@mui/material'

function LanguageDropDown() {
  const classes = DashboardStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        endIcon={<KeyboardArrowDownIcon className={classes.LanguageArrowDropDownIcon} />}
      >
        <LanguageIcon className={classes.LanguageIcon} />
        <span className={classes.Language}>English</span>
      </Button>
      <StyledMenuLanguage
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple style={{ backgroundColor: '#F8F9FA' }}>
          <Typography className={classes.logoutTextGmail}>English</Typography>
        </MenuItem>

        <Divider style={{ margin: 0 }} sx={{ my: 0.5 }} />

        {/* <MenuItem onClick={handleClose} disableRipple style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <Typography className={classes.logoutText}>urdu</Typography>
        </MenuItem> */}
      </StyledMenuLanguage>
    </div>
  )
}

export default LanguageDropDown
