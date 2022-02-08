import React from 'react'

import { useDispatch } from 'react-redux'
import { SHOW_PLANS } from '../../redux/actions/actionTypes/appFlow'

import NoSubscriptionImg from '../../assets/images/NoSubscription.svg'
import { NoSubscriptionStyles } from '../../css/Dashboard/subscritption/SubscritpionStyles'

function NoSubscription() {
  const classes = NoSubscriptionStyles()
  const dispatch = useDispatch()
  return (
    <div className={classes.NoSubscription__container}>
      <div className={classes.NoSubscription__img}>
        <img src={NoSubscriptionImg} alt='No Subscription' />
        <div className={classes.NoSubscription__text}>
          <h3>No subscriptions here, yet!</h3>
          <p>
            You currently have no contributions. Only paid subscriptions will appear here. Get started today with the perfect
            FriendsVPN plan for you.
          </p>
        </div>
        <button className={classes.subscribe__button} onClick={() => dispatch({ type: SHOW_PLANS })}  >
          Subscribe Now
        </button>
      </div>
    </div>
  )
}

export default NoSubscription
