import React, { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import './App.css'
import { theme } from './utils/theme'
import AppRoutes from './routes/routes'
import FallbackLoader from './components/loader/FallbackLoader'
import useJwt from './jwt/jwtService'
import jwt_decode from 'jwt-decode'

import { CUSTOMER_LOGIN_SUCCESS, SET_LOGGED_IN_USER, SET_IS_ACCOUNT_TRUE } from './redux/actions/actionTypes/customer/index'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (useJwt.getToken()) {
      const token = useJwt.getToken()
      const decoded = jwt_decode(token)
      dispatch({ type: SET_LOGGED_IN_USER, payload: decoded })
      dispatch({ type: CUSTOMER_LOGIN_SUCCESS, payload: decoded })
    } else {
    }

    if (localStorage.getItem('isRegistered')) dispatch({ type: SET_IS_ACCOUNT_TRUE })
  }, [dispatch])

  return (
    <div id='app'>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<FallbackLoader />}>
          <AppRoutes />
        </Suspense>
      </ThemeProvider>
    </div>
  )
}

export default App
