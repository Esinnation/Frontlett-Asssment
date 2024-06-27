
const AreaOfFocus = () => {
  return (
    <div className="md:mt-[100px] mt-10 flex justify-center items-center text-center flex-col">
      <h3 className="text-[#212121] text-xl font-medium md:text-[56px] mb-4 md:mb-6">Our Area of Focus</h3>
      <p className="text-[#4E4E4E] text-sm mb-8 md:mb-16">In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
      <div className="flex flex-wrap text-white justify-center items-center">
        <AreasContainer color={'#303030'} no={'01'} text={'Business Support & Incubation'} />
        <AreasContainer color={'#F47733'} no={'02'} text={'On-Demand & As- A-Service'} />
        <AreasContainer color={'#FF78BF'} no={'03'} text={'Marketplace & Crowdsourcing'} />
        <AreasContainer color={'#20888F'} no={'04'} text={'Aggregation & Shared Economy'} />
        <AreasContainer color={'#FF88C6'} no={'05'} text={'Decentralized Economy & Digital Assets'} />
      </div>
    </div>
  )
}

export default AreaOfFocus

const AreasContainer= ({color,no,text})=>{
  return(
    <div className={`flex w-full md:w-[240px] text-left p-5 h-[100px] md:h-[160px] flex-col justify-between bg-[${color}]`}>
        <span className="text-base md:text-xl font-normal">{no}</span>
        <span className="text-base md:text-xl font-normal">{text}</span>
      </div>
  )
}