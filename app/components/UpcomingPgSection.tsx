import React from 'react'
import { image } from '../constants/image'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'

const PROGRAMS = [
    {
        img: image.ascend,
        date: 'THIS SUNDAY',
        title: 'ASCEND SERVICE',
        time: '8AM',
        desc: 'Join us as we learn, pray, and ascend to the 3rd heavens in worship. Make it a date with God.',
    },
    {
        img: image.auxano,
        date: 'THIS WEDNESDAY',
        title: 'JOINT AUXANO',
        time: '4PM',
        desc: 'Growth is a living characteristic, AUXANO is an avenue to learn the ways of God, and to grow.',
    },
    {
        img: image.takeit,
        date: 'FIRST SATURDAY OF EVERY MONTH',
        title: 'TAKE-IT',
        time: '8AM',
        desc: 'Are you in need of healing, deliverance, finance, breakthrough? Come lay hold on heaven\'s provision',
    },
]

const UpcomingPgSection = () => {
    return (
        <section className="w-full flex flex-col items-center py-16">
            <h2 className="font-anton text-2xl md:text-3xl text-[#181818] mb-12 text-center">Upcoming programs</h2>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {PROGRAMS.map((p, i) => (
                    <div key={p.title} className="bg-[#F3F3F3] rounded-xl flex flex-col overflow-hidden">
                        <div className="w-full h-48 relative">
                            <Image src={p.img} alt={p.title} fill className="object-cover w-full h-full rounded-t-xl" />
                        </div>
                        <div className="p-6 flex flex-col gap-2">
                            <span className="text-xs font-inter text-[#181818] mb-1">{p.date}</span>
                            <span className="font-anton text-2xl md:text-3xl text-[#181818]">
                                {p.title} <span className="text-[#D00002] font-bold">| {p.time}</span>
                            </span>
                            <span className="text-xs font-inter text-[#181818] mt-1">{p.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Button className="mt-12 bg-[#181818] text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 shadow-md hover:bg-[#181818]/90">
                <MapPin className="w-5 h-5" />
                GET CHURCH ADDRESS
            </Button>
        </section>
    )
}

export default UpcomingPgSection
