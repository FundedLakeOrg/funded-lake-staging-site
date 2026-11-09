import React from 'react'
import Seo from '../../components/Seo'
import FundedlakeExperience from './component/FundedlakeExperience'
import ShowingTransparency from './component/ShowingTransparency'
import CommunityTransparency from './component/CommunityTransparency'
import ReminderExpo from './component/ReminderExpo'

function ForexExpo() {
  return (
    <div className='pb-24 overflow-hidden'>
      <Seo title="Forex Expo Dubai | FundedLake" description="Explore FundedLake at Forex Expo Dubai and learn more about our trading community and challenges." path="/forex-expo-dubai/" />
      <FundedlakeExperience />
      <ShowingTransparency />
      <CommunityTransparency />
      <ReminderExpo />
    </div>
  )
}

export default ForexExpo