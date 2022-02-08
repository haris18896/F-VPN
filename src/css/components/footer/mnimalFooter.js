import { makeStyles } from '@material-ui/core/styles'

const minimalFooterStyles = makeStyles(theme => ({
  minimalFooter: {
    color: 'white',
    backgroundColor: '#24275D',
    padding: '40px 0px',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontSize: '16px',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '50px !important',
      paddingRight: '50px !important',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '20px 0px',
    },
  },
  Minimal__Footer__container: {
    padding: '0px 30px',
  },
  minimalFooterLogo: {
    cursor: 'pointer',
  },

  minimalFooterLinksHeading: {
    color: theme.palette.secondary.main,
    fontSize: '18px !important',
    fontWeight: '500',
    fontFamily: `${theme.typography.fontFamily} !important`,
  },

  minimalFooterLinks: {
    listStyle: 'none',
    paddingLeft: '0px',
    marginLeft: '0px',
    marginTop: '0px',
    marginBottom: '0px',
  },
  minimalFooterLink: {
    fontWeight: 'bold',
    fontFamily: `${theme.typography.fontFamily} !important`,
    cursor: 'pointer',
  },
  minimalFooterParagraph: {
    width: '75%',
    fontFamily: `${theme.typography.fontFamily} !important`,
  },
  minimalFooterLanguageSelect: {
    width: '100%',
  },
  languageSelectorContainer: {
    backgroundColor: 'white',
    width: '200px',
    paddingLeft: '20px',
  },
  minimalFooterGlobeIcon: {
    marginTop: '3px',
  },

  minimalFooterHorizontalRule: {
    marginTop: '100px',
    border: '1px solid #0B0F54',
  },
  minimalFooterCopyrightText: {
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontWeight: '400',
    marginBottom: '25px',
    fontSize: '11px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px !important',
    },
  },
  footerSocialIcon: {
    color: 'white !important',
  },
}))
export default minimalFooterStyles
