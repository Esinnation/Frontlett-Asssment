import diamond from '../assets/diamond.jpg'
import Triangle from '../assets/Triangle.jpg'
import pentagon from '../assets/pentagon.jpg'
import arrow from '../assets/arrow-right.svg'
const ServiceIncubations = () => {
  return (
    <div className="mt-10 md:mt-[100px] lg:px-[120px] text-center flex flex-col justify-center items-center px-4 w-full ">
      <h2 className="text-[#212121] mb-4 md:mb-8 md:text-[56px] font-medium text-xl">Our Service Incubation Model</h2>
      <p className="text-[#4E4E4E] text-sm font-normal md:text-base text-center mb-6 md:mb-16 md:max-w-[934px]">The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
      {/* Hypoythesis */}
      <h4 className="text-[#212121] md:text-[32px] font-medium text-lg text-center lg:self-start mb-3">Hypothesis</h4>
      <p className="text-[#4E4E4E] text-[15px] md:text-[17px] mb-6 md:mb-16 font-normal text-center lg:self-start">Just a few reasons we know its time for this model within the ecosystem</p>
      <div className="flex flex-col w-full md:flex-row gap-4 md:gap-[72px] ">
        <div className="bg-white py-5 rounded-xl px-4 h-[158px] w-full md:w-[380px] text-left md:h-auto">
          <img src={Triangle} className='w-5 h-5 mb-4 md:w-10 md:h-10' alt="shape" />
          <p className="text-[#4E4E4E] md:text-base text-sm font-normal">Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support</p>
        </div>
        <div className="bg-white py-5 rounded-xl px-4 h-[158px] w-full md:w-[380px] text-left md:h-auto">
          <img src={diamond} className='w-5 h-5 mb-4 md:w-10 md:h-10' alt="shape" />
          <p className="text-[#4E4E4E] md:text-base text-sm font-normal">If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</p>
        </div>
        <div className="bg-white py-5 rounded-xl px-4 h-[158px] w-full md:w-[380px] text-left md:h-auto">
          <img src={pentagon} className='w-5 h-5 mb-4 md:w-10 md:h-10' alt="shape" />
          <p className="text-[#4E4E4E] md:text-base text-sm font-normal">Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
        </div>

      </div>
      {/* Case Study */}
      <h3 className='text-[#212121] mt-10 md:mt-11 font-medium text-[32px] text-center mb-3 lg:self-start '>Case Study</h3>
      <p className='text-[#4E4E4E] text-center lg:text-left md:text-[17px] font-normal lg:self-start mb-11 text-[15px]'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
      <div className='flex flex-col text-[#212121] mb-11 md:flex-row items-center md:self-start gap-3'>
        <button className='py-3 px-8 w-full md:w-fit bg-white rounded-full border-[0.5px] text-xl border-[#A4A4A4]'>Service Incubator Equity</button>
        <button className='py-3 px-8 w-full md:w-fit bg-white rounded-full border-[0.5px] text-xl border-[#A4A4A4]'>SEEQ Maths Equation</button>
        <button className='py-3 px-8 w-full md:w-fit bg-white rounded-full border-[0.5px] text-xl border-[#A4A4A4]'>Value of my Equity Over Time</button>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <p className='text-base font-semibold'>Become A Service Incubator</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default ServiceIncubations