import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import Frame1 from '../assets/Frame1.svg'
import arrow from '../assets/arrow-right.svg'
import Frame2 from '../assets/Frame2.svg'
import Frame3 from '../assets/Frame3.svg'
import Frame4 from '../assets/Frame4.svg'
import Frame5 from '../assets/Frame5.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
const HowItWorks = () => {
  const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };
  return (
    <div className="md:mt-[100px] mt-10 flex justify-center  items-center   text-center flex-col">
      <h3 className="text-[#212121] text-[20px] md:text-[56px] font-medium mb-3">How It Works</h3>
      <p className="text-[#4E4E4E] text-sm md:text-base font-normal mb-6 md:mb-11">Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each. </p>
      <div className='md:pl-[120px]  w-full'>
        <Swiper
        ref={swiperRef}
        className='w-full h-full  '
        modules={[Navigation]}
        spaceBetween={32}
        slidesPerView='auto'
        
      >
        <SwiperSlide className='md:w-[380px]  flex w-full'>
          <div className="bg-white md:p-5  rounded-xl p-4  w-full md:w-[380px] text-left ">
            <img src={Frame1} className='w-10 mb-6 h-10 md:w-[60px] md:h-[60px]' alt="svg" />
            <h6 className="text-[17px] mb-4 md:txt-[20px]">Application and Selection</h6>
            <p className="text-[#4E4E4E] md:text-base text-sm font-normal ">Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
              <br /><br />Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:w-[380px] w-full'>
          <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
            <img src={Frame2} className='w-10 mb-6 h-10 md:w-[60px] md:h-[60px]' alt="svg" />
            <h6 className="text-[17px] mb-4 md:txt-[20px]">Source Ideas & Ideate</h6>
            <p className="text-[#4E4E4E] md:text-base text-sm font-normal ">We come up with our own ideas internally and/or take in exceptional entrepreneurs with ideas within or outside our thesis area into our Service incubation Program (SIP) yearly, then run them through our idea-focus-test (IFT) for fit.
            <br /><br />We quickly build a 5-10 functionality nano MVP or a lead page built for idea visualization</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:w-[380px] w-full'>
          <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
            <img src={Frame3} className='w-10 mb-6 h-10 md:w-[60px] md:h-[60px]' alt="svg" />
            <h6 className="text-[17px] mb-4 md:txt-[20px]">Negotiation and Agreement</h6>
            <p className="text-[#4E4E4E] md:text-base text-sm font-normal ">Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.
            <br />Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:w-[380px] w-full'>
          <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
            <img src={Frame4} className='w-10 mb-6 h-10 md:w-[60px] md:h-[60px]' alt="svg" />
            <h6 className="text-[17px] mb-4 md:txt-[20px]">Onboarding and Integration</h6>
            <p className="text-[#4E4E4E] md:text-base text-sm font-normal ">Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.
            <br /><br />Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='md:w-[380px] w-full'>
          <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
            <img src={Frame5} className='w-10 mb-6 h-10 md:w-[60px] md:h-[60px]' alt="svg" />
            <h6 className="text-[17px] mb-4 md:txt-[20px]">Alignment Meeting and Proposal Submission</h6>
            <p className="text-[#4E4E4E] md:text-base text-sm font-normal ">If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
            Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.</p>
          </div>
        </SwiperSlide>
        
        
        
        </Swiper>
        <div className='flex justify-center my-[56px] items-center gap-1'>
            <p className='text-base font-semibold'>Become A Service Incubator</p>
            <img src={arrow} alt="" />
        </div>
        <div className='flex gap-[24px]  md:gap-[75px] items-center justify-center '>
          <img src={right} onClick={handlePrev} className='w-12 h-12 cursor-pointer md:w-[66px] md:h-[66px]' alt="" />
          <img src={left} onClick={handleNext} className='w-12 h-12 md:w-[66px] cursor-pointer md:h-[66px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks