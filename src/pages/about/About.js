import React, { useEffect } from 'react'
import AboutFriendsVPN from '../../components/about/AboutFriendsVPN'
import GetFriendsVPN from '../../components/about/GetFriendsVPN'
import OurMission from '../../components/about/OurMission'
import OurVision from '../../components/about/OurVision'

const About = () => {
  useEffect(() => {
    document.title = 'About Us | FriendsVPN'
  }, [])
  return (
    <>
      <AboutFriendsVPN />
      <OurMission />
      <OurVision />
      <GetFriendsVPN />
    </>
  )
}

export default About
