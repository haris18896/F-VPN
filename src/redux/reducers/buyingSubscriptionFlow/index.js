import {
  GO_TO_PAYMENT,
  HIDE_PLANS,
  SET_SHOW_PAYMENT_FALSE,
  SHOW_PLANS,
  SHOW_PLANS_FOR_UPGRADE,
  SHOW_SUBSCRIPTION_DETAILS,
} from '../../actions/actionTypes/appFlow'
import { VERIFY_RESET_PASSWORD_REQUEST_SUCCESS } from '../../actions/actionTypes/auth'
import {
  CUSTOMER_LOGIN_SUCCESS,
  CUSTOMER_REGISTRATION_FAILED,
  CUSTOMER_REGISTRATION_INITIATED,
  CUSTOMER_REGISTRATION_SUCCESS,
  LOGOUT_SUCCESS,
} from '../../actions/actionTypes/customer/index.js'
import { PLAN_SELECTED } from '../../actions/actionTypes/plan'
import {
  ADD_SUBSCRIPTION_SUCCESS,
  RESET_SUBSCRIPTION_UPGRADE,
  SET_NOT_SUBSCRIBED,
  SET_SUBSCRIBED,
  UPGRADE_PLAN_SUCCESS,
  RESET_SHOW_PLANS,
} from '../../actions/actionTypes/subscription'

const initialState = {}

export const buyingSubscriptionFlowReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case LOGOUT_SUCCESS:
      return {}
    case PLAN_SELECTED:
      return {
        ...state,
        isPlanSelected: true,
      }

    case ADD_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        isPaymentDone: true,
      }

    case CUSTOMER_REGISTRATION_INITIATED:
      return {
        ...state,
        isRegistered: false,
      }

    case CUSTOMER_REGISTRATION_SUCCESS:
      return {
        ...state,
        isRegistered: true,
      }

    case CUSTOMER_REGISTRATION_FAILED:
      return {
        ...state,
        isRegistered: false,
      }

    case SET_SUBSCRIBED:
      return {
        ...state,
        isSubscribed: action.payload,
      }

    case SET_NOT_SUBSCRIBED:
      return {
        ...state,
        isSubscribed: action.payload,
      }

    case VERIFY_RESET_PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        canResetPassword: true,
      }

    case SHOW_PLANS:
      return {
        ...state,
        showPlans: true,
      }

    case HIDE_PLANS:
      return {
        ...state,
        showPlans: false,
      }

    case GO_TO_PAYMENT:
      return {
        ...state,
        showPayment: true,
      }

    case SET_SHOW_PAYMENT_FALSE:
      return {
        ...state,
        showPayment: false,
      }

    case SHOW_PLANS_FOR_UPGRADE:
      return {
        ...state,
        showPlansForUpgradeSub: true,
      }

    case RESET_SUBSCRIPTION_UPGRADE:
      return {
        ...state,
        showPlansForUpgradeSub: false,
        showNewSubDetails: false,
      }

    case UPGRADE_PLAN_SUCCESS:
      return {
        ...state,
        showNewSubDetails: true,
      }

    case SHOW_SUBSCRIPTION_DETAILS:
      return {
        ...state,
        showPlans: false,
        isPaymentDone: false,
      }

    case RESET_SHOW_PLANS:
      return {
        ...state,
        showPlansForUpgradeSub: false,
        isPlanSelected: false,
        showNewSubDetails: false,
      }

    default:
      return state
  }
}
