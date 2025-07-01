import Image from "next/image";
import powerWealthImg from '../assets/images/power-wealth.svg'; 

export default function MessagesSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[60vh] bg-black text-white py-8 items-center justify-center px-4 md:px-0">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start md:pl-[8vw] font-s w-full md:w-auto h-full mb-8 md:mb-0">
        <span className="text-[13px] sm:text-[14px]">Listen to life-transforming</span>
        <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[64px] font-extrabold m-0 tracking-wide leading-tight md:leading-none">MESSAGES</h2>
        <span className="text-[15px] sm:text-[16px] mb-6 md:mb-8">From the altar of grace..</span>
        <button className="bg-[#E50914] border-[#FF5A5C] border-[1px] text-white rounded-full px-6 py-2.5 sm:px-8 sm:py-3 font-semibold text-[15px] sm:text-[16px] cursor-pointer shadow-md">
          OPEN MESSAGEs
        </button>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center w-full md:w-auto h-full">
        <div className="rounded-[24px] md:rounded-[32px] shadow-2xl p-4 md:p-6 flex items-center font-[satoshi] justify-center w-full max-w-xs md:max-w-none">
          <Image 
            src={powerWealthImg} 
            alt="messages" 
            width={260} 
            height={260} 
            className="rounded-[20px] md:rounded-[28px] object-cover w-full h-auto max-w-[260px] md:max-w-[360px]"
          />
        </div>
      </div>
    </section>
  );
} 