import React from 'react'

const PaymentInfoStore = React.createContext()
const pathToggleStore = React.createContext()

export const usePaymentInfoStore = () => React.useContext(PaymentInfoStore)
export const usePathToggleStore = () => React.useContext(pathToggleStore)

export const PaymentInfoStoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState)

  return <PaymentInfoStore.Provider value={[globalState, dispatch]}>{children}</PaymentInfoStore.Provider>
}

export const PathToggleStoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState)

  return <pathToggleStore.Provider value={[globalState, dispatch]}>{children}</pathToggleStore.Provider>
}
