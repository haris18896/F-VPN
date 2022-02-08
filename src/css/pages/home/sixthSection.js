import { makeStyles } from '@material-ui/core/styles'
import mask__Background from '../../../assets/images/Mask_Group.png'

const homePageSixthSectionStyles = makeStyles(theme => ({
  maskBackground: {
    backgroundImage: `url(${mask__Background})`,
    paddingBottom: '2.2rem',
    backgroundSize: 'cover',
    width: '100%',
    paddingTop: '8rem',
  },

  sixthSectionBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
    marginBottom: '3rem',
  },

  HeadingSixthSection: {
    marginBottom: '4.6rem',
    fontSize: '32px',
    marginTop: '0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  GridSixthSection: {
    '& p': {
      fontSize: '16px!important',
    },
  },
  horizontalLineTop: {
    border: `2px solid ${theme.palette.secondary.main}`,

    width: '120px',
  },
}))
export default homePageSixthSectionStyles
