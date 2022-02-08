export const initialFLowState = {
  name: '',
  path: '1',
}

export const FlowReducer = (state, action) => {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return { ...state, ...action.payload }
    case 'SCROLL_TO_CREATE_ACCOUNT':
      return { ...state, scrollToCreateAccount: action.payload }
    case 'SCROLL_TO_PAYMENT_INFO':
      return { ...state, scrollToPaymentInfo: action.payload }
    case 'CLEAR_ALL_SCROLLS':
      return { ...state, scrollToCreateAccount: false, scrollToPaymentInfo: false }

    case 'Dashboard__portal':
      return { ...state, path: '1' }
    case 'subscription':
      return { ...state, path: '2' }
    case 'Billing__History':
      return { ...state, path: '3' }
    case 'Support__Ticket':
      return { ...state, path: '4' }
    case 'Profile':
      return { ...state, path: '5' }

    default:
      return state
  }
}
