import React, { useState, useEffect } from 'react'

import Moment from 'moment'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

import NoSubscription from './NoSubscription'
import renewSvg from '../../assets/images/Renew.svg'
import CancelSubSvg from '../../assets/images/CancelSub.svg'

import { SHOW_PLANS_FOR_UPGRADE } from '../../redux/actions/actionTypes/appFlow'
import { RESET_SHOW_PLANS } from '../../redux/actions/actionTypes/subscription'
import { handleGetSubscription, handleUpdateAutoRenewal } from '../../redux/actions/subscription'

import Loader from '../../components/loader/Loader'
import { TableContainer, TableBody, TableRow, TableCell } from '@mui/material'
import { subscriptionDetailsStyles } from '../../css/Dashboard/subscritption/SubscritpionStyles'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
}

function createData(description, data) {
  return { description, data }
}

function SubscriptionDetails() {
  const classes = subscriptionDetailsStyles()

  // ** states for Modal
  const [renewModalIsOpen, renewSetIsOpen] = useState(false)
  const [cancelModalIsOpen, cancelSetIsOpen] = useState(false)

  const dispatch = useDispatch()
  const { showNewSubDetails } = useSelector(state => state.appFlow)
  const { getSubInProcess, subscriptionData, autoRenewal, updateAutoRenewalSettingsInProcess } = useSelector(
    state => state.subscription
  )

  const rows = [
    createData('Subscription Type:', `${subscriptionData?.plan ? subscriptionData.plan : 'no plans'}`),
    createData('Subscription Status:', `${subscriptionData?.status ? subscriptionData.status : 'no status'}`),
    createData(
      'Auto Renewal:',
      `${
        autoRenewal === true || autoRenewal === false
          ? autoRenewal
            ? 'ON'
            : 'OFF'
          : subscriptionData?.autoRenewal
          ? subscriptionData.autoRenewal
          : ''
      }`
    ),
    createData('Expiry Date:', `${subscriptionData?.expiryTime ? Moment(subscriptionData.expiryTime).format('DD-MM-YYYY') : ''}`),
    createData('Next Plan:', `${subscriptionData?.nextPlan ? subscriptionData.nextPlan : subscriptionData?.plan}`),
  ]

  useEffect(() => {
    dispatch(handleGetSubscription())
  }, [dispatch])

  Modal.setAppElement('#app')

  const handleAutoRenewal = () => {
    cancelSetIsOpen(false)
    renewSetIsOpen(false)

    if (autoRenewal === true || autoRenewal === false) {
      if (autoRenewal) dispatch(handleUpdateAutoRenewal({ autoRenewal: false }))
      else if (!autoRenewal) dispatch(handleUpdateAutoRenewal({ autoRenewal: true }))
    } else {
      if (subscriptionData && subscriptionData.autoRenewal === 'on') {
        dispatch(handleUpdateAutoRenewal({ autoRenewal: false }))
      } else if (subscriptionData && subscriptionData.autoRenewal === 'off') {
        dispatch(handleUpdateAutoRenewal({ autoRenewal: true }))
      }
    }
  }

  const renewOpenModal = () => {
    renewSetIsOpen(true)
  }

  const renewCloseModal = () => {
    renewSetIsOpen(false)
  }

  const cancelOpenModal = () => {
    cancelSetIsOpen(true)
  }

  const cancelCloseModal = () => {
    cancelSetIsOpen(false)
  }

  const handleShowPlansForUpgrade = () => {
    dispatch({ type: SHOW_PLANS_FOR_UPGRADE })
  }

  useEffect(() => {
    if (showNewSubDetails) {
      dispatch({ type: RESET_SHOW_PLANS })
    }
  }, [])

  return (
    <>
      <div className={classes.Subscription__Details__container}>
        <div>
          <Modal isOpen={renewModalIsOpen} onRequestClose={renewCloseModal} style={customStyles} contentLabel='myModal'>
            <div className={classes.modal__content}>
              <img src={renewSvg} alt='Icon' className={classes.Modal_image} />
              <h1 className={classes.modal_title}>Auto Renew</h1>
              <p className={classes.modal_desc}>
                Your subscription will be renewed <br />
                automatically after your current subscription <br />
                period ends.
                <br /> Are you sure you want to auto-renew your <br />
                subscription?
              </p>
              <div className={classes.renew__button}>
                <button className={classes.cancel_Renew_btn} onClick={renewCloseModal}>
                  No
                </button>
                <button className={classes.Renew_modal_btn} onClick={handleAutoRenewal}>
                  Yes
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <div>
          <Modal isOpen={cancelModalIsOpen} onRequestClose={cancelCloseModal} style={customStyles} contentLabel='myModal'>
            <div className={classes.modal__content}>
              <img src={CancelSubSvg} alt='Icon' className={classes.Modal_image} />
              <h1 className={classes.modal_title}>Cancel Subscription</h1>
              <p className={classes.modal_desc}>
                Are you sure you want to cancel? <br /> Your Subscription will expires on{' '}
                <strong>{subscriptionData?.expiryTime ? Moment(subscriptionData.expiryTime).format('DD-MM-YYYY') : ''}</strong>
                <br />
                <br />
                If you cancel your subscription,
                <br /> it will not RENEW automatically after expiry.
                <br /> However, you may still use it until it's expiry date
              </p>
              <button className={classes.modal_btn} onClick={cancelCloseModal}>
                No, I don't want to cancel
              </button>
              <button className={classes.cancel_modal_btn} onClick={handleAutoRenewal}>
                Cancel My Subscription
              </button>
            </div>
          </Modal>
        </div>

        {getSubInProcess || updateAutoRenewalSettingsInProcess ? (
          <Loader />
        ) : (
          <>
            {subscriptionData ? (
              <>
                <h2 className={classes.subscription__title}>Subscription Details</h2>

                <div className={classes.table__and__upgrade__button}>
                  <TableContainer className={classes.Table__container}>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow className={classes.table__row}>
                          <TableCell className={classes.Large__cell}>{row.description}</TableCell>
                          <TableCell align='right' className={classes.small__cell}>
                            {row.data}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </TableContainer>

                  <div className={classes.upgrade__buttons}>
                    {subscriptionData?.status === 'expired' ? (
                      <button type='button' className={classes.Renewal__button} onClick={handleShowPlansForUpgrade}>
                        Go Pro
                      </button>
                    ) : (
                      <>
                        <button
                          type='button'
                          className={classes.Renewal__button}
                          onClick={() => {
                            autoRenewal === true || autoRenewal === false
                              ? autoRenewal
                                ? cancelOpenModal()
                                : renewOpenModal()
                              : subscriptionData.autoRenewal === 'on'
                              ? cancelOpenModal()
                              : renewOpenModal()
                          }}
                        >
                          {autoRenewal === true || autoRenewal === false
                            ? autoRenewal
                              ? 'Cancel'
                              : 'Renew'
                            : subscriptionData.autoRenewal === 'on'
                            ? 'Cancel'
                            : 'Renew'}
                        </button>
                        <button type='button' className={classes.Upgrade_plan} onClick={handleShowPlansForUpgrade}>
                          Upgrade
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <NoSubscription />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default SubscriptionDetails
