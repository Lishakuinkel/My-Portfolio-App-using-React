import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <div className='text-[#e2e2c8]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='font-bold p-2'>Hi, I'm <b>LISHA KUINKEL</b> </h1>
            <div className='flex justify-center items-center'>
                <p className='text-[#d4d48d] md:text-4xl sm:text-2xl text-2xl md:py-4'>A Full Stack Developer with passion of building all sides of app development </p>           
            </div>
            
            <Typed className='text-[#cecebb] font-mono md:text-2xl sm:text-1xl text-1xl md:py-4' strings={['React, Node.js, Express.js, Tailwind CSS, MongoDB, GraphQL']} typeSpeed={250} backSpeed={200} loop/>
        </div>

    </div>
  )
}

export default Home