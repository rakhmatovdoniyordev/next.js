import Image from 'next/image'
import React from 'react'
import img1 from "../../../assets/company1.png"
import img2 from "../../../assets/company2.png"
import img3 from "../../../assets/company3.png"

const CompanyPage = () => {
  return (
    <section className='my-24'>
        <div className="container">
            <div className='flex justify-between h-[60px] w-full'>
                <div className='bg-company bg-no-repeat bg-left-top z-40 w-full'></div>
                <div className='bg-company2 bg-no-repeat bg-right-top h-20 z-40 w-full'></div>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='tracking-widest font-semibold'>COMPANY</p>
                <h2 className='text-[48px] font-semibold'>Award-winning Company <br /> seen and used by millions <br /> around the world.</h2>
                <p className='max-w-[700px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-[63px]'>
                <div>
                    <Image src={img1} alt='Card'/>
                </div>
                <div>
                    <Image src={img2} alt='Card'/>
                </div>
                <div>
                    <Image src={img3} alt='Card'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CompanyPage