import { makeStyles } from '@material-ui/core/styles'

const homePageFifthSectionStyles = makeStyles(theme => ({
  fifthSectionBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
    marginBottom: '3rem',
  },
  fourth_Section_img_background: {
    position: 'absolute',
    left: '0',
    maxWidth: '170px',
    width: '100%',
    height: 'auto',
    marginRight: '100%',
    [theme.breakpoints.down('1200')]: {
      display: 'none',
    },
  },
  fourthSectionGrid: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('900')]: {
      flexDirection: 'column-reverse !important',
    },
  },
  image_for_small_screen_5: {
    '& img': {
      width: '85% !important',
    },
    [theme.breakpoints.down('900')]: {
      paddingTop: '0px !important',
      paddingBottom: '48px !important',
      textAlign: 'center !important',

      '& img': {
        width: '100%',
        textAlign: 'center !important',
      },
    },
  },
  fourthSectionContent: {
    width: '100%',
    position: 'relative',

    [theme.breakpoints.down('600')]: {
      textAlign: 'center',
    },
  },
  fifthSectionHr: {
    border: `2px solid ${theme.palette.secondary.main}`,
    width: '120px',
    position: 'absolute',
    right: '0%',

    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  FifthSectionHeading: {
    fontSize: '32px',
    textAlign: 'right',
    marginBottom: '0',
    [theme.breakpoints.down('900')]: {
      fontSize: '24px',
      textAlign: 'center',
    },
  },
  FifthSectionPara: {
    fontSize: '18px',
    fontWeight: '600',
    textAlign: 'right',
    width: '90%',
    float: 'right',
    [theme.breakpoints.down('900')]: {
      textAlign: 'center',
      float: 'none',
      width: '100%',
    },
  },
}))
export default homePageFifthSectionStyles
