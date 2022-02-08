import { CONTACT_FORM_REQUEST, CONTACT_FORM_SUCCESS, CONTACT_FORM_FAIL } from '../../actions/actionTypes/contactForm/index'
export const contactFormReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_FORM_REQUEST:
      return { loading: true, ...state }
    case CONTACT_FORM_SUCCESS:
      return { ...state, loading: false, successResponse: true, formData: action.payload }
    case CONTACT_FORM_FAIL:
      return { ...state, loading: false, successResponse: false, error: action.payload }

    default:
      return state
  }
}
