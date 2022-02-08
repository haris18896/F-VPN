import { makeStyles } from '@material-ui/core/styles'
import endHomeBack from '../../../assets/images/endHomeBack.png'

const homePageEleventhSectionStyles = makeStyles(theme => ({
  ElevenSectionBackground: {
    backgroundImage: `url(${endHomeBack})`,
    paddingBottom: '2.2rem',
    backgroundSize: 'cover',
    // backgroundColor: 'white !important',
    width: '100%',
  },

  ElevenSectionWrapperContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    marginBottom: '4rem',
  },

  elevenHeading: {
    textAlign: 'center',
    fontSize: '32px',
    marginTop: '0!important',

    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  ContentWrapperEleven: {
    paddingTop: '5rem',
  },

  cardOne: {
    background: '#ffff',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0px 4px 25px 0 #c1c2c3 ',
  },
  CardTwo: {
    background: '#ffff',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0px 4px 25px 0 #c1c2c3 ',
  },

  cardTextOne: {
    fontSize: '21px',
    textAlign: 'center',
    padding: '40px  35px 0 35px',

    [theme.breakpoints.down('md')]: {
      padding: '15px 20px 0 20px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      padding: '15px 5px 0 5px',
    },
  },
  cardTextTwo: {
    fontSize: '21px',
    textAlign: 'center',
    padding: '40px  35px 0 35px',

    [theme.breakpoints.down('md')]: {
      padding: '15px 20px 0 20px',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      padding: '15px 5px 0 5px',
    },
  },

  headingTwoSecEleven: {
    textAlign: 'center',
    marginTop: '5vh',
  },

  headingOneSecEleven: {
    textAlign: 'center',
    marginTop: '5vh',
  },
  eleventhSectionImage: {
    position: 'absolute',
    right: '0',
    top: '-13%',

    zIndex: '-1',
    Width: '100%',
    height: 'auto',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  ninthSectionHR: {
    width: '120px',
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}))
export default homePageEleventhSectionStyles
