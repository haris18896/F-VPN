import React, { useState } from 'react'

import { DynamicContainer, StyledMenu } from '../../css/Dashboard/PortalPage/PortalPage.js'

import LockIcon from '@mui/icons-material/Lock'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Typography } from '@mui/material'

const DeleteAccount = React.lazy(() => import('./DeleteAccount.js'))
const PersonalInformation = React.lazy(() => import('./PersonalInformation.js'))
const Security = React.lazy(() => import('./Security.js'))

function ProfileComposition() {
  const classes = DynamicContainer()

  let tabs = [
    {
      id: 'personal_information',
      name: 'Personal Info',
      default: true,
      icon: <DriveFileRenameOutlineIcon />,
    },
    {
      id: 'security',
      name: 'Security',
      default: false,
      icon: <LockIcon />,
    },
  ]
  const [tabsState] = useState(tabs)
  const [selectedTab, setSelectedTab] = useState({
    id: 'personal_information',
    name: 'Personal Information',
    default: true,
  })

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChangeTab = tab => {
    setSelectedTab(tab)
    handleClose()
  }

  return (
    <div className={classes.dashboard__portal__Main__Container}>
      <div className={classes.dashboard__Header}>
        {tabsState.map((doc, index) => (
          <p
            onClick={() => handleChangeTab(doc)}
            className={
              doc.id === selectedTab.id ? `${classes.Selected__item__dashboard}` : `${classes.UnSelected__item__dashboard}`
            }
          >
            {doc.name}
          </p>
        ))}
      </div>
      <div className={classes.dashboard__Header_small}>
        <Button
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon className={classes.dashboard__Menu_icon_small} />}
          className={classes.dashboard__Menu__Btn}
        >
          <Typography className={classes.dashboard__Menu_icon_small__Content}>{selectedTab.name}</Typography>
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
          {tabsState.map((doc, index) => (
            <MenuItem onClick={() => handleChangeTab(doc)} disableRipple>
              {doc.icon}
              {doc.name}
            </MenuItem>
          ))}
        </StyledMenu>
      </div>
      <div className={classes.dashboard__Body}>
        {selectedTab.id === 'personal_information' && <PersonalInformation />}
        {selectedTab.id === 'security' && <Security />}
        {selectedTab.id === 'delete_Account' && <DeleteAccount />}
      </div>
    </div>
  )
}
export default ProfileComposition
