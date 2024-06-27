import CompanyLogo1 from '../assets/CompanyLogo1.svg'
import CompanyLogo2 from '../assets/CompanyLogo2.svg'
import CompanyLogo3 from '../assets/CompanyLogo3.svg'
import CompanyLogo4 from '../assets/CompanyLogo4.svg'
import arrow from '../assets/arrow-right.svg'

const EquityJobs = () => {
  return (
    <div className="md:mt-[100px] mt-10 flex px-4 justify-center  items-center   text-center flex-col">
      <h3 className="text-[#212121] text-[20px] md:text-[56px] font-medium mb-3">Equity jobs</h3>
      <p className="text-[#4E4E4E] text-sm md:text-base font-normal mb-6 md:mb-11">See companies and startups offering equity or a mix of cash and equity for very important position in their company </p>
      <div className="flex flex-col flex-wrap md:flex-row gap-[29px] justify-center items-center">
        {/* skmake */}
        <div className="bg-white w-[278px] p-5 rounded-xl flex flex-col justify-start items-start text-left">
          <img src={CompanyLogo4} className='mb-3 w-[119px] h-[64px]' alt="" />
          <p className='text-[#212121] text-sm font-normal mb-5 max-w-[224px] '>This company is a SAAS Startup that builds AI copy generator...</p>
          <h5 className='text-lg font-medium mb-5'>Chief Executive Officer</h5>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>LOCATION</h6>
              <p className='text-sm font-normal text-[#212121]'>Abuja, Nigeria</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>INDUSTRY</h6>
              <p className='text-sm font-normal text-[#212121]'>On-demand print</p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>EQUITY</h6>
              <p className='text-sm font-normal text-[#212121]'>1.2%</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>STIPENT</h6>
              <p className='text-sm font-normal text-[#212121]'>NGN 200,000/mth </p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-6'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm uppercase font-normal'>deadline</h6>
              <p className='text-sm font-normal text-[#212121]'>24th, January 2024</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>ROLE TYPE</h6>
              <p className='text-sm font-normal text-[#212121]'>Full-time</p>
            </div>

          </div>
          <button className='text-white py-[14px] px-12 bg-[#303030] text-base font-semibold rounded-full'>View Detailsl</button>
        </div>
        {/* kreeca */}
        <div className="bg-white w-[278px] p-5 rounded-xl flex flex-col justify-start items-start text-left">
          <img src={CompanyLogo1} className='mb-3 w-[119px] h-[64px]' alt="" />
          <p className='text-[#212121] text-sm font-normal mb-5 max-w-[224px] '>This company is a SAAS Startup that builds AI copy generator...</p>
          <h5 className='text-lg font-medium mb-5'>UX Strategist</h5>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>LOCATION</h6>
              <p className='text-sm font-normal text-[#212121]'>Abuja, Nigeria</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>INDUSTRY</h6>
              <p className='text-sm font-normal text-[#212121]'>E-commerce</p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>EQUITY</h6>
              <p className='text-sm font-normal text-[#212121]'>1.2%</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>STIPENT</h6>
              <p className='text-sm font-normal text-[#212121]'>NGN 200,000/mth </p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-6'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm uppercase font-normal'>deadline</h6>
              <p className='text-sm font-normal text-[#212121]'>24th, January 2024</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>ROLE TYPE</h6>
              <p className='text-sm font-normal text-[#212121]'>Full-time</p>
            </div>

          </div>
          <button className='text-white py-[14px] px-12 bg-[#303030] text-base font-semibold rounded-full'>View Detailsl</button>
        </div>
        {/* krowback */}
        <div className="bg-white w-[278px] p-5 rounded-xl flex flex-col justify-start items-start text-left">
          <img src={CompanyLogo2} className='mb-3 w-[119px] h-[64px]' alt="" />
          <p className='text-[#212121] text-sm font-normal mb-5 max-w-[224px] '>This company is a SAAS Startup that builds AI copy generator...</p>
          <h5 className='text-lg font-medium mb-5'>CTO & Head of innovations</h5>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>LOCATION</h6>
              <p className='text-sm font-normal text-[#212121]'>Abuja, Nigeria</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>INDUSTRY</h6>
              <p className='text-sm font-normal text-[#212121]'>Fintech</p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>EQUITY</h6>
              <p className='text-sm font-normal text-[#212121]'>1.2%</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>STIPENT</h6>
              <p className='text-sm font-normal text-[#212121]'>NGN 200,000/mth </p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-6'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm uppercase font-normal'>deadline</h6>
              <p className='text-sm font-normal text-[#212121]'>24th, January 2024</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>ROLE TYPE</h6>
              <p className='text-sm font-normal text-[#212121]'>Full-time</p>
            </div>

          </div>
          <button className='text-white py-[14px] px-12 bg-[#303030] text-base font-semibold rounded-full'>View Detailsl</button>
        </div>
        {/* kwetaa*/}
        <div className="bg-white w-[278px] p-5 rounded-xl flex flex-col justify-start items-start text-left">
          <img src={CompanyLogo3} className='mb-3 w-[119px] h-[64px]' alt="" />
          <p className='text-[#212121] text-sm font-normal mb-5 max-w-[224px] '>This company is a SAAS Startup that builds AI copy generator...</p>
          <h5 className='text-lg font-medium mb-5'>Backend Developerr</h5>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>LOCATION</h6>
              <p className='text-sm font-normal text-[#212121]'>Abuja, Nigeria</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>INDUSTRY</h6>
              <p className='text-sm font-normal text-[#212121]'>Transportation</p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-5'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>EQUITY</h6>
              <p className='text-sm font-normal text-[#212121]'>1.2%</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>STIPENT</h6>
              <p className='text-sm font-normal text-[#212121]'>NGN 200,000/mth </p>
            </div>

          </div>
          <div className='flex justify-between w-full items-center mb-6'>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm uppercase font-normal'>deadline</h6>
              <p className='text-sm font-normal text-[#212121]'>24th, January 2024</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[#8E8E8E] text-sm font-normal'>ROLE TYPE</h6>
              <p className='text-sm font-normal text-[#212121]'>Full-time</p>
            </div>

          </div>
          <button className='text-white py-[14px] px-12 bg-[#303030] text-base font-semibold rounded-full'>View Detailsl</button>
        </div>

      </div>
      <div className='flex justify-center my-[56px] items-center gap-1'>
            <p className='text-base font-semibold'>See More Equity Jobs</p>
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default EquityJobs