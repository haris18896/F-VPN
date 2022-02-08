import { Stack } from '@mui/material'
import Lottie from 'react-lottie-player'
import LogoLottie from '../../assets/lottie/Logo_FriendsVPN.json'
import fallbackLoaderStyles from '../../css/components/loader/fallbackLoader'

const LogoLottieLoader = () => {
  const classes = fallbackLoaderStyles()

  return (
    <Stack className={classes.logoLottie} justifyContent='center' alignItems='center'>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Lottie loop={false} animationData={LogoLottie} play style={{ width: 250, height: 100 }} />
      </Stack>
    </Stack>
  )
}

export default LogoLottieLoader
