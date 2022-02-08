import React from 'react'
import { BillingHistory } from '../../css/Dashboard/BillingHistory/BillingHistory'

const BillingTable = React.lazy(() => import('./BillingTable'))

function BillingHistoryComposition() {
  const classes = BillingHistory()

  return (
    <div className={classes.Billing__History__Container}>
      <div className={classes.Billing__History__Header}>
        <h1>Billing History</h1>
      </div>
      <div className={classes.Billing__History__Table}>
        <BillingTable />
      </div>
    </div>
  )
}

export default BillingHistoryComposition
