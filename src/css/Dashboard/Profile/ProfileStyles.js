import { makeStyles } from '@material-ui/core/styles'

export const ProfileStyles = makeStyles(theme => ({
  Delete__Container: {
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '350px',
    marginLeft: '80px',
    '& h3': {
      margin: '0px',
      marginTop: '44px',
      marginBottom: '24px',
      fontSize: '24px',
      fontWeight: 'semi-bold',
      color: '#0A0C23',
      fontFamily: 'Open Sans',
    },

    '& p': {
      margin: '0px',
      marginBottom: '20px',
      width: '60%',
      color: '#616161',
      fontSize: '18px',
      fontWeight: 'regular',
      fontFamily: 'Open Sans',
    },

    '& button': {
      marginTop: '20px',
      border: 'none',
      backgroundColor: '#24275d',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'semi-bold',
      padding: '10px 65px',
      borderRadius: '4px',

      '&:hover': {
        backgroundColor: '#24275a',
      },
    },
  },

  Information__container: {
    padding: '30px',
    marginLeft: '10px',

    '& h3': {
      margin: '0px',
      marginBottom: '24px',
      fontSize: '24px',
      fontWeight: 'semi-bold',
      color: '#24275D',
      fontFamily: 'Open Sans',
    },

    '& button': {
      marginTop: '20px',
      border: 'none',
      backgroundColor: '#24275d',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'semi-bold',
      padding: '10px 50px',
      borderRadius: '4px',

      '&:hover': {
        backgroundColor: '#24275a',
      },
    },

    [theme.breakpoints.down('900')]: {
      margin: '0px',
    },
  },

  icon__BTNs: {
    marginTop: '0 !important',
    backgroundColor: 'transparent !important',
    color: '#5c5c5c !important',
    padding: '3px 5px !important',
  },

  Information__form: {
    marginBottom: '20px',
    width: '55%',

    [theme.breakpoints.down('600')]: {
      width: '90%',
    },
  },

  custom__error: {
    color: '#ff1100',
    fontSize: '11px',
  },
  password__container: {
    marginBottom: '20px',
    width: '55%',

    [theme.breakpoints.down('600')]: {
      width: '90%',
    },
  },

  button__container__save: {
    display: 'block',
  },

  profile__update__success: {
    color: '#22bb00',
  },

  button__container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('600')]: {
      flexDirection: 'column',
    },
  },

  button__save: {
    [theme.breakpoints.down('600')]: {
      padding: '22px 38px !important',
    },
  },

  button__Cancel: {
    background: '#EDF0F7 !important',
    marginLeft: '30px',
    color: '#000 !important',

    '&:hover': {
      background: '#cfd0d1 !important',
    },

    [theme.breakpoints.down('600')]: {
      marginLeft: '0px',
    },
  },
}))
