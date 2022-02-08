import { makeStyles } from '@material-ui/core/styles'

const specialOfferStyles = makeStyles(theme => ({
  specialOffer: {
    position: 'relative',
    backgroundColor: '#24275D',
    color: 'white',
    padding: '10px 0',
  },
  specialOfferText: {
    color: theme.palette.secondary.main,
    fontSize: '11px !important',
    fontWeight: '400 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,

    [theme.breakpoints.up('lg')]: {
      fontSize: '14px !important',
    },
  },
  specialOfferCloseIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',

    [theme.breakpoints.up('xl')]: {
      right: '14%',
    },
    [theme.breakpoints.down('400')]: {
      right: '7px',
    },
  },
}))
export default specialOfferStyles
