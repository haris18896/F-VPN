import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { handleUpdatePassword } from '../../redux/actions/profile'
import { CLEAR_PROFILE_LOGS } from '../../redux/actions/actionTypes/profile'

import { useFormik } from 'formik'

import { IconButton, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '../../assets/images/VisibilityOffLightDark.svg'

import validator from 'validator'
import FormGroup from '../../components/form-group/FormGroup'
import { ProfileStyles } from '../../css/Dashboard/Profile/ProfileStyles.js'
import { CircularProgress } from '@mui/material'

function Security() {
  const classes = ProfileStyles()

  const dispatch = useDispatch()

  const [showPassword, setShowPassword] = useState(true)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const [newPassword, setNewPassword] = useState(true)
  const handleShowNewPassword = () => setNewPassword(!newPassword)

  const [confirmPassword, setConfirmPassword] = useState(true)
  const handleShowConfirmPassword = () => setConfirmPassword(!confirmPassword)

  const { updatePasswordInProcess, passwordUpdateStatus, updatePasswordError } = useSelector(state => state.profile)

  const onSubmit = values => {
    dispatch(handleUpdatePassword(values))
  }

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    onSubmit,
    validateOnBlur: true,
    validate: values => {
      const errors = {}

      if (!values.currentPassword) {
        errors.currentPassword = 'Current password is required'
      }

      if (!values.newPassword) {
        errors.newPassword = 'Required'
      } else if (!validator.isStrongPassword(values.newPassword, { minLength: 8, minLowercase: 1, minNumbers: 1 })) {
        errors.newPassword = 'Must Contain 8 Characters, One Lowercase, One Number'
      }

      if (!values.confirmNewPassword) {
        errors.confirmNewPassword = 'Required'
      } else if (values.confirmNewPassword !== values.newPassword) {
        errors.confirmNewPassword = 'Passwords must be same!'
      }

      return errors
    },
  })

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_PROFILE_LOGS })
    }
  }, [])

  return (
    <div className={classes.Information__container}>
      <h3>Security</h3>
      <div className={classes.password__container}>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup
            onChange={formik.handleChange}
            value={formik.values.currentPassword}
            onBlur={formik.handleBlur}
            error={formik.touched.currentPassword && formik.errors.currentPassword}
            label='Current Password'
            placeholder='Current Password...'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='currentPassword'
            id='currentPassword'
            type={showPassword ? 'password' : 'text'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  className={classes.icon__BTNs}
                  onClick={handleShowPassword}
                  onMouseDown={handleShowPassword}
                >
                  {showPassword ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />

          <FormGroup
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            onBlur={formik.handleBlur}
            error={formik.touched.newPassword && formik.errors.newPassword}
            label='New Password'
            placeholder='New Password...'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='newPassword'
            id='newPassword'
            type={newPassword ? 'password' : 'text'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  className={classes.icon__BTNs}
                  aria-label='toggle password visibility'
                  onClick={handleShowNewPassword}
                  onMouseDown={handleShowNewPassword}
                >
                  {newPassword ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />

          <FormGroup
            onChange={formik.handleChange}
            value={formik.values.confirmNewPassword}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
            label='Confirm New Password'
            placeholder='Confirm New Password...'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='confirmNewPassword'
            id='confirmNewPassword'
            type={confirmPassword ? 'password' : 'text'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  className={classes.icon__BTNs}
                  aria-label='toggle password visibility'
                  onClick={handleShowConfirmPassword}
                  onMouseDown={handleShowConfirmPassword}
                >
                  {confirmPassword ? <img src={VisibilityOffIcon} alt='visibility off' /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />

          <div className={classes.button__container__save}>
            {updatePasswordInProcess ? (
              <CircularProgress />
            ) : updatePasswordError ? (
              <p style={{ color: '#ee1100' }}>{updatePasswordError.msg}</p>
            ) : passwordUpdateStatus === 'SUCCESS' ? (
              <p style={{ color: '#22bb00' }}>Password Updated Successfully</p>
            ) : null}
          </div>

          <div className={classes.button__container}>
            <button type='submit' onSubmit={formik.handleSubmit} className={classes.button__save}>
              Save Changes
            </button>
            <button className={classes.button__Cancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Security
