import { makeStyles } from '@material-ui/core/styles'
import Get from '../../../assets/images/about/Get.svg'

const getFriendsVPNStyles = makeStyles(theme => ({
  getFriendsVPN: {
    position: 'relative',
    marginBottom: '53px',
  },
  getFriendsVPNContainer: {
    padding: '40px 50px !important',
    backgroundImage: `url(${Get})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '20px',
    [theme.breakpoints.down('900')]: {
      backgroundImage: `none`,
      backgroundColor: '#ffc10c',
      borderRadius: '7px !important',
    },
    [theme.breakpoints.up('1200')]: {
      padding: '70px 80px !important',
    },
  },
  getFriendsVPNHeading: {
    fontSize: '24px !important',
    fontWeight: '700 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    marginBottom: '20px !important',

    [theme.breakpoints.up('md')]: {
      fontSize: '32px !important',
    },
  },
  friendsVPNBtn: {
    backgroundColor: theme.palette.primary.main,
    padding: '18.5px 50px',
    cursor: 'pointer',
    color: 'white',
    fontSize: '17px !important',
    fontWeight: '500 !important',
    fontFamily: `${theme.typography.fontFamily} !important`,

    '&:hover': {
      backgroundColor: '#0A0C23',
    },
  },
  sonicImageGetFriendsVPN: {
    zIndex: '-1',
    position: 'absolute',
    bottom: '-53px',
    right: '0',
  },
}))
export default getFriendsVPNStyles
