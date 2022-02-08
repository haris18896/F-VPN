import { makeStyles } from '@material-ui/core/styles'
import { styled, alpha } from '@mui/material/styles'
import Menu from '@mui/material/Menu'

export const DashboardStyles = makeStyles(theme => ({
  friendsVPNHeader: {
    position: 'fixed',
    width: '100%',
    top: '0',
    backgroundColor: 'white',
    zIndex: '30',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },

  navbarWrapper: {
    padding: '15px 57px',

    [theme.breakpoints.down('450')]: {
      paddingLeft: '1px !important',
      paddingRight: '4px !important',
    },
  },
  MainGird: {
    direction: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('400')]: {
      justifyContent: 'space-between !important',
    },
    [theme.breakpoints.down('340')]: {
      flexDirection: 'column !important',
    },
  },
  imgGrid: {
    marginRight: 'auto !important',
    padding: '0 !important',
    [theme.breakpoints.down('400')]: {
      marginRight: '0 !important',
      transform: 'scale(0.8)',
    },
    [theme.breakpoints.down('350')]: {
      marginRight: '0 !important',
      transform: 'scale(0.7)',
    },
  },
  headerLogo: {
    cursor: 'pointer',
    alignContent: 'flex-start !important',
    maxWidth: '300px',
    width: '280px',
    height: '50px',

    [theme.breakpoints.down('400')]: {
      marginRight: '10px',
      textAlign: 'left',
    },
  },

  ProfileBox: {
    [theme.breakpoints.down('900')]: {
      display: 'none',
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

    [theme.breakpoints.up('900')]: {
      display: 'flex !important',
    },
  },
  navLink: {
    fontWeight: 'bold',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontSize: '15px',
    color: '#C1C2C3',
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

    [theme.breakpoints.up('900')]: {
      display: 'block !important',
    },

    '&:hover': {
      backgroundColor: '#0A0C23',
    },
  },
  hamburgerIconWrapper: {
    color: '#24275D',
    cursor: 'pointer',

    [theme.breakpoints.up('900')]: {
      display: 'none',
    },
    [theme.breakpoints.down('455')]: {
      transform: 'scale(0.8)',
    },
  },
  headerMarginSmallScreen: {
    [theme.breakpoints.down('455')]: {
      marginRight: '20px !important',
      transform: 'scale(0.75)',
    },
  },
  drawerPaper: {
    backgroundColor: '#24275D !important',
    color: '#ffffff !important',
  },
  drawer: {
    [theme.breakpoints.up('900')]: {
      display: 'none',
    },
  },
  mobileAppBar: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
  },
  Toolbar: {
    justifyContent: 'space-between !important',
  },
  IconButton: {
    padding: '0px !important',
  },
  ProfileBoxSmall: {},
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
  logoutLink: {
    display: 'inline-flex',
    padding: '0 16px 8px 16px !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    flexBasis: '100%',
  },

  logoutIcon: {
    color: 'white !important',
    marginRight: '30px !important',
    marginLeft: '3px !important',
  },
  LogoutText: {
    color: `white !important`,
    marginRight: '100px !important',
  },
  profileButton: {
    color: '#000 !important',
    background: 'transparent !important',
    textTransform: 'none !important',
    padding: '0 !important',

    [theme.breakpoints.down('900')]: {
      padding: '0 !important',
    },
  },
  profileName: {
    marginLeft: '16px !important',
    fontSize: '19px !important',
    fontWeight: '600 !important',
    fontFamily: 'Open Sans',
    color: '#24275D !important',
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },
  profileIcon: {
    color: '#FFC10B !important',
    background: '#F0F2F6 !important',
    borderRadius: '50%',
    fontSize: '40px !important',
    width: '50px',
    height: '50px',
    [theme.breakpoints.down('900')]: {
      color: '#24275D  !important',
    },
  },
  ArrowDropDownIcon: {
    color: '#FFC10B !important',
    fontSize: '40px !important',
    marginLeft: '20px !important',
    [theme.breakpoints.down('900')]: {
      marginLeft: '0px !important',
      marginRight: '0px !important',
      paddingLeft: '0px !important',
      color: '#24275D !important',
      fontSize: '22px !important',
    },
  },

  LanguageIcon: {
    color: '#858997 !important',
    background: 'transparent !important',
    borderRadius: '50%',
    fontSize: '30px !important',
    [theme.breakpoints.down('900')]: {
      color: '#24275D  !important',
    },
  },

  Language: {
    marginLeft: '10px !important',
    marginRight: '10px !important',
    fontSize: '18px !important',
    fontWeight: '500 !important',
    fontFamily: 'Open Sans',
    color: '#858997 !important',
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },
  LanguageArrowDropDownIcon: {
    color: '#858997 !important',
    fontSize: '30px !important',
    marginLeft: '0px !important',
    marginRight: '40px !important',
    [theme.breakpoints.down('900')]: {
      display: 'none !important',
    },
  },

  logoutText: {
    color: '#24275D !important',
    fontSize: '16px !important',
    fontWeight: '600 !important',
    fontFamily: 'Open Sans !important',
    marginLeft: '13px !important',
  },
  logoutTextGmail: {
    color: '#C1C2C3 !important',
    fontSize: '16px !important',
    fontWeight: '600 !important',
    fontFamily: 'Open Sans !important',
    marginLeft: '13px !important',
    padding: '10px 0px !important',
  },
  modal__content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  modal_title: {
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Open sans',
    marginBottom: '10px !important',
    textAlign: 'center',
  },
  modal_desc: {
    fontWeight: 400,
    marginBottom: '30px',
    textAlign: 'center',
    fontFamily: 'Open sans',
    marginTop: '0px',
  },

  modal_btn: {
    width: '80%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#24275d',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '15px',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
      color: '#fff',
      background: '#24275a',

      transform: 'scale(1.05)',
    },
  },

  logout__button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },

  cancel_logout_btn: {
    width: '50%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#dbd9d9',
    color: '#000',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '15px',
    transition: 'all 0.5s ease-in-out',
    marginRight: '20px',

    '&:hover': {
      color: '#000',
      background: '#afafaf',

      transform: 'scale(1.05)',
    },
  },

  logout_modal_btn: {
    width: '50%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#24275d !important',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '15px',
    transition: 'all 0.5s ease-in-out',
    marginLeft: '20px',

    '&:hover': {
      color: '#fff',
      background: '#24275a',

      transform: 'scale(1.05)',
    },
  },
}))

// ***************************************************************

export const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 300,
    [theme.breakpoints.down('900')]: {
      minWidth: '200px',
    },
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0 !important',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: '#24275D !important',
        paddingLeft: '12px !important',
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))

// ***************************************************************

export const StyledMenuLanguage = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 220,
    [theme.breakpoints.down('900')]: {
      minWidth: '200px',
    },
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0 !important',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: '#24275D !important',
        paddingLeft: '12px !important',
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))
