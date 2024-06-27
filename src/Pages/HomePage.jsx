import AreaOfFocus from '../components/AreaOfFocus'
import AsFeaturedIn from '../components/AsFeaturedIn'
import Blogs from '../components/Blogs'
import CoFound from '../components/CoFound'
import ConceptInnovations from '../components/ConceptInnovations'
import EquityJobs from '../components/EquityJobs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import LearnMore from '../components/LearnMore'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import SINCNetworks from '../components/SINCNetworks'
import ServiceIncubations from '../components/ServiceIncubations'

const HomePage = () => {
  return (
    <div className='w-full bg-[#F4F4F4]'>
      <Navbar/>
      <Hero/>
      <LearnMore/>
      <AreaOfFocus/>
      <ConceptInnovations/>
      <ServiceIncubations/>
      <Portfolio/>
      <CoFound/>
      <HowItWorks/>
      <SINCNetworks/>
      <EquityJobs/>
      <Blogs/>
      <AsFeaturedIn/>
      <Footer/>
    </div>
  )
}

export default HomePage