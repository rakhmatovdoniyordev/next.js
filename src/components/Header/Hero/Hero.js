import Image from 'next/image'
import React from 'react'
import hero from "../../../assets/hero.png"
import h from "../../../assets/h.png"

const Hero = () => {
  return (
    <section className='bg-[#232536]'>
        <div className="container">
            <div className='flex items-center justify-between gap-[130px] pt-24 pb-10'>
                <div className='w-full'>
                    <h2 className='text-[56px] font-semibold text-white mb-6'>Transform Your Idea <br /> Into Reality with <br /> Finsweet</h2>
                    <p className='text-[#FFFFFF] font-medium mb-8'>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <button className='px-[32px] py-5 bg-[#444CFC] text-white'>Request Quote</button>
                </div>
                <div className='w-full'>
                    <Image src={hero} alt="Hero image" className='w-full'/>
                </div>
            </div>
            <div className='w-full h-auto pb-8'>
                <Image src={h} alt="hero company" className='select-none'/>
            </div>
        </div>
    </section>
  )
}

export default Hero