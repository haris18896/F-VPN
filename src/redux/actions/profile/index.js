import useJwt from '../../../jwt/jwtService'
import {
  FETCH_PROFILE_FAILED,
  FETCH_PROFILE_INITIATED,
  FETCH_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_INITIATED,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PASSWORD_INITIATED,
  UPDATE_PASSWORD_SUCCESS,
} from '../actionTypes/profile'

export const handleFetchProfile = () => {
  return async dispatch => {
    dispatch({ type: FETCH_PROFILE_INITIATED })
    try {
      const response = await useJwt.getProfile()
      if (response && response.data) {
        dispatch({ type: FETCH_PROFILE_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: FETCH_PROFILE_FAILED, payload: err.response.data })
      }
    }
  }
}

export const handleUpdateProfile = data => {
  return async dispatch => {
    dispatch({ type: UPDATE_PROFILE_INITIATED })
    try {
      const response = await useJwt.updateProfile(data)
      if (response && response.data) {
        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: UPDATE_PROFILE_FAILED, payload: err.response.data })
      }
    }
  }
}

// ** CUSTOMER UPDATE PASSWORD ACTION
export const handleUpdatePassword = data => {
  return async dispatch => {
    dispatch({ type: UPDATE_PASSWORD_INITIATED })
    try {
      const response = await useJwt.updatePassword(data)
      if (response && response.data) {
        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: UPDATE_PASSWORD_FAILED, payload: err.response.data })
      }
    }
  }
}
