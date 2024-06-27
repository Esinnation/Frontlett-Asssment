import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero2 from '../assets/Hero2.jpg'
import Hero1 from '../assets/Hero1.jpg'
import Hero3 from '../assets/Hero3.jpg'
const Hero = () => {
  return (
    <div>
      <Carousel
      className="w-[100%] mx-auto bg-transparent mb-20"
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      showStatus={false}
      infiniteLoop={true}
    >
      <div className="w-full flex lg:h-[500px]   justify-center items-center  ">
        <div className="w-full text-[#212121] flex flex-col lg:pl-[100px]  items-start  gap-2 text-left py-[32px] md:px-[30px]  px-[18px] lg:w-1/2">
          <h3 className="text-xl md:text-4xl font-semibold">We are big on these 3 things;</h3>
          <p className="text-base md:text-2xl font-normal">✓ Service Incubation & Ecosystem Advocacy </p>
          <p className="text-base md:text-2xl font-normal">✓ Building SAAS & Marketing Tech Platforms </p>
          <p className="text-base md:text-2xl font-normal">✓ Institutional Innovations</p>
          <button className=" text-white mt-6 bg-[#303030] rounded-full py-3 px-8">SINC with Us</button>
        </div>
        <div className="hidden lg:flex w-1/2">
          <img src={Hero2} alt="img" />
        </div>
      </div>
      {/* 2 */}
      <div className="w-full flex lg:h-[500px]   justify-center items-center  ">
        <div className="w-full text-[#212121] flex flex-col lg:pl-[100px] items-start  gap-2 text-left py-[32px] md:px-[30px]  px-[18px] lg:w-1/2">
          <h3 className="text-xl md:text-4xl font-semibold lg:max-w-[491px]  ">SINC Partners is a service incubation company</h3>
          <p className="text-base md:text-2xl font-normal lg:max-w-[491px]   ">Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%). </p>

          <button className=" text-white mt-6 bg-[#303030] rounded-full py-3 px-8">SINC with Us</button>
        </div>
        <div className="hidden lg:flex w-1/2">
          <img src={Hero1} alt="img" />
        </div>
      </div>
      {/* 3 */}
      <div className="w-full flex lg:h-[500px]   justify-center items-center  ">
        <div className="w-full text-[#212121] flex flex-col lg:pl-[100px] items-start  gap-2 text-left py-[32px] md:px-[30px]  px-[18px] lg:w-1/2">
          <h3 className="text-xl md:text-4xl font-semibold lg:max-w-[491px]  ">Come with an idea, leave with a company.</h3>
          <p className="text-base md:text-2xl font-normal lg:max-w-[491px]   ">You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup </p>

          <button className=" text-white mt-6 bg-[#303030] rounded-full py-3 px-8">SINC with Us</button>
        </div>
        <div className="hidden lg:flex w-1/2">
          <img src={Hero3} alt="img" />
        </div>
      </div>
    </Carousel>
    </div>
  )
}

export default Hero


