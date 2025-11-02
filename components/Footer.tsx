import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import GlmLogo from "@/app/assets/images/glm-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#3a0a0a] text-white py-8 px-4">
      <div className="flex flex-col items-center gap-6 sm:gap-8">
       
        <div className="mb-2">
          <Image
            src={GlmLogo}
            alt="Gospel Labour Ministry"
            width={140}
            height={56}
            className="h-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-gray-300 uppercase text-center tracking-wide">
          BIGGER. STRONGER. FASTER
        </p>

        {/* Navigation Links - Mobile: Horizontal, Desktop: More links */}
        <nav className="flex items-center justify-center gap-6 sm:gap-8 mb-2">
          <Link href="/meetings" className="text-white text-sm sm:text-base font-inter uppercase hover:text-gray-300 transition">
            MEETINGS
          </Link>
          <Link href="/messages" className="text-white text-sm sm:text-base font-inter uppercase hover:text-gray-300 transition">
            MESSAGES
          </Link>
          <Link href="/giving" className="text-white text-sm sm:text-base font-inter uppercase hover:text-gray-300 transition">
      Auxano
          </Link>
          {/* Desktop only links */}
          <Link href="/about" className="hidden sm:block text-white text-base font-inter uppercase hover:text-gray-300 transition">
            ABOUT US
          </Link>
          <Link href="/ministries" className="hidden sm:block text-white text-base font-inter uppercase hover:text-gray-300 transition">
            MINISTRIES
          </Link>
          <Link href="/vision" className="hidden sm:block text-white text-base font-inter uppercase hover:text-gray-300 transition">
            THE VISION
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <a href="#" className="text-white hover:text-gray-300 transition" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition" aria-label="Twitter/X">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter/X">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11-3.308L16.496 13.5H7.397l-6.646 7.615h-3.308l7.227-8.26-8.502-11h3.308l5.423 7.5h9.098z"/>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition" aria-label="TikTok">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="TikTok">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 