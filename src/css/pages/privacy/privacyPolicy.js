import { makeStyles } from '@material-ui/core/styles'
import privacy from '../../../assets/images/privacy.png'

const privacyPolicyPageStyles = makeStyles(theme => ({
  AppPrivacyPolicyBackground: {
    padding: '100px 0',
    backgroundImage: `url(${privacy})`,
    backgroundRepeat: 'no-repeat',
    width: '100w',
    backgroundSize: 'contain',

    '& p': {
      fontSize: '17px',
    },
  },

  PrivacyPolicyBackground: {
    marginTop: '75px',
  },

  MainContentPrivacyDiv: {
    paddingBottom: '3rem ',
    textAlign: 'center',

    '& h1': {
      fontSize: '48px',

      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
  },

  Terms__Title: {
    fontSize: '48px !important',
    margin: '0 !important',
    fontWeight: 800,
  },

  Terms__sub_Title: {
    fontStyle: 'italic',
    fontSize: '17px',
    marginTop: '8px !important',
  },

  tableOfContents: {
    background: 'white',
    border: '2px solid #FFC10B',
    borderRadius: '4px',
    marginTop: '-1rem',

    '& li': {
      padding: '0.6rem 0!important',
      color: '#24275D',
      fontSize: '19px',
      fontWeight: '500',

      '&:hover': {
        color: '#77838F',
      },
    },
  },

  question__headings: {
    fontSize: '24px !important',
    fontWeight: 900,
  },

  link__item: {
    '&:link, &:visited': {
      color: '#24275D',
      textDecoration: 'none',
    },
    '&:hover': {
      color: '#77838F',
    },
  },

  tableOfContentsHeader: {
    marginTop: '20px',
    backgroundColor: '#FFC10B',
    paddingBottom: '10px',
    fontFamily: 'Open Sans',
    border: '2px solid #FFC10B',
    borderRadius: '7px',

    '& h3': {
      marginLeft: '30px',
      fontSize: '20px',
      fontWeight: '600',
      color: '#24275D',
    },
  },

  rightContentDiv: {
    '& h1': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
  },

  link__styling: {
    color: '#4583E3',
    textDecoration: 'none',
  },
}))

export default privacyPolicyPageStyles
