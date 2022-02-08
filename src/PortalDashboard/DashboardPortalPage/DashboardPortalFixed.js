import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { handleLogout } from '../../redux/actions/customer/'
import { handleFetchProfile } from '../../redux/actions/profile'

import BlueBackground from '../../assets/background/blueBackground.svg'
import BackgroundThemeImage from '../../assets/background/DashboardBackgroundThemeImage.svg'
import PersonIconSVG from '../../assets/images/userImage1.svg'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import SupportIcon from '@mui/icons-material/Support'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import { useInfoStore } from '../../context/Context'
import { Box, Button, Typography, Divider, Skeleton } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DashboardPortalFixedStyles } from '../../css/Dashboard/PortalPage/DashboardPortal'

const DashboardComposition = React.lazy(() => import('../DashboardComposition/DashboardComposition'))
const SubscriptionComposition = React.lazy(() => import('../SubscriptionComposition/SubscriptionComposition'))
const BillingHistoryComposition = React.lazy(() => import('../BillingHistoryComposition/BillingHistoryComposition'))
const SupportTicketComposition = React.lazy(() => import('../SupportTicket/SupportTicketComposition'))
const ProfileComposition = React.lazy(() => import('../ProfileComposition/ProfileComposition'))

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

function DashboardPortalFixed() {
  useEffect(() => {
    document.title = 'Dashboard | FriendsVPN'
  }, [])

  const classes = DashboardPortalFixedStyles()
  Modal.setAppElement('#app')

  const dispatch = useDispatch()
  const { inProcess } = useSelector(state => state.login)
  const { profile, fetchProfileInProcess } = useSelector(state => state.profile)

  const [toggle, setToggle] = useState(false)
  const [logOutModalIsOpen, logoutSetIsOpen] = useState(false)

  const [pathToggleState, pathToggleDispatch] = useInfoStore()

  const logoutHandler = () => {
    dispatch(handleLogout())
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  useEffect(() => {
    dispatch(handleFetchProfile())
  }, [dispatch])

  const logoutOpenModal = () => {
    logoutSetIsOpen(true)
  }

  const logoutCloseModal = () => {
    logoutSetIsOpen(false)
  }

  return (
    <Box className={classes.Portal__Wrapper}>
      <div className={classes.Dashboard__Container}>
        <Modal isOpen={logOutModalIsOpen} onRequestClose={logoutCloseModal} style={customStyles} contentLabel='myModal'>
          <div className={classes.modal__content}>
            <LogoutIcon style={{ marginBottom: '20px' }} />
            <h1 className={classes.modal_title}>Logout</h1>
            <p className={classes.modal_desc}>Are you sure you want to logout</p>
            <div className={classes.logout__button}>
              <button className={classes.cancel_logout_btn} onClick={logoutCloseModal}>
                No
              </button>
              <button className={classes.logout_modal_btn} onClick={logoutHandler}>
                Yes
              </button>
            </div>
          </div>
        </Modal>
        <div className={classes.Main__Grid__Container}>
          <div className={classes.Top__Grid}>
            <div
              className={
                !toggle
                  ? `${classes.Left__Grid} ${classes.flex__23}`
                  : `${classes.Left__Grid} ${classes.flex__10} ${classes.left_grid_height}`
              }
            >
              {inProcess || fetchProfileInProcess ? (
                ''
              ) : (
                <Button
                  disableFocusRipple={true}
                  className={
                    toggle
                      ? `${classes.Icon__Button} ${classes.Icon__Button__notToggled}`
                      : `${classes.Icon__Button} ${classes.Icon__Button__toggled}`
                  }
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? (
                    <ArrowForwardIosIcon className={classes.button__Icon} />
                  ) : (
                    <ArrowBackIosIcon className={classes.button__Icon} />
                  )}
                </Button>
              )}
              {!toggle ? (
                <>
                  {inProcess || fetchProfileInProcess ? (
                    <Skeleton animation='wave' variant='rectangular' width='100%' height={200} />
                  ) : (
                    <div className={classes.Sidebar__Profile}>
                      <LazyLoadImage
                        alt='personIcon'
                        src={PersonIconSVG}
                        className={classes.Profile__img}
                        placeholder={
                          <Skeleton variant='circular'>
                            <img src={PersonIconSVG} alt='personIcon' className={classes.Profile__img} />
                          </Skeleton>
                        }
                      />
                      <Typography className={classes.Profile__name}>{profile?.name}</Typography>
                      <Typography className={classes.Profile__email}>{profile?.email}</Typography>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {inProcess || fetchProfileInProcess ? (
                    <Skeleton animation='wave' variant='rectangular' width='100%' height={200} />
                  ) : (
                    <div className={classes.Sidebar__Profile}>
                      <LazyLoadImage
                        alt='personIcon'
                        src={PersonIconSVG}
                        className={classes.Profile__img__small}
                        placeholder={
                          <Skeleton variant='circular'>
                            <img src={PersonIconSVG} alt='personIcon' className={classes.Profile__img__small} />
                          </Skeleton>
                        }
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            <div className={classes.Right__Grid}>
              {inProcess || fetchProfileInProcess ? (
                <Skeleton animation='wave' variant='rectangular'>
                  <img src={BackgroundThemeImage} alt='relativeImage' className={classes.relative__Image__right__Grid} />
                </Skeleton>
              ) : (
                <LazyLoadImage alt='relativeImage' src={BackgroundThemeImage} className={classes.relative__Image__right__Grid} />
              )}
              <div className={classes.background__img}>
                {inProcess || fetchProfileInProcess ? (
                  <Skeleton animation='wave' variant='rectangular'>
                    <img src={BlueBackground} alt='img banner' />
                  </Skeleton>
                ) : (
                  <LazyLoadImage alt='img_banner' src={BlueBackground} />
                )}
                <div className={classes.background__img__items__text}></div>
              </div>

              <div className={classes.background__img__items__text}>
                {pathToggleState?.path === '1' ? (
                  <div>
                    <h1>Download for your devices</h1>
                    <p>Your digital life is better with FriendsVPN!</p>
                  </div>
                ) : (
                  ''
                )}
                {pathToggleState?.path === '2' ? (
                  <div>
                    <h1>My Subscriptions</h1>
                    <p>View and manage the subscriptions you've bought.</p>
                  </div>
                ) : (
                  ''
                )}
                {pathToggleState?.path === '3' ? (
                  <div>
                    <h1>Payment Details</h1>
                    <p>We support a variety of payment methods.</p>
                  </div>
                ) : (
                  ''
                )}
                {pathToggleState?.path === '4' ? (
                  <div>
                    <h1>Support Ticket</h1>
                    <p>Our support team is available 24x7 to help you achieve.</p>
                  </div>
                ) : (
                  ''
                )}
                {pathToggleState?.path === '5' ? (
                  <div>
                    <h1>Account Settings</h1>
                    <p>Adjust your account details, passwords, email, and more.</p>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>

          <div className={classes.Bottom__Grid}>
            <div
              className={
                !toggle ? `${classes.Left__Grid__2} ${classes.flex__23}` : `${classes.Left__Grid__2} ${classes.flex__10}`
              }
            >
              {!toggle ? (
                <>
                  <Divider style={{ margin: 0 }} />
                  <div className={classes.Sidebar__Menu}>
                    <Typography className={classes.Sidebar__Menu__items__title}>Menu Items</Typography>
                    <ul className={classes.Sidebar__Menu__items__list}>
                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '1'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Dashboard__portal', path: '1' })}
                        >
                          <DashboardIcon className={classes.list__item__img} />
                          <Typography className={classes.list__item__text}>Dashboard</Typography>
                          <ArrowForwardIosIcon className={classes.List__item__arrow} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '2'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'subscription', path: '2' })}
                        >
                          <SubscriptionsIcon className={classes.list__item__img} />
                          <Typography className={classes.list__item__text}>My Subscriptions</Typography>
                          <ArrowForwardIosIcon className={classes.List__item__arrow} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '3'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Billing__History', path: '3' })}
                        >
                          <CreditCardIcon className={classes.list__item__img} />
                          <Typography className={classes.list__item__text}>Billing History</Typography>
                          <ArrowForwardIosIcon className={classes.List__item__arrow} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '4'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Support__Ticket', path: '4' })}
                        >
                          <SupportIcon className={classes.list__item__img} />
                          <Typography className={classes.list__item__text}>Support Ticket</Typography>
                          <ArrowForwardIosIcon className={classes.List__item__arrow} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '5'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Profile', path: '5' })}
                        >
                          <PersonIcon className={classes.list__item__img} />
                          <Typography className={classes.list__item__text}>My Profile</Typography>
                          <ArrowForwardIosIcon className={classes.List__item__arrow} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div className={classes.Sidebar__Menu__Link} onClick={() => logoutOpenModal()}>
                          <LogoutIcon className={classes.list__item__img} />
                          <Typography className={classes.list__item__text}>Logout</Typography>
                          <ArrowForwardIosIcon className={classes.List__item__arrow} />
                        </div>
                      </li>
                    </ul>
                    <div className={classes.darkMode}>
                      <Typography className={classes.Dark__mode__button}>Enable Dark Mode</Typography>
                    </div>
                    <Divider style={{ marginTop: '20px' }} />
                  </div>

                  <div className={classes.Sidebar__bottom__items}>
                    <Typography>
                      <Link to='/about' className={classes.bottom__items}>
                        About US
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to='/privacy-policy' className={classes.bottom__items}>
                        Privacy Policy
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to='/terms-of-service' className={classes.bottom__items}>
                        Terms of Service
                      </Link>
                    </Typography>
                  </div>
                </>
              ) : (
                <>
                  <Divider style={{ margin: 0 }} />
                  <div className={classes.Sidebar__Menu}>
                    <Typography className={classes.Sidebar__Menu__items__title_Toggled}>Menu Items</Typography>
                    <ul className={classes.Sidebar__Menu__items__list}>
                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '1'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Dashboard__portal', path: '1' })}
                        >
                          <DashboardIcon className={classes.list__item__img} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '2'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'subscription', path: '2' })}
                        >
                          <SubscriptionsIcon className={classes.list__item__img} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '3'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Billing__History', path: '3' })}
                        >
                          <CreditCardIcon className={classes.list__item__img} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '4'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Support__Ticket', path: '4' })}
                        >
                          <SupportIcon className={classes.list__item__img} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div
                          className={
                            pathToggleState?.path === '5'
                              ? `${classes.Sidebar__Menu__Link} + ${classes.active}`
                              : `${classes.Sidebar__Menu__Link}`
                          }
                          onClick={() => pathToggleDispatch({ type: 'Profile', path: '5' })}
                        >
                          <PersonIcon className={classes.list__item__img} />
                        </div>
                      </li>

                      <li className={classes.Sidebar__Menu__items__list__item}>
                        <div className={classes.Sidebar__Menu__Link} onClick={() => logoutOpenModal()}>
                          <LogoutIcon className={classes.list__item__img} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            <div className={classes.Right__Grid__2}>
              <div className={classes.Dynamic__data__container}>
                {pathToggleState?.path === '1' ? <DashboardComposition /> : ''}
                {pathToggleState?.path === '2' ? <SubscriptionComposition /> : ''}
                {pathToggleState?.path === '3' ? <BillingHistoryComposition /> : ''}
                {pathToggleState?.path === '4' ? <SupportTicketComposition /> : ''}
                {pathToggleState?.path === '5' ? <ProfileComposition /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default DashboardPortalFixed
