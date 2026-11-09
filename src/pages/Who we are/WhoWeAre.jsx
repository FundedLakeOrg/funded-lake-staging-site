import React from 'react'
import WhoWeSection from './components/WhoWeSection'
import Seo from "../../components/Seo";

function WhoWeAre() {
  return (
    <div className=''>
        <Seo title="About FundedLake | Who We Are" description="Learn about FundedLake, the team behind our trading challenges and our approach to supporting traders." path="/who-we-are/" />
      <WhoWeSection />
    </div>
    )
}

export default WhoWeAre