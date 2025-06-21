"use client";
import React, { useState, useEffect } from 'react'
import { image } from '../constants/image'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import GlmLogo from '../assets/images/glm-logo.svg'

const NAV_LINKS = [
    { label: 'ABOUT US', href: '/' },
    { label: 'MEETINGS', href: '/' },
    { label: 'MESSAGES', href: '/' },
    { label: 'MINISTRIES', href: '/' },
    { label: 'THE VISION', href: '/' },
]

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
                    <Button
                        className={`${isScrolled
                                ? 'bg-white text-black border border-black hover:bg-gray-100'
                                : 'bg-[#D00002] text-white hover:bg-[#D00002]/80'
                            }`}
                    >
                        Giving
                    </Button>
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className={isScrolled ? 'text-black' : 'text-white'} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#181818] border-none p-6 max-w-xs w-full">
                            <div className="flex flex-col items-start gap-6">
                                <Image src={GlmLogo} alt="glm-logo" className="mb-2" />
                                <ul className="flex flex-col gap-4 w-full">
                                    {NAV_LINKS.map(link => (
                                        <li key={link.label}>
                                            <Link
                                                className="text-white font-inter font-medium text-[16px]"
                                                href={link.href}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-[#D00002] hover:bg-[#D00002]/80 text-white w-full">
                                    Giving
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
