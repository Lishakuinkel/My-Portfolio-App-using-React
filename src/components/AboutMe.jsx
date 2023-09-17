import React from 'react';
import MyPic from '../assets/mypic.JPG'

const AboutMe = () => {
  return (
    <div className='w-full bg-[#f2eaea] px-6 py-6'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[200px] mx-auto my-4 rounded-full py-6' src={MyPic} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#222221] text-1xl py-4 px-6'>I am based in Salt Lake City, Utah. I have always been interested in creating things that live on the web. I studied Computer Science & Engineering in college. I am currently working as a Technical Support Engineer at Speechmatics. </p>
                
            </div>
        </div>
        

    </div>
  )
}

export default AboutMe