import React from 'react'

const BlogComp = () => {
  return (
    <section className='my-24'>
        <div className="container">
            <div className='flex gap-[56px] items-center'>
                <div className='flex flex-col gap-8 items-start w-full'>
                    <p className='font-semibold tracking-widest'>CAREER AT Ether</p>
                    <h3 className='text-[48px] font-semibold'>Full Stack Developer</h3>
                    <p className='max-w-[400px]'>Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                    <button className='px-[32px] py-5 bg-[#444CFC] text-white'>Request Quote</button>
                </div>
                <div className='bg-[#FFE0C7] w-full h-auto'>
                    <div className='bg-company2 bg-no-repeat bg-right-top h-full w-full z-40 p-[80px] flex flex-col gap-6'>
                        <h2 className='text-[24px] font-semibold'>Job Description</h2>
                        <p>Remote, India , 4 to 5 Years Of Experience</p>
                        <p>Department: Product Engineering</p>
                        <p>Full Time 5 Position Available.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogComp