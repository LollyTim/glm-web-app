import Image from "next/image";
import devotionalImg from '../assets/images/daily-devotional.svg';
import testimonyImg from '../assets/images/testimonies.svg';
import AltarCall from '../assets/images/altar-call.svg';
import AuxanoImg from '../assets/images/auxano.svg';

export default function SeasonWordSection() {
  return (
    <section className="w-full flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-[#2B1818] mb-10 font-satoshi text-center">A word for the season</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {/* Daily Devotional Card */}
        <div className="bg-[#F3F3F3] rounded-2xl shadow-md flex-1 flex flex-col overflow-hidden min-w-[320px] max-w-[500px]">
          <div className="h-48 w-full relative">
            <Image
              src={devotionalImg}
              alt="Daily Devotional"
              fill
              className="object-cover rounded-t-2xl"
              priority
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-[#2B1818] font-satoshi mb-2">Daily Devotional</h3>
            <p className="text-base text-[#2B1818] mb-6">Start your day in a lovely way, fellowship with God through our 3-minutes inspiring devotionals.</p>
            <button className="border border-black rounded-full px-6 py-2 font-medium text-black hover:bg-black hover:text-white transition self-start">FOLLOW DAILY DEVOTIONAL</button>
          </div>
        </div>
        {/* Testimonies Card */}
        <div className="bg-[#F3F3F3] rounded-2xl shadow-md flex-1 flex flex-col overflow-hidden min-w-[320px] max-w-[500px]">
          <div className="h-48 w-full relative">
            <Image
              src={testimonyImg}
              alt="Testimonies"
              fill
              className="object-cover rounded-t-2xl"
              priority
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-[#2B1818] font-satoshi mb-2">Testimonies</h3>
            <p className="text-base text-[#2B1818] mb-6">God is doing wondrous things among us through his word from the mouth of his servant.</p>
            <button className="border border-black rounded-full px-6 py-2 font-medium text-black hover:bg-black hover:text-white transition self-start">OPEN TESTIMONIES</button>
          </div>
        </div>
      </div>
      {/* New Section: Call to Decision */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 w-full max-w-5xl">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h3 className="text-4xl font-extrabold text-black mb-4 font-satoshi">HAVE YOU GIVEN YOUR<br/>LIFE TO JESUS?</h3>
          <p className="text-base text-black mb-6 max-w-md">Do you know the trumpet can sound anytime from now? God loves you so much and his arms are wide open to you..</p>
          <button className="bg-[#E50914] text-white rounded-full px-8 py-3 font-semibold text-[16px] shadow-md hover:bg-[#b20710] transition">MAKE A DECISION FOR GOD</button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center">
          <div className="overflow-hidden rounded-[32px] w-full max-w-md">
            <Image
              src={AltarCall}
              alt="Altar Call"
              width={420}
              height={280}
              className="object-cover w-full h-auto grayscale"
            />
          </div>
        </div>
      </div>
      {/* AUXANO Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 w-full max-w-5xl bg-[#F3F3F3] rounded-2xl p-6">
        {/* Left Side: Image */}
        <div className="flex-1 max-w-md w-full">
          <Image
            src={AuxanoImg}
            alt="Auxano"
            width={400}
            height={400}
            className="rounded-2xl w-full h-auto"
          />
        </div>
        {/* Right Side: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg w-full">
          <p className="text-2xl md:text-2xl font-semibold text-[#2B1818] mb-6 leading-snug font-satoshi">Do you desire spiritual growth?<br/>Intimacy with God? Spiritual fervency? AUXANO is the avenue God has designed for your growth..</p>
          <button className="bg-[#E50914] text-white rounded-full px-8 py-3 font-semibold text-[16px] shadow-md hover:bg-[#b20710] transition">REGISTER FOR AUXANO</button>
        </div>
      </div>
      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 w-full max-w-5xl">
        {/* Left Side: Image Placeholder */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md">
          <div className="bg-gray-200 w-full h-96 rounded-3xl"></div>
        </div>
        {/* Right Side: Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h3 className="text-3xl font-extrabold text-black mb-4 font-satoshi uppercase leading-tight">
            Behold, I will make thee<br/>a new sharp threshing<br/>instrument having teeth:<br/>thou shalt thresh the<br/>mountains, and..
          </h3>
          <p className="text-base text-black mb-6">God has given us a vision..</p>
          <button className="border border-black rounded-full px-8 py-3 font-semibold text-black hover:bg-black hover:text-white transition">READ THE VISION</button>
        </div>
      </div>
    </section>
  );
} 