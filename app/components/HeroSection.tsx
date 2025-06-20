import React from 'react'
import { image } from '../constants/image'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
    return (
        <section
            className='w-full h-[100vh] max-h-[90vh] lg:max-h-[700px] xl:max-h-[600px] bg-[#181818] bg-cover bg-center justify-center items-center'
            style={{ backgroundImage: `url(${image.heroBg.src})` }}
        >
            <div className='w-[600px] px-5 h-full flex flex-col justify-center items-center mx-auto my-auto gap-1.5'>


                <h1 className=' font-anton text-center font-semibold text-white w-full text-7xl leading-22 '>
                    Jesus loves you,
                    yes you, even you
                </h1>
                <p className='text-[15px] font-inter font-semibold text-white'>WELCOME TO A PLACE OF INTIMACY, FELLOWSHIP, AND PURPOSE.</p>

                <Button className=' bg-[#D00002] hover:bg-[#D00002]/80 rounded-full mt-10'>
                    LIVESTREAM MEETING</Button>
            </div>
        </section>
    )
}

export default HeroSection
