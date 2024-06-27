import porfolioMobile from '../assets/porfolioMobile.svg'
import porfolioWeb from '../assets/porfolioWeb.svg'
const Portfolio = () => {
  return (
    <div className="md:mt-[100px] mt-10 flex justify-center items-center text-center flex-col">
      <h3 className="text-[#212121] text-[20px] md:text-[60px] font-medium mb-3">Our Studio Portfolio</h3>
      <p className="text-[#4E4E4E] text-sm md:text-base font-normal mb-6 md:mb-11">Our 2024 Service Incubator Portfolio Companies</p>
      <img src={porfolioMobile} alt="" className='md:hidden' />
      <img src={porfolioWeb} alt="" className='hidden md:flex' />
    </div>
  )
}

export default Portfolio