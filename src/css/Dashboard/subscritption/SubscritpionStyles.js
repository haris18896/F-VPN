import { makeStyles } from '@material-ui/core/styles'

export const Subscription = makeStyles(theme => ({
  subscription__Main__Container: {
    backgroundColor: '#F8F9FA !important',
    width: '100%',
  },
  subscription__Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    '& p': {
      marginRight: '10px',
    },
  },

  UnSelected__item__dashboard: {
    fontSize: '20px',
    fontWeight: 500,
    fontFamily: 'Open Sans !important',
    color: '#24275d',
    marginRight: '45px',
    marginBottom: 0,
    marginTop: 0,
    width: '180px',

    paddingTop: '15px',
    cursor: 'pointer',
    textAlign: 'center',
  },

  Selected__item__dashboard: {
    fontSize: '20px',
    backgroundColor: '#FFF',
    fontWeight: '500',
    fontFamily: 'Open Sans !important',
    color: '#ffc10b',
    borderTop: '5px solid #ffc10b',
    paddingBottom: '2px',
    width: '180px',
    marginRight: '45px',
    marginBottom: 0,
    marginTop: '-1px',
    marginLeft: '2px',
    paddingTop: '15px',
    textAlign: 'center',
  },
  dashboard__Body: {
    background: '#FFF !important',
  },
}))

// ***********************************************************************

export const NoSubscriptionStyles = makeStyles(theme => ({
  NoSubscription__container: {
    marginLeft: '2px',
  },
  NoSubscription__img: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px',
    paddingBottom: '40px',
    paddingTop: '40px',

    [theme.breakpoints.down('900')]: {
      marginTop: '0px',
    },
  },
  NoSubscription__text: {
    width: '60%',
    '& h3': {
      fontSize: '24px',
      fontWeight: '700',
      textAlign: 'center',
      fontFamily: 'Open Sans !important',
      color: '#0A0C23',
      marginBottom: '0px !important',
    },

    '& p': {
      fontSize: '18px',
      color: '#858997',
      fontFamily: 'Open Sans !important',
      textAlign: 'center',
      marginTop: '16px !important',
      marginBottom: '16px !important',
    },
  },

  subscribe__button: {
    backgroundColor: '#24275d',
    border: 'none',
    padding: '22px 70px',
    marginTop: '24px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'semi-bold',
    fontFamily: 'Open Sans !important',
    cursor: 'pointer',
    borderRadius: '4px',

    '&:hover': {
      backgroundColor: '#24275e',
    },
  },
}))

// ***********************************************************************
export const subscriptionDetailsStyles = makeStyles(theme => ({
  Subscription__Details__container: {
    backgroundColor: '#fff',
    marginLeft: '2px',
    paddingBottom: '40px',
    marginTop: '40px',

    [theme.breakpoints.down('900')]: {
      marginTop: '0px',
    },
  },
  subscription__title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#24275D',
    fontFamily: 'Open Sans !important',
    marginTop: '0px',
    padding: '40px 40px 26px 40px',
  },
  modal__content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  Modal_image: {
    marginBottom: '20px',
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
  cancel_modal_btn: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    borderBottom: '1px solid #ee2200',
    color: '#ee2200',
    padding: '10px 10px 0px 10px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',

    '& hover': {
      transform: 'scale(1.1)',
    },
  },
  renew__button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  Renew_modal_btn: {
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
  cancel_Renew_btn: {
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

  table__and__upgrade__button: {
    margin: ' 0px 40px',
    width: '50%',

    [theme.breakpoints.down('900')]: {
      width: '90% !important',
    },
    [theme.breakpoints.down('600')]: {
      width: '85% !important',
    },
    [theme.breakpoints.down('450')]: {
      width: '80% !important',
    },
  },

  Table__container: {
    overflowX: 'hidden !important',
    width: '100%',
  },
  table__row: {},
  Large__cell: {
    width: '100%',
    margin: '0px',
    padding: '16px 16px 16px 0px !important',
    textAlign: 'center',
  },
  small__cell: {
    paddingRight: '0px !important',
    color: '#24275d',
    minWidth: '100px',
  },

  upgrade__buttons: {
    display: 'flex',
    marginTop: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  Renewal__button: {
    border: 'none',
    marginBottom: '15px',
    backgroundColor: '#24275d',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '10px 65px',
    fontSize: '15px',
    transition: 'all 0.5s',
    borderRadius: '5px',

    '&:hover': {
      color: '#fff',
      background: '#24275a',

      transform: 'scale(1.05)',
    },
  },
  Upgrade_plan: {
    border: 'none',
    color: '#24275d',
    backgroundColor: 'transparent',
    fontSize: '15px',
    fontWeight: '600',
    borderBottom: '1px solid #24275d',
    cursor: 'pointer',
    transition: 'all 0.5s',

    '&:hover': {
      borderBottom: '1px solid #24275a',

      transform: 'scale(1.1)',
    },
  },
}))

// ***********************************************************************

export const SelectedPlanStyles = makeStyles(theme => ({
  Selected__plan__contaIner: {
    backgroundColor: '#FFF',
    marginLeft: '2px',
  },
  plan__title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#24275D',
    fontFamily: 'Open Sans !important',
    marginTop: '0px',
    padding: '40px 40px 26px 40px',
  },
  Selected__plan: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingBottom: '40px',

    [theme.breakpoints.down('1320')]: {
      justifyContent: 'space-between',
    },
  },

  Selected__plan__automation: {
    border: '1px solid #C1C2C3',
    borderRadius: '8px',
    padding: '25px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& p': {
      color: '#858997',
      fontSize: '15px',
      fontWeight: '500',
      fontFamily: 'Open Sans !important',
      margin: '0',
      marginBottom: '6px',
    },

    '& span': {
      margin: '0',
      marginBottom: '17px',
      color: '#24275D',
      fontWeight: '700',
      fontFamily: 'Open Sans !important',
    },

    '& button': {
      padding: '10px 62px',
      backgroundColor: '#FEF6DE',
      color: '#ffc10b',
      border: '1px solid #ffc10b',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#FFC10B',
        color: 'red',
        border: '1px solid red',
      },
    },
  },
  Selected__plan__details: {
    flex: 0.6,
    marginRight: '20px',
    border: '1px solid #C1C2C3',
    borderRadius: '8px',

    [theme.breakpoints.down('1320')]: {
      flex: 1,
    },
  },

  Selected__plan__details__Top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '30px 30px',

    '& p': {
      color: '#24275D',
      fontSize: '15px',
      fontWeight: 'semi-bold',
      fontFamily: 'Open Sans !important',
      marginBottom: '0px',

      '& span': {
        backgroundColor: '#FFC10B',
        color: '#fff',
        padding: '3px 5px',
        borderRadius: '4px',
      },
    },
  },

  span__Styles: {
    marginRight: '10px',
  },

  Selected__plan__details__bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0px 30px 30px 30px',

    '& button': {
      border: 'none',
      backgroundColor: '#FFC10B',
      fontSize: '16px',
      fontWeight: 'semi-bold',
      padding: '10px 24px',
      borderRadius: '4px',
      color: '#fff',

      '& span': {
        fontWeight: 'bold',
        marginLeft: '10px',
        border: '2px solid #fff',
        borderRadius: '50%',
      },
    },
  },

  subscription__expiry__date: {
    fontSize: '15px',
    fontWeight: 'semi-bold',
    fontFamily: 'Open Sans !important',
    color: '#24275D',
    '& span': {
      color: '#858997',
      whiteSpace: 'wrap',
      marginRight: '10px',
    },

    '& p': {
      marginRight: '10px',
      marginTop: '6px',
      marginBottom: '0',
    },
  },
}))
// ************************************************************************************
// New Selected Plan styles
export const NewSelectedPlanStyles = makeStyles(theme => ({
  Selected__new__plan__contaIner: {
    backgroundColor: '#FFF',
    marginLeft: '2px',
    paddingBottom: '40px',
    marginTop: '40px',

    [theme.breakpoints.down('900')]: {
      marginTop: '0px',
    },
  },
  plan__title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#24275D',
    fontFamily: 'Open Sans !important',
    marginTop: '0px',
    marginBottom: '0px',
    padding: '40px',
  },

  form_group: {
    margin: '0px 40px 10px 40px',
  },

  plans__div: {
    margin: '10px 40px',
    display: 'flex',
    [theme.breakpoints.down('700')]: {
      flexDirection: 'column',
    },
  },

  modal__content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  Modal_image: {
    marginBottom: '20px',
  },

  modal_title: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '10px !important',
    textAlign: 'center',
  },

  modal_desc: {
    fontWeight: 400,
    marginBottom: '30px',
    textAlign: 'center',
    marginTop: '0px',
  },

  modal_btn: {
    width: '80%',
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

    '&:hover': {
      color: '#fff',
      background: '#24275a !important',

      transform: 'scale(1.05)',
    },
  },

  left__plans: {
    flex: 0.5,
    marginRight: '15px',
    [theme.breakpoints.down('700')]: {
      flex: 1,
      marginRight: '0px',
    },
  },

  plans__wrapper: {
    justifyContent: 'space-between',
    border: '2px solid #24275D',
    borderRadius: '7px',
    marginBottom: '17px',
    width: '100%',
    cursor: 'pointer',
  },

  plans__wrapper_selected: {
    backgroundColor: '#FFC10B',
    border: 'none !important',
    padding: '2px',
  },

  plan__data: {
    padding: '20px 0px',
    margin: '0px 10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    [theme.breakpoints.down('1280')]: {
      margin: 0,
    },
  },

  radio_click: {
    color: '#A7A7A7',
    cursor: 'pointer',
    marginLeft: '20px',

    [theme.breakpoints.down('1200')]: {
      marginLeft: '10px',
    },
  },
  radio__check: {
    marginLeft: '20px',
    color: '#FFC10B',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: '50%',
    [theme.breakpoints.down('1200')]: {
      marginLeft: '10px',
    },
  },

  radio_custom_label_month: {
    color: '#24275D',
    fontSize: '21px',
    fontWeight: '700',
    marginLeft: '15px',
    cursor: 'pointer',

    [theme.breakpoints.down('1200')]: {
      marginLeft: '7px',
    },
  },

  radio_custom_label_month_selected: {
    color: '#fff !important',
  },

  radio_custom_label_saving: {
    marginLeft: 'auto',
    marginRight: '40px',
    fontSize: '10px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    fontFamily: 'Open Sans !important',
    [theme.breakpoints.down('1200')]: {
      marginRight: '10px',
    },
    [theme.breakpoints.down('400')]: {
      whiteSpace: 'normal',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    '& strong': {
      fontSize: '21px',
    },

    '& span': {
      backgroundColor: '#FFC10B',
      color: '#fff',
      padding: '4px 8px',
      fontWeight: '600',
      marginRight: '30px',
      borderRadius: '100px',
      whiteSpace: 'nowrap',

      [theme.breakpoints.down('1200')]: {
        marginRight: '10px',
      },
      [theme.breakpoints.down('1000')]: {
        marginLeft: '10px',
      },
      [theme.breakpoints.down('370')]: {
        margin: 0,
      },
    },
  },

  radio_custom_label_saving_selected: {
    color: '#fff',
    '& span': {
      color: '#FFC10B',
      backgroundColor: '#fff',
    },
  },
  Btn__class: {
    backgroundColor: '#fff',
  },
  select__plan__btn: {
    backgroundColor: '#24275d',
    color: '#fff',
    fontFamily: 'Open Sans !important',
    fontSize: '20px',
    fontWeight: '600',
    border: 'none',
    outline: 'none',
    borderRadius: '4px',
    padding: '10px 65px',
    margin: '10px 40px 40px 40px',
    cursor: 'pointer',
    transition: 'all .5s ease-in-out',
  },

  // ** Details **
  right__details: {
    marginLeft: '15px',
    flex: 0.5,
    [theme.breakpoints.down('700')]: {
      flex: 1,
      marginLeft: '0px',
    },
  },

  right__details__top: {
    backgroundColor: '#FFC10b',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',

    '& p': {
      marginBottom: '0',
      marginLeft: '40px',
      padding: '20px',
      color: '#fff',
      fontSize: '17px',
      fontWeight: '600',
    },
  },
  right__details__bottom: {
    border: '1px solid #FFC10B',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',

    '& ul': {
      padding: '0',
      margin: '0',

      '& li': {
        position: 'relative',
        listStyle: 'none',
        margin: '23px 20px ',
        paddingLeft: '40px',
        color: '#24275D',
        fontSize: '14px',
        fontWeight: 'semi-bold',
        fontFamily: 'Open Sans !important',

        [theme.breakpoints.down('1000')]: {
          paddingLeft: '10px',
        },

        '& span': {
          position: 'absolute',
          top: '0px',
          left: '90%',
          color: '#fff',
          backgroundColor: '#FFC10B',
          padding: '2px 5px',
          margin: '0',
          fontSize: '10px',
          borderRadius: '50%',
        },
      },
    },
  },
}))

// *************************************************************************************

export const PaymentMethodClasses = makeStyles(theme => ({
  Payment__container: {
    backgroundColor: '#fff',
    padding: '40px 40px',
    marginTop: '40px',
    fontFamily: 'Open Sans',

    '& hr': {
      color: '#C1C2C3 !important',
    },

    '& h3': {
      fontSize: '24px',
      color: '#24275D',
      fontWeight: 'semi-bold',
      fontFamily: 'Open Sans !important',
      margin: '0px 10px 12px 0px',
    },

    [theme.breakpoints.down('900')]: {
      padding: '20px 20px',
      marginTop: '0px',
    },
  },
  Payment__duration: {
    marginTop: '18px',
    marginBottom: '18px',
    marginRight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.down('600')]: {
      marginRight: '0px',
    },

    '& p': {
      marginBottom: '0px',
      fontsize: '20px',
      color: '#858997',
      fontWeight: 'regular',
      fontFamily: 'Open Sans',
      marginRight: '20px',
    },

    [theme.breakpoints.down('600')]: {
      marginRight: '0px',

      '& p': {
        fontSize: '16px',
      },
    },
  },
  amount: {
    color: '#858997',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',

    [theme.breakpoints.down('600')]: {
      fontSize: '20px',
    },
  },

  Payment__discount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '100px',

    [theme.breakpoints.down('600')]: {
      marginRight: '0px',
    },
  },
  Payment__discount__text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& p': {
      marginBottom: '0px',
      fontsize: '20px',
      color: '#858997',
      fontWeight: 'regular',
      fontFamily: 'Open Sans',
      marginRight: '20px',
    },
    [theme.breakpoints.down('400')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& p': {
        marginBottom: '10px',
      },
    },
  },
  discount__save: {
    margin: '0px 10px',
    backgroundColor: '#ffc10b',
    padding: '10px 30px',
    borderRadius: '100px',
    color: '#fff',
    fontFamily: 'Open Sans',
    [theme.breakpoints.down('400')]: {
      margin: '0px',
    },
  },
  amount__saved: {
    color: '#EE3429',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',

    [theme.breakpoints.down('600')]: {
      fontSize: '20px',
    },
  },
  bill: {
    marginBottom: '10px',
    marginTop: '25px !important',
    fontsize: '20px',
    color: '#858997',
    fontWeight: 'regular',
    fontFamily: 'Open Sans',
    marginRight: '20px',
  },
  Total: {
    marginTop: '25px !important',
    marginBottom: '35px !important',
    color: '#000',
    fontFamily: 'Open Sans',

    '& span': {
      color: '#FFC10B',
    },
  },
  subscription__text: {
    marginTop: '30px',
    width: '80%',
    fontFamily: 'Open Sans',

    '& p': {
      color: '#616161',
      fontSize: '16px',
      fontWeight: 'regular',
      fontFamily: 'Open Sans',
      lineHeight: '24px',
      marginBottom: '0px',

      '& a': {
        color: '#FFC10B',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
          color: '#ecb100',
        },
      },
    },

    [theme.breakpoints.down('900')]: {
      width: '95%',
    },
  },

  Payment__method: {
    '& h3': {
      margin: '30px 0px',
    },

    '& button': {
      backgroundColor: '#24275d',
      border: 'none',
      padding: '22px 60px',
      marginTop: '24px',
      marginBottom: '70px',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'semi-bold',
      cursor: 'pointer',
      borderRadius: '4px',
      fontFamily: 'Open Sans',

      '&:hover': {
        backgroundColor: '#24275e',
      },
    },
  },

  stripe__Card__Icons: {
    backgroundColor: 'transparent !important',
    padding: '3px 5px !important',
    marginTop: '0 !important',
    marginBottom: '0 !important',
  },

  Stripe__form: {
    width: '70%',

    [theme.breakpoints.down('900')]: {
      width: '95%',
    },
  },

  icon__BTNs: {
    marginTop: '0 !important',
    backgroundColor: 'transparent !important',
    color: '#5c5c5c !important',
    padding: '3px 5px !important',
    marginBottom: '0 !important',
  },
}))

// ********************************************************************************
