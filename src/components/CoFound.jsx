import arrow from '../assets/arrow-right.svg'

const CoFound = () => {
  return (
    <div className="md:mt-[100px] mt-10 flex justify-center items-center  text-center flex-col">
      <h3 className="text-[#212121] text-[20px] md:text-[56px] font-medium mb-3">Co-found With Us</h3>
      <p className="text-[#4E4E4E] text-sm md:text-base font-normal mb-6 md:mb-11">We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed </p>
      <div className="flex flex-col w-full justify-center md:flex-row gap-4 mb-10  md:gap-[72px] ">
        <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
          <span className="bg-[#303030] grid place-items-center text-white  w-[60px] mb-6 h-[60px]  rounded-full text-center">1</span>
          <h6 className="text-[17px] mb-4 md:text-[20px]">We Ideate</h6>
          <p className="text-[#4E4E4E] lg:text-base text-sm font-normal">We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.</p>
        </div>
        <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
          <span className="bg-[#F47733] grid place-items-center text-white  w-[60px] mb-6 h-[60px]  rounded-full text-center">2</span>
          <h6 className="text-[17px] mb-4 md:text-[20px]">You Validate</h6>
          <p className="text-[#4E4E4E] lg:text-base text-sm font-normal">You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions </p>
        </div>
        <div className="bg-white md:p-5 rounded-xl p-4  w-full md:w-[380px] text-left ">
          <span className="bg-[#FF78BF] grid place-items-center text-white  w-[60px] mb-6 h-[60px]  rounded-full text-center">3</span>
          <h6 className="text-[17px] mb-4 md:text-[20px]">You Co-own</h6>
          <p className="text-[#4E4E4E] lg:text-base text-sm font-normal">After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
          </p>
        </div>
      </div>
        <div className='flex justify-center items-center gap-1'>
          <p className='text-base font-semibold'>Become A Service Incubator</p>
          <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default CoFound