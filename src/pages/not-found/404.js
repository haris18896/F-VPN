import { Container } from '@material-ui/core'
import { Stack, Typography } from '@mui/material'
import notFoundPageStyles from '../../css/pages/not-found/404'

function NotFound() {
  const classes = notFoundPageStyles()
  return (
    <Container maxWidth='lg'>
      <Stack spacing={5} className={classes.notFoundWrapper} direction='row' justifyContent='center' alignItems='center'>
        <Typography variant='h1' align='left'>
          404
        </Typography>

        <Typography variant='h2' align='left'>
          Page Not Found
        </Typography>
      </Stack>
    </Container>
  )
}
export default NotFound
