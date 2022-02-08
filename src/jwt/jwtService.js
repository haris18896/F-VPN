import axios from 'axios'
import jwtDefaultConfig from './jwtDefaultConfig'

class JwtService {
  jwtConfig = { ...jwtDefaultConfig }

  isAlreadyFetchingAccessToken = false

  subscribers = []

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }

    axios.interceptors.request.use(
      config => {
        const accessToken = this.getToken()
        if (accessToken) {
          config.headers.Authorization = `JWT ${localStorage.getItem('accessToken')}`
        }
        return config
      },
      error => Promise.reject(error)
    )

    axios.interceptors.response.use(
      response => response,
      error => {
        const { response } = error

        if (response && response.status === 406) {
          localStorage.removeItem('accessToken')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  registerCustomer(data) {
    return axios.post(this.jwtConfig.registerCustomerEndPoint, data)
  }

  login(data) {
    return axios.post(this.jwtConfig.loginCustomerEndPoint, data)
  }

  contactForm(data) {
    return axios.post(this.jwtConfig.ContactFormEndPoint, data)
  }

  getPlans() {
    return axios.get(this.jwtConfig.getPlansEndPoint)
  }

  setToken(token) {
    localStorage.setItem('accessToken', token)
  }

  getToken() {
    return localStorage.getItem('accessToken')
  }

  getClientSecret() {
    return axios.get(this.jwtConfig.getClientSecretEndPoint)
  }

  addSubscription(data) {
    return axios.post(this.jwtConfig.addSubscriptionEndPoint, data)
  }

  getSubscription() {
    return axios.get(this.jwtConfig.getSubscriptionEndPoint)
  }

  getProfile() {
    return axios.get(this.jwtConfig.getProfileEndPoint)
  }

  updateProfile(data) {
    return axios.put(this.jwtConfig.updateProfileEndPoint, data)
  }

  updatePassword(data) {
    return axios.put(this.jwtConfig.updatePasswordEndPoint, data)
  }

  addTicket(data) {
    return axios.post(this.jwtConfig.addTicketEndPoint, data)
  }

  fetchTransactions(page, limit, userId) {
    return axios.get(`${this.jwtConfig.fetchTransactionsEndPoint}?customerId=${userId}&page=${page}&limit=${limit}`)
  }

  getTickets(page, limit, status) {
    let endPoint = `${this.jwtConfig.fetchCloseTicketsByCustomerEndPoint}?status=${status}&limit=${limit}&page=${page}`
    return axios.get(endPoint)
  }

  sendResetPasswordRequest(data) {
    return axios.post(this.jwtConfig.sendResetPasswordRequestEndPoint, data)
  }

  verifyResetPasswordToken(data) {
    return axios.post(this.jwtConfig.verifyResetPasswordTokenEndPoint, data)
  }

  resetPassword(data) {
    return axios.put(this.jwtConfig.resetPasswordEndPoint, data)
  }

  updateAutoRenewalSetting(data) {
    return axios.put(this.jwtConfig.updateAutoRenewalSettingEndPoint, data)
  }

  upgradePlan({ planId, paymentMethodId }) {
    const data = { planId, paymentMethodId }
    return axios.put(this.jwtConfig.upgradePlanEndPoint, data)
  }
}

const useJwt = new JwtService({})

export default useJwt
