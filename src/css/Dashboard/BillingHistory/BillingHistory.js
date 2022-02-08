import { makeStyles } from '@material-ui/core/styles'

export const BillingHistory = makeStyles(theme => ({
  Billing__History__Container: {
    backgroundColor: '#fff',
    marginTop: '40px',
    boxShadow: '5px 5px 14px -6px rgba(0,0,0,0.35)',

    [theme.breakpoints.down('900')]: {
      marginTop: '0px',
    },
  },

  Billing__History__Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '30px',
    paddingBottom: '20px',

    '& h1': {
      margin: '0px 40px !important',
      fontSize: '24px !important',
      fontWeight: 'semi-bold',
      fontFamily: 'Open Sans',
      color: '#24275D',

      [theme.breakpoints.down('900')]: {
        margin: '0px 20px !important',
        fontSize: '20px !important',
      },

      [theme.breakpoints.down('600')]: {
        margin: '0px 10px !important',
        fontSize: '17px !important',
      },
    },
  },

  form_control: {
    color: '#fff',
  },

  month__selector: {
    width: '120px',
    backgroundColor: '#ffc10b !important',
    color: 'white',
    alignItems: 'center',

    '& fieldset': {
      border: 'none !important',
    },
    '& div': {
      color: '#fff',
      padding: '10px 15px !important',
    },

    '& svg': {
      color: '#fff',
    },

    '& MenuItem': {
      color: '#fff !important',
    },
  },

  Billing__History__Table: {
    padding: '0px 40px 40px 40px',

    [theme.breakpoints.down('900')]: {
      padding: '0px 10px 10px 10px',
    },
  },

  Main__Table: {
    boxShadow: 'none !important',
    border: 'none !important',

    '& thead': {
      '& tr': {
        '& th': {
          backgroundColor: '#fff',
          border: 'none !important',
          color: '#858997',
          boxShadow: 'none !important',
          fontSize: '14px',
          fontWeight: 'semi-bold',
        },
      },
    },
  },

  download__icon: {
    marginLeft: '7px',
  },

  chip: {
    color: 'white',
    backgroundColor: '#42B748',
    borderRadius: '50px',
    margin: '0',
    padding: '8px 4px',
    textAlign: 'center',
  },
  chipFail: {
    color: 'white',
    backgroundColor: '#ee2200',
    borderRadius: '50px',
    margin: '0',
    padding: '8px 4px',
    textAlign: 'center',
  },
}))
