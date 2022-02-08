import { useState } from 'react'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import specialOfferStyles from '../../css/components/special-offer/specialOffer'

const SpecialOffer = () => {
  const classes = specialOfferStyles()
  const [open, setOpen] = useState(true)

  return open ? (
    <Box className={classes.specialOffer}>
      <Typography variant='p' component='p' className={classes.specialOfferText} align='center'>
        Special Offer: Purchase Plan and Get Up to 35% discount
      </Typography>

      <CloseIcon className={classes.specialOfferCloseIcon} onClick={() => setOpen(false)} />
    </Box>
  ) : (
    ''
  )
}

export default SpecialOffer
