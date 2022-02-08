import { makeStyles } from '@material-ui/core/styles'
export const ReactPaginateStyles = makeStyles(theme => ({
  paginationContainer: {
    color: '#24275D',
    fontWeight: '700',
    fontSize: '20px',
    listStyle: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    // position: 'fixed',
  },

  active: {
    color: '#fafafa',
    backgroundColor: '#FFC10B',
    borderRadius: '50px',
  },

  page_item: {
    margin: '0px 10px',
    cursor: 'pointer',
    height: '30px',
    width: '30px',
  },

  page_link: {
    padding: '7px 7px',
    cursor: 'pointer',

    '& hover': {
      backgroundColor: 'red',
    },
  },

  page_item_next: {},

  lower__Container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  lower__Container__Left: {
    minWidth: '70px',
  },
  select__tag: {
    minWidth: '70px',
    height: '30px',
    border: '1px solid #24275D',
    color: '#24275D',
    fontSize: '18px',
  },
  lower__Container__Right: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}))
