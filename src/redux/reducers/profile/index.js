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
  CLEAR_PROFILE_LOGS,
} from '../../actions/actionTypes/profile'


export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE_INITIATED: {
      return {
        ...state,
        fetchProfileInProcess: true,
      }
    }

    case FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        fetchProfileInProcess: false,
        profile: action.payload.profile,
      }
    }

    case FETCH_PROFILE_FAILED: {
      return {
        ...state,
        fetchProfileInProcess: false,
        error: action.payload,
      }
    }

    case UPDATE_PROFILE_INITIATED: {
      return {
        ...state,
        updateProfileInProcess: true,
      }
    }

    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        updateProfileInProcess: false,
        profile: action.payload.profile,
        status: 'SUCCESS',
      }
    }

    case UPDATE_PROFILE_FAILED: {
      return {
        ...state,
        updateProfileInProcess: false,
        updateError: action.payload,
      }
    }

    case UPDATE_PASSWORD_INITIATED: {
      return {
        ...state,
        updatePasswordInProcess: true,
      }
    }

    case UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        updatePasswordInProcess: false,
        passwordUpdateStatus: 'SUCCESS',
      }
    }

    case UPDATE_PASSWORD_FAILED: {
      return {
        ...state,
        updatePasswordInProcess: false,
        updatePasswordError: action.payload,
      }
    }

    case CLEAR_PROFILE_LOGS: {
      return {
        ...state,
        status: null,
        updateError: null,
        passwordUpdateStatus: null,
        updatePasswordError: null,
      }
    }

    default:
      return state
  }
}
