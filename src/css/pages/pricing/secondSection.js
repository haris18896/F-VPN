import { makeStyles } from '@material-ui/core/styles'

const pricingPageSecondSectionStyles = makeStyles(theme => ({
  PricingSecondSectionBackground: {
    marginBottom: '4.4rem',
  },
  fieldSet: {
    border: 'none !important',
    padding: '0 !important',
  },
  leftcontentpricingSectionTwo: {
    fontSize: '20px',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },

  directionStep2: {
    [theme.breakpoints.down('700')]: {
      display: 'flex',
      flexDirection: 'column !important',
      alignItems: 'flex-start !important',
    },
  },

  rightContentPricingSectionTwo: {
    fontSize: '16px',

    '& span': {
      color: theme.palette.secondary.main,
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'underline',
    },

    [theme.breakpoints.down('700')]: {
      marginTop: '20px',
      marginBottom: '5px',
      alignSelf: 'center',
    },
  },

  icon__BTNs: {
    marginTop: '0 !important',
    backgroundColor: 'transparent !important',
    color: '#5c5c5c !important',
    padding: '3px 5px !important',
  },

  formParentDivSectionTwo: {
    [theme.breakpoints.up('lg')]: {
      border: '2px solid #c1c2c3',
      borderRadius: '7px',
      padding: '50px 70px',
    },
  },
  TopFormText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: '0rem',
      alignItems: 'start',
    },
  },
}))
export default pricingPageSecondSectionStyles
