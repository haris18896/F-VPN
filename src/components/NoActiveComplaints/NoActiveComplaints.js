import React from 'react'
import { SupportTicket } from '../../css/Dashboard/SupportTicket/SupportTicket.js'
import NoActiveComplaints from '../../assets/images/NoActiveComplaints.svg'
function ActiveComplaints() {
  const classes = SupportTicket()

  return (
    <div className={classes.No__Active__complaints__container}>
      <img src={NoActiveComplaints} alt='no active constraints' />
      <p>
        You have no active complaints.
        <br /> Any new and improved FriendsVPN Support Center.
      </p>
    </div>
  )
}

export default ActiveComplaints
