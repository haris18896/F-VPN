import { Box } from '@mui/system'
import { Stack, Typography } from '@mui/material'
import stepStyles from '../../css/components/step/step'

const Step = ({ no, label, mb }) => {
  const classes = stepStyles()
  return (
    <Stack direction='row' justifyContent='flex-start' alignItems='center' mb={mb}>
      <Box className={classes.stepBadge}>
        <span> Step {no}</span>
      </Box>

      <Typography variant='p' className={classes.stepLabel}>
        {label}
      </Typography>
    </Stack>
  )
}

export default Step
