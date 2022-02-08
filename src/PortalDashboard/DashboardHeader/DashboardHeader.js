import { useEffect, useLayoutEffect, useState, lazy } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { handleLogout } from '../../redux/actions/customer'

import logo from '../../assets/images/Portal.svg'

import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import SupportIcon from '@mui/icons-material/Support'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Grid, Stack, Box, Drawer, List, ListItem, AppBar, Toolbar, Typography } from '@mui/material'

import { DashboardStyles } from '../../css/Dashboard/Header/DashboardHeader'
import { useInfoStore } from '../../context/Context'

const ProfileDropDown = lazy(() => import('./ProfileDropDown'))
const LanguageDropDown = lazy(() => import('./LanguageDropDown'))

const DashboardHeader = () => {
  const classes = DashboardStyles()

  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const [pathToggleState, pathToggleDispatch] = useInfoStore()

  // ** For Drawer
  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  let tabs = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      path: '1',
      type: 'Dashboard__portal',
      icon: <DashboardIcon />,
      default: true,
    },
    {
      id: 'subscription',
      name: 'My Subscription',
      path: '2',
      type: 'subscription',
      icon: <SubscriptionsIcon />,
      default: false,
    },
    {
      id: 'BillingHistory',
      name: 'Billing History',
      path: '3',
      type: 'Billing__History',
      icon: <CreditCardIcon />,
      default: false,
    },
    {
      id: 'Support',
      name: 'Support Ticket',
      path: '4',
      type: 'Support__Ticket',
      icon: <SupportIcon />,
      default: false,
    },

    {
      id: 'myProfile',
      name: 'Profile',
      path: '5',
      type: 'Profile',
      icon: <PersonIcon />,
      default: false,
    },

    // {
    //   id: 'logout',
    //   name: 'Logout',
    //   path: '/',
    //   icon: <PermContactCalendarIcon />,
    //   default: false,
    // },
  ]

  const [tabsState] = useState(tabs)
  const [selectedTab, setSelectedTab] = useState()

  const navigate = useNavigate()

  function useWindowSize() {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
  }

  const [width] = useWindowSize()

  useEffect(() => {
    if (width >= 900) {
      setState({ ...state, right: false })
    }
  }, [width])

  const handleChangeTab = tab => {
    setSelectedTab(tab)
    // navigate(tab.pathToggle)
    pathToggleDispatch({ type: tab.type, path: tab.path })
  }

  const logoutHandler = () => {
    dispatch(handleLogout())
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {tabsState.map((doc, index) => (
          <ListItem button key={doc.id} onClick={() => handleChangeTab(doc)}>
            <ListItemIcon
              className={
                (selectedTab && doc.id === selectedTab.id) || doc.path === window.location.pathname
                  ? classes.SelectedMobMenuLinkIcon
                  : classes.unSelectedMobMenuLinkIcon
              }
            >
              {doc.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  type='body2'
                  className={
                    (selectedTab && doc.id === selectedTab.id) || doc.path === window.location.pathname
                      ? classes.SelectedItem
                      : classes.unSelectedItem
                  }
                >
                  {doc.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <List className={classes.logoutLink} onClick={() => logoutHandler()}>
        <listItemIcon className={classes.logoutIcon}>
          <LogoutIcon />
        </listItemIcon>
        <ListItemText className={classes.LogoutText}>Logout</ListItemText>
      </List>
    </Box>
  )
  // ** For Drawer

  return (
    <navbar className={classes.friendsVPNHeader}>
      {/* <SpecialOffer /> */}
      <div className={classes.navbarWrapper}>
        <Grid container className={classes.MainGird}>
          <Grid item style={{}} className={classes.imgGrid}>
            <img className={classes.headerLogo} src={logo} alt='Logo' onClick={() => navigate('/')} />
          </Grid>

          <Grid item>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='flex-end'>
              <Box className={classes.ProfileBox}>{user && isAuthenticated ? <LanguageDropDown /> : null}</Box>
            </Stack>
          </Grid>

          <Grid item>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='flex-end'>
              <Box className={classes.ProfileBox}>{user && isAuthenticated ? <ProfileDropDown /> : null}</Box>
            </Stack>
          </Grid>

          <Grid item className={classes.hamburgerIconWrapper}>
            <i className='fas fa-bars fa-2x' onClick={toggleDrawer('right', true)}></i>
          </Grid>
        </Grid>
      </div>
      {/* <hr className={classes.navbarHorizontalRule} /> */}


      <Drawer
        className={classes.drawer}
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box>
          <AppBar position='static' className={classes.mobileAppBar}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                <ArrowForwardIosIcon onClick={toggleDrawer('right', false)} className={classes.AppBarForwardArrow} />
              </IconButton>
              <Box className={classes.ProfileBoxSmall}>
                <ProfileDropDown />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {list('right')}
      </Drawer>
    </navbar>
  )
}

export default DashboardHeader
