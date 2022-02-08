import { makeStyles } from '@material-ui/core/styles'

const formGroupStyles = makeStyles(theme => ({
  formLabel: {
    color: '#0A0C23 !important',
    fontSize: '16px !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontWeight: '600 !important',
    marginBottom: '10px',
  },
  formInput: {
    borderRadius: '7px',
    boxShadow: 'none !important',
    fontFamily: 'Open sans !important',

    borderColor: '#24275d !important',
    '& fieldset:hover': {
      borderColor: '#24275d !important',
    },

    '& textarea': {
      height: '150px !important',
    },
  },
  forgotPasswordLink: {},
  inputError: {
    color: theme.palette.error.main,
    fontSize: '14px !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
  },
}))
export default formGroupStyles
