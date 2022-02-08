import { makeStyles } from '@material-ui/core/styles'

export const SupportTicket = makeStyles(theme => ({
  No__Active__complaints__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '500px',

    '& img': {
      maxWidth: '190px',
      marginTop: '100px',
      marginBottom: '15px',
    },

    '& p': {
      textAlign: 'center',
      marginTop: '15px',
      fontSize: '18px',
      fontWeight: 'semi-bold',
      color: '#858997',
    },
  },

  New__ticket__container: {
    padding: '30px',
    marginLeft: '10px',
    '& h3': {
      margin: 0,
      marginBottom: '24px',
      fontSize: '24px',
      fontWeight: 'semi-bold',
      color: '#24275d',
      fontFamily: 'Open Sans',
    },

    [theme.breakpoints.down('900')]: {
      marginLeft: '0px',
    },
  },

  New__ticket__form: {
    marginBottom: '20px',
    width: '74%',

    [theme.breakpoints.down('900')]: {
      width: '100%',
    },
  },

  textarea: {
    '& input': {
      height: '100px !important',
    },
  },

  ticket__submit__button: {
    marginTop: '20px',
    border: 'none',
    backgroundColor: '#24275D',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'semi-bold',
    padding: '10px 65px',
    borderRadius: '4px',

    '&:hover': {
      backgroundColor: '#24275a',
    },
  },
  formLabel: {
    color: '#0A0C23 !important',
    fontSize: '16px !important',
    fontFamily: `${theme.typography.fontFamily} !important`,
    fontWeight: '600 !important',
    marginBottom: '10px',
  },
  Severity__Selector: {
    marginBottom: '16px !important',
    '& input': {
      height: '40px !important',
    },
  },
  New__ticket__attachment: {
    marginBottom: '20px',
    width: '70%',
  },
  drop__file__here: {
    border: '2px dashed #C1C2C3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    '& p': {
      margin: '0 !important',
      padding: '22px 70px !important',
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

  closed__complaints__table: {
    padding: '50px 40px',
    backgroundColor: '#fff',

    '& h3': {
      margin: 0,
      marginBottom: '40px',
      fontSize: '24px',
      fontWeight: 'semi-bold',
      color: '#24275D',
    },

    [theme.breakpoints.down('600')]: {
      padding: '30px 20px',

      '& h3': {
        marginBottom: '20px',
      },
    },
  },

  Active__complaints__table: {
    padding: '50px 40px',
    backgroundColor: '#fff',

    '& h3': {
      margin: 0,
      marginBottom: '40px',
      fontSize: '24px',
      fontWeight: 'semi-bold',
      color: '#24275D',
    },

    [theme.breakpoints.down('600')]: {
      padding: '30px 20px',

      '& h3': {
        marginBottom: '20px',
      },
    },
  },

  chip: {
    color: 'white',
    backgroundColor: '#42B748',
    borderRadius: '50px',
    margin: '0',
    padding: '8px 2px',
    textAlign: 'center',
  },

  chipClose: {
    color: 'white',
    backgroundColor: '#ee2200',
    borderRadius: '50px',
    margin: '0',
    padding: '8px 2px',
    textAlign: 'center',
  },
}))

//   ******************************

// ** Custom styles for React Select **
export const customStyles = {
  container: styles => ({
    ...styles,
    width: '100%',
    marginBottom: '16px',
    textDecoration: 'none',
  }),
  valueContainer: styles => ({
    ...styles,
  }),
  control: styles => ({
    ...styles,
    height: '55px',
    boxShadow: 'none !important',
    borderColor: '#c0c0c0',

    '&:hover': {
      borderColor: '#202020',
    },
  }),
  dropdownIndicator: styles => ({
    ...styles,
    fontSize: '20px',
  }),
  singleValue: (styles, { data }) => {
    return {
      ...styles,
      color: '#505050',
      fontSize: '16px',
    }
  },
  menu: styles => ({ ...styles, backgroundColor: 'white', color: '#24275D', zIndex: '10' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? '#cccccc' : isSelected ? '#24275d' : isFocused ? '#fafafa' : '#fafafa',
      color: isDisabled ? '#24275D' : isSelected ? '#FFC10B' : '#24275D',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: 'none',
      border: 'none',
      '&:active': {
        backgroundColor: '#24275d',
        color: '#fafafa',
      },
      '&:hover': {
        backgroundColor: isSelected ? '#24275d' : '#c6c6c6 !important',
      },
    }
  },
}
