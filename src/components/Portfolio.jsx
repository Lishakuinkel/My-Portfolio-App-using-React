import React from 'react';
import pizzaexpress from '../assets/pizzaexpress.jpeg';
import jate from '../assets/jate.png';
import weather from '../assets/weather.webp';
import socialapi from '../assets/social network api.png';
import ecommerce from '../assets/ecommerce.jpeg'

const Portfolio = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full text-[#36454F text-center shadow-xl flex flex-col rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded full' src={pizzaexpress} alt="pizzaexpress" />
                <h2 className='font-bold text-2xl py-6'>Pizza Express</h2>
                <p className='text-1xl font-thin'>Full stack app built with Node.js, Express.js, TailwindCSS, MySQL2, Express-handlebars, Express-session</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://nameless-river-58365-d5c2867a5c56.herokuapp.com/">View the app</a>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://github.com/christianbmartinez/pizza-express">Github repo</a>
            </div>
            <div className='w-full text-[#36454F text-center shadow-xl flex flex-col md:my-0 my-9 rounded-lg hover:scale-110 duration-300 p-4'>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full' src={jate} alt="J.A.T.E" />
                <h2 className='font-bold text-2xl py-6'>J.A.T.E</h2>
                <p className='text-1xl font-thin'>Progressive Web app built with Node.js, Express.js, Webpack+Workbox, Babel, Mini-CSS-Extract Plugin</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://intense-plains-37109-c1307c5185c1.herokuapp.com/">View the app</a>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://github.com/Lishakuinkel/PWA-Text-Editor">Github repo</a>
            </div>
            
            <div className='w-full text-[#36454F text-center shadow-xl flex flex-col md:my-0 my-4 rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full' src={weather} alt="weather dashboard" />
                <h2 className='font-bold text-2xl py-6'>Giftlab</h2>
                <p className='text-1xl font-thin'>Full Stack Web App</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://giftlab-123-610fac927377.herokuapp.com/">View the app</a>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://github.com/Lishakuinkel/Giftlab">Github repo</a>
            </div>
            <div className='w-full text-[#36454F text-center shadow-xl py-14 flex flex-col md:my-0 my-4 rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full' src={socialapi} alt="Social Network Api" />
                <h2 className='font-bold text-2xl py-6'>Social Network Api</h2>
                <p className='text-1xl font-thin'>A Node.js app that performs CRUD operations on social networking data models using MongoDB database.</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://github.com/Lishakuinkel/A-social-network-API">Github repo</a>
            </div>
            <div className='w-full text-[#36454F text-center shadow-xl py-14 flex flex-col md:my-0 my-4 rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full' src={ecommerce} alt="E-commerce site" />
                <h2 className='font-bold text-2xl py-6'>E-commerce site</h2>
                <p className='text-1xl font-thin'>Back end app mainly focused on building for an e-commerce site that uses the command line interface (CLI) and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods with a RESTUL API.</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://github.com/Lishakuinkel/E-commerce-site-using-Express.js">Github repo</a>
            </div>
            <div className='w-full text-[#36454F text-center shadow-xl py-14 flex flex-col md:my-0 my-4 rounded-lg hover:scale-110 duration-300 p-4 '>
                <img className='w-20 mx-auto mt-[-3rem] rounded-full'  alt="Random password generator" />
                <h2 className='font-bold text-2xl py-6'>Random password generator</h2>
                <p className='text-1xl font-thin'>Front-end app built with HTML, CSS, JS that enables users to generate random passwords based on criteria that they’ve selected.</p>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://lishakuinkel.github.io/Random-Password-Generator-using-JS/">View the app</a>
                <a className='text-[#6b91b8] py-3 font-style: italic' href="https://github.com/Lishakuinkel/Random-Password-Generator-app">Github repo.</a>
            </div>
              
        </div>
    </div>  
  )
} 

export default Portfolio