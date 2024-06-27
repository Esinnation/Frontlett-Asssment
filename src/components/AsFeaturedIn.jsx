import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import Featured1 from '../assets/Featured1.jpg'
import Featured2 from '../assets/Featured2.jpg'
import FeaturedLogo1 from '../assets/FeaturedLogo1.svg'
import FeaturedLogo3 from '../assets/FeaturedLogo3.svg'

const AsFeaturedIn = () => {
  return (
    <div className="md:mt-[100px] hidden  md:flex px-4 justify-center  items-center   text-center flex-col">
      <h5 className="text-[#212121] text-[24px] font-semibold mb-[56px]">As Featured In</h5>
      <Swiper
      className='w-full h-full  '
      modules={[Navigation]}
      spaceBetween={32}
      slidesPerView='auto'
      
    >
      <SwiperSlide className='md:w-[894px] '>
        <div className="bg-white rounded-xl w-full flex  text-left ">
          <img src={Featured1} className='w-[70%]' alt="img" />
          <div className='flex flex-col bg-white py-10 px-5 w-[30%] justify-between'>
            <div className=' '>
              <img src={FeaturedLogo3} className='mb-[6px]' alt="" />
              <p className='text-[15px] font-medium mb-1'>SINC Partners invests  over 200 million naira in 5 startups</p>
              <p className='text-[14px] font-normal'>SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</p>
            </div>
            <div>
              <p className='text-[13px] text-[#4E4E4E] mb-2'>REPORTED BY:</p>
              <p className='text-[15px] text-[#4E4E4E] '>Rema Viel</p>
            </div>
          </div>
        </div>
      </SwiperSlide>    
      <SwiperSlide className='md:w-[894px] '>
        <div className="bg-white rounded-xl w-full flex  text-left ">
          <img src={Featured1} className='w-[70%]' alt="img" />
          <div className='flex flex-col bg-white py-10 px-5 w-[30%] justify-between'>
            <div className=' '>
              <img src={FeaturedLogo1} className='mb-[6px]' alt="" />
              <p className='text-[15px] font-medium mb-1'>SINC Partners invests  over 200 million naira in 5 startups</p>
              <p className='text-[14px] font-normal'>SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</p>
            </div>
            <div>
              <p className='text-[13px] text-[#4E4E4E] mb-2'>REPORTED BY:</p>
              <p className='text-[15px] text-[#4E4E4E] '>Rema Viel</p>
            </div>
          </div>
        </div>
      </SwiperSlide>    
      <SwiperSlide className='md:w-[894px] h-[393px] '>
        <div className="bg-white rounded-xl w-full flex  text-left ">
          <img src={Featured2} className='w-[70%]' alt="img" />
          <div className='flex flex-col bg-white py-10 px-5 w-[30%] justify-between'>
            <div className=' '>
              <img src={FeaturedLogo3} className='mb-[6px]' alt="" />
              <p className='text-[15px] font-medium mb-1'>SINC Partners invests  over 200 million naira in 5 startups</p>
              <p className='text-[14px] font-normal'>SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</p>
            </div>
            <div>
              <p className='text-[13px] text-[#4E4E4E] mb-2'>REPORTED BY:</p>
              <p className='text-[15px] text-[#4E4E4E] '>Rema Viel</p>
            </div>
          </div>
        </div>
      </SwiperSlide>    
      </Swiper>
      <h4 className='text-[80px] max-w-[1007px] text-center mt-[94px] mb-10'>Let's build companies that help everyone succeed</h4>
      <div className='flex justify-center gap-3 items-center w-full'>
        <button className='bg-white py-[14px] px-12 text-[#303030] border border-[#303030] text-base font-semibold rounded-full'>SINC With Us</button>
        <button className='text-white py-[14px] px-12 bg-[#303030] text-base font-semibold rounded-full'>Apply to SIP 1.0</button>

      </div>
    </div>
  )
}

export default AsFeaturedIn