import { useState } from "react";
import Logo from '../assets/Logo.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links=['About','SIP','Studio','Platforms','Initiatives','More']
  return (
    <div className='sticky top-0 z-40 bg-[#F9F9F9] w-full p-4 items-center md:pt-5 md:pb-[14px] lg:px-[120px] '>
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <img src={Logo} className="w-[72px] h-[40px] md:w-[115px] md:h-[64px]" alt="logo-image" />
          <div className="hidden lg:flex gap-4 items-center">
            {
              links.map(link=> <a href="#"key={link} className="text-[#212121] hover:text-gray-400 text-[18px] font-medium ">{link}</a>)
            }
          </div>
        </div>
        <div className="flex gap-3 items-center">
          {!nav && <img src={Menu} alt="hambugger" className="lg:hidden" onClick={()=>setNav(true)} />}
          <button className="bg-[#20888F] rounded-full py-[15px] px-6 text-base font-semibold hidden lg:flex text-white">SINC With Us</button>
          <button className="bg-[#303030] rounded-full py-[15px] px-6 text-base font-semibold hidden lg:flex text-white">Apply to SIP 1.0</button>
        </div>
      </div>
      {/* Sidebar */}
      <div
          className={
            !nav
              ? "fixed right-[-100%] lg:hidden top-0 duration-500 ease-in-out h-full"
              : "fixed right-0 top-0 w-full lg:hidden duration-500 flex flex-col justify-start items-start ease-in-out h-full"
          }
        >
            <div className='w-full px-[34px] pt-10 space-y-16 flex bg-[#F9F9F9] flex-col ease-in-out  h-full'>
              <div className='self-end  ' onClick={()=>setNav(false)}>
                <img alt='burger-close' src={Close} width={24} height={24} />
              </div>
              <div className="flex flex-col gap-4 items-center">
                {
                  links.map(link=> <a href="#"key={link} className="text-[#212121] hover:text-gray-400 text-[18px] font-medium ">{link}</a>)
                }
                <button className="bg-[#20888F] rounded-full py-[15px] px-6 text-base font-semibold  text-white">SINC With Us</button>
                <button className="bg-[#303030] rounded-full py-[15px] px-6 text-base font-semibold  text-white">Apply to SIP 1.0</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar