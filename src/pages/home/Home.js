import React, { useEffect } from 'react'
import FirstSection from '../../components/Home/FirstSection'
import SecondSection from '../../components/Home/SecondSection'
import ThirdSection from '../../components/Home/ThirdSection'
import FourthSection from '../../components/Home/FourthSection'
import FifthSection from '../../components/Home/FifthSection'
import SixthSection from '../../components/Home/SixthSection'
import SevenSection from '../../components/Home/SevenSection'
import EightSection from '../../components/Home/EightSection'
import NinthSection from '../../components/Home/NinthSection'
import ElevenSection from '../../components/Home/ElevenSection'
import GetFriendsVPN from '../../components/about/GetFriendsVPN'
function Home() {
  useEffect(() => {
    document.title = 'Ultra-Fast, Secure & Trusted VPN Service | FriendsVPN'
  }, [])
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SevenSection />
      <EightSection />
      <NinthSection />
      <GetFriendsVPN />
      <ElevenSection />
    </>
  )
}

export default Home
