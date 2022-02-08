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
} from '../../actions/actionTypes/auth'
import {
  CLEAR_LOGIN_STATE,
  CUSTOMER_LOGIN_FAILED,
  CUSTOMER_LOGIN_INITIATED,
  CUSTOMER_LOGIN_SUCCESS,
  SET_LOGGED_IN_USER,
  LOGOUT_SUCCESS,
  CLEAR_REGISTER_STATE,
  CUSTOMER_REGISTRATION_FAILED,
  CUSTOMER_REGISTRATION_INITIATED,
  CUSTOMER_REGISTRATION_SUCCESS,
  FORM_SUBMISSION,
} from '../../actions/actionTypes/customer/index'

const initialState = {}

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_REGISTRATION_INITIATED:
      return {
        inProcess: true,
      }

    case CUSTOMER_REGISTRATION_SUCCESS:
      return {
        inProcess: false,
        status: 'SUCCESS',
        message: 'You have been successfully registered!',
        emailExist: false,
      }

    case CUSTOMER_REGISTRATION_FAILED:
      return {
        inProcess: false,
        errs: action.payload.errors,
        emailExist: true,
      }

    case FORM_SUBMISSION:
      return {
        ...state,
        formSubmitted: true,
      }

    case CLEAR_REGISTER_STATE:
      return {}
    default:
      return state
  }
}

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_LOGIN_INITIATED:
      return {
        inProcess: true,
      }

    case CUSTOMER_LOGIN_SUCCESS:
      return {
        inProcess: false,
        status: 'SUCCESS',
        message: 'Sign In Successful!',
      }

    case CUSTOMER_LOGIN_FAILED:
      return {
        inProcess: false,
        error: action.payload,
      }

    case CLEAR_LOGIN_STATE:
      return {}

    case LOGOUT_SUCCESS:
      return {}

    default:
      return state
  }
}

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        isAuthenticated: true,
        user: action.payload,
        formSubmitted: false,
      }
    case FETCH_CLIENT_SECRET_SUCCESS:
      return { ...state, clientSecret: action.payload.clientSecret }

    case SEND_RESET_PASSWORD_REQUEST_INITIATED:
      return { ...state, sendResetPassReqInProcess: true, sendResetPassReqError: [], verifyResetPassTokenError: [] }

    case SEND_RESET_PASSWORD_REQUEST_SUCCESS:
      return { ...state, sendResetPassReqInProcess: false, resetPasswordRequestSuccess: action.payload }

    case SEND_RESET_PASSWORD_REQUEST_FAILED:
      return { ...state, sendResetPassReqInProcess: false, resetPasswordRequestSuccess: false, error: action.payload }

    case VERIFY_RESET_PASSWORD_REQUEST_INITIATED:
      return { ...state, verifyResetTokenInProcess: true, verifyResetPassTokenError: [] }

    case VERIFY_RESET_PASSWORD_REQUEST_SUCCESS:
      return { ...state, verifyResetTokenInProcess: false, customer: action.payload.customer, verifyResetPassTokenError: false }

    case VERIFY_RESET_PASSWORD_REQUEST_FAILED:
      return { ...state, verifyResetTokenInProcess: false, verifyResetPassTokenError: action.payload }

    case RESET_PASSWORD_INITIATED:
      return { ...state, resetPassInProcess: true }

    case RESET_PASSWORD_SUCCESS:
      return { ...state, resetPassInProcess: false, status: 'SUCCESS' }

    case RESET_PASSWORD_FAILED:
      return { ...state, resetPassInProcess: false, error: action.payload }

    case LOGOUT_SUCCESS:
      return {}
    default:
      return state
  }
}
