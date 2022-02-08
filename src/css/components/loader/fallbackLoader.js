import { makeStyles } from '@material-ui/core/styles'

const fallbackLoaderStyles = makeStyles(theme => ({
  fallBackLoaderWrapper: {
    height: '100vh',
  },
  loaderWrapper: {
    height: '50vh',
  },
  logoLottie: {
    width: '100%',
  },
  fallbackLogo: {
    marginBottom: '30px',
  },
  fallbackProgress: {
    color: `#FFC10B !important`,
  },
}))
export default fallbackLoaderStyles
