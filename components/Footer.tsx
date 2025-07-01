import Image from "next/image";
import { Facebook, Instagram, Twitter, Share } from "lucide-react";
import GlmLogo from "../app/assets/images/glm-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#3a0a0a] text-white py-8 px-4 sm:py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4">
          <Image
            src={GlmLogo}
            alt="Gospel Labour Ministry"
            width={100}
            height={50}
          />
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg font-sans mb-4 sm:mb-6 text-center">
          BIGGER, STRONGER, FASTER
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-2 sm:space-y-0 mb-4 sm:mb-6 font-inter w-full justify-center">
          <a href="/about" className="hover:underline w-full text-center sm:w-auto">
            ABOUT US
          </a>
          <a href="/meetings" className="hover:underline w-full text-center sm:w-auto">
            MEETINGS
          </a>
          <a href="/messages" className="hover:underline w-full text-center sm:w-auto">
            MESSAGES
          </a>
          <a href="/ministries" className="hover:underline w-full text-center sm:w-auto">
            MINISTRIES
          </a>
          <a href="/vision" className="hover:underline w-full text-center sm:w-auto">
            THE VISION
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6 justify-center">
          <a href="#" className="hover:text-gray-400">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <Share size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 