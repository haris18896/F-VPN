import React from 'react'
import './index.css'
import App from './App'
import 'aos/dist/aos.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { stripePublishableKeyLive } from './stripe/config/stripe.configurations'
import { FlowReducer, initialFLowState } from './context/SubscriptionFlowReducer'
import { InfoStoreProvider } from './context/Context'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <InfoStoreProvider initialState={initialFLowState} reducer={FlowReducer}>
        <Elements stripe={loadStripe(stripePublishableKeyLive)}>
          <Router>
            <App />
          </Router>
        </Elements>
      </InfoStoreProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
