import { makeStyles } from '@material-ui/core/styles'

const loginPageStyles = makeStyles(theme => ({
  loginWrapper: {
    paddingTop: '226px',
    paddingBottom: '135px',
    background: '#EDF0F7',
  },
  yellowCircle: {
    display: 'none',
    position: 'absolute',
    top: '30%',
    transform: 'translateY(-30%)',
    left: '-100px',
    [theme.breakpoints.up('1000')]: {
      display: 'block',
    },
  },
  loginLeftGridItem: {},
  loginRightGridItem: {},
  loginLeftGridItemPassword: {},
  loginRightGridItemPassword: {},
  loginPageGreetingsText: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '24px !important',
    fontWeight: 'bold !important',
    marginBottom: '20px',

    [theme.breakpoints.up('md')]: {
      fontSize: '36px !important',
    },
  },

  confirmResetPasswordHeading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '24px !important',
    fontWeight: 'bold !important',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#24275d',

    [theme.breakpoints.up('md')]: {
      fontSize: '36px !important',
    },
  },

  confirmPasswordMainGrid: {
    background: '#fefefe',
    boxShadow: '5px 5px 14px -6px rgba(0,0,0,0.25)',
    width: '50% !important',
    padding: '40px 20px !important',
    marginLeft: 'auto !important',
    marginRight: 'auto !important',

    [theme.breakpoints.down('900')]: {
      width: '70% !important',
    },
    [theme.breakpoints.down('500')]: {
      width: '90% !important',
    },
  },
  loginLeftGridItemConfirmPassword: {
    padding: '0px !important',
  },
  loginFavicon: {
    width: '50px',
    height: '50px',
    marginRight: '',
  },
  loginLogo: {
    marginBottom: '40px',
  },
  circularProgress: {
    display: 'flex',
    margin: '8px auto 0px auto !important',
    color: '#24275d !important',
  },
  successPasswordResetMsg: {
    marginTop: '8px !important',
    textAlign: 'center !important',
  },
  Checkbox: {
    '&:checked': {
      color: '#FFC10B',
    },
  },
  forgotAndChecked: {
    marginBottom: '40px !important',
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  forgotPasswordLink: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px !important',
    fontWeight: '500 !important',
    cursor: 'pointer',
  },
  forgotPassword: {
    color: '#0A0C23',
    fontSize: '16px !important',
    fontWeight: '500 !important',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  loginButton: {
    fontFamily: 'Open sans !important',
    fontSize: '16px !important',
    fontWeight: '600 !important',
    width: '100% !important',
    color: 'white !important',
    borderRadius: '50px !important',
    padding: '10px 0px !important',
    backgroundColor: '#24275d !important',
    textTransform: 'capitalize',
    boxShadow: 'none !important',
  },
  ResetPassword: {
    marginTop: '10px !important',
  },
  registerFreeWrapperLoginPage: {
    fontSize: '16px !important',
    fontWeight: '600 !important',
    cursor: 'pointer',
    marginTop: '15px',
  },
  registerLinkLoginPage: {
    color: '#24275d',
    fontSize: '16px !important',
    fontWeight: ' bold !important',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  secondaryHeadingLoginPage: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '32px !important',
    fontWeight: 'bold !important',
    color: theme.palette.primary.main,
    marginBottom: '15px',

    [theme.breakpoints.up('md')]: {
      fontSize: '32px !important',
    },
  },
  paragraphTextLoginPage: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '18px !important',
    fontWeight: '400 !important',
    color: theme.palette.primary.main,
    width: '100% !important',
    [theme.breakpoints.up('sm')]: {
      width: '80% !important',
    },
  },
  loginPageIllustrationWrapper: {
    marginTop: '40px',
  },
  loginPageIllustration: {
    width: '100% !important',
  },
  loginLeftGridItemContentWrapper: {},
  loginForm: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '80% !important',
    },
  },

  icon__BTNs: {
    marginTop: '0 !important',
    backgroundColor: 'transparent !important',
    color: '#5c5c5c !important',
    padding: '3px 5px !important',
  },
  Text_danger: {
    fontFamily: 'Open Sans !important',
    color: '#24275d',
    fontWeight: '500 !important',
    fontSize: '24px',
  },
}))
export default loginPageStyles
