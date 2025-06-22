import React from 'react'
import { image } from '../constants/image'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    return (
        <section
            className='w-full h-[90vh] min-h-[400px] max-h-[90vh] lg:max-h-[700px] xl:max-h-[600px] bg-[#181818] bg-cover bg-center flex justify-center items-center px-4 sm:px-0'
            style={{ backgroundImage: `url(${image.heroBg.src})` }}
        >
            <div className='w-full max-w-xl px-2 sm:px-5 h-full flex flex-col justify-center items-center mx-auto gap-2'>
                <h1 className='font-anton text-center font-semibold text-white w-full text-3xl sm:text-5xl md:text-7xl leading-tight md:leading-[1.1]'>
                    Jesus loves you,
                    <br className="block md:hidden" />
                    yes you, even you
                </h1>
                <p className='text-sm sm:text-base font-inter font-semibold text-white mt-2 text-center'>WELCOME TO A PLACE OF INTIMACY, FELLOWSHIP, AND PURPOSE.</p>
                <Button className='bg-[#D00002] hover:bg-[#D00002]/80 rounded-full mt-8 sm:mt-10 px-6 py-3 text-base sm:text-lg'>
                    LIVESTREAM MEETING
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
