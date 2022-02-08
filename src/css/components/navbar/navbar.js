import { makeStyles } from '@material-ui/core/styles'

const navbarStyles = makeStyles(theme => ({
  friendsVPNHeader: {
    position: 'fixed',
    width: '100%',
    top: '0',
    backgroundColor: 'white',
    zIndex: '30',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },

  friendsVPNHeader__Minimal: {
    width: '100%',
    backgroundColor: 'white',
    zIndex: '30',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },

  navbarWrapper: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },

  headerLogo: {
    cursor: 'pointer',

    [theme.breakpoints.down('450')]: {
      transform: 'scale(0.8)',
    },
  },
  navbarHorizontalRule: {
    border: '1px solid #F6F6F6',
  },
  navMenuList: {
    display: 'none !important',
    listStyle: 'none',
    paddingLeft: '0px',
    marginLeft: '0px',
    marginTop: '0px',
    marginBottom: '0px',

    [theme.breakpoints.up('lg')]: {
      display: 'flex !important',
    },
  },
  navLink: {
    fontWeight: 'bold',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontSize: '15px',
    color: '#24275d',
  },

  navActive: {
    fontWeight: 'bold',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontSize: '15px',
    color: `${theme.palette.secondary.main} !important`,
  },
  removeUnderline: {
    textDecoration: 'none',
  },
  friendsVPNBtnNavBar: {
    display: 'none',
    fontWeight: '500',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontSize: '16px',
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    border: 'none',
    outline: 'none',
    padding: '12px 45px',
    cursor: 'pointer',

    [theme.breakpoints.up('lg')]: {
      display: 'block !important',
    },

    '&:hover': {
      backgroundColor: '#0A0C23',
    },
  },
  logged__in__user: {
    display: 'flex',
    alignItems: 'center',

    '& button': {
      cursor: 'pointer',
      backgroundColor: 'transparent',
      fontSize: '16px',
      padding: '12px',
      borderRadius: '5px',
      border: ' none',
      fontWeight: '700',
      margin: '0px 5px',
      color: '#24275D',
      display: 'flex',
      alignItems: 'center',

      '& svg': {
        color: '#fff',
        background: '#FFC10B',
        borderRadius: '4px',
        padding: '2px',
      },

      '&:hover': {
        backgroundColor: 'rgba(219, 219, 219, 0.2)',
      },
    },

    [theme.breakpoints.down('1280')]: {
      display: 'none',
    },
  },

  hamburgerIconWrapper: {
    color: '#24275D',
    cursor: 'pointer',

    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.down('450')]: {
      transform: 'scale(0.8)',
    },
  },
  headerMarginSmallScreen: {
    [theme.breakpoints.down('450')]: {
      marginRight: '20px !important',
    },
  },
  drawerPaper: {
    backgroundColor: '#24275D !important',
    color: '#ffffff !important',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  mobileAppBar: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
  },
  AppBarForwardArrow: {
    color: '#24275D !important',
  },
  SelectedItem: {
    color: `${theme.palette.secondary.main} !important`,
  },
  unSelectedMobMenuLinkIcon: {
    color: 'white !important',
  },
  SelectedMobMenuLinkIcon: {
    color: `${theme.palette.secondary.main} !important`,
  },
}))
export default navbarStyles
