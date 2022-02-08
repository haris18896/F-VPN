import { makeStyles } from '@material-ui/core/styles'

export const DesktopMobile = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    marginLeft: '2px',
    paddingBottom: '40px',
    paddingRight: '15px',
    paddingLeft: '15px',
  },
  grid: {
    margin: '0 !important',
    padding: '0 !important',
  },
  grid__item: {
    padding: '0 !important',
    margin: '0 !important',
  },
  ContentDesktop: {
    marginTop: '30px !important',
    marginLeft: '7px !important',
    marginRight: '15px !important',
    borderRadius: '10px',
    border: '2px dashed #FFC10B',

    [theme.breakpoints.down('600')]: {
      marginLeft: '30px',
    },
  },
  ContentMobile: {
    marginTop: '30px !important',
    marginLeft: '15px !important',
    marginRight: '30px !important',
    borderRadius: '10px',
    border: '2px dashed #FFC10B',

    [theme.breakpoints.down('600')]: {
      marginLeft: '30px',
    },
  },
  icon__content: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    marginLeft: '15px',
    [theme.breakpoints.down('700')]: {
      marginTop: '15px',
      marginLeft: '15px',
    },
    '& img': {
      width: '40px',
      height: '40px',
      marginRight: '10px',

      [theme.breakpoints.down('700')]: {
        width: '55px',
        height: '55px',
        marginRight: '10px',
      },
    },
  },
  icons__mobile: {
    color: '#fff !important',
    background: '#24275d !important',
    borderRadius: '10%',
    padding: '10px',
    marginRight: '10px',

    [theme.breakpoints.down('700')]: {
      marginRight: '10px',
    },
  },
  icon__content__text: {
    '& h3': {
      color: '#24275D',
      fontSize: '24px',
      fontWeight: 'bold',
      fontFamily: 'Open sans',
      margin: '0',
      verticalAlign: 'middle',

      [theme.breakpoints.down('700')]: {
        fontSize: '20px',
      },
    },

    '& p': {
      color: '#C1C2C3',
      fontSize: '13px',
      marginBottom: '0 !important',
      fontFamily: 'Open sans',
    },
  },
  middle__text: {
    fontSize: '14px',
    fontFamily: 'Open sans !important',
    margin: '24px 15px 10px 15px  !important',

    [theme.breakpoints.down('700')]: {
      margin: '12px 15px 5px 15px  !important',
    },
  },
  items__select: {},

  list__items: {
    margin: 0,
    padding: 0,

    '& li': {
      listStyle: 'none',
      border: '1px solid #C1C2C3',
      borderRadius: '5px',
      fontFamily: 'Open sans',

      margin: '10px 15px 10px 15px !important',
      padding: '10px 15px !important',
      color: '#005BE7',

      [theme.breakpoints.down('700')]: {
        margin: '5px 15px 5px 15px !important',
        padding: '8px 8px 8px 10px !important',
      },

      '&:last-child': {
        marginBottom: '15px !important',
      },

      '& a': {
        textDecoration: 'none',
        color: '#005BE7',
        fontFamily: 'Open sans',
      },
    },
  },
}))
