import { makeStyles } from '@material-ui/core/styles'

const registerPageStyles = makeStyles(theme => ({
  registerBackMain: {
    background: '#EDF0F7',

    paddingTop: '226px',
    paddingBottom: '113px',
    zIndex: '1',
    position: 'relative',
    overflowX: 'hidden',
  },
  registerLeftGridItem: {},
  registerLeftContentStack: {},
  registerContainer: {},

  topContentLeftRegister: {
    '& h1': {
      fontSize: '32px',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      marginBottom: '15px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },

    '& p': {
      fontSize: '16px',
      color: theme.palette.primary.main,
    },
    textAlign: 'center',
  },

  rightContentDiv: {
    '& h4': {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',

      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
  },

  btnDiv: {
    marginTop: '2.4rem',

    '& Button': {
      fontFamily: theme.typography.fontFamily,
      fontSize: '16px !important',
      fontWeight: '600 !important',
      width: '100%',
      color: 'white',
      borderRadius: '50px',
      padding: '10px 0px',
      textTransform: 'capitalize',
      backgroundColor: theme.palette.primary.main,

      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },

  alreadyAccText: {
    marginTop: '1.5em',
    textAlign: 'center',

    '& p': {
      fontSize: '18px',
      fontWeight: '600',
    },
  },

  registerPageIllustrationWrapper: {
    marginTop: '50px',
  },
  registerPageIllustration: {
    width: '100% !important',
  },
  headingAndRegisterFormWrapper: {
    [theme.breakpoints.up('md')]: {
      width: '80% !important',
    },
  },
}))

export default registerPageStyles
