import { Stack } from '@mui/material'
import Lottie from 'react-lottie-player'
import { useLocation } from 'react-router-dom'
import lottieJson from '../../assets/lottie/loader.json'
import fallbackLoaderStyles from '../../css/components/loader/fallbackLoader'

const FallbackLoader = () => {
  const classes = fallbackLoaderStyles()
  const location = useLocation()

  return (
    <Stack className={classes.fallBackLoaderWrapper} justifyContent='center' alignItems='center'>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        {['/app-faqs', '/app-privacy-policy', '/app-terms-of-service'].includes(location.pathname) ? (
          <Lottie loop animationData={lottieJson} play style={{ display: 'none' }} />
        ) : (
          <Lottie loop animationData={lottieJson} play style={{ width: 60, height: 60 }} />
        )}
      </Stack>
    </Stack>
  )
}

export default FallbackLoader
