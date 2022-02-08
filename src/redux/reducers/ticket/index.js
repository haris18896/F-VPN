import {
  ADD_TICKET_FAILED,
  ADD_TICKET_INITIATED,
  ADD_TICKET_SUCCESS,
  FETCH_TICKETS_FAILED,
  FETCH_TICKETS_INITIATED,
  FETCH_TICKETS_SUCCESS,
  PAGE_CHANGE_LIST_CLOSE_TICKETS,
  RESET_LIST_TICKETS_LIST_STATE,
  RESET_TICKET_STATE,
  SELECT_CHANGE_TICKETS_CLOSE_LIST,
} from '../../actions/actionTypes/ticket'

export const ticketReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TICKET_INITIATED: {
      return {
        openTicketInProcess: true,
      }
    }
    case ADD_TICKET_SUCCESS: {
      return {
        openTicketInProcess: false,
        success: action.payload.success,
        msg: action.payload?.msg,
      }
    }
    case ADD_TICKET_FAILED: {
      return {
        openTicketInProcess: false,
        error: action.payload,
      }
    }

    case RESET_TICKET_STATE: {
      return {}
    }
    default:
      return state
  }
}

export const ticketListReducer = (
  state = {
    page: 1,
    limit: 10,
  },
  action
) => {
  switch (action.type) {
    case FETCH_TICKETS_INITIATED: {
      return {
        ...state,
        fetchCloseTicketsInProcess: true,
      }
    }

    case FETCH_TICKETS_SUCCESS: {
      return {
        ...state,
        fetchCloseTicketsInProcess: false,
        closeTicketsListData: action.payload,
        totalPages: action.payload.totalPages,
      }
    }

    case FETCH_TICKETS_FAILED: {
      return {
        ...state,
        fetchCloseTicketsInProcess: false,
        error: action.payload,
      }
    }

    case SELECT_CHANGE_TICKETS_CLOSE_LIST: {
      return {
        ...state,
        limit: action.payload,
      }
    }

    case PAGE_CHANGE_LIST_CLOSE_TICKETS: {
      return {
        ...state,
        page: action.payload,
      }
    }

    case RESET_LIST_TICKETS_LIST_STATE: {
      return {
        page: 1,
        limit: 10,
      }
    }

    default: {
      return state
    }
  }
}
