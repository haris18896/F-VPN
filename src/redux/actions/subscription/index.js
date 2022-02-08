import useJwt from '../../../jwt/jwtService'
import {
  ADD_SUBSCRIPTION_FAILED,
  ADD_SUBSCRIPTION_INITIATED,
  ADD_SUBSCRIPTION_SUCCESS,
  GET_SUBSCRIPTION_FAILED,
  GET_SUBSCRIPTION_INITIATED,
  GET_SUBSCRIPTION_SUCCESS,
  UPDATE_AUTO_RENEWAL_FAILED,
  UPDATE_AUTO_RENEWAL_INITIATED,
  UPDATE_AUTO_RENEWAL_SUCCESS,
  UPGRADE_PLAN_FAILED,
  UPGRADE_PLAN_INITIATED,
  UPGRADE_PLAN_SUCCESS,
} from '../actionTypes/subscription'

export const handleAddSubscription = data => {
  return async dispatch => {
    dispatch({ type: ADD_SUBSCRIPTION_INITIATED })
    try {
      const response = await useJwt.addSubscription(data)
      if (response && response.data) {
        dispatch({ type: ADD_SUBSCRIPTION_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: ADD_SUBSCRIPTION_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleGetSubscription = () => {
  return async dispatch => {
    dispatch({ type: GET_SUBSCRIPTION_INITIATED })
    try {
      const response = await useJwt.getSubscription()
      if (response && response.data) {
        dispatch({ type: GET_SUBSCRIPTION_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: GET_SUBSCRIPTION_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleUpdateAutoRenewal = data => {
  return async dispatch => {
    dispatch({ type: UPDATE_AUTO_RENEWAL_INITIATED })
    try {
      const response = await useJwt.updateAutoRenewalSetting(data)
      if (response && response.data) {
        dispatch({ type: UPDATE_AUTO_RENEWAL_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: UPDATE_AUTO_RENEWAL_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleUpgradePlan = data => {
  return async dispatch => {
    dispatch({ type: UPGRADE_PLAN_INITIATED })
    try {
      const response = await useJwt.upgradePlan(data)
      if (response && response.data) {
        dispatch({ type: UPGRADE_PLAN_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: UPGRADE_PLAN_FAILED, payload: err.response.data })
      }
    }
  }
}
