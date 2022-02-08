import useJwt from '../../../jwt/jwtService'
import {
  FETCH_TRANSACTIONS_FAILED,
  FETCH_TRANSACTIONS_INITIATED,
  FETCH_TRANSACTIONS_SUCCESS,
  PAGE_CHANGE_LIST_TRANSACTIONS,
  SELECT_CHANGE_TRANSACTIONS_LIST,
} from '../actionTypes/transaction/index.js'

export const fetchBillingHistory = (page, limit, userId) => {
  return async dispatch => {
    dispatch({ type: FETCH_TRANSACTIONS_INITIATED })
    try {
      const response = await useJwt.fetchTransactions(page, limit, userId)
      if (response && response.data) {
        dispatch({ type: FETCH_TRANSACTIONS_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: FETCH_TRANSACTIONS_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleSelectChangeListTransactions = (newLimit, oldLimit, userId) => {
  return async dispatch => {
    if (newLimit !== oldLimit) {
      dispatch(fetchBillingHistory(1, newLimit, userId))

      dispatch({ type: SELECT_CHANGE_TRANSACTIONS_LIST, payload: newLimit })

      dispatch({ type: PAGE_CHANGE_LIST_TRANSACTIONS, payload: 1 })
    }
  }
}

export const handlePageChangeListTransactions = (page, limit, userId) => {
  return async dispatch => {
    const newPage = page.selected + 1
    dispatch({ type: PAGE_CHANGE_LIST_TRANSACTIONS, payload: newPage })
    dispatch(fetchBillingHistory(newPage, limit, userId))
  }
}
