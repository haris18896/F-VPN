import { Container, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import sonic from '../../assets/images/about/Sonic.svg'
import { useNavigate } from 'react-router-dom'
import getFriendsVPNStyles from '../../css/components/get-friends-vpn/getFriendsVPN'

const GetFriendsVPN = () => {
  const classes = getFriendsVPNStyles()
  const navigate = useNavigate()

  return (
    <Box className={classes.getFriendsVPN}>
      <img className={classes.sonicImageGetFriendsVPN} src={sonic} alt='Sonic' />
      <Container maxWidth='lg'>
        <Box className={classes.getFriendsVPNContainer}>
          <Grid container justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center'>
            <Grid item sm={7}>
              <Typography variant='h4' className={classes.getFriendsVPNHeading}>
                Register Now and Get access to Premium Features
              </Typography>
            </Grid>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              onClick={() => navigate('/pricing')}
              className={classes.friendsVPNBtn}
            >
              Get FriendsVPN
            </Stack>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default GetFriendsVPN
