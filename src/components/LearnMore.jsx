import arrow from '../assets/arrow-right.svg'
const LearnMore = () => {
  return (
    <div className="mt-10 md:mt-[79px] flex flex-col justify-center items-center w-full px-[15px] md:px-0">
      {/* Comment */}
      <div className="w-full bg-white rounded-3xl text-center md:w-fit p-4 mb-10 md:mb-20 md:py-8 md:px-5  ">
        <p className="text-center font-normal mb-4 md:mb-6 text-base md:text-xl md:max-w-[843px] text-[#212121]">&rdquo; Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks &rdquo;</p>
        <p className="text-[#212121] text-sm  md:text-base font-medium mb-1 md:mb-2">Daniel Izeghs Oratokhai</p>
        <p className="text-[#4E4E4E] text-sm  md:text-base font-medium mb-1 md:mb-2">MP & CEO of SINC Partners Ltd</p>
      </div>
      {/* Network of builders web */}
      <div className="hidden lg:flex w-full flex-col justify-center items-center gap-[32px]">
        <h3 className="text-[56px] text-[#212121] max-w-[898px] text-center font-medium">Network of builders helping startup scale</h3>
        <div className="flex gap-8 w-full justify-center items-center">
          <div className="p-[24px] flex flex-col justify-between bg-white rounded-xl w-[528px] h-[370px]">
            <div>
              <h6 className="text-2xl font-medium mb-5">Work with Service Incubators to expedite your time-to-market</h6>
              <p className="text-[17px] text-[#4E4E4E] mb-2 font-normal ">Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building</p>
              <p className="text-[17px] text-[#4E4E4E] font-semibold ">For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer group ">
              <span className="text-base font-semibold group-hover:text-gray-500  ">Learn More</span>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="p-[24px] flex flex-col justify-between bg-white rounded-xl w-[528px] h-[370px]">
            <div>
              <h6 className="text-2xl max-w-[462px] font-medium mb-5">Access funding after your mvp is validated </h6>
              <p className="text-[17px] text-[#4E4E4E] mb-2 font-normal ">Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.</p>
              <p className="text-[17px] text-[#4E4E4E] font-semibold  ">Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer group ">
              <span className="text-base font-semibold group-hover:text-gray-500  ">Learn More</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>

      </div>
      {/* building the future mobile */}
      <div className='lg:hidden text-center'>
        <h6 className='text-[#212121] text-xl font-medium mb-3'>Building the future together, democratizing success.</h6>
        <span className=' text-[#4E4E4E] block text-sm font-normal '>SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
        <br />We are a Gasus Business, a business built on the foundation of Christian values and belief.</span>
        <button className='bg-[#303030] text-white mt-6 py-3 px-8 rounded-3xl text-base'>Read About Us</button>
      </div>
    </div>
  )
}

export default LearnMore