import { makeStyles } from '@material-ui/core/styles'

const homePageNinthSectionStyles = makeStyles(theme => ({
  sectionNinthBackground: {
    maxWidth: '1440px',
    margin: '0 auto',
    marginBottom: '4rem',
  },

  headingSectionNine: {
    fontSize: '32px',
    textAlign: 'center',
    marginTop: '0',
    [theme.breakpoints.down('600')]: {
      fontSize: '24px',
    },
  },
  ninthSectionHR: {
    width: '120px',
    border: `2px solid ${theme.palette.secondary.main}`,
  },

  NineSectionGrid: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  contentWrapperNinth: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.down('600')]: {},
    '& Div': {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('600')]: {
        justifyContent: 'center !important',
        alignItems: 'center !important',
      },
    },
    '& p': {
      margin: 0,
      marginBottom: '5px',

      [theme.breakpoints.down('600')]: {
        fontSize: '20px!important',
        textAlign: 'center!important',
        marginLeft: '0!important',
      },

      '& span': {
        fontSize: '16px!important',
      },
    },
  },

  content__wrapper: {
    fontSize: '30px',
    '& P': {
      '& span': {
        lineHeight: '30px',
        fontSize: '30px !important',
        fontWeight: '800',
      },
    },
    '& img': {
      [theme.breakpoints.down('600')]: {},
    },
    [theme.breakpoints.down('600')]: {
      width: '100%',
    },
  },

  counting: {
    display: 'flex',
    flexDirection: 'column !important',
    alignItems: 'flex-start !important',
    marginTop: '2rem',
    color: '#24275D',

    [theme.breakpoints.down('600')]: {
      padding: '20px 0',
      alignItems: 'center !important',
    },
  },
  count_img: {
    paddingRight: '15px',
  },
  count_img_3: {
    paddingRight: '17px',
  },
}))
export default homePageNinthSectionStyles
