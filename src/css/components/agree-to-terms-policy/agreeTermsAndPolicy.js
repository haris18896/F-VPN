import { makeStyles } from '@material-ui/core/styles'

const agreeTermsAndPolicyStyles = makeStyles(theme => ({
  agreeTermsAndConditionsWrapper: {
    marginBottom: '50px',
    background: '#EDF0F7',
    borderRadius: '7px',
    padding: '10px 15px',

    [theme.breakpoints.up('900')]: {
      padding: '30px 65px',
      marginTop: '35px',
    },
  },
  creditCardFormAgreeText: {
    fontSize: '16px',
    fontWeight: '400 !important',
    color: '#616161',
    textAlign: 'justify',
  },
  creditCardFormAgreeTextLink: {
    fontSize: '16px',
    fontWeight: '600 !important',
    color: theme.palette.secondary.main,
    cursor: 'pointer',
  },
  creditCardFormAgreeTextDescriptionWrapper: {
    textAlign: 'justify',
  },
  creditCardFormAgreeTextDescription: {
    fontSize: '16px',
    fontWeight: '400 !important',
    color: '#616161',
    lineHeight: '25px !important',
  },
}))
export default agreeTermsAndPolicyStyles
