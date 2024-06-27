import close from '../assets/closeWhite.svg'
const Newsletter = ({setPopUp}) => {
  return (
    <div className="relative bg-black p-8 ">
      <img src={close} className='absolute top-4 right-4 cursor-pointer' onClick={()=>setPopUp(false)} alt="" />
      <h4 className="text-white text-2xl md:text-[56px] font-bold mb-6">Newsletter</h4>
      <p className="text-white text-sm md:max-w-[427px] mb-[61px]">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
      {/* Input */}
      <div className="w-full mb-4 md:mb-8 md:w-[468px] rounded-full flex bg-transparent justify-between border border-[#676767]">
        <input type="email" name="email" placeholder="Enter your email address" id="" className="bg-transparent focus:outline-none w-full px-4" />
        <button className="bg-white text-black w-[150px] rounded-full font-bold text-center py-[15px]">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter