import React from 'react'

const Services = () => {
  return (
    <section className='bg-[#FFE6D2] py-24'>
      <div className="container">
        <div className='flex items-center justify-between gap-[250px]'>
          <div className='flex flex-col gap-4 items-start'>
            <p className='font-medium'>Our Services</p>
            <h2 className='text-[48px] font-semibold'>We Build Software <br /> Solutionthat Solve Clients <br /> Business Challenges</h2>
            <p className='text-[#232536]'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
            <button className='px-[32px] py-5 bg-[#444CFC] text-white'>Request Quote</button>
          </div>
          <ul className='flex flex-col gap-4'>
            <li className='text-[24px] font-semibold'>
              <span>Technical support</span>
            </li>
            <li className='text-[24px] font-semibold'>
              <span>Development</span>
            </li>
            <li className='text-[24px] font-semibold'>
              <span>AWS/Azure </span>
            </li>
            <li className='text-[24px] font-semibold'>
              <span>Consulting</span>
            </li>
            <li className='text-[24px] font-semibold whitespace-nowrap'>
              <span>Information Technology</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services