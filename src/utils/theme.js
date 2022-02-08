import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#24275D',
    },
    secondary: {
      main: '#FFC10B',
    },
    error: {
      main: '#E76D73',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"'].join(','),
  },
})
export { theme }
