import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { handleUpdateProfile } from '../../redux/actions/profile'
import { CLEAR_PROFILE_LOGS } from '../../redux/actions/actionTypes/profile'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isObjEmpty } from '../../utils/utils.js'

import EditIcon from '@mui/icons-material/Edit'
import { CircularProgress } from '@mui/material'
import { IconButton, InputAdornment } from '@mui/material'

import FormGroup from '../../components/form-group/FormGroup'
import { ProfileStyles } from '../../css/Dashboard/Profile/ProfileStyles.js'

function PersonalInformation() {
  const classes = ProfileStyles()

  const [disableName, setDisableName] = useState(true)
  const [disableEmail, setDisableEmail] = useState(true)
  const [disableNumber, setDisableNumber] = useState(true)
  const handleChangeDisableName = () => setDisableName(false)
  const handleChangeDisableEmail = () => setDisableEmail(false)
  const handleChangeDisableNumber = () => setDisableNumber(false)

  const { profile, fetchProfileInProcess, updateProfileInProcess, status } = useSelector(state => state.profile)

  const dispatch = useDispatch()

  const initialErrorState = {
    nameError: '',
    emailError: '',
    phoneError: '',
  }

  const [errorState, setErrorState] = useState(initialErrorState)
  const [isActive, setIsActive] = useState(true)

  const profileEditSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Please enter a valid email address').required('Email is a required field!'),
    phone: Yup.number().notRequired('Phone is required'),
  })

  // ** USE FORMIK HOOK **
  const formik = useFormik({
    initialValues: {
      name: profile?.name,
      email: profile?.email,
      phone: profile?.phone,
    },
    validationSchema: profileEditSchema,
    onSubmit: values => {
      if (isObjEmpty(formik.errors)) {
        const { name, email, phone } = values
        const data = {
          name,
          email,
          phone,
        }
        dispatch(handleUpdateProfile(data))
        setErrorState(initialErrorState)
      }
    },
  })

  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_PROFILE_LOGS })
    }
  }, [])

  return (
    <div className={classes.Information__container}>
      <h3>Personal Information</h3>
      <div className={classes.Information__form}>
        <form onSubmit={formik.handleSubmit} className={classes.edit__form}>
          <FormGroup
            label='Name'
            // placeholder={profile?.name}
            placeholder='Name'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='name'
            id='name'
            type='text'
            disable={disableName ? true : false}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleChangeDisableName} className={classes.icon__BTNs}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            }
          />

          <FormGroup
            label='Email'
            // placeholder={profile?.email}
            placeholder='Email'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='email'
            id='email'
            type='email'
            disable={disableEmail ? true : false}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleChangeDisableEmail} className={classes.icon__BTNs}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            }
          />

          <FormGroup
            placeholder={profile?.phone ? profile?.phone : '+1 (555) 555-5555'}
            label='Phone(Optional)'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='phone'
            id='phone'
            type='tel'
            disable={disableNumber ? true : false}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleChangeDisableNumber} className={classes.icon__BTNs}>
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className={classes.button__container__save}>
            {updateProfileInProcess || fetchProfileInProcess ? <CircularProgress /> : ''}
            {status === 'SUCCESS' && isActive ? (
              <h4 className={classes.profile__update__success}>Profile updated successfully!</h4>
            ) : (
              ''
            )}
          </div>
          <button type='submit' className={classes.button__save}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default PersonalInformation
