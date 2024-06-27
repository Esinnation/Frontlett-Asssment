import { useEffect, useState } from 'react'
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
import Newsletter from '../components/Newsletter'

const HomePage = () => {
  const [popUp, setPopUp] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setPopUp(true)
    },1000)
  },[])
  return (
    <div className='w-full relative bg-[#F4F4F4]'>
      {/* {popUp && <Newsletter setPopUp={setPopUp/>} */}
      <div
        className={!popUp ?
          'fixed top-0 bottom-0 lg:top-auto right-[-100%] lg:bottom-12 duration-500 ease-in-out'
          :
          'fixed top-[50%] px-4 lg:px-0 lg:top-auto duration-500 ease-in-out right-0 lg:bottom-12'
        }
      >
        {popUp && <Newsletter setPopUp={setPopUp}/>}
      </div>
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