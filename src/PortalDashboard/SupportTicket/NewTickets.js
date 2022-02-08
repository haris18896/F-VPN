import React, { useState, useEffect } from 'react'

import { useFormik } from 'formik'

import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'

import InputLabel from '@mui/material/InputLabel'
import FormGroup from '../../components/form-group/FormGroup'
import { CircularProgress } from '@mui/material'

import { handleGenerateTicket } from '../../redux/actions/ticket/index.js'
import { RESET_TICKET_STATE } from '../../redux/actions/actionTypes/ticket/index.js'
import { SupportTicket, customStyles } from '../../css/Dashboard/SupportTicket/SupportTicket.js'

function NewTickets() {
  const classes = SupportTicket()

  const dispatch = useDispatch()
  const { openTicketInProcess, success, msg, error } = useSelector(state => state.ticket)

  const [selectedSeverity, setSelectedSeverity] = useState('')

  const onSeverityChange = (selectedSeverity, values) => {
    values.severity = selectedSeverity.value
    setSelectedSeverity(selectedSeverity)
  }

  const SeverityOptions = [
    { value: 'low', label: 'low' },
    { value: 'medium', label: 'medium' },
    { value: 'high', label: 'high' },
  ]

  const onSubmit = async values => {
    dispatch(handleGenerateTicket(values))
  }

  const formik = useFormik({
    initialValues: {
      subject: '',
      severity: '',
      message: '',
    },

    onSubmit,
    validateOnBlur: true,

    validate: values => {
      const errors = {}

      if (!values.subject) {
        errors.subject = 'Required'
      } else if (values.subject.length < 5 || values.subject.length > 40) {
        errors.subject = 'Subject must be between 5 and 40 characters'
      }

      if (!values.severity) {
        errors.severity = 'Required'
      } else if (values.severity.length < 1) {
        errors.severity = 'Select Severity'
      }

      if (!values.message) {
        errors.message = 'Required'
      } else if (values.message.length < 10 || values.message.length > 200) {
        errors.message = 'Message must be between 10 and 200 characters'
      }

      return errors
    },
  })

  useEffect(() => {
    return () => {
      dispatch({ type: RESET_TICKET_STATE })
    }
  }, [dispatch])

  return (
    <div className={classes.New__ticket__container}>
      <h3>Create New Contact</h3>
      <div className={classes.New__ticket__form}>
        <form onSubmit={formik.handleSubmit} className={classes.New__ticket__form}>
          <FormGroup
            label='Subject'
            placeholder='Enter subject'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='subject'
            id='subject'
          />
          <InputLabel className={classes.formLabel}>Severity</InputLabel>

          <Select
            styles={customStyles}
            className={classes.Severity__Selector}
            options={SeverityOptions}
            id='severity'
            name='severity'
            placeholder='Select Severity'
            formik={formik}
            value={selectedSeverity}
            onChange={selectedOption => {
              onSeverityChange(selectedOption, formik.values)
              formik.handleChange('severity')(selectedOption.value)
            }}
          />

          <FormGroup
            label='Description'
            placeholder='Enter Description'
            inputBackground='white'
            boxShadow='3px 3px 15px -2px rgba(0,0,0,0.20)'
            formik={formik}
            name='message'
            id='message'
            size='large'
            multiline={true}
          />

          <div className={classes.submission__text}>
            {openTicketInProcess ? <CircularProgress /> : success && msg ? <p style={{ color: '#22bb00' }}>{msg}</p> : null}
            {error ? <p style={{ color: '#ee2200' }}>{error?.msg}</p> : ''}
          </div>
          <button type='submit' className={classes.ticket__submit__button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewTickets
