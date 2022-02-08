import { makeStyles } from '@material-ui/core/styles'

const homePageFirstSectionStyles = makeStyles(theme => ({
  firstSectionWrapper: {
    marginTop: '-8px',
    position: 'relative',
    backgroundColor: '#F6F6F6',
    paddingTop: '199px',
    paddingBottom: '90px',

    [theme.breakpoints.down('900')]: {
      paddingTop: '130px',
    },
  },
  firstSectionContainer: {},
  firstSectionGrid: {
    justifyContent: 'center !important',
    alignItems: 'center !important',
  },

  LeftGrid: {
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    [theme.breakpoints.down('1200')]: {},

    [theme.breakpoints.down('900')]: {
      textAlign: 'left',
      margin: '0 auto!important',
    },

    [theme.breakpoints.down('600')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },

  leftGridText: {},
  leftGridTextHeading: {
    fontSize: '48px',
    fontWeight: '900',
    fontFamily: `${theme.typography.fontFamily} !important`,

    [theme.breakpoints.down('900')]: {
      fontSize: '36px',
      textAlign: 'start',
    },
    [theme.breakpoints.down('600')]: {
      fontSize: '32px',
      textAlign: 'start',
    },
  },
  leftGridTextPara: {
    fontFamily: `${theme.typography.fontFamily} !important`,
    background: 'white',
    padding: '16px 20px',
    fontWeight: '600',
    borderLeft: `5px solid ${theme.palette.secondary.main}`,
    color: '#0A0C23',
    [theme.breakpoints.up('1500')]: {
      width: '75%',
      textAlign: 'justify',
    },
  },
  button: {
    backgroundColor: `#24275d !important`,
    color: '#fff !important',
    fontWeight: '600!important',
    fontSize: '16px!important',
    padding: '10px 24px!important',
    borderRadius: '3px !important',
    border: 'none!important',
    marginTop: '20px!important',
    textTransform: 'capitalize !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    boxShadow: 'none !important',
  },
  abstractImage: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100px',

    [theme.breakpoints.up('1200')]: {
      width: '110px',
    },
    [theme.breakpoints.up('1800')]: {
      width: '150px',
    },
  },

  rightImage: {
    width: '100%',
  },
}))
export default homePageFirstSectionStyles
