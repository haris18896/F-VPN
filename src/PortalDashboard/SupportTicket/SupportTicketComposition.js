import React, { useState } from 'react'

import { DynamicContainer, StyledMenu } from '../../css/Dashboard/PortalPage/PortalPage.js'

import SupportIcon from '@mui/icons-material/Support'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Typography, MenuItem, Button } from '@mui/material'

const NewTickets = React.lazy(() => import('./NewTickets'))
const ActiveComplaintsTable = React.lazy(() => import('./ActiveComplaintsTable.js'))
const CloseComplaintsTable = React.lazy(() => import('./CloseComplaintsTable.js'))

function SupportTicketComposition() {
  const classes = DynamicContainer()

  let tabs = [
    {
      id: 'new_Tickets',
      name: '+ New Tickets',
      default: true,
      icon: <SupportIcon />,
    },
    {
      id: 'active_complaints',
      name: 'active Complaints',
      default: false,
      icon: <ToggleOnIcon />,
    },
    {
      id: 'close_complaints',
      name: 'Close Complaints',
      default: false,
      icon: <ToggleOffIcon />,
    },
  ]
  const [tabsState] = useState(tabs)
  const [selectedTab, setSelectedTab] = useState({
    id: 'new_Tickets',
    name: '+ New Tickets',
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
          // variant='contained'
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
        {selectedTab.id === 'new_Tickets' && <NewTickets />}
        {selectedTab.id === 'active_complaints' && <ActiveComplaintsTable />}
        {selectedTab.id === 'close_complaints' && <CloseComplaintsTable />}
      </div>
    </div>
  )
}
export default SupportTicketComposition
