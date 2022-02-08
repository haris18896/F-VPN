import { makeStyles } from '@material-ui/core/styles'

const footerStyles = makeStyles(theme => ({
  footer: {
    color: 'white',
    backgroundColor: '#24275D',
    paddingTop: '100px',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontSize: '16px',
    overflow: 'hidden',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '50px !important',
      paddingRight: '50px !important',
    },
  },
  footerLogo: {
    cursor: 'pointer',
  },

  footerLinksHeading: {
    color: theme.palette.secondary.main,
    fontSize: '18px !important',
    fontWeight: '500',
    fontFamily: `${theme.typography.fontFamily} !important`,
  },

  footerLinks: {
    listStyle: 'none',
    paddingLeft: '0px',
    marginLeft: '0px',
    marginTop: '0px',
    marginBottom: '0px',
  },
  footerLink: {
    fontWeight: 'bold',
    fontFamily: `${theme.typography.fontFamily} !important`,
    cursor: 'pointer',
  },
  footerLinkAnchor: {
    color: 'white',
    textDecoration: 'none',
  },
  footerParagraph: {
    width: '75%',
    fontFamily: `${theme.typography.fontFamily} !important`,
  },
  languageSelectorContainer: {
    backgroundColor: 'white',
    width: '200px',
    padding: '0px 10px',
    borderRadius: '4px',
    height: '2.9rem',
  },
  footerGlobeIcon: {
    marginTop: '3px',
    paddingLeft: '10px',
  },

  footerLanguageSelect: {
    borderRadius: '4px !important',
    width: '100% !important',
    outline: 'none !important',
    border: 'none !important',
    padding: '6px !important',
    fontSize: '20px !important',
    backgroundColor: '#fefefe !important',

    '& div': {
      backgroundColor: '#fefefe !important',
      padding: '6px !important',
    },

    '&::after': {
      display: 'none',
    },
    '&::before': {
      display: 'none',
    },
  },
  menuItem: {
    backgroundColor: 'red !important',
  },
  footer_language_form_select: {},
  footerHorizontalRule: {
    marginTop: '100px',
    border: '1px solid #0B0F54',
  },
  footerCopyrightText: {
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
export default footerStyles
