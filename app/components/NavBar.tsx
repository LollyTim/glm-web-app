import React from 'react'
import { image } from '../constants/image'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const NAV_LINKS = [
    { label: 'ABOUT US', href: '/' },
    { label: 'MEETING', href: '/' },
    { label: 'MESSAGES', href: '/' },
    { label: 'AUXANO', href: '/' },
    { label: 'THE VISION', href: '/' },
]

const NavBar = () => {
    return (
        <nav className="w-full h-[72px] py-[12px] bg-[#181818] flex items-center ">
            <div className="max-w-6xl w-[80%] mx-auto flex items-center justify-between">
                <Image src={image.glmLogo} alt="glm-logo" />
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center justify-between w-full gap-8">
                        {NAV_LINKS.map(link => (
                            <li key={link.label}>
                                <Link className="text-white font-inter font-medium text-[14px]" href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Button className="bg-[#D00002] hover:bg-[#D00002]/80 text-white">Giving</Button>
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="text-white" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#181818] border-none p-6 max-w-xs w-full">
                            <div className="flex flex-col items-start gap-6">
                                <Image src={image.glmLogo} alt="glm-logo" className="mb-2" />
                                <ul className="flex flex-col gap-4 w-full">
                                    {NAV_LINKS.map(link => (
                                        <li key={link.label}>
                                            <Link className="text-white font-inter font-medium text-[16px]" href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-[#D00002] hover:bg-[#D00002]/80 text-white w-full">Giving</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
