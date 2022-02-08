import React, { useEffect } from 'react'

import FirstSection from '../../components/Pricing/FirstSection'
import SecondSection from '../../components/Pricing/SecondSection'
import ThirdSection from '../../components/Pricing/ThirdSection'

function Pricing() {
  useEffect(() => {
    document.title = 'Buy VPN to Get an Ultra-Fast and Secure Internet Experience | FriendsVPN'
  }, [])

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  )
}

export default Pricing
