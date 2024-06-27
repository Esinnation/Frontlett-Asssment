import video from '../assets/video.jpg'
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book2.jpg'
import arrow from '../assets/arrow-right.svg'
import book3 from '../assets/book3.jpg'
const Blogs = () => {
  return (
    <div className="md:mt-[100px] mt-10 flex px-4 justify-center  items-center   text-center flex-col">
      <h3 className="text-[#212121] text-[20px] md:text-[56px] font-medium mb-6 md:mb-20">Blogs & Resourcess</h3>
      <div className='flex flex-col  lg:flex-row lg:px-[120px] w-full mb-6 md:mb-12 justify-center items-center gap-3 md:gap-8 '>
        <div className='flex flex-col gap-12' >
          <img src={video} alt="" className='md:w-[378px] md:h-[235px]' />
          <div className='hidden md:flex justify-between'>
            <div className='flex flex-col gap-2 justify-center items-center self-start text-left'>
                <h6 className='text-[#212121] self-start font-semibold text-sm'>Top Ten Most Powerful Startup</h6>
                <span className='text-[#212121] font-normal md:max-w-[277px] text-sm'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</span>
            </div>
            <img src={book1} alt="" className='w-20 h-[74px] md:w-[85px] md:h-[79px]' />
        </div>
        </div>
        <div className='flex flex-col gap-12' >
          <img src={video} alt="" className='md:w-[378px] md:h-[235px]' />
          <div className='hidden md:flex justify-between'>
            <div className='flex flex-col gap-2 justify-center items-center self-start text-left'>
                <h6 className='text-[#212121] self-start font-semibold text-sm'>Top Ten Most Powerful Startup</h6>
                <span className='text-[#212121] font-normal md:max-w-[277px] text-sm'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</span>
            </div>
            <img src={book2} alt="" className='w-20 h-[74px] md:w-[85px] md:h-[79px]' />
        </div>
        </div>
        <div className='flex flex-col gap-12' >
          <img src={video} alt="" className='md:w-[378px] md:h-[235px]' />
          <div className='hidden md:flex justify-between'>
            <div className='flex flex-col gap-2 justify-center items-center self-start text-left'>
                <h6 className='text-[#212121] self-start font-semibold text-sm'>Top Ten Most Powerful Startup</h6>
                <span className='text-[#212121] font-normal md:max-w-[277px] text-sm'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</span>
            </div>
            <img src={book3} alt="" className='w-20 h-[74px] md:w-[85px] md:h-[79px]' />
        </div>
        </div>
       
      </div>
      <div className='flex flex-col md:hidden justify-center  items-center gap-3 md:gap-8'>
        <div className='flex justify-center md:justify-center md:gap-16'>
            <div className='flex flex-col gap-2 justify-center items-center self-start text-left'>
                <h6 className='text-[#212121] self-start font-semibold text-sm'>Top Ten Most Powerful Startup</h6>
                <span className='text-[#212121] font-normal md:max-w-[277px] text-sm'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</span>
            </div>
            <img src={book1} alt="" className='w-20 h-[74px] md:w-[85px] md:h-[79px]' />
        </div>
        <div className='flex justify-center md:justify-center md:gap-16'>
            <div className='flex flex-col gap-2 justify-center items-center self-start text-left'>
                <h6 className='text-[#212121] self-start font-semibold text-sm'>Top Ten Most Powerful Startup</h6>
                <span className='text-[#212121] font-normal md:max-w-[277px] text-sm'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</span>
            </div>
            <img src={book2} alt="" className='w-20 h-[74px] md:w-[85px] md:h-[79px]' />
        </div>
        <div className='flex justify-center md:justify-center md:gap-16'>
            <div className='flex flex-col gap-2 justify-center items-center self-start text-left'>
                <h6 className='text-[#212121] self-start font-semibold text-sm'>Top Ten Most Powerful Startup</h6>
                <span className='text-[#212121] font-normal md:max-w-[277px] text-sm'>Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</span>
            </div>
            <img src={book3} alt="" className='w-20 h-[74px] md:w-[85px] md:h-[79px]' />
        </div>
      </div>
      <div className='flex justify-center my-[56px] items-center gap-1'>
          <p className='text-base font-semibold'>See More Blogs & Resources</p>
          <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default Blogs