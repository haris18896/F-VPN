import { makeStyles } from '@material-ui/core/styles'

const aboutPageAboutFriendsVPNStyles = makeStyles(theme => ({
  aboutFriendsVPN: {
    position: 'relative',
    marginTop: '230px',
    marginBottom: '115px',
  },
  aboutFriendsVPNContainer: {},
  aboutHeading: {
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontWeight: '700 !important',
    textAlign: 'center',
    fontSize: '36px !important',
    [theme.breakpoints.up('lg')]: {
      fontSize: '48px !important',
    },
  },
  aboutHeadingSecondary: {
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontWeight: '700 !important',
    textAlign: 'center',
    fontSize: '24px !important',
    [theme.breakpoints.up('lg')]: {
      fontSize: '36px !important',
    },
  },
  aboutHeadingYellow: {
    color: theme.palette.secondary.main,
  },
  aboutParagraph: {
    fontFamily: `${theme.typography.fontFamily} !important`,
    color: '#0A0C23',
    lineHeight: '30px',
  },

  aboutFriendsVPNImgWrapper: {
    marginTop: '80px',
    overflow: 'hidden',
    transition: 'transform ',
    borderRadius: '20px',
    height: 'auto',
    maxHeight: '500px',
  },
  zoomIn: {
    '& img': {
      animation: '$zoomIn 14s ease',
      transform: 'scale(1.15)',
    },
  },

  '@keyframes zoomIn': {
    '0%': {
      transform: 'scale(1)',
      borderRadius: '20px',
    },
    '100%': {
      borderRadius: '20px',
      transform: 'scale(1.15)',
    },
  },

  aboutFriendsVPNImg: {
    width: '100%',
    height: 'auto',
  },
  aboutFriendsVPNImgSkeleton: {
    borderRadius: '20px',
    width: '100% !important',
    height: '150px !important',

    [theme.breakpoints.up('sm')]: {
      height: '392px !important',
    },
  },
  aboutIllustration: {
    position: 'absolute',
    zIndex: '-1',
    top: '-116px',
    right: '0',
  },
}))
export default aboutPageAboutFriendsVPNStyles
