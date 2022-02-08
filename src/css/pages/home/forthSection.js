import { makeStyles } from '@material-ui/core/styles'

const homePageForthSectionStyles = makeStyles(theme => ({
  fourthSectionBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
  },

  fourthSectionGrid: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('900')]: {
      flexDirection: 'column !important',
    },
  },

  image_for_small_screen: {
    '& img': {
      maxHeight: '420px',
      width: '85% !important',
      float: 'right',
    },
    [theme.breakpoints.down('900')]: {
      paddingTop: '0px !important',
      paddingBottom: '48px !important',
      textAlign: 'center !important',

      '& img': {
        width: '100%',
        textAlign: 'center !important',
        float: 'none !important',
      },
    },
  },

  fourthSectionHr: {
    border: `2px solid ${theme.palette.secondary.main}`,
    width: '120px',
    position: 'absolute',
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  FourthSectionHeading: {
    fontSize: '32px',
    marginBottom: '0',

    [theme.breakpoints.down('900')]: {
      fontSize: '24px',
      textAlign: 'center',
    },
  },

  FourthSectionPara: {
    fontSize: '18px',
    fontWeight: '600',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      float: 'none',
      width: '100%',
    },
  },

  fourthSectionContent: {
    width: '100%',
    position: 'relative',

    [theme.breakpoints.down('600')]: {
      textAlign: 'center',
    },
  },
}))
export default homePageForthSectionStyles
