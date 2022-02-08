import {
  FETCH_TRANSACTIONS_FAILED,
  FETCH_TRANSACTIONS_INITIATED,
  FETCH_TRANSACTIONS_SUCCESS,
  PAGE_CHANGE_LIST_TRANSACTIONS,
  RESET_TRANSACTIONS_LIST_STATE,
  SELECT_CHANGE_TRANSACTIONS_LIST,
} from '../../actions/actionTypes/transaction'

export const transactionReducer = (
  state = {
    page: 1,
    limit: 10,
  },
  action
) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_INITIATED:
      return {
        ...state,
        inProcess: true,
      }

    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        inProcess: false,
        transactionListData: action.payload,
        totalPages: action.payload.totalPages,
      }

    case FETCH_TRANSACTIONS_FAILED:
      return {
        ...state,
        inProcess: false,
        error: action.payload,
      }

    case SELECT_CHANGE_TRANSACTIONS_LIST:
      return {
        ...state,
        limit: action.payload,
      }

    case PAGE_CHANGE_LIST_TRANSACTIONS:
      return {
        ...state,
        page: action.payload,
      }

    case RESET_TRANSACTIONS_LIST_STATE:
      return {
        page: 1,
        limit: 10,
      }
    default:
      return state
  }
}


