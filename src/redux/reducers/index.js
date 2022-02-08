import { combineReducers } from 'redux'

import { planReducer } from './plan'
import { profileReducer } from './profile'
import { transactionReducer } from './transaction'
import { subscriptionReducer } from './subscription'
import { contactFormReducer } from './ContactReducer'
import { ticketReducer, ticketListReducer } from './ticket'
import { registrationReducer, loginReducer, authReducer } from './auth'
import { buyingSubscriptionFlowReducer } from './buyingSubscriptionFlow'

const rootReducer = combineReducers({
  auth: authReducer,
  register: registrationReducer,
  login: loginReducer,
  appFlow: buyingSubscriptionFlowReducer,
  plan: planReducer,
  subscription: subscriptionReducer,
  profile: profileReducer,
  ticket: ticketReducer,
  ticketList: ticketListReducer,
  transaction: transactionReducer,
  contact: contactFormReducer,
})

export default rootReducer
