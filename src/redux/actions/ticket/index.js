import useJwt from '../../../jwt/jwtService'
import {
  ADD_TICKET_FAILED,
  ADD_TICKET_INITIATED,
  ADD_TICKET_SUCCESS,
  FETCH_TICKETS_FAILED,
  FETCH_TICKETS_INITIATED,
  FETCH_TICKETS_SUCCESS,
  PAGE_CHANGE_LIST_CLOSE_TICKETS,
  SELECT_CHANGE_TICKETS_CLOSE_LIST,
} from '../actionTypes/ticket'

export const handleGenerateTicket = data => {
  return async dispatch => {
    dispatch({ type: ADD_TICKET_INITIATED })
    try {
      const response = await useJwt.addTicket(data)
      if (response && response.data) {
        dispatch({ type: ADD_TICKET_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: ADD_TICKET_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleFetchTickets = (page, limit, status) => {
  return async dispatch => {
    dispatch({ type: FETCH_TICKETS_INITIATED })
    try {
      const response = await useJwt.getTickets(page, limit, status)
      if (response && response.data) {
        dispatch({ type: FETCH_TICKETS_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: FETCH_TICKETS_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleSelectChangeListCloseTickets = (newLimit, oldLimit, status) => {
  return async dispatch => {
    if (newLimit !== oldLimit) {
      dispatch(handleFetchTickets(1, newLimit, status))

      dispatch({ type: SELECT_CHANGE_TICKETS_CLOSE_LIST, payload: newLimit })

      dispatch({ type: PAGE_CHANGE_LIST_CLOSE_TICKETS, payload: 1 })
    }
  }
}

export const handlePageChangeListCloseTickets = (page, limit, status) => {
  return async dispatch => {
    const newPage = page.selected + 1
    dispatch({ type: PAGE_CHANGE_LIST_CLOSE_TICKETS, payload: newPage })
    dispatch(handleFetchTickets(newPage, limit, status))
  }
}
