import { MAIN_SERVICE_URL } from '../consts'

const apiEndPoints = {
  typeJWT: 'JWT',
  typeBearer: 'Bearer',
  registerCustomerEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/registerCustomer`,
  loginCustomerEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/loginCustomer`,
  ContactFormEndPoint: `${MAIN_SERVICE_URL}/vpn/contact/submitContact`,
  getPlansEndPoint: `${MAIN_SERVICE_URL}/vpn/plan/getPlans`,
  getClientSecretEndPoint: `${MAIN_SERVICE_URL}/vpn/subscription/getClientSecret`,
  addSubscriptionEndPoint: `${MAIN_SERVICE_URL}/vpn/subscription/addSubscription`,
  getProfileEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/getCustomerProfile`,
  updateProfileEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/updateCustomerProfile`,
  updatePasswordEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/updateCustomerPassword`,
  addTicketEndPoint: `${MAIN_SERVICE_URL}/vpn/supportTicket/openSupportTicket`,
  getSubscriptionEndPoint: `${MAIN_SERVICE_URL}/vpn/subscription/getSubscription`,
  fetchTransactionsEndPoint: `${MAIN_SERVICE_URL}/vpn/transaction/listTransactions`,
  fetchCloseTicketsByCustomerEndPoint: `${MAIN_SERVICE_URL}/vpn/supportTicket/listSupportTickets`,
  sendResetPasswordRequestEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/sendResetPasswordRequest`,
  verifyResetPasswordTokenEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/verifyResetPasswordRequest`,
  resetPasswordEndPoint: `${MAIN_SERVICE_URL}/vpn/customer/resetPassword`,
  updateAutoRenewalSettingEndPoint: `${MAIN_SERVICE_URL}/vpn/subscription/updateAutoRenewalSetting`,
  upgradePlanEndPoint: `${MAIN_SERVICE_URL}/vpn/subscription/upgradeSubscription`,
  storageTokenKeyName: 'accessToken',
}

export default apiEndPoints
