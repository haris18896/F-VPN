import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import { TextField, Typography } from '@mui/material'
import formGroupStyles from '../../css/components/form-group/formGroup'

export default function FormGroup({
  label,
  prop1,
  prop2,
  inputBackground,
  size,
  boxShadow,
  formik,
  name,
  id,
  stripeInput,
  stripeElement,
  placeholder,
  disable,
  multiline,
  type,
  endAdornment,
  DefaultValue,
}) {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const classes = formGroupStyles()

  const [showPassword, setShowPassword] = React.useState(false)

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
    })
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Box mb={2}>
      <InputLabel className={classes.formLabel}>{label}</InputLabel>
      <TextField
        className={classes.formInput}
        size={size ? size : ''}
        style={{
          backgroundColor: inputBackground ? inputBackground : '',
          boxShadow: boxShadow ? boxShadow : '',
        }}
        placeholder={placeholder}
        fullWidth={true}
        variant='outlined'
        InputProps={{
          inputComponent: stripeInput,
          inputProps: {
            component: stripeElement,
          },
          endAdornment: endAdornment,
        }}
        type={type}
        id={id}
        name={name || ''}
        value={formik?.values[name] || ''}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={formik?.touched[name] && Boolean(formik?.errors[name])}
        disabled={disable ? disable : ''}
        multiline={multiline ? multiline : ''}
        defaultValue={DefaultValue ? DefaultValue : ''}
      />

      {formik?.touched[name] && formik?.errors[name] ? (
        <Box mt={1}>
          <Typography variant='p' className={classes.inputError}>
            {formik?.errors[name]}
          </Typography>
        </Box>
      ) : null}
    </Box>
  )
}
