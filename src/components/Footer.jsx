import LogoWhite from '../assets/LogoWhite.svg'
import buisnessLogo from '../assets/buisnessLogo.svg'
import whastaapp from '../assets/whastaapp.svg'
import Social1 from '../assets/Social1.svg'
import Social2 from '../assets/Social2.svg'
import Social3 from '../assets/Social3.svg'
import Social4 from '../assets/Social4.svg'
import Social5 from '../assets/Social5.svg'
import Social6 from '../assets/Social6.svg'
import Social7 from '../assets/Social7.svg'
import Gasus from '../assets/GASUS.svg'
import nigFlag from '../assets/nigFlag.svg'
const Footer = () => {
  return (
    <div className="md:mt-[118px] bg-[#212121] py-6 md:py-11 text-white mt-10 flex justify-start   flex-col">
      <div className="px-4 lg:pl-[120px] ">
        <h4 className="text-[32px] mb-3 md:text-[60px] text-white font-semibold">Newsletter</h4>
        <p className="text-sm md:text-base font-normal mb-6 md:mb-[61px] max-w-[553px]">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
        {/* Input */}
        <div className="w-full mb-4 md:mb-8 md:w-[468px] rounded-full flex bg-transparent justify-between border border-[#676767]">
          <input type="email" name="email" placeholder="Enter your email address" id="" className="bg-transparent focus:outline-none w-full px-4" />
          <button className="bg-white text-black w-[150px] rounded-full font-bold text-center py-[15px]">Subscribe</button>
        </div>

      </div>
      <hr className="w-full border-[0.5px] border-[#E9E9E94D]" />
      <div className='px-4 lg:pl-[120px] flex flex-col lg:flex-row lg:gap-[47px] gap-4  lg:pr-[50px] '>
        <div className='flex flex-col gap-4 md:gap-8 lg:flex-row md:pt-11 md:pb-4 py-4'>
          <div className='flex flex-col gap-4'>
            <img src={LogoWhite} alt="logo" className='md:w-[108px] md:h-[60px] w-[72px] h-10' />
            <span className='text-sm font-normal lg:max-w-[220px]'>SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</span>
          </div>
          <div className='flex flex-row justify-between lg:gap-8 w-full lg:w-fit lg:justify-normal'>
            <div className='flex flex-col'>
              <h6 className='mb-4 text-lg font-medium'>Platforms</h6>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Kofoundme</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>InResidency</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Service Market</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Founders School</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Metty</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Grantty</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Boldtell</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Chekwa</a>
            </div>
            <div className='flex flex-col'>
              <h6 className='mb-4 text-lg font-medium'>Initiatives</h6>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Jabi Plains</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Local Pricing Initiative</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Scholarship Program</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>School Pricing Program</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>University STEM </a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>University InResidency </a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>1M Nigeria Products</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Founders Festival </a>
            </div>
          </div>
          <div className='flex flex-row justify-between lg:gap-8 w-full lg:w-fit lg:justify-normal'>
            <div className='flex flex-col'>
              <h6 className='mb-4 text-lg font-medium'>About Us</h6>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Who We Are</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Our People</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Concept Innovations</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Our Process</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Investors</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>CSR & Events</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Career</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Contact</a>
            </div>
            <div className='flex flex-col'>
              <h6 className='mb-4 text-lg font-medium'>More</h6>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Services</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Equity Jobs</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Co-found with us</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Offers</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Innovation News</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>FAQ </a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Blog & Resourcess</a>
              <a href="#" className='text-[#C9C9C9] mb-2 text-base '>Press</a>
            </div>
          </div>
        </div>
        <div className='border-t-[0.5px] border-[#E9E9E94D] p-4 md:pt-11 md:p-5 lg:border-t-0 lg:border-l'>
          <h6 className=' text-lg font-medium mb-3 md:mb-4'>About Us</h6>
          <p className='text-sm font-medium mb-2'>Abuja, Nigeria</p>
          <p className='text-sm font-medium mb-2'>Lagos, Nigeria </p>
          <p className='text-sm font-medium '>Philadelphia, USA</p>
          <div className='flex gap-[24px] mt-4 md:mt-10  items-end'>
            <img src={buisnessLogo} className='h-[98px] w-[177px]' alt="" />
            <img src={whastaapp} className='h-[72px] w-[84px] cursor-pointer' alt="" />
          </div>
        </div>
      </div>
      <hr className="w-full border-[0.5px] border-[#E9E9E94D]" />
      <div className='px-4 lg:px-[120px] mb-4 md:mb-[33px] flex flex-col lg:justify-between lg:flex-row lg:gap-[47px] gap-4 py-4 md:py-6  '>
        <p className='text-sm font-extralight text-center'>Guaranteed 2x on your service or cash investment, usually been the first to invest. <span className='font-medium'> Get in early and SINC your guaranty!</span></p>
        <div className='flex gap-1 flex-col lg:flex-row items-center justify-center'>
          <img src={Gasus} alt="" className='w-[120px] h-[38px]' />
          <p className='text-xs font-light lg:max-w-[217px]'>We are a business built on the foundation of Christian values and belief</p>
        </div>
      </div>
      <div className='px-4 lg:px-[120px] flex flex-col lg:justify-between lg:flex-row lg:gap-[47px] gap-4 py-4 md:py-6  '>
        <p className='text-sm font-extralight text-center'>©2023 SINC Partners Ltd. All rights reserved</p>
        <div className='flex gap-5 flex-row items-center justify-center'>
          <a href="#" className='text-base font-medium'>Privacy Policy </a>
          <a href="#" className='text-base font-medium'>Terms of Service </a>
          <a href="#" className='text-base font-medium'>Security </a>
        </div>
        <div className='flex flex-row gap-4 justify-center '>
          <img src={Social1} alt="" />
          <img src={Social2} alt="" />
          <img src={Social3} alt="" />
          <img src={Social4} alt="" />
          <img src={Social6} alt="" />
          <img src={Social7} alt="" />
          <img src={Social5} alt="" />
        </div>
      </div>
      <div className='flex gap-1 justify-center items-center'>
        <span className='text-[#C9C9C9] text-base font-semibold'>Web In Nigeria</span>
        <img src={nigFlag} alt="" />
      </div>
    </div>
  )
}

export default Footer