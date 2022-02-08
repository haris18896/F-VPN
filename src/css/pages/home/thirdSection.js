import { makeStyles } from '@material-ui/core/styles'

const homePageThirdSectionStyles = makeStyles(theme => ({
  thirdSectionBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
  },

  imagesGridThirdSection: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('900')]: {
      flexDirection: 'column-reverse !important',
    },
  },
  image_for_small_screen: {
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

  headingThirdSection: {
    fontSize: '32px',
    textAlign: 'right',
    marginBottom: '0',
    [theme.breakpoints.down('900')]: {
      fontSize: '24px',
      textAlign: 'center',
    },
  },

  headingThirdSectionPara: {
    fontSize: '18px',
    fontWeight: '600',
    textAlign: 'right',
    width: '90%',
    float: 'right',
    [theme.breakpoints.down('900')]: {
      float: 'none',
      width: '100%',
      textAlign: 'center',
    },
  },

  thirdSectionHr: {
    border: `2px solid ${theme.palette.secondary.main}`,
    width: '120px',
    position: 'absolute',
    right: '0%',
    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  thirdSectionContent: {
    position: 'relative',

    [theme.breakpoints.down('600')]: {
      textAlign: 'center',
    },
  },
}))
export default homePageThirdSectionStyles
