import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import StripeCard from './StripeCard'

import { PaymentMethodClasses } from '../../css/Dashboard/subscritption/SubscritpionStyles'
import { HIDE_PLANS } from '../../redux/actions/actionTypes/appFlow'

function PaymentMethod() {
  const classes = PaymentMethodClasses()

  const dispatch = useDispatch()

  const { selectedPlan } = useSelector(state => state.plan)
  const { isSubscribed } = useSelector(state => state.appFlow)

  const discount__usd = (selectedPlan.totalFeeExcludingDiscount * selectedPlan.discount) / 100

  useEffect(() => {
    return () => {
      if (!isSubscribed) {
        dispatch({ type: HIDE_PLANS })
      }
    }
  }, [dispatch, isSubscribed])

  return (
    <div className={classes.Payment__container}>
      <h3>Payment Method</h3>
      <div className={classes.Payment__duration}>
        <p>{selectedPlan.name} Plan</p>
        <span className={classes.amount}>
          {selectedPlan.currency}&nbsp;{parseFloat(selectedPlan.totalFeeExcludingDiscount).toFixed(2)}
        </span>
      </div>
      <div className={classes.Payment__discount}>
        <div className={classes.Payment__discount__text}>
          <p>Discount</p>
          <span className={classes.discount__save}>Save {selectedPlan.discount}%</span>
        </div>
        <span className={classes.amount__saved}>
          - {selectedPlan.currency}&nbsp;{discount__usd}
        </span>
      </div>
      <p className={classes.bill}>
        Billed {selectedPlan.currency}&nbsp;{parseFloat(selectedPlan.monthlyFee).toFixed(2)} every Month
      </p>
      <h3 className={classes.Total}>
        Total Payment: &nbsp;&nbsp;&nbsp;
        <span>
          {selectedPlan.currency} {parseFloat(selectedPlan.totalFee).toFixed(2)}
        </span>
      </h3>
      <hr />
      <div className={classes.Payment__method}>
        <h3>Pay with card</h3>
        <div className={classes.Payment__method__card}>
          <StripeCard />
        </div>
      </div>
      <hr />
      <div className={classes.subscription__text}>
        <p>
          By submitting this form, you agree to our <Link to=''>Terms of Service</Link> and <Link to=''>Privacy Policy.</Link>{' '}
          <br />
          <br />
          Your subscription will automatically renew after every {selectedPlan.name} . You will be charged USD{' '}
          {selectedPlan.totalFee} on each renewal until you cancel it by submitting a help desk request here. If you cancel,
          previous charges will not be refunded, but you may continue to use the service until the end of the term you paid for.
        </p>
      </div>
    </div>
  )
}

export default PaymentMethod
