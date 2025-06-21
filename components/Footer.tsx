import Image from "next/image";
import { Facebook, Instagram, Twitter, Share } from "lucide-react";
import GlmLogo from "../app/assets/images/glm-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#3a0a0a] text-white py-12">
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
        <p className="text-lg font-sans mb-6">
          BIGGER, STRONGER, FASTER
        </p>

        {/* Navigation Links */}
        <nav className="flex space-x-8 mb-6 font-inter">
          <a href="/about" className="hover:underline">
            ABOUT US
          </a>
          <a href="/meetings" className="hover:underline">
            MEETINGS
          </a>
          <a href="/messages" className="hover:underline">
            MESSAGES
          </a>
          <a href="/ministries" className="hover:underline">
            MINISTRIES
          </a>
          <a href="/vision" className="hover:underline">
            THE VISION
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
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