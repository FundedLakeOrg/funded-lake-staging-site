import React from 'react'
import ChooseUs from './components/ChooseUs'
import HowWorks from './components/HowWorks'
import PriceTab from './components/PriceTab'
import MapSection from './components/MapSection'
import StatsSection from './components/StatsSection'
import HeroSection from './components/HeroSection'
import ComparisonTable from './components/ComparisonTable'
import TradingSection from './components/TradingSection'
import CertificateMarqueeSlider from './components/CertificateMarqueeSlider'
import TraderWorld from './components/TraderWorld'
import SuccessStory from './components/SuccessStory'
import TrustPilotMarquee from './components/TrustPilotMarquee'
import Seo from "../../components/Seo";


function Home() {
  return (
    <div className='overflow-hidden'>
      <Seo title="FUNDEDLAKE | Trading Challenges and Instant Funding" description="Explore FundedLake trading challenges, two step and one step evaluations, instant funding options, account sizes and trading rules." path="/" />
      <HeroSection />
      <ChooseUs />
      <HowWorks />
      <PriceTab />
      <MapSection />
      <StatsSection />
      <ComparisonTable />
      <TradingSection />
      <SuccessStory />
      <CertificateMarqueeSlider />
      <TraderWorld />
      <TrustPilotMarquee />
      
    </div>
  )
}

export default Home