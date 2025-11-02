"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Facebook, Instagram } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import GlmLogo from '../assets/images/glm-logo.svg'

const NAV_LINKS = [
    { label: 'ABOUT US', href: '/' },
    { label: 'MEETINGS', href: '/' },
    { label: 'MESSAGES', href: '/messages' },
    { label: 'AUXANO CENTERS', href: '/' },
    { label: 'GIVING', href: '/' },
]

const MOBILE_NAV_LINKS = [
    { label: 'MEETINGS', href: '/' },
    { label: 'MESSAGES', href: '/messages' },
    { label: 'AUXANO CENTERS', href: '/' },
    { label: 'GIVING', href: '/' },
]

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full h-[72px] py-[12px] flex items-center fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#181818]'
                }`}
        >
            <div className="max-w-6xl w-[80%] mx-auto flex items-center justify-between">
                <Image src={GlmLogo} alt="glm-logo"  />
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center justify-between w-full gap-8">
                        {NAV_LINKS.map(link => (
                            <li key={link.label}>
                                <Link
                                    className={`font-inter font-medium text-[14px] ${isScrolled ? 'text-black' : 'text-white'
                                        }`}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Link href="/become-member">
                        <Button
                            className={`${isScrolled
                                    ? 'bg-white text-black border border-black hover:bg-gray-100'
                                    : 'bg-[#D00002] text-white hover:bg-[#D00002]/80'
                                }`}
                        >
                            BECOME A MEMBER
                        </Button>
                    </Link>
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className={isScrolled ? 'text-black' : 'text-white'} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent 
                            showCloseButton={false}
                            className="bg-[#181818] border-none p-0 !top-0 !left-0 !translate-x-0 !translate-y-0 !w-[320px] !max-w-[85vw] !h-screen !max-h-screen !rounded-none !shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
                        >
                            <div className="flex flex-col h-full overflow-y-auto px-6 py-6">
                                {/* Header with Logo and Close Button */}
                                <div className="flex items-start justify-between mb-8 flex-shrink-0">
                                    <Image src={GlmLogo} alt="glm-logo" width={120} height={48} className="h-auto" />
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        aria-label="Close menu" 
                                        className="text-white hover:bg-transparent p-0 h-auto"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <X className="w-6 h-6" />
                                    </Button>
                                </div>

                                {/* Navigation Links - Large, Bold, Left-aligned */}
                                <ul className="flex flex-col gap-6 mb-8 flex-shrink-0">
                                    {MOBILE_NAV_LINKS.map(link => (
                                        <li key={link.label}>
                                            <Link
                                                className="text-white font-anton text-[28px] font-normal block leading-tight"
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Call to Action Section */}
                                <div className="mb-8 flex-shrink-0">
                                    <p className="text-white text-sm font-inter mb-4 leading-relaxed">
                                        Do you want to follow the vision, join God&apos;s movement and be a part of us?
                                    </p>
                                    <Link href="#" className="block">
                                        <Button className="bg-[#D00002] hover:bg-[#D00002]/90 text-white w-full rounded-lg py-3 text-sm font-semibold">
                                            BECOME A MEMBER
                                        </Button>
                                    </Link>
                                </div>

                                {/* Contact Information */}
                                <div className="mb-8 flex-shrink-0">
                                    <p className="text-white text-sm font-inter mb-2">For enquiries:</p>
                                    <a href="tel:+2349031996431" className="text-white text-sm font-inter block mb-1">
                                        +234 903 199 6431
                                    </a>
                                    <a href="tel:+2347085430447" className="text-white text-sm font-inter block">
                                        +234 708 543 0447
                                    </a>
                                </div>

                                {/* Social Media Icons - Bottom, Evenly Spaced */}
                                <div className="flex items-center justify-between mt-auto pt-6 flex-shrink-0">
                                    <a href="#" className="text-white" aria-label="Facebook">
                                        <Facebook className="w-7 h-7" />
                                    </a>
                                    <a href="#" className="text-white" aria-label="Instagram">
                                        <Instagram className="w-7 h-7" />
                                    </a>
                                    <a href="#" className="text-white" aria-label="Twitter">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter/X">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11-3.308L16.496 13.5H7.397l-6.646 7.615h-3.308l7.227-8.26-8.502-11h3.308l5.423 7.5h9.098z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white" aria-label="TikTok">
                                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-label="TikTok">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
