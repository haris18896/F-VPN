import React from 'react'
// import checkIcon from '../../../../assets/icons/check.svg'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function PaymentVerificationSuccess() {
  return (
    <div className='payment-verification-failed-div'>
      <p className='payment-verification-failed-title'>Congratulation, your payment has been successfully verify.</p>
      {/* <img className='cancel-icon' src={checkIcon} alt='checkIcon' /> */}

      <Link to='/DashboardPortal'>
        <Button variant='contained' color='primary'>
          Go to your dashboard
        </Button>
      </Link>
    </div>
  )
}
