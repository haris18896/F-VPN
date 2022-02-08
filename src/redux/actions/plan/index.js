import useJwt from '../../../jwt/jwtService'
import { FETCH_PLANS_FAILED, FETCH_PLANS_INITIATED, FETCH_PLANS_SUCCESS } from '../actionTypes/plan'

export const handleFetchPlans = () => {
  return async dispatch => {
    dispatch({ type: FETCH_PLANS_INITIATED })
    try {
      const response = await useJwt.getPlans()
      if (response && response.data) {
        dispatch({ type: FETCH_PLANS_SUCCESS, payload: response.data })
      }
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({ type: FETCH_PLANS_FAILED, payload: err.response.data })
      }
    }
  }
}
