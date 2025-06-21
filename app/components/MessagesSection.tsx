import Image from "next/image";
import powerWealthImg from '../assets/images/power-wealth.svg'; 

export default function MessagesSection() {
  return (
    <section className="flex min-h-[60vh] bg-black text-white py-8 items-center justify-center">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-start pl-[8vw] font-s h-full">
        <span className="text-[14px]">Listen to life-transforming</span>
        <h2 className="text-[64px] font-extrabold m-0 tracking-wide leading-none">MESSAGES</h2>
        <span className="text-[16px] mb-8">From the altar of grace..</span>
        <button className="bg-[#E50914] border-[#FF5A5C] border-[1px] text-white rounded-full px-8 py-3 font-semibold text-[16px] cursor-pointer shadow-md">
          OPEN MESSAGES
        </button>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center h-full">
        <div className=" rounded-[32px] shadow-2xl p-6 flex items-center font-[satoshi] justify-center">
          <Image 
            src={powerWealthImg} 
            alt="messages" 
            width={360} 
            height={360} 
            className="rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
} 