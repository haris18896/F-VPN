import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { DynamicContainer } from '../../css/Dashboard/PortalPage/PortalPage.js'
import { HIDE_PLANS, SET_SHOW_PAYMENT_FALSE } from '../../redux/actions/actionTypes/appFlow'
import { RESET_SUBSCRIPTION_STATE, RESET_SUBSCRIPTION_UPGRADE } from '../../redux/actions/actionTypes/subscription'

const PaymentMethod = React.lazy(() => import('./PaymentMethod'))
const NewSelectedPlan = React.lazy(() => import('./NewSelectedPlan'))
const SubscriptionDetails = React.lazy(() => import('./subscriptionDetails'))

function SubscriptionComposition() {
  const classes = DynamicContainer()

  const dispatch = useDispatch()

  const { isSubscribed, showPlans, showPayment, showPlansForUpgradeSub, showNewSubDetails } = useSelector(state => state.appFlow)

  useEffect(() => {
    return () => {
      if (!isSubscribed) {
        dispatch({ type: HIDE_PLANS })
      }
      dispatch({ type: RESET_SUBSCRIPTION_STATE })
      dispatch({ type: RESET_SUBSCRIPTION_UPGRADE })
      dispatch({ type: SET_SHOW_PAYMENT_FALSE })
    }
  }, [dispatch, isSubscribed])

  return (
    <>
      <div className={`${classes.dashboard__Body} ${classes.extra__margin}`}>
        {showPayment ? (
          <PaymentMethod />
        ) : showNewSubDetails ? (
          <SubscriptionDetails />
        ) : showPlans || showPlansForUpgradeSub ? (
          <NewSelectedPlan />
        ) : (
          <SubscriptionDetails />
        )}
      </div>
    </>
  )
}
export default SubscriptionComposition
