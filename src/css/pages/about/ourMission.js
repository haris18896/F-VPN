import { makeStyles } from '@material-ui/core/styles'

const aboutPageOurMissionStyles = makeStyles(theme => ({
  ourMissionAbout: {
    position: 'relative',
    marginBottom: '115px',
  },
  blobOurMission: {
    display: 'none',
    position: 'absolute',
    left: '0',
    top: '70%',

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  aboutOurMissionIconWrapper: {
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
export default aboutPageOurMissionStyles
