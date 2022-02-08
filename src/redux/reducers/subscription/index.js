import { LOGOUT_SUCCESS } from '../../actions/actionTypes/customer/index'
import {
  ADD_SUBSCRIPTION_FAILED,
  ADD_SUBSCRIPTION_INITIATED,
  ADD_SUBSCRIPTION_SUCCESS,
  CONFIRM_CARD_SETUP,
  CONFIRM_CARD_SETUP_DONE,
  GET_SUBSCRIPTION_FAILED,
  GET_SUBSCRIPTION_INITIATED,
  GET_SUBSCRIPTION_SUCCESS,
  RESET_SUBSCRIPTION_STATE,
  RESET_SUBSCRIPTION_UPGRADE,
  UPDATE_AUTO_RENEWAL_FAILED,
  UPDATE_AUTO_RENEWAL_INITIATED,
  UPDATE_AUTO_RENEWAL_SUCCESS,
  UPGRADE_PLAN_FAILED,
  UPGRADE_PLAN_INITIATED,
  UPGRADE_PLAN_SUCCESS,
} from '../../actions/actionTypes/subscription'

export const subscriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION_INITIATED: {
      return {
        ...state,
        addSubInProcess: true,
      }
    }
    case ADD_SUBSCRIPTION_SUCCESS: {
      return {
        ...state,
        addSubInProcess: false,
        status: 'SUCCESS',
      }
    }
    case ADD_SUBSCRIPTION_FAILED: {
      return {
        ...state,
        addSubInProcess: false,
        error: action.payload,
      }
    }

    case GET_SUBSCRIPTION_INITIATED: {
      return {
        ...state,
        getSubInProcess: true,
      }
    }
    case GET_SUBSCRIPTION_SUCCESS: {
      return {
        ...state,
        getSubInProcess: false,
        subscriptionData: action.payload.customer.subscription,
        status: 'SUCCESS',
      }
    }
    case GET_SUBSCRIPTION_FAILED: {
      return {
        ...state,
        getSubInProcess: false,
        subscriptionFetchError: action.payload,
      }
    }

    case CONFIRM_CARD_SETUP: {
      return {
        ...state,
        confirmCardSetupInProcess: true,
      }
    }
    case CONFIRM_CARD_SETUP_DONE: {
      return {
        ...state,
        confirmCardSetupInProcess: false,
      }
    }

    case UPDATE_AUTO_RENEWAL_INITIATED: {
      return {
        ...state,
        updateAutoRenewalSettingsInProcess: true,
      }
    }
    case UPDATE_AUTO_RENEWAL_SUCCESS: {
      return {
        ...state,
        updateAutoRenewalSettingsInProcess: false,
        autoRenewalStatus: 'SUCCESS',
        autoRenewal: action.payload.autoRenewal,
      }
    }
    case UPDATE_AUTO_RENEWAL_FAILED: {
      return {
        ...state,
        updateAutoRenewalSettingsInProcess: false,
        error: action.payload,
      }
    }

    case UPGRADE_PLAN_INITIATED: {
      return {
        ...state,
        upgradePlanInProcess: true,
        upgradePlanStatus: '',
        upgradePlanSuccessMessage: '',
      }
    }
    case UPGRADE_PLAN_SUCCESS: {
      return {
        ...state,
        upgradePlanInProcess: false,
        upgradePlanStatus: 'SUCCESS',
        upgradePlanSuccessMessage: action.payload?.msg,
      }
    }
    case UPGRADE_PLAN_FAILED: {
      return {
        ...state,
        upgradePlanInProcess: false,
        error: action.payload,
      }
    }

    case RESET_SUBSCRIPTION_UPGRADE: {
      return {
        ...state,
        upgradePlanStatus: '',
        upgradePlanSuccessMessage: '',
      }
    }

    case RESET_SUBSCRIPTION_STATE: {
      return {}
    }

    case LOGOUT_SUCCESS: {
      return {}
    }
    default:
      return state
  }
}
