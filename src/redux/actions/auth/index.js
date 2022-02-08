import useJwt from '../../../jwt/jwtService'
import {
  FETCH_CLIENT_SECRET_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_INITIATED,
  RESET_PASSWORD_SUCCESS,
  SEND_RESET_PASSWORD_REQUEST_FAILED,
  SEND_RESET_PASSWORD_REQUEST_INITIATED,
  SEND_RESET_PASSWORD_REQUEST_SUCCESS,
  VERIFY_RESET_PASSWORD_REQUEST_FAILED,
  VERIFY_RESET_PASSWORD_REQUEST_INITIATED,
  VERIFY_RESET_PASSWORD_REQUEST_SUCCESS,
} from '../actionTypes/auth'

export const handleFetchClientSecret = () => {
  return async dispatch => {
    try {
      const response = await useJwt.getClientSecret()
      if (response && response.data) {
        dispatch({ type: FETCH_CLIENT_SECRET_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
      }
    }
  }
}

export const handleSendResetPasswordRequest = (data, history) => {
  return async dispatch => {
    dispatch({ type: SEND_RESET_PASSWORD_REQUEST_INITIATED })
    try {
      const response = await useJwt.sendResetPasswordRequest(data)
      if (response && response.data) {
        dispatch({ type: SEND_RESET_PASSWORD_REQUEST_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: SEND_RESET_PASSWORD_REQUEST_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleVerifyResetPassToken = data => {
  return async dispatch => {
    dispatch({ type: VERIFY_RESET_PASSWORD_REQUEST_INITIATED })
    try {
      const response = await useJwt.verifyResetPasswordToken(data)
      if (response && response.data) {
        dispatch({ type: VERIFY_RESET_PASSWORD_REQUEST_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: VERIFY_RESET_PASSWORD_REQUEST_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleResetPassword = data => {
  return async dispatch => {
    dispatch({ type: RESET_PASSWORD_INITIATED })
    try {
      const response = await useJwt.resetPassword(data)
      if (response && response.data) {
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: RESET_PASSWORD_FAILED, payload: err.response.data })
      }
    }
  }
}
