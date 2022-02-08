import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from 'react-modal'
import { handleGetSubscription, handleUpgradePlan } from '../../redux/actions/subscription'

import { handleFetchPlans } from '../../redux/actions/plan'
import { PLAN_SELECTED } from '../../redux/actions/actionTypes/plan'
import { GO_TO_PAYMENT } from '../../redux/actions/actionTypes/appFlow'

import CheckIcon from '@mui/icons-material/Check'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

import Loader from '../../components/loader/Loader'
import upgradePlanSvg from '../../assets/images/UpgradePlan.svg'
import { NewSelectedPlanStyles } from '../../css/Dashboard/subscritption/SubscritpionStyles'

// import { RESET_SUBSCRIPTION_UPGRADE } from '../../redux/actions/actionTypes/subscription'

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

function NewSelectedPlan() {
  const classes = NewSelectedPlanStyles()

  const [upgradeModalIsOpen, upgradeSetIsOpen] = useState(false)

  const { getSubInProcess, subscriptionData } = useSelector(state => state.subscription)
  const { fetchPlansInProcess, plans, selectedPlan } = useSelector(state => state.plan)
  const { upgradePlanInProcess, upgradePlanStatus, upgradePlanSuccessMessage } = useSelector(state => state.subscription)

  const dispatch = useDispatch()

  // auto selected
  useEffect(() => {
    if (plans?.length) {
      dispatch({ type: PLAN_SELECTED, payload: plans.find(plan => plan._id === '1-year') })
    }
  }, [plans])

  const handleClick = async plan => {
    dispatch({ type: PLAN_SELECTED, payload: plan })
    localStorage.setItem('selectedPlan', JSON.stringify(plan))
  }

  useEffect(() => {
    dispatch(handleFetchPlans())
  }, [dispatch])

  const upgradeCloseModal = () => {
    upgradeSetIsOpen(false)
  }

  const upgradeOpenModal = () => {
    upgradeSetIsOpen(true)
  }

  const handlePlanUpgradePlan = () => {
    if (!selectedPlan) {
      alert('Please select a plan!')
    } else if (subscriptionData?.status === 'enabled' || subscriptionData?.status === 'disabled') {
      dispatch(handleUpgradePlan({ planId: selectedPlan?._id }))

      upgradeCloseModal()
    }
  }

  useEffect(() => {
    if (upgradePlanStatus === 'SUCCESS') {
      dispatch(handleGetSubscription())
    }
  }, [upgradePlanStatus, dispatch])

  return (
    <>
      <div>
        <Modal isOpen={upgradeModalIsOpen} onRequestClose={upgradeCloseModal} style={customStyles} contentLabel='myModal'>
          <div className={classes.modal__content}>
            <img src={upgradePlanSvg} alt='Icon' className={classes.Modal_image} />
            <h1 className={classes.modal_title}>Plan Upgraded</h1>
            <p className={classes.modal_desc}>
              {upgradePlanStatus === 'SUCCESS' && upgradePlanSuccessMessage ? <span>{upgradePlanSuccessMessage}</span> : ''}
              Your upgraded plan will resume after
              <br /> your previous plan is completed!
            </p>
            <button className={classes.modal_btn} onClick={handlePlanUpgradePlan}>
              OK
            </button>
          </div>
        </Modal>
      </div>
      <div className={classes.Selected__new__plan__contaIner}>
        {subscriptionData?.status === 'enabled' || subscriptionData?.status === 'disabled' ? (
          <h2 className={classes.plan__title}>Upgrade Your Plan</h2>
        ) : (
          <h2 className={classes.plan__title}>Choose Your Plan</h2>
        )}

        {fetchPlansInProcess || getSubInProcess || upgradePlanInProcess ? (
          <Loader />
        ) : (
          <div className={classes.plans__div}>
            <div className={classes.left__plans}>
              <>
                {plans &&
                  plans.map(plan => (
                    <div
                      className={
                        selectedPlan && plan._id === selectedPlan._id
                          ? `${classes.plans__wrapper} ${classes.plans__wrapper_selected}`
                          : `${classes.plans__wrapper}`
                      }
                      onClick={handleClick.bind(this, plan)}
                    >
                      <div className={classes.plan__data}>
                        {selectedPlan && plan._id === selectedPlan._id ? (
                          <CheckIcon className={classes.radio__check} />
                        ) : (
                          <RadioButtonUncheckedIcon className={classes.radio_click} />
                        )}
                        <label
                          for='radio-1'
                          className={
                            selectedPlan && plan._id === selectedPlan._id
                              ? `${classes.radio_custom_label_month} ${classes.radio_custom_label_month_selected}`
                              : `${classes.radio_custom_label_month}`
                          }
                        >
                          {plan.name}
                        </label>
                        <label
                          className={
                            selectedPlan && plan._id === selectedPlan._id
                              ? `${classes.radio_custom_label_saving} ${classes.radio_custom_label_saving_selected}`
                              : `${classes.radio_custom_label_saving}`
                          }
                        >
                          <span>Save {plan.discount}%</span>&nbsp;
                          <strong>${parseFloat(plan.monthlyFee).toFixed(2)}</strong> /month
                        </label>
                      </div>
                    </div>
                  ))}
              </>
            </div>

            <div className={classes.right__details}>
              <div className={classes.right__details__top}>
                <p>Details</p>
              </div>
              <div className={classes.right__details__bottom}>
                <ul>
                  <li>
                    Access 500+ servers <span>✓</span>
                  </li>
                  <li>
                    Top-Notch Security <span>✓</span>
                  </li>
                  <li>
                    Multiple VPN Protocols <span>✓</span>
                  </li>
                  <li>
                    5 Concurrent Connections <span>✓</span>
                  </li>
                  <li>
                    No Activity Logs <span>✓</span>
                  </li>
                  <li>
                    24/7 Customer Support <span>✓</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {subscriptionData?.status === 'enabled' || subscriptionData?.status === 'disabled' ? (
        <button className={classes.select__plan__btn} onClick={upgradeOpenModal}>
          Upgrade
        </button>
      ) : (
        <button className={classes.select__plan__btn} onClick={() => dispatch({ type: GO_TO_PAYMENT })}>
          Next
        </button>
      )}
    </>
  )
}

export default NewSelectedPlan
