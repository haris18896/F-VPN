import React from 'react'
// import error from '../../../../assets/images/error.png'
import Button from '@material-ui/core/Button'

export default function PaymentVerificationFailed() {
  return (
    <div className='payment-verification-failed-div'>
      <p className='payment-verification-failed-title'>
        Please try again, use a different payment method, or contact offical for assistance
      </p>
      {/* <img className='cancel-icon' src={error} alt='cancelIcon' /> */}
      <Button variant='contained' color='primary'>
        TRY AGAIN
      </Button>
    </div>
  )
}
