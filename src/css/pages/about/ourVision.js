import { makeStyles } from '@material-ui/core/styles'

const aboutPageOurVisionStyles = makeStyles(theme => ({
  ourVisionAbout: {
    marginBottom: '165px',
  },
  aboutOurVisionIconWrapper: {
    marginBottom: '52px',
  },
  aboutHeadingSecondary: {
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontWeight: '700 !important',
    textAlign: 'center',
    fontSize: '32px !important',
    [theme.breakpoints.up('lg')]: {
      fontSize: '36px !important',
    },
    [theme.breakpoints.down('600')]: {
      fontSize: '24px !important',
    },
  },
}))
export default aboutPageOurVisionStyles
