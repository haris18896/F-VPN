import React from 'react'
import { ProfileStyles } from '../../css/Dashboard/Profile/ProfileStyles.js'

function DeleteAccount() {
  const classes = ProfileStyles()
  return (
    <div className={classes.Delete__Container}>
      <h3>Delete Account</h3>

      <p>If you delete your account, you won’t be able to manage all your subscriptions from one place anymore.</p>

      <button>Delete Account</button>
    </div>
  )
}

export default DeleteAccount
