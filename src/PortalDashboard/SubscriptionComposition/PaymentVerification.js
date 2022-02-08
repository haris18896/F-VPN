import React from 'react'
import { Container } from '@material-ui/core'
import PaymentVerificationFailed from './PaymentVerificationFailed'
import PaymentVerificationSuccess from './PaymentVerificationSuccess'

import { useSelector } from 'react-redux'

export default function PaymentVerification() {
  const { isPaymentDone } = useSelector(state => state.appFlow)

  const [isSuccess] = React.useState(isPaymentDone ? isPaymentDone : false)
  return (
    <div className='payment-verification-div'>
      <Container maxWidth='md'>
        <div className='select-payment-methods-wrapper'>
          <p className='payment-verification-title'>
            {isSuccess ? 'Payment Verification Successfully' : 'Payment Verification Failed'}
          </p>
          <Container maxWidth='md'>
            <hr className='payment-verification-step-hr'></hr>
            <Container maxWidth='sm'>
              {!isSuccess && <PaymentVerificationFailed />}
              {isSuccess && <PaymentVerificationSuccess />}
            </Container>
          </Container>
        </div>
      </Container>
    </div>
  )
}
