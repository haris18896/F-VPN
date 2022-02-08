import { makeStyles } from '@material-ui/core/styles'

import { styled, alpha } from '@mui/material/styles'
import Menu from '@mui/material/Menu'

export const DynamicContainer = makeStyles(theme => ({
  dashboard__portal__Main__Container: {
    backgroundColor: '#F8F9FA !important',
    width: '100%',
  },
  dashboard__Header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    [theme.breakpoints.down('900')]: {
      display: 'none',
    },

    '& p': {
      marginRight: '10px',
    },
  },

  dashboard__Header_small: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('900')]: {
      display: 'none',
    },

    '& button': {
      borderTop: '5px solid #ffc10b',
      backgroundColor: '#fefefe',
      padding: '15px 15px 15px 27px',

      [theme.breakpoints.up('400')]: {
        padding: '30px 30px 30px 55px',
      },
    },
  },

  dashboard__Menu_icon_small: {
    color: '#ffc10b',
  },
  dashboard__Menu_icon_small__Content: {
    color: '#ffc10b',
    fontSize: '24px ',
    fontWeight: '600 !important',
    fontFamily: 'Open Sans !important',
    paddingRight: '25px',
  },

  UnSelected__item__dashboard: {
    fontSize: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
    fontWeight: 500,
    fontFamily: 'Open Sans',
    color: '#24275d',
    marginRight: '45px',
    marginBottom: 0,
    marginTop: 0,
    width: '180px',

    cursor: 'pointer',
    textAlign: 'center',

    [theme.breakpoints.down('1100')]: {
      fontSize: '16px',
    },
  },

  Selected__item__dashboard: {
    fontSize: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: '#FFF',
    fontWeight: '500',
    fontFamily: 'Open Sans',
    color: '#ffc10b',
    borderTop: '5px solid #ffc10b',
    width: '180px',
    marginRight: '45px',
    marginBottom: 0,
    marginTop: '-1px',
    marginLeft: '2px',
    textAlign: 'center',
    [theme.breakpoints.down('1100')]: {
      fontSize: '16px',
    },
  },
  dashboard__Body: {
    background: '#fff',
    marginBottom: '40px',
    boxShadow: '5px 5px 14px -6px rgba(0,0,0,0.3)',
  },
}))

export const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))
