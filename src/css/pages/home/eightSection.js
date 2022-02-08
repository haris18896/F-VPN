import { makeStyles } from '@material-ui/core/styles'

const homePageEightSectionStyles = makeStyles(theme => ({
  EightSectionBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
    marginBottom: '5rem',
  },

  eightSectionContent: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },

  headingEightSection: {
    fontSize: '32px',
    marginTop: '0px',
    [theme.breakpoints.down('900')]: {
      fontSize: '24px',
    },
  },

  paragraphEightSection: {
    fontSize: '18px',
    fontWeight: '600',
  },

  eightSectionHR: {
    width: '120px',
    border: `2px solid ${theme.palette.secondary.main}`,
  },

  LeftContainerItems: {
    marginTop: '2rem',

    [theme.breakpoints.down('600')]: {
      width: '55%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    [theme.breakpoints.down('460')]: {
      width: '70%',
    },
    [theme.breakpoints.down('400')]: {
      width: '80%',
    },
    [theme.breakpoints.down('340')]: {
      width: '90%',
    },
  },

  listContentItems: {
    paddingBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },

  center__image: {
    [theme.breakpoints.down('600')]: {
      textAlign: 'center !important',
    },
  },

  imageAndContentWrapper: {
    display: 'flex',
    alignItems: 'flex-start !important',
    [theme.breakpoints.down('600')]: {
      alignSelf: 'center !important',
    },
  },

  contentContainer: {
    marginTop: '0px !important',
    marginBottom: '0px !important',

    [theme.breakpoints.up('1200')]: {
      marginTop: '50px !important',
      marginBottom: 'auto !important',
    },
  },

  tabsWrapperForFreeAndPremiumUsers: {
    height: '45px',
    width: 'fit-content',
    backgroundColor: theme.palette.secondary.main,
    fontSize: '16px !important',
    fontWeight: '600 !important',
    fontFamily: theme.typography.fontFamily,
    padding: '0 1px',

    [theme.breakpoints.down('600')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    '& div': {
      height: '90%',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '2px',
    },
  },
  activeTabFreeAndPremiumUsers: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    cursor: 'pointer',
    [theme.breakpoints.down('600')]: {
      fontSize: '10px!important',
    },
  },
  notActiveTabFreeAndPremiumUsers: {
    cursor: 'pointer',
    backgroundColor: `white !important`,
  },
  stack_small: {
    [theme.breakpoints.down('400')]: {
      fontSize: '12px!important',
    },
  },
}))
export default homePageEightSectionStyles
