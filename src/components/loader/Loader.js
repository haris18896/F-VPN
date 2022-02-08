import { Stack } from '@mui/material'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/lottie/loader.json'
import fallbackLoaderStyles from '../../css/components/loader/fallbackLoader'

const Loader = () => {
  const classes = fallbackLoaderStyles()

  return (
    <Stack className={classes.loaderWrapper} justifyContent='center' alignItems='center'>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Lottie loop animationData={lottieJson} play style={{ width: 60, height: 60 }} />
      </Stack>
    </Stack>
  )
}

export default Loader
