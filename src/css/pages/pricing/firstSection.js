import { makeStyles } from '@material-ui/core/styles'

const pricingPageFirstSectionStyles = makeStyles(theme => ({
  PricingFirstSectionBackground: {
    position: 'relative',
    marginBottom: '3rem',
    marginTop: '7.2rem',
    paddingTop: '2rem',
    overflow: 'hidden !important',
  },

  pricingPageIllustration: {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
    transform: 'scaleX(-1)',
  },

  PricingContentIst: {
    textAlign: 'center',
    width: '80%',
    marginBottom: '2rem',
    [theme.breakpoints.down(808)]: {
      width: '100%',
    },

    marginTop: '2rem',
    '& p': {
      fontSize: '18px',
      fontWeight: '600',
    },
  },

  PricingHeading: {
    fontSize: '48px',
    marginBottom: '0',
    [theme.breakpoints.down(808)]: {
      fontSize: '24px',
    },
  },
  SteponeDiv: {
    marginTop: '3rem',
    marginBottom: '4rem',
    '& p': {
      fontSize: '18px',
      fontWeight: '600',
    },
  },
  PricingIcons: {
    marginTop: '3rem',
    '& img': {
      margin: '0 9px',
      width: '12%',
    },
  },
  leftGridPricing: {
    [theme.breakpoints.down(900)]: {
      marginTop: '0px!important',
    },
  },
  leftGridPic: {
    width: '100%',
    maxWidth: '100%',
  },
  discountTag: {
    position: 'absolute',
    right: '0 !important',
    top: '-10% !important',
    zIndex: '1',
    transform: 'translateY(10%)',

    [theme.breakpoints.up('sm')]: {
      right: '20px',
    },
  },

  discountTagSelected: {
    position: 'absolute',
    right: '-20px !important',
    top: '-20% !important',
    zIndex: '1',
    transform: 'translateY(10%)',

    [theme.breakpoints.up('sm')]: {
      right: '20px',
    },
  },

  pricingCardSelected1: {
    boxShadow: 'none !important',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '10px !important',
    textAlign: 'center',
    padding: '5rem 0 !important',
    width: '90%',
    transform: 'scale(1.08)',

    '& h4': {
      color: `${theme.palette.secondary.main} !important`,
    },

    [theme.breakpoints.down(900)]: {
      transform: 'scale(1)',
      width: '96%!important',
    },

    '& .MuiTypography-h3': {
      fontSize: '36px',
      fontWeight: 'bold',

      marginBottom: '29px',
    },

    '& .MuiTypography-h4': {
      fontSize: '32px',
      fontWeight: '600',
    },

    '& .MuiTypography-body': {
      fontSize: '17px',
      fontWeight: '600',
    },
  },

  pricingCardSelected: {
    boxShadow: 'none !important',
    background: '#FFFBEF !important',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '10px !important',
    textAlign: 'center',
    padding: '5rem 0 !important',
    width: '90%',
    transform: 'scale(1.08)',

    '& h4': {
      color: `${theme.palette.secondary.main} !important`,
    },

    [theme.breakpoints.down(900)]: {
      width: '96%!important',
      transform: 'scale(1)',
    },

    '& .MuiTypography-h3': {
      fontSize: '36px',
      fontWeight: 'bold',

      marginBottom: '29px',
    },

    '& .MuiTypography-h4': {
      fontSize: '32px',
      fontWeight: '600',
    },

    '& .MuiTypography-body': {
      fontSize: '17px',
      fontWeight: '600',
    },
  },
  pricingCard: {
    boxShadow: 'none !important',

    position: 'relative',
    borderRadius: '10px !important',
    border: '1px solid #c1c2c3',
    textAlign: 'center',
    padding: '5rem 0 !important',
    width: '90%',

    [theme.breakpoints.down(900)]: {
      width: '96%!important',
    },

    '& .MuiTypography-h3': {
      fontSize: '36px',
      fontWeight: 'bold',

      marginBottom: '29px',
    },

    '& .MuiTypography-h4': {
      fontSize: '32px',
      fontWeight: '600',
    },

    '& .MuiTypography-body': {
      fontSize: '17px',
      fontWeight: '600',
    },
  },

  pricingCard1: {
    boxShadow: 'none !important',

    position: 'relative',
    borderRadius: '10px !important',
    textAlign: 'center',
    padding: '5rem 0 !important',
    width: '90%',

    [theme.breakpoints.down(900)]: {
      width: '96%!important',
    },

    '& .MuiTypography-h3': {
      fontSize: '36px',
      fontWeight: 'bold',

      marginBottom: '29px',
    },

    '& .MuiTypography-h4': {
      fontSize: '32px',
      fontWeight: '600',
    },

    '& .MuiTypography-body': {
      fontSize: '17px',
      fontWeight: '600',
    },
  },

  secondaryColorSpan: {
    color: theme.palette.secondary.main,
  },

  everyYearPrice: {
    color: '#C1C2C3',
  },

  CardGrid: {
    marginBottom: '70px !important',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'all 0.3s ease-in-out',
    },

    [theme.breakpoints.down('sm')]: {
      '&:hover': {
        transform: 'scale(1.0)',
      },
    },
  },

  discountedPriceText: {
    margin: '10px 0px',
    fontSize: '17px',
    fontWeight: '600',
    color: 'red',
    textDecoration: 'line-through',
  },

  CheckIcon: {
    position: 'absolute',
    left: '45%',
  },
  icon_web: {
    position: 'absolute',
    left: '50%',
    top: '-10px',
    transform: 'translate(-50%,-50%)',
    zIndex: 1,
  },
}))
export default pricingPageFirstSectionStyles
