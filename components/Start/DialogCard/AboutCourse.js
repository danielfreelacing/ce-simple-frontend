import React from 'react'

const AboutCourse = ({content,title}) => {
    return (
        <>

            <div className='md:flex  justify-center md:px-16'>
                {/* <div className='rounded-full px-10'>
                    <Image src="/images/GaelWood.png" width={800} height={800} alt="Instructor" />
                </div> */}
                <div className=''>
                    <h5 className='text-voilet traking-[0.02em] font-semibold mediumf md:text-left text-center '>about this course</h5>
                    <h2 className=' dubblelargef py-4 md:text-left text-center '>{title}</h2>
                    <div className=' mediumf smallf font-normal leading-[140%] not-italic md:text-left text-center [&>p]:leading-[140%] ' dangerouslySetInnerHTML={{ __html:content }}></div>
                </div>

            </div>
        </>
    )
}

export default AboutCourse