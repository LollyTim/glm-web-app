import React from 'react'
import { image } from '../constants/image'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

const HeroSection = () => {
    return (
        <section
            className='w-full h-[90vh] min-h-[400px] max-h-[90vh] lg:max-h-[700px] xl:max-h-[600px] bg-[#181818] bg-cover bg-center flex justify-center items-center px-4 sm:px-0'
            style={{ backgroundImage: `url(${image.heroBg.src})` }}
        >
            <div className='w-full px-4 sm:px-5 h-full flex flex-col justify-center items-center mx-auto gap-4 md:gap-2'>
                {/* Mobile View - Three lines, uppercase */}
                <h1 className='font-anton text-center font-normal text-white text-[64px] leading-[112%] tracking-normal uppercase md:text-[88px] md:capitalize md:w-[707px] md:h-[198px] w-[337px] h-[216px] mx-auto'>
                    <span className="md:hidden block">
                        JESUS LOVES
                        <br />
                        YOU, YES YOU,
                        <br />
                        EVEN YOU
                    </span>
                    {/* Desktop View - Two lines, capitalize */}
                    <span className="hidden md:block">
                        Jesus loves you,
                        <br />
                        yes you, even you
                    </span>
                </h1>
                {/* Mobile View - Two lines */}
                <p className='text-base sm:text-base font-inter font-semibold text-white mt-4 md:mt-2 text-center leading-relaxed'>
                    <span className="md:hidden block">
                        WELCOME TO A PLACE OF INTIMACY,
                        <br />
                        FELLOWSHIP, AND PURPOSE.
                    </span>
                    {/* Desktop View - Single line */}
                    <span className="hidden md:block">
                        WELCOME TO A PLACE OF INTIMACY, FELLOWSHIP, AND PURPOSE.
                    </span>
                </p>
                <Button 
                    className='flex items-center gap-[10px] mt-8 sm:mt-10'
                    style={{
                        width: '208px',
                        height: '52px',
                        borderRadius: '2000px',
                        border: '1px solid #FFFFFF',
                        background: 'rgba(255, 255, 255, 0.09)',
                        paddingTop: '14px',
                        paddingRight: '20px',
                        paddingBottom: '14px',
                        paddingLeft: '20px',
                    }}
                >
                    <MessageCircle className="w-5 h-5 text-[#ffffff]" />
                    <span className="text-[#ffffff] font-medium uppercase text-sm">CONNECT WITH US</span>
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
