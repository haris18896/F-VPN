import { makeStyles } from '@material-ui/core/styles'

const pricingPageThirdSectionStyles = makeStyles(theme => ({
  thirdSectionMainContainer: {},
  formWrapper: {
    [theme.breakpoints.up('lg')]: {
      border: '2px solid #c1c2c3',
      borderRadius: '7px',
    },
  },
  creditCardHeader: {
    background: '#EDF0F7',
    padding: '0px 10px',
    [theme.breakpoints.up('lg')]: {
      padding: '0px 70px',
    },
  },
  creditCardBody: {
    [theme.breakpoints.up('lg')]: {
      padding: '0px 70px',
    },
  },
  creditCardHeaderText: {
    fontSize: '22px',
    fontWeight: '600 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#24275D',
  },
  creditCardFormText: {
    fontSize: '16px !important',
    fontWeight: '600 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#616161',
  },
  creditCardFormTextCost: {
    fontSize: '16px !important',
    fontWeight: '700 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#616161',
  },
  creditCardFormTextCostTotalCost: {
    fontSize: '21px !important',
    fontWeight: '700 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: theme.palette.secondary.main,
  },
  creditCardFormTextCostDiscounted: {
    fontSize: '16px !important',
    fontWeight: '700 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#EE3429',
    textDecoration: 'line',
  },
  creditCardFormDiscount: {
    fontSize: '12px !important',
    fontWeight: '500 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    padding: '5px 15px',
    borderRadius: '30px',
  },
  creditCardFormBilledText: {
    fontSize: '16px !important',
    fontWeight: '500 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#0A0C23',
  },
  creditCardFormTotalPaymentText: {
    fontSize: '21px !important',
    fontWeight: '700 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#24275d !important',
    marginBottom: '4px !important',
  },
  creditCardFormTotalPayment: {
    fontSize: '21px !important',
    color: theme.palette.secondary.main,
    marginLeft: '1rem',
  },
  creditCardFormHorizontalRule: {
    marginBottom: '40px',
  },
  creditCardFormSubscribeButton: {
    fontSize: '16px !important',
    fontWeight: '500 !important',
    color: 'white !important',
    background: `${theme.palette.primary.main} !important`,
    textTransform: 'capitalize !important',
    padding: '10px 40px !important',
  },
  creditCardFormSubscribeButtonDisabled: {
    fontSize: '16px !important',
    fontWeight: '500 !important',
    color: 'white !important',
    background: `#24275D !important`,
    textTransform: 'capitalize !important',
    padding: '10px 40px !important',
    opacity: '0.7 !important',
  },

  orderTotalWrapper: {
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row !important',
      justifyContent: 'space-between !important',
      alignItems: 'center !important',
    },
  },
  orderTotalGrid: {
    padding: '0 !important',
  },
}))
export default pricingPageThirdSectionStyles
