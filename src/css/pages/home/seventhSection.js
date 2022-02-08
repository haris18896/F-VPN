import { makeStyles } from '@material-ui/core/styles'

const homePageSeventhSectionStyles = makeStyles(theme => ({
  SevenSectionBackground: {
    margin: '0 auto',
    marginBottom: '4rem',
  },

  HeadingSeventhSection: {
    fontSize: '36px',
    marginTop: 0,

    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },

  backgroundContainer: {
    backgroundColor: '#FFC10B',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden !important',
    overflowY: 'hidden !important',
  },

  imagesContent: {
    padding: '3rem',
    position: 'relative',
    width: '100%',
  },

  devices__list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon_img: {
    padding: '0 15px!important',

    [theme.breakpoints.down('600')]: {
      width: '30px',
    },
  },

  left: {
    position: 'absolute',
    top: '0',
    left: '-1%',
    maxHeight: '250px',

    [theme.breakpoints.down('700')]: {
      maxHeight: '150px',
      top: '15%',
    },
    [theme.breakpoints.down('600')]: {
      display: 'none',
    },
  },
  right: {
    position: 'absolute',
    top: '0',
    right: '-1%',
    maxHeight: '250px',
    [theme.breakpoints.down('700')]: {
      maxHeight: '150px',
      top: '15%',
    },
    [theme.breakpoints.down('600')]: {
      display: 'none',
    },
  },
}))
export default homePageSeventhSectionStyles
