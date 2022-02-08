import React, { useState } from 'react'

import DesktopMacIcon from '@mui/icons-material/DesktopMac'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { DynamicContainer, StyledMenu } from '../../css/Dashboard/PortalPage/PortalPage.js'
import { Typography } from '@mui/material'

const Desktop = React.lazy(() => import('./Desktop.js'))
const Mobile = React.lazy(() => import('./Mobile.js'))

function DashboardComposition() {
  const classContainer = DynamicContainer()

  let tabs = [
    {
      id: 'Desktop',
      name: 'For Desktop',
      default: true,
      icon: <DesktopMacIcon />,
    },
    {
      id: 'Mobile',
      name: 'For Mobile',
      default: false,
      icon: <PhoneAndroidIcon />,
    },
  ]
  const [tabsState] = useState(tabs)
  const [selectedTab, setSelectedTab] = useState({
    id: 'Desktop',
    name: 'For Desktop',
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
    <div className={classContainer.dashboard__portal__Main__Container}>
      <div className={classContainer.dashboard__Header}>
        {tabsState.map((doc, index) => (
          <p
            onClick={() => handleChangeTab(doc)}
            className={
              doc.id === selectedTab.id
                ? `${classContainer.Selected__item__dashboard}`
                : `${classContainer.UnSelected__item__dashboard}`
            }
          >
            {doc.name}
          </p>
        ))}
      </div>
      <div className={classContainer.dashboard__Header_small}>
        <Button
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          // variant='contained'
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon className={classContainer.dashboard__Menu_icon_small} />}
          className={classContainer.dashboard__Menu__Btn}
        >
          <Typography className={classContainer.dashboard__Menu_icon_small__Content}>{selectedTab.name}</Typography>
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
      <div className={classContainer.dashboard__Body}>
        {selectedTab.id === 'Desktop' && <Desktop />}
        {selectedTab.id === 'Mobile' && <Mobile />}
      </div>
    </div>
  )
}

export default DashboardComposition
