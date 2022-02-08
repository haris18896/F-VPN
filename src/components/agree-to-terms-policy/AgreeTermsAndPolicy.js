import * as React from 'react'

import { useSelector } from 'react-redux'

import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import { Checkbox, Typography } from '@material-ui/core'
import agreeTermsAndPolicyStyles from '../../css/components/agree-to-terms-policy/agreeTermsAndPolicy'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const AgreeTermsAndPolicy = () => {
  const classes = agreeTermsAndPolicyStyles()
  const { selectedPlan } = useSelector(state => state.plan)

  return (
    <Box className={classes.agreeTermsAndConditionsWrapper}>
      <Stack direction='row' justifyContent='flex-start' alignItems='center' mb={1}>
        <Checkbox color='primary' {...label} />
        <Typography variant='p' className={classes.creditCardFormAgreeText}>
          You agree to our <span className={classes.creditCardFormAgreeTextLink}>Terms of Service</span> and
          <span className={classes.creditCardFormAgreeTextLink}> Privacy Policy</span>.
        </Typography>
      </Stack>

      <Box className={classes.creditCardFormAgreeTextDescriptionWrapper}>
        <Typography variant='p' className={classes.creditCardFormAgreeTextDescription}>
          Your subscription will automatically renew every <strong>{selectedPlan?.name}</strong>. You will be charged&nbsp;
          <strong>USD {selectedPlan?.totalFee}</strong> on each renewal until you cancel it through customer panel or app. If you
          cancel, previous charges will not be refunded, but you may continue to use the service until the end of the term you
          paid for.
        </Typography>
      </Box>
    </Box>
  )
}

export default AgreeTermsAndPolicy
