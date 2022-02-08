import useJwt from '../../../jwt/jwtService'
import jwt_decode from 'jwt-decode'
import {
  CUSTOMER_LOGIN_FAILED,
  CUSTOMER_LOGIN_INITIATED,
  CUSTOMER_LOGIN_SUCCESS,
  SET_LOGGED_IN_USER,
  LOGOUT_SUCCESS,
  CUSTOMER_REGISTRATION_FAILED,
  CUSTOMER_REGISTRATION_INITIATED,
  CUSTOMER_REGISTRATION_SUCCESS,
} from '../actionTypes/customer/index.js'

export const handleCustomerLogin = (data, history = null) => {
  return async dispatch => {
    dispatch({ type: CUSTOMER_LOGIN_INITIATED })
    try {
      const response = await useJwt.login(data)
      if (response && response.data) {
        const { token } = response.data
        useJwt.setToken(token)
        const decoded = jwt_decode(token)

        dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: decoded })
        dispatch({ type: SET_LOGGED_IN_USER, payload: decoded })
        window.location.href = '/dashboard-portal'
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: CUSTOMER_LOGIN_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleCustomerLoginV2 = data => {
  return async dispatch => {
    dispatch({ type: CUSTOMER_LOGIN_INITIATED })
    try {
      const response = await useJwt.login(data)
      if (response && response.data) {
        const { token } = response.data
        useJwt.setToken(token)
        const decoded = jwt_decode(token)

        dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: decoded })
        dispatch({ type: SET_LOGGED_IN_USER, payload: decoded })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: CUSTOMER_LOGIN_FAILED, payload: err.response.data })
      }
    }
  }
}

// ** CUSTOMER LOGOUT ACTION
export const handleLogout = () => {
  return async dispatch => {
    dispatch({ type: LOGOUT_SUCCESS })
    localStorage.removeItem('accessToken')
  }
}

// ** CUSTOMER REGISTRATION ACTION

export const handleCustomerRegistrationV2 = data => {
  return async dispatch => {
    dispatch({ type: CUSTOMER_REGISTRATION_INITIATED })
    try {
      const response = await useJwt.registerCustomer(data)
      if (response && response.data) {
        const { token } = response.data
        useJwt.setToken(token)
        const decoded = jwt_decode(token)

        dispatch({ type: CUSTOMER_REGISTRATION_SUCCESS, payload: decoded })

        localStorage.setItem('isRegistered', true)
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: CUSTOMER_REGISTRATION_FAILED, payload: err.response.data })
      }
    }
  }
}
