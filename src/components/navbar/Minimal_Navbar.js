import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Stack } from '@mui/material'

import logo from '../../assets/images/Header_Logo.svg'
import navbarStyles from '../../css/components/navbar/navbar'

const MinimalNavbar = () => {
  const classes = navbarStyles()

  const navigate = useNavigate()

  return (
    <navbar className={classes.friendsVPNHeader__Minimal}>
      <Container maxWidth='xl' className={classes.navbarWrapper}>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Box mr={10}>
                <img className={classes.headerLogo} src={logo} alt='Logo' onClick={() => navigate('/')} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </navbar>
  )
}

export default MinimalNavbar

// Refactoring navbar component
