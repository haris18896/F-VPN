import { makeStyles } from '@material-ui/core/styles'

export const DashboardPortalFixedStyles = makeStyles(theme => ({
  Portal__Wrapper: {
    paddingTop: '70px',

    [theme.breakpoints.down('340')]: {
      paddingTop: '100px',
    },
  },

  Dashboard__Container: {
    padding: '0px !important',
  },

  Main__Grid__Container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F8F9FA ',
    marginTop: '5px',
  },

  Top__Grid: {
    display: 'flex',
    flex: 1,
  },

  Bottom__Grid: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F8F9FA ',
  },

  flex__23: {
    minWidth: '23%',
  },

  flex__10: {
    minWidth: '80px',
  },
  left_grid_height: {},

  Left__Grid: {
    backgroundColor: '#F8F9FA ',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',

    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  Left__Grid__2: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '5px 5px 14px -6px rgba(0,0,0,0.3)',
    borderBottomRightRadius: '30px',

    [theme.breakpoints.down('900')]: {
      display: 'none',
    },
  },

  Right__Grid: {
    position: 'relative',
    width: '100%',
  },

  Right__Grid__2: {
    backgroundColor: 'F8F9FA',
    width: '100%',
    overflowX: 'hidden',
  },

  relative__Image__right__Grid: {
    position: 'absolute',
    top: '5%',
    right: '15px',

    width: '100px',
    height: '100%',

    [theme.breakpoints.up('450')]: {
      right: '20px',
      width: '120px',
    },
    [theme.breakpoints.up('600')]: {
      right: '30px',
      width: '160px',
    },
    [theme.breakpoints.up('750')]: {
      right: '40px',
      width: '200px',
    },
    [theme.breakpoints.up('1200')]: {
      right: '60px',
      width: '250px',
    },
    [theme.breakpoints.up('1400')]: {
      right: '75px',
      width: '300px',
    },
  },

  background__img: {
    backgroundColor: '#F8F9FA !important',
    maxHeight: '300px',
    overflow: 'hidden',

    '& img': {
      width: '100%',
      backgroundSize: 'cover',
      marginBottom: '-5px',
      marginTop: '5px',
      textAlign: 'center',
    },
  },

  modal__content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  modal_title: {
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Open sans',
    marginBottom: '10px !important',
    textAlign: 'center',
  },
  modal_desc: {
    fontWeight: 400,
    marginBottom: '30px',
    textAlign: 'center',
    fontFamily: 'Open sans',
    marginTop: '0px',
  },

  modal_btn: {
    width: '80%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#24275d',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '15px',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
      color: '#fff',
      background: '#24275a',

      transform: 'scale(1.05)',
    },
  },

  logout__button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },

  cancel_logout_btn: {
    width: '50%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#dbd9d9',
    color: '#000',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '15px',
    transition: 'all 0.5s ease-in-out',
    marginRight: '20px',

    '&:hover': {
      color: '#000',
      background: '#afafaf',

      transform: 'scale(1.05)',
    },
  },

  logout_modal_btn: {
    width: '50%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#24275d !important',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '30px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '15px',
    transition: 'all 0.5s ease-in-out',
    marginLeft: '20px',

    '&:hover': {
      color: '#fff',
      background: '#24275a',

      transform: 'scale(1.05)',
    },
  },

  Icon__Button: {
    paddingRight: '4px !important',
    color: 'transparent !important',
    backgroundColor: '#F8F9FA  !important',
    borderRadius: '0 !important',
    borderTopRightRadius: '100px !important',
    borderBottomRightRadius: '100px !important',
    position: 'absolute !important',
    zIndex: '1 !important',
  },

  Icon__Button__toggled: {
    top: 19,
    right: -25,
  },

  Icon__Button__notToggled: {
    top: 19,
    right: -25,
  },

  button__Icon: {
    color: '#ffc10b !important',
    fontWeight: 'bold',
    padding: '8px 0px !important',
    marginLeft: 'auto !important',
  },

  Profile__img: {
    borderRadius: '50%',
    fontSize: '90px !important',
    width: '90px',
    height: '90px',
  },

  Profile__img__small: {
    width: '60px',
    height: '60px',
  },

  Profile__name: {
    color: '#24275D',
    fontSize: '21px !important',
    fontWeight: '600 !important',
    paddingTop: '10px',
    fontFamily: 'Open Sans !important',
  },

  Profile__email: {
    color: '#C1C2C3',
    fontSize: '19px !important',
    fontWeight: '400 !important',
    fontFamily: 'Open Sans !important',
  },

  background__img__items__text: {
    position: 'absolute',
    bottom: '90px',
    [theme.breakpoints.down('1100')]: {
      bottom: '60px',
    },
    [theme.breakpoints.down('700')]: {
      bottom: '50px',
    },
    [theme.breakpoints.down('600')]: {
      bottom: '40px',
    },
    [theme.breakpoints.down('500')]: {
      bottom: '30px',
    },
    [theme.breakpoints.down('360')]: {
      bottom: '20px',
      left: '-17px',
    },
    '& h1': {
      fontSize: '40px !important',
      fontWeight: 'bold ',
      fontFamily: 'Open Sans !important',
      margin: '0px 0px 0px 40px',
      color: 'white',

      [theme.breakpoints.down('1100')]: {
        fontSize: '32px !important',
      },
      [theme.breakpoints.down('1000')]: {
        fontSize: '28px !important',
      },
      [theme.breakpoints.down('550')]: {
        fontSize: '22px !important',
      },
      [theme.breakpoints.down('450')]: {
        fontSize: '18px !important',
      },
      [theme.breakpoints.down('450')]: {
        fontSize: '16px !important',
      },
    },

    '& p': {
      color: 'white',
      margin: '0px 0px 0px 40px',
      fontFamily: 'Open Sans',
      marginTop: '8px',

      fontSize: '16px !important',
      [theme.breakpoints.down('1000')]: {
        fontSize: '14px !important',
      },
      [theme.breakpoints.down('550')]: {
        fontSize: '12px !important',
      },
      [theme.breakpoints.down('450')]: {
        fontSize: '10px !important',
      },
    },
  },

  Sidebar__Menu__items__title: {
    fontSize: '15px !important',
    marginTop: '25px !important',
    fontFamily: 'Open Sans !important',
    fontWeight: '600 !important',
    color: '#C1C2C3',
    paddingLeft: '30px',
    marginBottom: '25px !important',
  },

  Sidebar__Menu__items__title_Toggled: {
    fontSize: '12px !important',
    marginTop: '25px !important',
    fontFamily: 'Open Sans !important',
    fontWeight: '600 !important',
    color: '#C1C2C3',
    paddingLeft: '10px !important',
    marginBottom: '25px !important',
  },

  Sidebar__Menu__items__list: {
    padding: 0,
  },

  Sidebar__Menu__items__list__item: {
    color: '#24275D',
    listStyleType: 'none',
  },

  Sidebar__Menu__Link: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: '#F8F9FA !important',
    },
  },

  active: {
    '& p': {
      color: '#ffc10b !important',
    },
    '& svg:last-child ': {
      color: '#FFC10B !important',
    },

    '& svg:first-child ': {
      color: 'white !important',
      backgroundColor: '#24275d !important',
    },
  },

  list__item__img: {
    fontSize: '30px !important',
    paddingRight: '14px',
    marginRight: '10px',
    padding: '15px 25px',
    borderBottomRightRadius: '50%',
    borderTopRightRadius: '50%',
  },

  list__item__text: {
    fontSize: '17px !important',
    fontFamily: 'Open Sans !important',
    fontWeight: '600 !important',
    color: '#24275D !important',
    marginLeft: '6px !important',

    [theme.breakpoints.down('1000')]: {
      fontSize: '14px !important',
    },
  },

  List__item__arrow: {
    fontSize: '24px !important',
    padding: '15px 0px 15px 1px',
    marginRight: '10px !important',
    marginLeft: 'auto !important',
  },
  darkMode: {
    marginLeft: '85px',
  },

  Dark__mode__button: {
    fontSize: '15px',
    fontFamily: 'Open Sans',
    fontWeight: '400',
    color: '#C1C2C3',
  },

  Sidebar__bottom__items: {
    paddingTop: '80px',
    marginBottom: '40px',
    marginTop: 'auto',
    marginLeft: '85px',

    '& p': {
      marginBottom: '5px',
      fontFamily: 'Open Sans !important',
      fontWeight: '700 !important',
    },
  },

  bottom__items: {
    fontSize: '17px',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#24275d',
    textDecoration: 'none',
    textAlign: 'center',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  Dynamic__data__container: {
    margin: '0px 40px 00px 40px',
    minHeight: '300px',
    overflowX: 'hidden',

    [theme.breakpoints.down('1100')]: {},
    [theme.breakpoints.down('900')]: {
      margin: '0px',
    },

    '& p': {
      marginTop: '0px',
    },
  },
}))
