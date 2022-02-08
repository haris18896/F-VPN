import { makeStyles } from '@material-ui/core/styles'

const homePageSecondSectionStyles = makeStyles(theme => ({
  SecondSectionBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
    marginBottom: '5.5rem',
  },

  secondSectionHeading: {
    textAlign: 'center',

    fontSize: '32px',
    marginTop: '0px',
    [theme.breakpoints.down('600')]: {
      fontSize: '24px',
    },
  },
  horizontalLineTop: {
    border: `2px solid ${theme.palette.secondary.main}`,

    width: '120px',
  },

  headingDiv: {
    marginTop: '5rem',
    marginBottom: '2rem',
  },
  imagesGridSecondSection: {
    textAlign: 'center',

    marginTop: '10px',
    '& p': {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  },

  smallGrid: {
    flexBasis: '20%',
    maxWidth: '20%',
  },

  grid__justify: {
    [theme.breakpoints.up('900')]: {
      flexBasis: '20%',
      maxWidth: '20%',
    },
  },

  horizontalLineBottom: {
    border: '1px solid #ECECEE',
    marginTop: '70px',
    maxWidth: '80%',
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  circleImageTop: {
    position: 'absolute',
    left: '7%',
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },
  secondSectionBackPIC: {
    position: 'absolute',
    right: '0',
    width: '10%',
    marginTop: '65px',

    [theme.breakpoints.down('1200')]: {
      display: 'none',
    },
  },
}))
export default homePageSecondSectionStyles
