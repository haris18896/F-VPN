import useJwt from '../../../jwt/jwtService'
import { CONTACT_FORM_REQUEST, CONTACT_FORM_SUCCESS, CONTACT_FORM_FAIL } from '../actionTypes/contactForm/index'

export const submitContactForm = data => {

  return async dispatch => {
    dispatch({ type: CONTACT_FORM_REQUEST })
    try {
      const response = await useJwt.contactForm(data)

      if (response && response.data) {
        dispatch({ type: CONTACT_FORM_SUCCESS, payload: response.data })
      } else {
      }
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({ type: CONTACT_FORM_FAIL, payload: error.response.data })
      }
    }
  }
}
