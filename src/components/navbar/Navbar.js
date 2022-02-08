import React, { useEffect, useLayoutEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { handleLogout } from '../../redux/actions/customer'

import {
  Box,
  Container,
  Grid,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'

import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import PersonIcon from '@mui/icons-material/Person'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import SpecialOffer from '../special-offer/SpecialOffer'
import logo from '../../assets/images/Header_Logo.svg'

import navbarStyles from '../../css/components/navbar/navbar'

const Navbar = () => {
  const classes = navbarStyles()

  const dispatch = useDispatch()

  const { user, isAuthenticated } = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(handleLogout())
    localStorage.removeItem('token')
  }

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
      id: 'home',
      name: 'Home',
      path: '/',
      icon: <HomeIcon />,
      default: true,
    },
    {
      id: 'aboutUs',
      name: 'About Us',
      path: '/about',
      icon: <InfoIcon />,
      default: false,
    },
    {
      id: 'pricing',
      name: 'Pricing',
      path: '/pricing',
      icon: <LocalAtmIcon />,
      default: false,
    },
    {
      id: 'contactUs',
      name: 'Contact Us',
      path: '/contact',
      icon: <PermContactCalendarIcon />,
      default: false,
    },
    {
      id: 'myAccount',
      name: `${user && isAuthenticated ? 'Dashboard' : 'Login'}`,
      path: `${user && isAuthenticated ? '/dashboard-portal' : '/login'}`,
      icon: <VpnKeyIcon />,
      default: false,
    },
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
    if (width >= 1201) {
      setState({ ...state, right: false })
    }
  }, [width])

  const handleChangeTab = tab => {
    setSelectedTab(tab)
    navigate(tab.path)
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
    </Box>
  )
  // ** For Drawer

  return (
    <navbar className={classes.friendsVPNHeader}>
      <SpecialOffer />
      <Container maxWidth='xl' className={classes.navbarWrapper}>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Box mr={10} className={classes.headerMarginSmallScreen}>
                <img className={classes.headerLogo} src={logo} alt='Logo' onClick={() => navigate('/')} />
              </Box>
              <Stack
                component='ul'
                className={classes.navMenuList}
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                spacing={5}
              >
                <Link className={classes.removeUnderline} to='/'>
                  <li className={window.location.pathname === '/' ? `${classes.navActive}` : `${classes.navLink}`}>Home</li>
                </Link>
                <Link className={classes.removeUnderline} to='/about'>
                  <li className={window.location.pathname === '/about' ? `${classes.navActive}` : `${classes.navLink}`}>
                    About Us
                  </li>
                </Link>
                <Link className={classes.removeUnderline} to='/pricing'>
                  <li className={window.location.pathname === '/pricing' ? `${classes.navActive}` : `${classes.navLink}`}>
                    Pricing
                  </li>
                </Link>
                <Link className={classes.removeUnderline} to='/contact'>
                  <li className={window.location.pathname === '/contact' ? `${classes.navActive}` : `${classes.navLink}`}>
                    Contact Us
                  </li>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item>
            {user && isAuthenticated ? (
              <div className={classes.logged__in__user}>
                <button className={classes.dashboard__button} onClick={() => navigate('/dashboard-portal')}>
                  <DashboardIcon /> &nbsp;&nbsp; Dashboard
                </button>
                <button className={classes.Logout__button} onClick={() => logoutHandler()}>
                  <PersonIcon />
                  &nbsp;&nbsp; Logout
                </button>
              </div>
            ) : (
              <button onClick={() => navigate('/login')} className={classes.friendsVPNBtnNavBar}>
                Login
              </button>
            )}
          </Grid>
          <Grid item className={classes.hamburgerIconWrapper}>
            <i className='fas fa-bars fa-2x' onClick={toggleDrawer('right', true)}></i>
          </Grid>
        </Grid>
      </Container>

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
            <Toolbar>
              <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                <ArrowForwardIosIcon onClick={toggleDrawer('right', false)} className={classes.AppBarForwardArrow} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        {list('right')}
      </Drawer>
    </navbar>
  )
}

export default Navbar
