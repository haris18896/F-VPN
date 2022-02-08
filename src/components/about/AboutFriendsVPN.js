import { Box } from '@mui/system'
import { Container, Grid, Stack, Typography } from '@mui/material'

import aboutImage from '../../assets/images/aboutMainPic.svg'
import aboutIllustration from '../../assets/images/about/about_header_BG.svg'

import aboutPageAboutFriendsVPNStyles from '../../css/pages/about/aboutFriendsVPN'

const AboutFriendsVPN = () => {
  const classes = aboutPageAboutFriendsVPNStyles()

  return (
    <Box className={classes.aboutFriendsVPN}>
      <Box className={classes.aboutIllustration}>
        <img src={aboutIllustration} alt='About Illustration' />
      </Box>
      <Container maxWidth='lg' className={classes.aboutFriendsVPNContainer}>
        <Typography variant='h3' mb={3} className={classes.aboutHeading}>
          About <span className={classes.aboutHeadingYellow}>FriendsVPN</span>
        </Typography>

        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={10} md={7} lg={5} align='center'>
            <Typography variant='p' className={classes.aboutParagraph}>
              FriendsVPN is created with the sole intent of keeping your online privacy and making the internet fair for everyone.
              We want the information to be easily accessible to everyone by eliminating geo-restrictions.
            </Typography>
          </Grid>
        </Grid>
        {/* <Fade right> */}
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          className={`${classes.aboutFriendsVPNImgWrapper} ${classes.zoomIn}`}
        >
          <img className={classes.aboutFriendsVPNImg} src={aboutImage} alt='About_Image' />
        </Stack>
        {/* </Fade> */}
      </Container>
    </Box>
  )
}

export default AboutFriendsVPN
