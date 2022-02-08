import { FETCH_PLANS_FAILED, FETCH_PLANS_INITIATED, FETCH_PLANS_SUCCESS, PLAN_SELECTED } from '../../actions/actionTypes/plan'

export const planReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLANS_INITIATED: {
      return {
        ...state,
        fetchPlansInProcess: true,
      }
    }
    case FETCH_PLANS_SUCCESS: {
      return {
        ...state,
        fetchPlansInProcess: false,
        plans: action.payload?.plans?.reverse(),
      }
    }
    case FETCH_PLANS_FAILED: {
      return {
        fetchPlansInProcess: false,
        error: action.payload,
      }
    }

    case PLAN_SELECTED: {
      return {
        ...state,
        selectedPlan: action.payload,
      }
    }
    default:
      return state
  }
}
