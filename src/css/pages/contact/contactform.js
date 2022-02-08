import { makeStyles } from '@material-ui/core/styles'
const contactPageStyles = makeStyles(theme => ({
  contactBackground: {
    background: 'linear-gradient(180deg, #c7c7db , #fcfcff,  #ffff)',
    marginTop: '110px',
    padding: '80px 0',
    position: 'relative',
    zIndex: '1',
  },

  contentDiv: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '120px',
  },

  btnDiv: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '79px',

    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',

      justifyContent: 'center',
    },

    '& Button': {
      background: `${theme.palette.primary.main} !important`,
      borderRadius: 0,
      padding: '0.8rem 2.8rem',
      fontSize: '15px',
      fontWeight: '600',
    },
  },

  leftContent: {
    padding: '1rem 3rem',

    '& h1': {
      fontSize: '36px',
      color: '#fff',

      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },

    '& p': {
      color: '#fff',
      fontSize: '16px',
    },
  },

  iconsDiv: {
    padding: '0 3rem',

    '& img': {
      margin: '0 7px',
    },

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem',
    },
  },

  mainGridContainer: {
    border: '2px solid #c1c2c3',
    position: 'relative',
    zIndex: 999,

    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
  },

  positionPrimaryBox: {
    position: 'absolute',
    left: '-6%',
    top: '-10%',
    zIndex: '-1',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  footerSocialIconContact: {
    color: 'white !important',
    padding: '0 .2rem !important',
  },
  form__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',

    [theme.breakpoints.down('600')]: {
      width: '100%',
    },
  },
  form: {
    [theme.breakpoints.down('1080')]: {
      marginLeft: '20px',
      marginRight: '20px',
    },
  },
  validation__div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0px',

    '& p': {
      margin: '0px',
    },
  },
  validation__error: {
    color: 'red',
  },

  validation__success: {
    color: 'green',
  },
}))

export default contactPageStyles
